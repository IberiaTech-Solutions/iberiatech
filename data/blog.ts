export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  content: string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'why-bilingual-website-matters-charleston',
    title: 'Why a Bilingual Website Matters for Charleston Businesses',
    description:
      'Charleston\'s Hispanic population is growing fast. Learn why offering your website in English and Spanish can unlock new customers, build trust, and give you a competitive edge.',
    date: '2026-03-15',
    tags: ['Bilingual', 'Charleston', 'Small Business', 'Growth'],
    content: `
# Why a Bilingual Website Matters for Charleston Businesses

Charleston's Hispanic and Latino population has been growing steadily, and businesses that communicate in both English and Spanish are capturing an audience their competitors miss entirely.

## The Numbers Don't Lie

According to recent census data, South Carolina's Hispanic population has grown by over 30% in the last decade. In the Charleston metro area, Spanish-speaking households represent a significant and growing customer base — particularly in construction, legal services, restaurants, and home services.

## Trust Starts with Language

When a potential customer lands on your website and sees content in their native language, something shifts. It signals respect, cultural awareness, and professionalism. For service-based businesses — law firms, contractors, medical offices — that trust is the difference between a bounce and a booked appointment.

## It's Not Just Translation

A truly bilingual website isn't about running your English copy through Google Translate. It requires cultural adaptation: understanding which phrases resonate, what imagery connects, and how your value proposition sounds in a different cultural context.

At IberiaTech, bilingual support is included in every package because we believe it shouldn't be a premium add-on — it's a baseline.

## Competitive Advantage

Most small businesses in Charleston still have English-only websites. By going bilingual, you're not just reaching more people — you're establishing your brand as inclusive and forward-thinking. In industries like construction and legal services, this positioning can be decisive.

## Getting Started

The best time to make your website bilingual was yesterday. The second-best time is now. Whether you're building from scratch or adding Spanish to an existing site, the investment pays for itself through expanded reach and stronger community connections.

---

*Ready to reach more customers? [Contact us](/contact) for a free consultation on bilingual web development.*
    `,
  },
  {
    slug: 'what-makes-a-great-small-business-website',
    title: '5 Things Every Small Business Website Needs in 2026',
    description:
      'From mobile-first design to fast load times, here are the 5 non-negotiables your small business website needs to convert visitors into customers.',
    date: '2026-03-28',
    tags: ['Web Design', 'Small Business', 'Conversion', 'Best Practices'],
    content: `
# 5 Things Every Small Business Website Needs in 2026

Your website is your 24/7 salesperson. If it's slow, confusing, or outdated, you're losing customers every day without knowing it.

Here are the five non-negotiables for a small business website that actually converts.

## 1. Mobile-First Design

Over 60% of web traffic comes from mobile devices. If your site doesn't look great on a phone, most visitors will leave within seconds. Mobile-first means designing for the small screen first, then scaling up — not the other way around.

## 2. Page Speed Under 3 Seconds

Every second of load time costs you conversions. Studies show that a 1-second delay in page load reduces conversions by 7%. Modern frameworks like Next.js and optimized hosting can get your site loading in under 2 seconds.

## 3. Clear Call-to-Action

Every page should answer one question: "What do you want the visitor to do?" Whether it's calling your office, filling out a form, or scheduling a consultation, that action should be unmistakable and easy to complete.

## 4. SEO Foundations

If you don't show up on Google, you don't exist. Basic SEO — proper meta titles, descriptions, structured data, a sitemap, and clean URLs — is the foundation. Local SEO (Google Business Profile, local keywords) is especially critical for Charleston businesses.

## 5. Trust Signals

Testimonials, portfolio images, certifications, and a professional design all build credibility. A visitor needs to trust you before they'll contact you. Real photos of your work beat stock images every time.

---

*Need a website that checks all five boxes? [See our pricing](/pricing) or [get in touch](/#contact).*
    `,
  },
  {
    slug: 'seo-basics-for-local-businesses',
    title: 'SEO Basics: How Charleston Businesses Can Rank on Google',
    description:
      'A practical guide to local SEO for Charleston small businesses. Learn about Google Business Profile, local keywords, structured data, and the basics that move the needle.',
    date: '2026-04-05',
    tags: ['SEO', 'Local Business', 'Google', 'Charleston'],
    content: `
# SEO Basics: How Charleston Businesses Can Rank on Google

Search Engine Optimization sounds technical, but for local businesses, the fundamentals are straightforward. Here's what actually matters for getting found in Charleston.

## Claim Your Google Business Profile

This is step one and it's free. Your Google Business Profile controls what shows up when someone searches your business name or "near me" queries. Fill out every field: hours, services, photos, and description. Ask happy customers for reviews — they directly impact your ranking.

## Use Local Keywords Naturally

Instead of just "roofing contractor," use "roofing contractor in Charleston SC" or "Charleston roof repair." These long-tail keywords match what real people type into Google. Include them in your page titles, headings, and body text — but keep it natural.

## Get Your Technical SEO Right

The behind-the-scenes stuff matters:
- **Meta titles and descriptions** — What shows up in Google search results. Make them compelling.
- **Sitemap** — A file that tells Google about all your pages. Your developer should generate this automatically.
- **Structured data** — Code that helps Google understand your business type, location, and services. Shows up as rich results.
- **Mobile-friendly** — Google uses mobile-first indexing, meaning the mobile version of your site is what gets ranked.
- **Fast load times** — Core Web Vitals are a ranking factor.

## Build Local Backlinks

Links from other Charleston businesses, the local Chamber of Commerce, or industry directories signal to Google that your business is legitimate and relevant to the area.

## Be Consistent Everywhere

Your business name, address, and phone number (NAP) should be identical across your website, Google Business Profile, Yelp, Facebook, and every other listing. Inconsistencies confuse search engines.

## Track Your Progress

Set up Google Search Console (it's free) to see which queries bring people to your site, which pages rank, and any issues Google finds. Check it monthly — the data will tell you what's working.

---

*Want SEO built into your website from day one? [Check out our packages](/pricing) — SEO foundations are included in every tier.*
    `,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug)
}
