import { Resend } from "resend";
import type { LeadInput } from "./leads";

export interface LeadEmailPayload extends LeadInput {
  leadId: string;
  timestamp: string;
}

const DEFAULT_RECIPIENT = "yusuf@g-roots.in";

/**
 * Format Indian / International phone number for direct WhatsApp link
 */
function getWhatsAppLink(phone: string, name: string): string {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.length === 10 ? `91${digits}` : digits.replace(/^0+/, "");
  const text = encodeURIComponent(
    `Hello ${name}, thank you for contacting Groot's Technologies! I am Yusuf. How can I help you?`
  );
  return `https://wa.me/${normalized}?text=${text}`;
}

function getSourceLabel(source: string): string {
  switch (source) {
    case "home-contact":
      return "Home Page Contact Form";
    case "contact-page":
      return "Contact Us Page Form";
    case "curriculum-download":
      return "Curriculum / Syllabus Download";
    case "trainer-application":
      return "Trainer / Instructor Application";
    default:
      return source || "Website Lead";
  }
}

export async function sendLeadNotificationEmail(payload: LeadEmailPayload) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      `[RESEND_EMAIL_SKIPPED] RESEND_API_KEY is not configured in environment. Lead notification for ${payload.leadId} was not sent.`
    );
    return { success: false, reason: "missing_api_key" };
  }

  const resend = new Resend(apiKey);
  const recipient = process.env.LEADS_NOTIFICATION_EMAIL || DEFAULT_RECIPIENT;
  
  // Custom verified domain sender (leads@g-roots.in)
  const fromEmail =
    process.env.RESEND_FROM_EMAIL || "Groot's Technologies <leads@g-roots.in>";

  const sourceLabel = getSourceLabel(payload.source);
  const waLink = getWhatsAppLink(payload.phone, payload.name);
  const telLink = `tel:${payload.phone.replace(/\s+/g, "")}`;
  const mailtoLink = payload.email ? `mailto:${payload.email}` : "";

  let formattedDate = payload.timestamp;
  try {
    formattedDate =
      new Date(payload.timestamp).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "short",
      }) + " (IST)";
  } catch {
    // fallback
  }

  // Metadata block (e.g. trainer details, experience, links)
  let metadataHtml = "";
  if (payload.metadata && Object.keys(payload.metadata).length > 0) {
    metadataHtml = `
      <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
        <h4 style="margin: 0 0 12px 0; color: #0f172a; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">Additional Details</h4>
        <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
          ${Object.entries(payload.metadata)
            .map(
              ([key, val]) => `
              <tr style="border-bottom: 1px solid #edf2f7;">
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; text-transform: capitalize; width: 35%;">${key.replace(/([A-Z])/g, " $1")}</td>
                <td style="padding: 6px 0; color: #0f172a;">${String(val)}</td>
              </tr>
            `
            )
            .join("")}
        </table>
      </div>
    `;
  }

  const subject = `🔥 [New Lead] ${payload.name} — ${payload.course || sourceLabel}`;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${subject}</title>
      </head>
      <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 32px 16px; color: #1e293b;">
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 32px 28px; text-align: left; border-bottom: 3px solid #10b981;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(16, 185, 129, 0.2); color: #34d399; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">
                      🔥 New Inquiry Received
                    </span>
                    <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; line-height: 1.3;">
                      Groot's Technologies Lead Alert
                    </h1>
                    <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;">
                      Received on ${formattedDate}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action CTA Buttons -->
          <tr>
            <td style="padding: 20px 28px 10px 28px; background-color: #f8fafc; border-bottom: 1px solid #e2e8f0;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0">
                <tr>
                  <td align="center" style="padding-bottom: 6px;">
                    <a href="${waLink}" target="_blank" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 18px; border-radius: 6px; margin: 4px;">
                      💬 Chat on WhatsApp
                    </a>
                    <a href="${telLink}" style="display: inline-block; background-color: #0f172a; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 18px; border-radius: 6px; margin: 4px;">
                      📞 Call ${payload.phone}
                    </a>
                    ${
                      payload.email
                        ? `<a href="${mailtoLink}" style="display: inline-block; background-color: #3b82f6; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 13px; padding: 10px 18px; border-radius: 6px; margin: 4px;">
                            ✉️ Send Email
                          </a>`
                        : ""
                    }
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Lead Details -->
          <tr>
            <td style="padding: 28px;">
              <table width="100%" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                
                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 35%;">Prospect Name</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; font-weight: 700;">
                    ${payload.name}
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Phone Number</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 15px; font-weight: 600;">
                    <a href="${telLink}" style="color: #0f172a; text-decoration: none;">${payload.phone}</a>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Email Address</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px;">
                    ${
                      payload.email
                        ? `<a href="${mailtoLink}" style="color: #2563eb; text-decoration: underline;">${payload.email}</a>`
                        : '<span style="color: #94a3b8; font-style: italic;">Not provided</span>'
                    }
                  </td>
                </tr>

                ${
                  payload.course
                    ? `<tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Course / Program</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #059669; font-size: 14px; font-weight: 600;">
                          ${payload.course}
                        </td>
                      </tr>`
                    : ""
                }

                ${
                  payload.status
                    ? `<tr>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Current Status</td>
                        <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; text-transform: capitalize;">
                          ${payload.status}
                        </td>
                      </tr>`
                    : ""
                }

                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Source</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #475569; font-size: 13px;">
                    <span style="display: inline-block; background-color: #e2e8f0; color: #334155; padding: 2px 8px; border-radius: 4px; font-weight: 500;">
                      ${sourceLabel}
                    </span>
                  </td>
                </tr>

                <tr>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Lead ID</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 12px; font-family: monospace;">
                    ${payload.leadId}
                  </td>
                </tr>

              </table>

              ${
                payload.message
                  ? `
                <div style="margin-top: 24px; padding: 16px; background-color: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 4px;">
                  <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #b45309; margin-bottom: 6px;">
                    Prospect's Message / Note
                  </div>
                  <div style="color: #78350f; font-size: 14px; line-height: 1.5; white-space: pre-wrap;">
                    ${payload.message}
                  </div>
                </div>
              `
                  : ""
              }

              ${metadataHtml}

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 20px 28px; text-align: center; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                This notification was generated automatically by Groot's Technologies Lead Engine.<br>
                Recipient: <strong style="color: #64748b;">${recipient}</strong>
              </p>
            </td>
          </tr>

        </table>
      </body>
    </html>
  `;

  try {
    const response = await resend.emails.send({
      from: fromEmail,
      to: [recipient],
      replyTo: payload.email || undefined,
      subject,
      html,
    });

    if (response.error) {
      // If Resend blocked delivery because g-roots.in domain is not verified yet,
      // fallback to the account owner email (adminblr@g-roots.in) so no prospect is ever missed
      const errMsg = response.error.message || "";
      if (
        response.error.statusCode === 403 ||
        errMsg.includes("You can only send testing emails to your own email address")
      ) {
        console.warn(
          `[RESEND_DOMAIN_RESTRICTION] Could not deliver directly to ${recipient} because domain verification is pending. Forwarding to Resend account email (adminblr@g-roots.in).`
        );
        const fallbackRes = await resend.emails.send({
          from: "Groot's Technologies <onboarding@resend.dev>",
          to: ["adminblr@g-roots.in"],
          replyTo: payload.email || undefined,
          subject: `[Verify Domain Needed] ${subject}`,
          html: `
            <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 14px 16px; margin-bottom: 20px; font-family: sans-serif; font-size: 13px; color: #92400e; border-radius: 4px;">
              <strong>⚠️ Action Required:</strong> This lead was addressed to <strong>${recipient}</strong>. Because the domain <code>g-roots.in</code> is in testing mode on Resend, it was delivered to your registered Resend account (<code>adminblr@g-roots.in</code>).<br><br>
              To deliver leads directly to <strong>${recipient}</strong>, verify <code>g-roots.in</code> at <a href="https://resend.com/domains" target="_blank" style="color: #b45309; font-weight: bold; text-decoration: underline;">resend.com/domains</a>.
            </div>
            ${html}
          `,
        });
        return {
          success: !fallbackRes.error,
          data: fallbackRes.data,
          warning: "Delivered to adminblr@g-roots.in due to pending domain verification",
        };
      }

      console.error(`[RESEND_EMAIL_ERROR] Failed sending lead ${payload.leadId} to ${recipient}:`, response.error);
      return { success: false, error: response.error.message };
    }

    console.info(`[RESEND_EMAIL_SUCCESS] Lead ${payload.leadId} sent to ${recipient}:`, response.data);
    return { success: true, data: response.data };
  } catch (error: any) {
    console.error(`[RESEND_EMAIL_ERROR] Failed sending lead ${payload.leadId} to ${recipient}:`, error);
    return { success: false, error: error?.message || error };
  }
}
