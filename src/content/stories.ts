export type Story = {
  quote: string;
  attribution: string;
  homepage?: boolean;
};

export const stories: Story[] = [
  {
    quote:
      "My son has matured and developed a clearer vision for his future since joining the Cornerstone Craftsman program. He’s inspired to pursue entrepreneurship thanks to Mr. Roberto's guidance. He sees himself as a future leader and businessman. As a proud parent, I love seeing my son excited to go to Cornerstone Craftsman each morning. He's learning valuable skills to prepare him for whatever comes after high school or college. I'm incredibly grateful to Mr. Roberto for his dedication to these young men. Cornerstone Craftsman is a true example of a 'village' supporting our children's growth.",
    attribution: "Parent of a Program Participant",
    homepage: false,
  },
  {
    quote:
      "We are so proud of our son's progress since joining Mr. Gomez’s program at Cornerstone Craftsman. He is gaining different skills, knowledge, and know-how that are different from the classroom. It makes me so happy that he joined this program. He is more confident, motivated, and ready to go. The program has instilled a sense of community involvement and sparked an interest in potential career paths like real estate or construction. Thank you so much, Mr. Gomez. Please keep up this good work. As parents, we highly appreciate you and will always support you.",
    attribution: "Parent of a Program Participant",
  },
  {
    quote:
      "I'm 15 and a student at Alexandria City High School. This program has helped me in so many ways. I've learned many new skills I can use for the future, whatever path I choose. It's also helped me develop my communication skills, making it easier to talk to people. Plus, the program keeps me focused and out of trouble and the streets.",
    attribution: "A Program Participant",
    homepage: true,
  },
  {
    quote:
      "I will request to the courts that all the kids on my caseload can go through Roberto’s program. I’m grateful that the kids in this City have an opportunity like this pre-apprentice program. The work Roberto is doing is the only one I know of in Alexandria City.",
    attribution: "Alexandria City Probation Officer",
  },
  {
    quote:
      "We have a young man who spent two years in our program, is now off probation, has a full-time job, and is on track to graduate high school.",
    attribution: "Roberto Gomez",
  },
];

export const homepageStory = stories.find((story) => story.homepage) ?? stories[2];

export const familyStories = stories.filter(
  (story) => story.attribution === "Parent of a Program Participant" || story.homepage,
);

export const gabeMonthlyGiving = {
  title: "Why I Give Monthly: Investing in a Brighter Future for Our Kids",
  quote:
    "I set up monthly giving to Cornerstone Craftsman because I believe in the program. As a teacher, I see kids getting lost and leaving school with pessimism and resentment toward the world they are entering. Cornerstone Craftsman is different. I've seen Roberto and his crew reach kids on an individual level and show them a different future. Cornerstone Craftsman loves these kids. And guess what? Their lives are literally changed. I've seen it . . . kid going from posting on Instagram about wanting to be a scammer or dealer to mentoring others on the importance of learning the trades. Economically, giving each month makes the most sense for us. Our family of four (two teachers!) is on a strict budget. Monthly giving feels like just adding to my retirement or flexible-spending account, and I don't have to plan for a big donation.",
  attribution: "Gabriel Elias, Board Member",
};

export const monthlyGivingCopy = {
  lead: "Be a monthly giver and deliver the highest impact for Cornerstone Craftsman. Even $10 a month gets the pre-apprentices essential construction materials for a training day at the center.",
  follow:
    "Join a special circle of supporters--become a sustainer donor! This packs the best punch to help us keep administrative costs down.",
};

export const graduates = [
  { name: "Gabe", src: "/imported/images/2026-09-Graduate-Gabe.png" },
  { name: "Haddy", src: "/imported/images/2026-09-Graduate-Haddy.png" },
  { name: "Herber", src: "/imported/images/2026-09-Graduate-Herber.png" },
  { name: "Denis", src: "/imported/images/2026-09-Graduate-Spotlight-Denis.png" },
];
