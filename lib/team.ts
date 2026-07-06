export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sunil",
    name: "Sunil Mukkath",
    role: "Founder & CEO",
    image: "/team/sunil-mukkath.jpg",
    linkedin: "https://www.linkedin.com/in/sunil-mukkath-19aba712/",
  },
  {
    id: "ambika",
    name: "Ambika Chandrasekar",
    role: "Branding & Insights Head",
    image: "/team/ambika-chandrasekar.jpg",
    linkedin: "https://www.linkedin.com/in/ambika-chandrasekar-259a585a/",
  },
  {
    id: "ravikumar",
    name: "Ravikumar Narayanan",
    role: "Director Strategy & Insights",
    image: "/team/ravikumar-jayaprakash.jpg",
    linkedin: "https://www.linkedin.com/in/ravikumar-narayanan/",
  },
  {
    id: "shilaja",
    name: "Shilaja Balasubramanian",
    role: "Research Director",
    image: "/team/shilaja-balasubramanian.jpg",
    linkedin: "https://www.linkedin.com/in/shilaja-balasubramanian-5a505917/",
  },
];

export const aboutStats = [
  { value: "100,000+", label: "Responses Surveyed", desc: "Surveyed and analysed more than 1 lakh responses", accent: "#2dd4bf" },
  { value: "800+", label: "Projects Delivered", desc: "Successfully handled more than 800 projects", accent: "#e8a820" },
  { value: "200+", label: "Clients Worldwide", desc: "Worked with clients across India and overseas", accent: "#38bdf8" },
  { value: "74%", label: "Repeat Business", desc: "7 out of 10 projects are from repeat clients", accent: "#5eead4" },
];

export const companyIntro = {
  lead: "Elastic Tree is a market research firm that mines and interprets consumer insights to help businesses achieve their growth and marketing goals.",
  body: "Formed by a group of experienced researchers in 2014, the company has been servicing clients across industries and has established itself as a credible MR partner to several leading brands, in India and overseas.",
};

export const offices = [
  {
    city: "Chennai",
    address: "3B, Krshnika Apartments, 1/26, Avenue Rd, Nungambakkam, Chennai, Tamil Nadu 600034",
  },
  {
    city: "Bengaluru",
    address: "Awfis Davanam Plaza, 3rd floor, Opp. Madivala Police Station, Hosur Road, Bengaluru 560068",
  },
];
