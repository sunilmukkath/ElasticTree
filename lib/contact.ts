import { offices } from "@/lib/team";

export const CONTACT_EMAIL = "sunilmukkath@elastictree.com";
export const RESPONSE_TIME = "within 1 business day";

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/elastic-tree" },
  { label: "Instagram", href: "https://instagram.com/elastictree" },
  { label: "X (Twitter)", href: "https://twitter.com/elastictree" },
] as const;

export const contactEmailDetail = {
  label: "Email Us",
  value: CONTACT_EMAIL,
  sub: `We reply ${RESPONSE_TIME}`,
  href: `mailto:${CONTACT_EMAIL}`,
} as const;

export const officeDetails = offices.map((office) => ({
  label: office.city,
  value: office.city,
  sub: office.address,
  href: null as string | null,
}));

export const hqSummary = "Chennai & Bengaluru, India";
