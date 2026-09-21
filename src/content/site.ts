export const org = {
  name: "Cornerstone Craftsman",
  legalName: "Cornerstone Craftsman, Inc.",
  tagline: "Building Skills. Confidence. Futures.",
  ein: "93-3474741",
  taxStatus: "501(c)(3)",
  taxStatusNote:
    "Cornerstone Craftsman officially received 501(c)(3) status in early October 2024. Gifts since formation in October 2023 are tax deductible, limited to the excess of money (and the fair market value of property other than money) contributed over the value of goods or services provided.",
  email: "info@cornerstonecraftsman.org",
  achEmail: "nadjarivera@cornerstonecraftsman.org",
  address: {
    line1: "2111 Eisenhower Avenue, Suite 102",
    city: "Alexandria",
    state: "Virginia",
    zip: "22314",
  },
  url: "https://cornerstonecraftsman.org",
  givebutterUrl: "https://givebutter.com/ZTApVJ",
  givebutterCampaignUrl: "https://givebutter.com/cornerstone",
  givebutterAccount: "ZTApVJ",
  givebutterWidgetId: "p5evqp",
  candidProfileUrl:
    "https://www.guidestar.org/profile/shared/a510997c-d7da-4f39-b44e-f965fe276ded",
  candidEinProfileUrl: "https://www.guidestar.org/profile/93-3474741",
  social: {
    instagram: "https://www.instagram.com/cornerstonecraftsman/",
    facebook: "https://www.facebook.com/groups/941080848025368/",
    linkedin: "https://www.linkedin.com/company/cornerstone-craftsman/",
  },
} as const;

export const addressLine = `${org.address.line1}, ${org.address.city}, ${org.address.state} ${org.address.zip}`;

export const mission =
  "Provide youth with the instruction, tools, and mentoring required to earn a livable wage and have a viable career in the skilled trades.";

export const vision =
  "Break the cycle of generational poverty and build a proficient and marketable workforce in the skilled trades.";

export const fiveCs = [
  "Competence",
  "Confidence",
  "Connection",
  "Character",
  "Caring",
] as const;
