import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SITE_URL, SITE_NAME } from "@/app/layout";
import { OG_IMAGE, TWITTER_IMAGE } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Study Abroad — Free Counselling, Admissions & Visa Guidance",
  description:
    "Greenroots × SIG Global Edu — official study-abroad partner. Free counselling, university shortlisting, SOPs & applications, 96% visa success, IELTS/PTE/GRE test prep and pre-departure support across USA, UK, Canada, Australia, Germany, Ireland & more.",
  alternates: { canonical: "/study-abroad/" },
  openGraph: {
    type: "website",
    title: `Study Abroad with Greenroots × SIG Global Edu — ${SITE_NAME}`,
    description:
      "From your first question to your boarding pass — free counselling, university shortlisting, applications, visa guidance, test prep and pre-departure support.",
    url: "/study-abroad/",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study Abroad — Greenroots × SIG Global Edu",
    description:
      "Free counselling, 8 popular destinations, 96% visa success rate, IELTS/PTE/GRE/GMAT test prep and pre-departure support.",
    images: [TWITTER_IMAGE],
  },
};

export default function StudyAbroadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Study Abroad", url: `${SITE_URL}/study-abroad/` },
        ]}
      />
      {children}
    </>
  );
}
