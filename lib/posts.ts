export type PostTag =
  | "Analytics"
  | "Sensory Science"
  | "Syndicated"
  | "Impact"
  | "Market Research"
  | "AI";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  readTime: string;
  tags: PostTag[];
  date: string;
  client?: string;
  industry?: string;
  hasPdf?: boolean;
  pdfUrl?: string;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "table-share-qsr-occasion-mapping",
    title: "Mapping Meal Occasions: How a QSR Chain Found Its Next Growth City",
    excerpt:
      "Using Table Share® syndicated data, a national QSR identified underserved lunch occasions in Tier-2 cities — unlocking a ₹120 Cr expansion roadmap backed by dish-level consumption evidence.",
    readTime: "3 min read",
    tags: ["Syndicated", "Analytics"],
    date: "2026-02-15",
    client: "National QSR Chain",
    industry: "Food Service",
    content: `**Industry:** Quick Service Restaurants (QSR)
**Client:** A leading national QSR chain with 400+ outlets across India

## The Challenge

The client was evaluating expansion into three Tier-2 cities but lacked reliable data on out-of-home eating behaviour at the dish and occasion level. Traditional U&A studies provided attitudinal data but couldn't reveal what consumers actually ate, when, and where.

## Our Solution: Table Share® Syndicated Intelligence

We leveraged **Table Share®** — Elastic Tree's proprietary food consumption panel tracking 3,468 households across 16 cities — to deliver occasion-level intelligence without the cost of a bespoke study.

### Key Data Layers Used

- **Occasion mapping:** Breakfast, lunch, evening snack, dinner, and late-night eating patterns by city
- **Dish-level tracking:** Specific menu categories consumed out-of-home vs. at-home
- **Spend & frequency:** Average ticket size and visit frequency by occasion and SEC segment
- **Competitive share:** Share of throat across QSR, casual dining, and delivery channels

## Impact

- Identified **two high-potential cities** where lunch occasions were underserved relative to population density
- Recommended a **menu localisation strategy** based on regional dish preferences revealed in the panel
- Client secured board approval for expansion with syndicated data costing **60% less** than a custom tracker
- Table Share® subscription continues to monitor post-entry performance quarter-on-quarter

*Continuous food intelligence — dish by dish, occasion by occasion.*`,
  },
  {
    slug: "ai-gaze-planogram-optimisation",
    title: "AI Gaze™ Planogram Optimisation: 23% Uplift in Shelf Attention",
    excerpt:
      "A personal care brand used AI Gaze™ eye-tracking simulation to redesign in-store planograms — achieving 23% higher visual attention on hero SKUs without changing product assortment.",
    readTime: "3 min read",
    tags: ["AI", "Analytics"],
    date: "2026-01-20",
    client: "Personal Care Brand",
    industry: "FMCG",
    content: `**Industry:** Personal Care / FMCG
**Client:** A mid-size personal care brand competing against multinational incumbents

## The Challenge

Despite strong product quality, the client's SKUs were consistently losing shelf attention to larger competitors in modern trade outlets. Traditional eye-tracking studies were prohibitively expensive and required lab setups with limited stimulus flexibility.

## Our Solution: AI Gaze™ Remote Eye-Tracking

Elastic Tree deployed **AI Gaze™** — our proprietary AI-simulated eye-tracking tool with 92% accuracy — to evaluate three planogram configurations using actual shelf photography from key retail chains.

### Deliverables

- **Heat maps** showing relative attention density across the entire shelf bay
- **Gaze sequence animations** revealing the scan path consumers follow left-to-right
- **Area of Interest (AoI) metrics:** Time-to-first-fixation, dwell time, and visit count per SKU zone
- **Hot spot analysis** confirming whether the primary brand message landed in the intended visual zone

## Key Findings

- Hero SKU was placed below eye level — repositioning to the **second shelf row** increased fixation time by 23%
- Competitor's flanker product was capturing initial gaze due to high-contrast packaging in the peripheral zone
- Recommended **facings increase** on two SKUs with high dwell time but low conversion at shelf

## Impact

- Planogram redesign implemented across **180 modern trade outlets** in Phase 1
- Post-implementation sales tracking showed **14% volume uplift** on repositioned SKUs within 8 weeks
- Total research cost was **60% lower** than traditional eye-tracking, with 24-hour turnaround per stimulus

*See what consumers see — before you spend on shelf.*`,
  },
  {
    slug: "her-perspective",
    title: "Her Perspective",
    excerpt:
      "Prevention beats policing—India needs a culture fix, not just a law enforcement fix. 3,414 women across 16 Indian cities reveal what women are telling policymakers and brands.",
    readTime: "1 min read",
    tags: ["Impact"],
    date: "2026-03-01",
    hasPdf: true,
    pdfUrl: "/downloads/her-perspective-2026.pdf",
    content: `Prevention beats policing—India needs a culture fix, not just a law enforcement fix. 3,414 women across 16 Indian cities mentioned Women's Safety (39%) as the top priority. However, 56% prefer school-based gender training over enforcement.

Read our "Her Perspective 2026" survey to see what women across 16 cities are telling policymakers and brands.`,
  },
  {
    slug: "why-custom-marketing-research-matters",
    title: "Why Custom Marketing Research Matters for Your Business",
    excerpt:
      "In today's fast-paced business environment, understanding your target market is crucial. Tailored marketing insights shaped by custom research can provide businesses with the knowledge to thrive.",
    readTime: "4 min read",
    tags: ["Market Research"],
    date: "2025-11-01",
    content: `In today's fast-paced business environment, understanding your target market is crucial. Tailored marketing insights shaped by custom marketing research can provide businesses with the necessary knowledge to not only compete but also thrive.

## Tailored Marketing Insights

Tailored marketing insights refer to the personalized data and conclusions drawn specifically for your business and its unique needs. This in-depth analysis goes beyond general market research to focus on your customers, competitors, and market trends.

Businesses can greatly benefit from these insights to allocate their resources effectively. According to a study by the American Marketing Association, companies that employ tailored insights see a 35 percent increase in ROI on marketing campaigns compared to those using generic data.

## The Need for Custom Marketing Research

In an era where consumers are more informed and discerning than ever, businesses must adapt their strategies accordingly. Custom marketing research is critical for several reasons:

- **Understanding Your Audience:** Tailored insights can provide a comprehensive understanding of consumer behavior, preferences, and pain points.
- **Competitive Analysis:** Knowing who your competitors are and understanding their strategies is vital.
- **Risk Mitigation:** By using specific data related to your target market, businesses can reduce the risk involved in launching new products.
- **Enhanced Customer Experience:** Insights from custom marketing research can help personalize the customer journey.

## What is the Meaning of Custom Marketing?

Custom marketing refers to creating marketing strategies and campaigns that are tailored to the specific needs and preferences of a target audience. Unlike traditional, one-size-fits-all approaches, custom marketing utilizes data-driven insights to deliver personalized experiences to customers.

## The Benefits of Tailored Insights

Investing in custom marketing research offers numerous benefits, including:

- **Improved Targeting:** Tailored insights can allow businesses to segment their audience effectively.
- **Higher Conversion Rates:** With personalized marketing, audiences are more likely to engage.
- **Better Resource Allocation:** Understanding where to best allocate marketing budgets leads to maximized returns.
- **Enhanced Brand Loyalty:** By meeting customer needs through personalized insights, businesses can foster long-term loyalty.

Data from a Nielsen report shows that brands implementing customized marketing can outperform their competitors by as much as 2.5 times.

## Final Thoughts

The world of marketing is rapidly evolving; customer expectations are higher than ever. Custom marketing research is a vital component in offering tailored insights that align with these expectations. Embrace custom marketing research to uncover opportunities and ensure your business stays ahead of the curve.`,
  },
  {
    slug: "looking-for-her-in-the-headlines",
    title: "Women in Indian Media: Bridging the Gender Gap in Journalism",
    excerpt:
      "Despite growing discussions around gender equality, the lack of female representation in Indian news coverage remains a critical issue. Our study across 3,400+ pages reveals only marginal progress.",
    readTime: "2 min read",
    tags: ["Impact"],
    date: "2025-09-01",
    content: `## Understanding the Challenge of Female Representation

Despite growing discussions around gender equality, the lack of female representation in Indian news coverage remains a critical issue. Our examination sought to measure how women are represented in Indian newspapers—as newsmakers, sources, and contributors.

## Our Research Approach

Elastic Tree conducted a two-wave gender representation study across Indian print media, covering two consecutive years—2023 and 2024. The research evaluated the presence and visibility of women in various roles, including newsmakers, sources, and those featured in visual content.

### Methodology Overview

- **Newspaper Selection:** In 2023, we selected five newspapers. In 2024, we expanded to eight newspapers, incorporating both English and Tamil language publications.
- **Data Collection:** Each article was assessed for gender representation—identifying whether newsmakers, sources, and visually depicted individuals were male or female.
- **Quantitative Scale:** Our team analyzed over 3,400 pages of newspaper content across both years.

## Key Findings and Their Impact

Our study revealed only marginal progress in gender representation. In 2024, women accounted for a mere **17% of newsmakers**. This underscores the continued prevalence of male voices in the media narrative.

The findings emphasize an urgent need for Indian media houses to take action:

- **Broaden Source Networks:** Media houses should strive to include more women experts and voices.
- **Encourage Diverse Perspectives:** Having varied viewpoints in newsrooms can foster balanced storytelling.
- **Establish Monitoring Mechanisms:** Create institutional mechanisms that monitor gender parity consistently.

## The Importance of Continuous Tracking

Continuous tracking of gender representation in media is crucial. It not only provides transparency but also promotes accountability among journalists and institutions.

## Conclusion: A Call to Action

This study serves as both a mirror and a motivator. Through continuous tracking and collective accountability, we hope to foster a more representative media environment in the years to come.`,
  },
  {
    slug: "pack-to-plate",
    title: "Pack to Plate: Product & Pack Performance Unwrapped",
    excerpt:
      "A wheat manufacturer looking to move into branded retail needed an objective benchmark against the category leader. Our blind in-home use study delivered the confidence to grow.",
    readTime: "2 min read",
    tags: ["Sensory Science", "Market Research"],
    date: "2025-07-01",
    content: `**Client background:** Client has been in wheat manufacturing business for more than 3 decades. The client is a strong supplier of Sharbati atta to private label supplier to many of the national retail chains. Client is slowly trying to move into the retail branded space. Client would like to increase their brand presence in the retail outlets.

## Problem

The client was up against the leading atta brand in the market—a player with distribution muscle and strong brand saliency. The client was confident of offering a better premium product at a competitive price. The client is strong in the south market—where atta is a relatively new adoption in homes and awareness of different quality is also low.

In order to get an objective third-party rating of performance, there was a need to benchmark against industry leader in blind in-home use.

## Research Methodology

Quantitative study among **120 consumers** were conducted—sequential monadic test wherein consumers tested client's product and one competition in blind form. Evaluation of the atta was done in all the stages:

- Visual evaluation of the atta
- Prep stage — kneading the dough & making rotis
- Cooking stage & taste evaluation
- Consumers were requested to store the cooked rotis for 3 hours to replicate the real-life scenario of 'packing the rotis in lunch boxes'

## Solution

Study reassured client in their product's superior performance and as next step they can concentrate more on the other marketing mixes. Study also helped client identify key words / images in their pack which appealed to consumers more and those which they need to change/modify.

**Backed by data, the brand is ready to grow and win at shelf!**`,
  },
  {
    slug: "winning-the-trp-war",
    title: "Winning the TRP War: The Power of Listening to Viewers in Real Time",
    excerpt:
      "A Tamil television channel secured the #1 TRP position for two consecutive months by acting on real-time viewer feedback from dedicated viewer panels.",
    readTime: "2 min read",
    tags: ["Market Research"],
    date: "2025-05-01",
    content: `**Client Overview:** Our client is a popular Tamil-language television channel in India, widely known for its engaging programming, including serial dramas, reality shows, talk shows, and movies.

With fierce competition from other television networks, particularly in the high-stakes prime-time slot, maintaining strong TRP (Television Rating Point) performance is critical.

## The Challenge

Prime-time serial dramas are a significant investment, targeting diverse viewers across various age groups. Even minor missteps in the storyline can lead to a drop in viewership and declining TRPs, impacting the channel's performance and revenue.

The client sought to regularly capture authentic viewer feedback to stay aligned with audience expectations, make quick content corrections, and benchmark their shows against competitors.

## Our Approach: A Viewer-Centric Research Methodology

- **Dedicated Viewer Panels:** Separate panels were set up for each serial drama under observation—including regular viewers and "switch viewers" who also followed competitor channels.
- **Individual Discussions:** At the end of every week, one-on-one telephonic interviews were conducted with each panel member. Group discussions were intentionally avoided to ensure honest, unbiased opinions.
- **In-Depth Insights:** Discussions explored opinions on the storyline, appeal of key characters, and comparisons with competing serials.

## Impact & Outcome

What began as a simple feedback initiative evolved into a powerful content optimization tool. The insights helped the client understand:

- Which story elements resonated most
- Which characters enhanced or diluted viewer interest
- Whether the storyline felt engaging, practical, predictable, or dull

Regular comparative analysis with competitor serials gave the client a clear edge in refining their content strategy.

**The result? With our continuous tracking and targeted recommendations, the client's prime-time serials secured the #1 TRP position continuously for two months.**`,
  },
  {
    slug: "confectionery-packaging-reinvented",
    title: "Confectionery Packaging Reinvented",
    excerpt:
      "A leading confectionery brand combined quantitative consumer evaluation with AI-based eye-tracking to modernize lollipop packaging, driving stronger purchase intent.",
    readTime: "2 min read",
    tags: ["Analytics", "AI"],
    date: "2025-04-01",
    content: `**Industry:** Food and Beverage (Confectionery)
**Client:** A Leading Confectionery Brand

## The Challenge

In the highly competitive confectionery market, packaging plays a crucial role in attracting consumers and influencing purchase decisions. Our client sought to refresh its lollipop packaging designs for two key product lines. The existing packaging was perceived as outdated, potentially affecting brand awareness and purchase intent.

## Our Solution

To ensure that the redesigned packaging resonated with consumers, we employed a data-driven research approach, combining quantitative evaluation with cutting-edge **AI-based eye-tracking technology**.

## Research Methodology

- **Quantitative Consumer Evaluation:** A structured questionnaire was administered to 300 consumers to gauge overall likeability, purchase intent, and forced preference among different packaging designs.
- **AI-Based Eye-Tracking (Ai-Gaze):** Predictive eye-tracking technology was leveraged to analyze visual attention, identifying which packaging elements captured consumer interest and which needed enhancement.

## Impact & Key Findings

**1. Improved Packaging Design**
The study's findings directly influenced packaging revisions, optimizing the visual appeal and strengthening the communication of key brand messages. Insights into consumer reactions to specific colors, shapes, and imagery helped refine designs to maximize positive associations.

**2. Data-Driven Design Recommendations**
By integrating consumer feedback with eye-tracking analytics, the research pinpointed areas needing improvement, such as visual clarity and hierarchy.

**3. Enhanced Purchase Intent**
The optimized designs led to a stronger purchase intent among the target audience, reinforcing the importance of consumer-centric design strategies in product packaging.

## Conclusion

Through a combination of quantitative analysis and AI-powered insights, we empowered our client to create packaging that is not only visually appealing but also strategically designed to drive consumer engagement.

*Data-driven consumer insights to optimize and boost brand impact.*`,
  },
  {
    slug: "decoding-chocolate-flavor",
    title: "Decoding Consumer Preferences to Create a Market-Winning Chocolate Flavor",
    excerpt:
      "A global flavor leader used a four-phase research methodology—from retail audit to CLT validation—to identify the ideal premium chocolate flavor for bakery, milk drinks, and nutritional supplements.",
    readTime: "2 min read",
    tags: ["Sensory Science", "Analytics"],
    date: "2025-03-01",
    content: `**Industry:** Food and Beverage (Flavorings)
**Our Client:** A global leader in flavors, fragrances, and cosmetic ingredients.

## The Challenge: Crafting a Premium Chocolate Flavor

Our client set out to develop a premium chocolate flavor for bakery items, milk-based drinks, and nutritional supplements. The challenge: identify a chocolate flavor profile that would resonate with modern consumers and fit seamlessly into various product categories.

## Our Research Approach: A Four-Phase Study

### Phase 1: Exploratory Retail Audit

The research began with a deep dive into the existing market landscape. By analyzing online grocery platforms and ice cream brand websites, we created a comprehensive library of chocolate products, identifying common flavor descriptions and trends.

### Phase 2: In-depth Consumer Exploration

We conducted in-depth interviews with **12 articulate consumers (SEC A1)** in Bangalore and Chennai—regular purchasers of biscuits, milk-based drinks, or ice cream—to understand their preferred chocolate flavor profiles and sensory expectations.

### Phase 3: Market Central Location Test (CLT)

Quantitative testing through a blind taste test across **three major cities: Mumbai, Delhi, and Chennai**. A total of **270 participants** (90 per city) were divided into three panels representing ice cream, bakery, and milk-based drink categories. Each panel evaluated four chocolate flavor samples using a sequential monadic approach, followed by a forced comparison.

### Phase 4: Validation CLT

A second blind product test with **165 participants** in Chennai confirmed which chocolate flavor would perform best in real-world applications.

## The Impact: Data-Driven Flavor Innovation

By progressing from secondary research to qualitative exploration and rigorous quantitative testing, our approach provided a structured roadmap for flavor development. The insights enabled our client to select a chocolate flavor that aligns with evolving consumer tastes.

*Delivering market-winning insights through research-driven innovation.*`,
  },
  {
    slug: "brand-architecture",
    title: "Brand Architecture: Choosing The Right Model",
    excerpt:
      "Brand architecture is the strategic blueprint that defines how all brands within a company relate to each other. Understanding the four models is key to maximizing brand equity.",
    readTime: "3 min read",
    tags: ["Market Research"],
    date: "2025-02-01",
    content: `Brand architecture is the strategic process of organizing, structuring, and relating a company's brands to achieve specific marketing and business objectives. Think of it as a family tree for your brands.

## The Four Main Brand Architecture Models

### 1. Branded House (Monolithic)

**Description:** All products and services operate under a single, overarching brand name.

**Examples:** Google, Virgin, Sony

**Advantages:** High brand awareness, simplified marketing, strong brand equity.

**Disadvantages:** Limited flexibility; potential damage to the overall brand if one product fails.

### 2. Endorsed Brands

**Description:** Individual products or services have their own distinct brand names, but are clearly linked to and endorsed by the parent brand.

**Examples:** Marriott (Marriott Hotels, Courtyard by Marriott, Ritz-Carlton), Campbell Soup Company

**Advantages:** Flexibility to target different market segments while leveraging parent brand equity.

**Disadvantages:** Requires careful coordination to maintain consistent messaging.

### 3. House of Brands (Unbranded)

**Description:** Each product or service operates under a completely independent brand name with no visible connection to the parent company.

**Examples:** Procter & Gamble (Tide, Pampers, Gillette), Unilever (Dove, Lipton)

**Advantages:** Maximum flexibility, isolation of risk, ability to target diverse market segments.

**Disadvantages:** High cost of building and maintaining multiple brands.

### 4. Hybrid Models

**Description:** A combination of elements from the above models, tailored to specific business needs.

**Advantages:** Flexibility to adapt the architecture to different product categories and target audiences.

## Choosing the Right Model

The best brand architecture model depends on:

- Company size and structure
- Product portfolio diversity
- Target market segments
- Marketing budget and resources
- Risk tolerance

Thorough market research and a clear understanding of your business strategy are crucial to selecting the most appropriate model.

**Reach out to us to know more!**`,
  },
  {
    slug: "revolutionizing-baby-bottle-care",
    title: "Revolutionizing Baby Bottle Care: A Breakthrough Innovation",
    excerpt:
      "A pioneering smart machine for baby bottle cleaning, sterilization, and drying needed to understand consumer acceptance and price sensitivity before launch across Indian markets.",
    readTime: "2 min read",
    tags: ["Sensory Science", "Market Research"],
    date: "2025-01-01",
    content: `**Industry:** Baby Care
**Client:** Medical Professional

## The Challenge

Our client developed a first-of-its-kind smart machine that automates baby bottle cleaning, sterilization, and drying. Going beyond conventional sterilizers, this advanced device features an integrated app that dispenses formula milk at the desired time and quantity, and tracks the baby's milk consumption.

However, being a pioneering innovation in India, the client was concerned about consumer acceptance and pricing sensitivity. The key question: **Would parents embrace this premium solution, and what price points would they be willing to pay?**

## Our Approach

We designed a two-step research methodology:

**Qualitative In-Depth Interviews (IDIs):** Conducted in Chennai and Bangalore to understand current bottle-cleaning practices, sterilization methods, and the role of existing steam-based sterilizers.

**Quantitative Study:** A large-scale survey across **11 Tier 1, 2, and 3 cities**, covering **300 respondents** to gauge consumer sentiment across different demographics.

## Key Insights & Impact

- **High Consumer Interest:** The innovative concept was well-received, with strong appeal among urban parents looking for convenience.
- **Price Sensitivity:** The premium pricing was a hurdle, prompting the need for alternative business models.
- **Flexible Business Models:** Exploring rental options, subscription plans, or a refundable deposit scheme could encourage adoption without a high upfront cost.

## Outcome

By leveraging these insights, the client refined their market approach, considering alternative pricing structures to make the product more accessible. The study not only validated the product's appeal but also unlocked new opportunities for customer acquisition and long-term business sustainability.

*Helping Innovators Understand Their Market—One Insight at a Time.*`,
  },
  {
    slug: "feasibility-study-for-new-store",
    title: "Feasibility Study for New Store",
    excerpt:
      "A Tamil Nadu retail giant planning their third Bangalore store used GapMap area analysis and consumer interviews to validate their 'All under one roof' concept in a new market.",
    readTime: "2 min read",
    tags: ["Market Research"],
    date: "2024-12-01",
    content: `**Assessing the potential of the area and understanding the attractiveness of a new store.**

## Our Client

Client is a retail giant offering lifestyle products, supermarket and gold jewellery. A strong player in Tamil Nadu, spreading their presence in Kerala and Karnataka. Client had their first store open in Bangalore in 2018 and second store in 2023. Client would like to open a new store in the "All under one roof" concept in Bangalore.

## Challenge

The multi-faceted culture of Bangalore residents is the key challenge. A city which has a mix of traditional consumers who prefer traditional stores, modern consumers who prefer malls, and a huge proportion of people who prefer buying online. Client is concerned whether the concept "All under one roof" will work in a city like Bangalore. Additionally, the proposed area is in the outer part of the city.

## Objectives

- Detailed understanding of the area — kind of area/profile of people living there
- Complete understanding of competitors & shopping areas in the catchment area
- Understand the appeal of the concept among consumers

## Methodology

We proposed a two-step research process:

1. **Complete scan of the area** using GapMap tool, confirmed via physical visits
2. **Face-to-face interviews** among consumers to understand their lifestyle & shopping habits and the appeal of the concept

## Key Results & Benefits

- Complete understanding of the area — population spread and demographics & affluence level
- Studied all 3 types of market areas: local/hawkers market, traditional stores, and modern retail outlets
- GapMap provided the concentration of modern retail stores in the catchment area — kind of stores, count, and footfall data
- Consumer interviews threw light on shopping habits, likes & problems they face while visiting malls
- Broad understanding of awareness and visits to competition stores in Bangalore
- **The study showed huge potential for the store concept and high willingness from consumers to visit**

## Impact

The research helped the client in reassuring their decision of property and the concept of the new store — "All under one roof".`,
  },
];

export function getFeaturedPosts(limit = 6): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPostBySlug(slug);
  if (!post) return [];
  return posts
    .filter(
      (p) =>
        p.slug !== slug && p.tags.some((t) => post.tags.includes(t))
    )
    .slice(0, limit);
}
