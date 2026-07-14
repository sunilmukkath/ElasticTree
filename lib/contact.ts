import { offices } from "@/lib/team";

export const CONTACT_EMAIL = "info@elastictree.com";
export const RESPONSE_TIME = "within 1 business day";

export const CHENNAI_ADDRESS =
  "3B, Krshnika Apartments, 1/26, Avenue Rd, Nungambakkam, Chennai, Tamil Nadu 600034";

export type PhoneContact = {
  display: string;
  href: string;
};

export type ContactChannel =
  | {
      kind: "email";
      label: string;
      value: string;
      href: string;
      sub?: string;
    }
  | {
      kind: "phone";
      label: string;
      numbers: PhoneContact[];
    }
  | {
      kind: "address";
      label: string;
      lines: string[];
    };

function phone(raw: string): PhoneContact {
  const digits = raw.replace(/\D/g, "");
  const local = digits.startsWith("91") ? digits.slice(2) : digits;
  const display =
    local.length === 10
      ? `+91 ${local.slice(0, 5)} ${local.slice(5)}`
      : `+${digits}`;
  const tel = digits.startsWith("91") ? digits : `91${digits}`;
  return { display, href: `tel:+${tel}` };
}

export const contactChannels: ContactChannel[] = [
  {
    kind: "address",
    label: "Address",
    lines: [
      "3B, Krshnika Apartments",
      "1/26, Avenue Rd, Nungambakkam",
      "Chennai, Tamil Nadu 600034",
    ],
  },
  {
    kind: "email",
    label: "Customer Care",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    sub: `We reply ${RESPONSE_TIME}`,
  },
  {
    kind: "phone",
    label: "Business & Partnership",
    numbers: [phone("9840850057"), phone("9980044557")],
  },
  {
    kind: "phone",
    label: "Careers",
    numbers: [phone("9940184841")],
  },
];

/** @deprecated Use contactChannels — kept for simple mailto links */
export const contactEmailDetail = {
  label: "Customer Care",
  value: CONTACT_EMAIL,
  sub: `We reply ${RESPONSE_TIME}`,
  href: `mailto:${CONTACT_EMAIL}`,
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/elastic-tree" },
  { label: "Instagram", href: "https://instagram.com/elastictree" },
  { label: "X (Twitter)", href: "https://twitter.com/elastictree" },
] as const;

export const officeDetails = offices.map((office) => ({
  label: office.city,
  value: office.city,
  sub: office.address,
  href: null as string | null,
}));

export const hqSummary = "Chennai, India";
