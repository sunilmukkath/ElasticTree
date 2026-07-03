import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Elastic Tree. Tell us your business challenge and we'll design the right research approach. Based in Chennai & Bangalore.",
  openGraph: {
    title: "Contact | Elastic Tree",
    description:
      "Start a conversation with our research team. We respond within 1 business day.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
