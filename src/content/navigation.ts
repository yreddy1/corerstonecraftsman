import { addressLine, org } from "@/content/site";

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  cta?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Our Program", href: "/our-program" },
  { label: "Our Impact", href: "/our-impact" },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Join the Program", href: "/join-the-program" },
      { label: "Volunteer", href: "/volunteer-opportunities" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Ways to Give", href: "/ways-to-give" },
    ],
  },
  { label: "Contact", href: "/contact-us" },
  { label: "Donate", href: "/ways-to-give", cta: true },
];

export const footerNav = [
  {
    heading: "Explore",
    links: [
      { label: "About", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Our History", href: "/our-history" },
      { label: "Our Program", href: "/our-program" },
      { label: "Our Impact", href: "/our-impact" },
      { label: "Testimonials", href: "/testmonials" },
      { label: "Photo Gallery", href: "/photo-gallery" },
      { label: "FAQ", href: "/frequently-asked-questions" },
    ],
  },
  {
    heading: "Get involved",
    links: [
      { label: "Join the Program", href: "/join-the-program" },
      { label: "Volunteer", href: "/volunteer-opportunities" },
      { label: "Partner With Us", href: "/partner-with-us" },
      { label: "Ways to Give", href: "/ways-to-give" },
      { label: "Current Needs", href: "/current-needs" },
      { label: "In-Kind Needs", href: "/in-kind-needs" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact-us" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "In the News", href: "/in-the-news" },
      { label: "Calendar", href: "/calendar-demo" },
      { label: "Ribbon cutting", href: "/ribon-cutting" },
    ],
  },
];

export const contactBlurb = {
  email: org.email,
  address: addressLine,
};
