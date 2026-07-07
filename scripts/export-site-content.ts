import fs from "fs";
import { CONTACT_EMAIL, RESPONSE_TIME, contactChannels } from "@/lib/contact";
import { posts } from "../lib/posts";
import { teamMembers, aboutStats, companyIntro, offices } from "../lib/team";
import {
  tableShareStats,
  tableShareFeatures,
  tableShareOccasions,
  tableShareCities,
  tableShareInsights,
  tableShareBusinessUses,
  tableShareDeliverables,
} from "../lib/table-share";

/** Static page copy not stored in lib — kept in sync with page components. */
const siteCopy = {
  global: {
    siteName: "Elastic Tree",
    tagline: "Smart Decisions, Simply Made.",
    siteUrl: "https://www.elastictree.com",
    defaultTitle: "Elastic Tree | Market Research — Smart Decisions, Simply Made.",
    defaultDescription:
      "Elastic Tree is an AI-powered market research firm with 12 years of experience serving 200+ brands. Analytics, sensory science, syndicated research (Table Share®), impact studies, and AI Gaze™ — India & global.",
  },
  nav: ["Home", "Capabilities", "Table Share", "Case Studies", "Contact"],
  home: {
    hero: {
      eyebrow: "Market Research · Since 2014",
      title: "See What People Actually Do",
      subtitle:
        "Sensory science, syndicated panels, and field research that reveal how people eat, choose, and act — insight FMCG and food-service brands can move on.",
      buttons: ["Explore Capabilities", "Book a Consultation"],
      scrollCue: "Scroll to explore",
      stats: ["12 Years", "200+ Brands", "800+ Projects", "74% Repeat"],
    },
    marquee:
      "Field Research · Analytics · Sensory Science · Table Share® · Syndicated Research · Impact & CSR · AI Gaze™ · 200+ Brands · 74% Repeat Rate",
    servicePillars: {
      label: "Capabilities",
      title: "Six Research Pillars",
      subtitle: "End-to-end capabilities — from field to findings — inside one team.",
      pillars: [
        { title: "Analytics & Brand Research", desc: "Brand tracking, NPS, U&A, MaxDiff, conjoint, segmentation." },
        { title: "Sensory Science", desc: "QDA, TDS, CATA, and affective testing for FMCG & F&B." },
        { title: "Syndicated Research", desc: "Table Share® — continuous food-consumption tracking across 16 cities." },
        { title: "Qualitative & Ethnography", desc: "IDIs, focus groups, online communities, ZMET." },
        { title: "Impact & CSR Research", desc: "Baseline, mid-line, and end-line studies with donor-grade reporting." },
        { title: "Visual Attention Testing", desc: "AI Gaze™ for packaging and shelf studies." },
      ],
    },
    aiStrip: {
      label: "Capabilities",
      title: "Research Tools That Scale With You",
      subtitle: "Sensory science and syndicated panels first — intelligent methods where they add clarity.",
      tools: [
        { title: "Table Share®", tag: "Syndicated", desc: "3,468 households tracked dish-by-dish across 16 cities." },
        { title: "Brand Analytics", tag: "Quant", desc: "MaxDiff, conjoint, segmentation, and driver analysis in decision-ready dashboards." },
        { title: "Sensory Science", tag: "FMCG & F&B", desc: "Trained panels with TDS, CATA, and affective testing for product development." },
        { title: "Impact & CSR", tag: "Social", desc: "Baseline-to-endline frameworks with donor-grade reporting." },
        { title: "AI Gaze™", tag: "Select projects", desc: "Eye-tracking simulation for packaging, shelf, and ad pre-testing." },
        { title: "Agile Research", tag: "Rapid", desc: "Online qual and quant with rigorous QC — insights in days, not weeks." },
      ],
    },
    tableShare: {
      label: "Syndicated Platform",
      title: "Table Share®",
      subtitle:
        "Food consumption intelligence capturing actual, dish-level eating behaviour across urban India — mapped by occasion, effort, and frequency.",
      buttons: ["Explore Demo", "Book a Demo", "Know More"],
    },
    caseStudiesPreview: {
      label: "Case Studies",
      title: "Research That Delivers Results",
      subtitle: "Real projects across FMCG, food service, media, and social impact.",
      button: "View Case Studies",
    },
    clients: { eyebrow: "Trusted by", title: "200+ Brands Worldwide" },
    testimonials: { label: "Client Voices", title: "What Clients Say" },
    team: {
      label: "Meet The Team",
      title: "Built by Practitioners",
      subtitle: "Senior researchers from the world's top insights firms — now working for you directly.",
      pedigree: ["Nielsen IQ", "Kantar Worldpanel", "IMRB International", "Ipsos India", "GfK India", "Mintel", "Euromonitor"],
      ctaTitle: "Ready to Turn Data Into Decisions?",
      ctaBody: "Whether you need a quick behavioural pulse-check or a full-year tracker — let's design the right study for your brief.",
      ctaButtons: ["Talk to an Expert", "See All Capabilities"],
    },
  },
  capabilities: {
    hero: {
      eyebrow: "Capabilities",
      title: "Research That Drives Strategic Growth",
      subtitle:
        "A comprehensive range of custom marketing research services — from product optimisation and brand health to AI-powered visual attention testing — designed to uncover actionable insights for every business question.",
    },
    stickyNav: ["Analytics", "Sensory Science", "Syndicated Research", "Impact Research", "Market Research", "Advanced Methods"],
    pillars: [
      {
        label: "Analytics",
        tagline: "Transform complexity into clarity",
        summary: "Advanced quantitative analytics that uncover the 'why' behind consumer choices, enabling data-driven product and communication decisions.",
        usedFor: ["Product development", "Portfolio optimisation", "Ad claim testing", "Pricing research"],
        methods: [
          "MaxDiff (Best-Worst Scaling) for feature & claim prioritisation",
          "Conjoint & TURF analysis for product configuration",
          "Segmentation & cluster analysis — psychographic & behavioural",
          "Regression-based driver analysis for KPI improvement",
          "Key driver analysis (KDA) for brand equity and CX",
          "Volumetric forecasting and adoption modelling",
        ],
      },
      {
        label: "Sensory Science",
        tagline: "Science of taste, texture, and perception",
        summary: "Specialist sensory evaluation using trained panels and affective consumer testing — purpose-built for FMCG, food & beverage, personal care, and fragrance categories.",
        usedFor: ["Recipe reformulation", "Product launch", "NPD screening", "Shelf-life testing"],
        methods: [
          "Trained descriptive analysis (QDA / Spectrum method)",
          "Affective testing — central location and home-use tests (HUT)",
          "Temporal methods: TDS (Temporal Dominance of Sensations)",
          "CATA / RATA (Check-All-That-Apply / Rate-All-That-Apply)",
          "Sensory shelf-life and stability evaluation",
          "Fragrance / flavour optimisation in partnership with ingredient suppliers",
        ],
      },
      {
        label: "Syndicated Research",
        tagline: "Ready intelligence, shared cost",
        summary: "Proprietary multi-client trackers and panels that deliver continuous, cost-efficient intelligence across food-service, media, and FMCG categories.",
        usedFor: ["Market sizing", "Category trends", "Competitive benchmarking", "Entry decisions"],
        methods: [
          "Table Share® — India's dedicated out-of-home food-service panel (16 cities)",
          "Monthly FMCG consumer sentiment tracker",
          "Annual media consumption & OTT habits study",
          "Quarterly brand health monitor (sector-specific)",
          "Category trend reports with year-on-year benchmarks",
        ],
      },
      {
        label: "Impact Research",
        tagline: "Measure what matters beyond profit",
        summary: "Specialised social research for CSR programmes, government schemes, and impact organisations — rigorous measurement of social, environmental, and community outcomes.",
        usedFor: ["CSR reporting", "ESG disclosures", "Government schemes", "NGO impact measurement"],
        methods: [
          "Community baseline surveys and needs assessments",
          "Government programme evaluation and reach studies",
          "ESG outcome mapping and stakeholder interviews",
          "Beneficiary satisfaction & perception tracking",
          "Social return on investment (SROI) frameworks",
          "Longitudinal impact assessment panels",
        ],
      },
      {
        label: "Market Research",
        tagline: "Full-spectrum consumer understanding",
        summary: "End-to-end primary research across B2C and B2B sectors — from quick dipstick polls to large-scale multi-market studies, delivered with analytical depth.",
        usedFor: ["Brand strategy", "New category entry", "CX improvement", "Campaign effectiveness"],
        methods: [
          "Usage & Attitude (U&A) studies",
          "Brand health tracking — awareness, consideration, preference, loyalty",
          "Concept & product testing (monadic, sequential, comparative)",
          "Customer Experience (CX) and NPS programmes",
          "Shopper and path-to-purchase research",
          "Qualitative: FGDs, in-depth interviews, ethnography",
        ],
      },
    ],
    advancedMethods: {
      label: "Advanced Methods",
      title: "Tools That Support Clearer Research",
      subtitle: "We adopt intelligent methods — eye-tracking simulation, text coding, predictive modelling — where they genuinely sharpen insight, not as a default for every project.",
      tools: [
        {
          title: "AI Gaze™",
          subtitle: "Eye-Tracking Simulation",
          desc: "Elastic Tree's flagship proprietary tool. Using deep learning models trained on thousands of real eye-tracking sessions, AI Gaze™ predicts consumer visual attention on any uploaded image or design with 92% accuracy — fully remote, no hardware required.",
          stats: "92% Accuracy · 24 hrs Turnaround · –60% Cost vs. Traditional",
        },
        {
          title: "AI-Augmented Analytics",
          subtitle: "Faster Insights at Scale",
          desc: "Machine-learning models accelerate response quality validation, open-ended text categorisation, and driver analysis — enabling our analysts to focus on interpretation rather than data cleaning.",
          stats: "5× Speed Gain · 100,000+ Data Points · 12+ Quant Modules",
        },
        {
          title: "Predictive Modelling",
          subtitle: "Decision-Ready Forecasts",
          desc: "Advanced MaxDiff, conjoint analysis, and regression-based driver models translate consumer preference data into ranked, simulation-ready product or communication decisions.",
          stats: "High Accuracy · MaxDiff, Conjoint Models · Priority Scores Output",
        },
        {
          title: "NLP & Text Mining",
          subtitle: "Open-Ended at Scale",
          desc: "NLP-powered verbatim coding, sentiment classification, and theme clustering across Tamil, Hindi, English, and other Indian languages — ensuring no qualitative nuance is lost in large-scale quant surveys.",
          stats: "6+ Languages · Yes Auto-code · Built-in Sentiment",
        },
      ],
      gazeDeliverables: [
        { name: "Heat Map", desc: "Colour-coded overlay showing relative attention density across the entire stimulus — instantly identifies high- and low-engagement zones." },
        { name: "Hot Spot", desc: "Isolates the single most-fixated area on the visual, helping you confirm that the primary message or pack design element is landing where intended." },
        { name: "Gaze Sequence", desc: "Frame-by-frame animation recreating the natural scan path of a consumer's eye, revealing the true order in which elements register." },
        { name: "Area of Interest (AoI)", desc: "Quantified fixation metrics per defined zone — time-to-first-fixation, total dwell time, visit count — for rigorous cross-stimulus comparison." },
      ],
      gazeUseCases: [
        "Packaging design evaluation & shelf standout testing",
        "In-store planogram and POSM optimisation",
        "Print and digital advertising pre-testing",
        "Website UX and landing page effectiveness",
        "Logo and brand identity review",
        "Menu board and food-service display testing",
      ],
    },
    cta: {
      title: "Have a research challenge in mind?",
      body: "Our team will propose the right methodology — qual, quant, or a hybrid — tailored to your timeline and budget. Send us a visual stimulus and we can run a sample AI Gaze™ analysis too.",
      buttons: ["Discuss Your Project", "Request an AI Gaze™ Demo"],
    },
  },
  tableSharePage: {
    hero: {
      eyebrow: "Food Consumption Intelligence",
      title: "Table Share®",
      subtitle: "Captures real, dish-level eating behaviour across urban India — mapped by occasion, effort, and frequency.",
      buttons: ["Explore Demo", "Book a Demo"],
    },
    decisionPlatform: {
      label: "Decision Platform",
      title: "Not a static report — a living dashboard",
      subtitle: "Go beyond the top 15: your gateway to 400+ dishes and behaviours. From insight to impact, the Table Share® dashboard is built to elevate your strategic agility.",
      note: "Custom extensions available by category, market, or target group.",
    },
    whyConsumption: {
      label: "Why Consumption",
      title: "If you don't know what's eaten, you can't know what will grow",
      subtitle: "Beyond availability: inform your urban market strategy with actual consumption metrics.",
    },
    occasions: {
      label: "Occasions",
      title: "India eats 7 times a day",
      subtitle: "Each occasion has different foods, needs, and competitive sets. Table Share® maps them independently — and accurately.",
    },
    sourceOfPrep: {
      label: "Source of Preparation",
      title: "Where food comes from matters",
      subtitle: "Homemade is still dominant — but uneven across dishes. RTC / RTE / takeaway adoption is driven by effort, not category alone.",
      quote: "Convenience doesn't replace cooking. It replaces effort.",
      button: "See RTC opportunities in demo",
      panelTitle: "The innovation sweet spot",
      panelBody: "Identify white-space where effort is high but homemade share is declining — the signal for RTC and RTE innovation pipelines.",
    },
    volumeRelevance: {
      label: "Volume Relevance",
      title: "Why penetration isn't enough",
      subtitle: "Growth follows volume relevance — not just reach. Table Share® shows which dishes and occasions drive real consumption share.",
    },
    geographicReach: {
      label: "Geographic Reach",
      title: "16 cities covered",
      subtitle: "Metro, Tier 1 and Tier 2 cities — representative coverage of India's diverse urban food landscape.",
    },
    cta: {
      title: "If your product isn't winning at the table, it won't win at retail.",
      body: "Table Share® isn't just data — it's your roadmap to staying relevant, responsive, and ahead in India's urban food market.",
      buttons: ["Explore Demo", "Book a Demo"],
      note: "Opens the interactive Table Share® dashboard in a new tab",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contact Us",
      title: "Let's Talk Research",
      subtitle: "Whether you have a specific brief or just want to explore what's possible, our team is happy to have a conversation.",
    },
    details: contactChannels.flatMap((channel) => {
      if (channel.kind === "email") {
        return [{ label: channel.label, value: channel.value, sub: channel.sub ?? "" }];
      }
      if (channel.kind === "phone") {
        return channel.numbers.map((n) => ({
          label: channel.label,
          value: n.display,
          sub: "",
        }));
      }
      return [{ label: channel.label, value: channel.lines[0], sub: "" }];
    }).concat(
      offices.map((office) => ({
        label: `${office.city} office`,
        value: office.city,
        sub: office.address,
      })),
    ),
    form: {
      fields: [
        { label: "Your Name", placeholder: "Your name" },
        { label: "Company", placeholder: "Your company" },
        { label: "Business Email", placeholder: "you@company.com" },
        { label: "Tell us about your project", placeholder: "Describe your research objective, timeline, and any key questions you'd like answered..." },
      ],
      submit: "Send Message",
      successTitle: "Message Sent!",
      successBody: `Thank you for reaching out. We'll get back to you ${RESPONSE_TIME}.`,
    },
  },
  caseStudiesPage: {
    eyebrow: "Our Work",
    title: "Research & Case Studies",
    searchPlaceholder: "Search by title, client, or topic...",
    filters: ["All", "Analytics", "Sensory Science", "Syndicated", "Impact", "Market Research", "AI"],
    emptyState: "No results found.",
    clearFilters: "Clear filters",
    articleBack: "Back to Case Studies",
    articleCtaTitle: "Want similar insights for your brand?",
    articleCtaBody: "Tell us your business challenge and we'll design the right research approach.",
    articleCtaButton: "Get in Touch",
    relatedTitle: "Related Research",
  },
  testimonials: [
    { name: "Alok Robin", company: "Takasago", quote: "An extremely dedicated and friendly team at Elastic Tree has made us very comfortable and their approach to our each and every request has always been taken into consideration. We feel so confident and safe working with Elastic Tree." },
    { name: "Pradeep Gangadharan", company: "Waycool", quote: "There is high involvement from senior research team members, which is good and different from a larger research agency." },
    { name: "Harsh Arya", company: "ITC", quote: "Elastic Tree is well integrated with the project. Starting with the project brief to the fragrance houses, all the way to the final leg of consumer interactions." },
    { name: "Janani Kandaswamy", company: "Mangaldeep", quote: "The research I did with Elastic Tree helped in both new product development and communication positioning. The rigour of qualitative insights provided by the team has helped in arriving at suitable brand propositions." },
    { name: "Akash Jain", company: "Cosco", quote: "The granularity of research and transparency of the organisation set it apart. Was a pleasure working with them." },
    { name: "Kashyap G", company: "Star Health", quote: "They deeply immersed themselves in our brand, delving into the intricacies of both the brand and the category. The brand planning and strategic expertise they bring to the table are immeasurable. Working with Team ET has truly been a transformative experience for our brand." },
  ],
  clients: [
    "Aachi", "Aargee Equipments", "Aisle", "Amar Prakaash", "Amrutanjan", "Anabond", "Arha Media", "Asianet Star", "Business Clinique", "Casa Grand",
    "Cavinkare", "Cholayil", "Circen", "Cosco", "Creamline", "Dabur India", "Dynata", "E.I.D Parry", "Enerlife", "Fipola",
    "G K Dairy", "Gemini Edibles", "Hatsun", "Id Fresh Food", "Initiative Media", "ITC", "K L F Nirmal", "K.P. Namboodiri's", "Kaleesuwari", "Khazana",
    "Lotte India", "Lucas TVS", "M/S RK Swamy BBDO", "Maruchan Ajinomoto", "MyKiki", "Nabati", "NoBroker", "Pepsico", "Percept H", "Pioneer Wincon",
    "Pothys", "Prayagh Nutri", "Rabbit Digital", "Ram-Nath", "Rubecon", "Sirina Healthcare", "SKM Egg Products", "SPR Construction", "Star Health", "Sterling Holiday",
    "Sulekha.Com", "Symrise", "Takasago", "Tidel Park", "TVS Lucas", "UPL", "Vaidyaratnam", "Versuni", "Waycool",
  ],
};

const payload = {
  siteCopy,
  posts,
  teamMembers,
  aboutStats,
  companyIntro,
  offices,
  tableShareStats,
  tableShareFeatures,
  tableShareOccasions,
  tableShareCities,
  tableShareInsights,
  tableShareBusinessUses,
  tableShareDeliverables,
};

fs.writeFileSync(
  new URL("../docs/content-export-data.json", import.meta.url),
  JSON.stringify(payload, null, 2),
);
console.log("Exported site content to docs/content-export-data.json");
