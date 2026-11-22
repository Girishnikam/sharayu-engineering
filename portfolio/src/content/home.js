/**
 * Home page content. Section data (stats, services, steps, etc.) is reused from the
 * dedicated content files so every fact has a single source.
 * Source: docs/COMPANY_PROFILE.md.
 */

export const home = {
  seo: {
    // Home uses the full default title from site.seo.defaultTitle.
    title: null,
    description:
      'Sharayu Engineering — Complete Fire Solution. Design, supply, execution and maintenance of fire hydrant, sprinkler, alarm & detection systems, fire extinguishers, fire doors and Fire NOC assistance in Maharashtra.',
  },
  hero: {
    eyebrow: 'Complete Fire Solution',
    title: { lead: 'Protecting Lives.', accent: 'Securing Tomorrow.' },
    text: 'A trusted name in fire protection and life safety solutions with over 12 years of rich industry experience — in association with Vishwaraaj Industrial Projects, a Government of Maharashtra licensed fire prevention & life safety agency.',
    primaryCta: { label: 'Explore Our Services', to: '/services' },
    secondaryCta: { label: 'Talk to an Expert', to: '/contact' },
    // Optional hero photo in public/images/ (e.g. 'images/hero.jpg'). Fallback: illustrated panel.
    image: null,
    imageAlt: 'Fire protection pump room and piping installed by Sharayu Engineering',
    badges: ['NBC', 'IS', 'NFPA'],
    badgesLabel: 'Systems engineered as per',
  },
  statsTitle: 'Sharayu Engineering at a glance',
  about: {
    eyebrow: 'Who We Are',
    title: { lead: 'About', accent: 'Us' },
    paragraphs: [
      'Sharayu Engineering is a trusted name in the field of fire protection and life safety solutions with over 12 years of rich industry experience. We deliver complete fire safety solutions that ensure the protection of lives, assets and the environment.',
      'We offer end-to-end solutions — from perfect design and engineering to supply, installation, testing, commissioning and annual maintenance services.',
    ],
    cta: { label: 'More About Us', to: '/about' },
  },
  services: {
    eyebrow: 'What We Do',
    title: { lead: 'Our', accent: 'Services' },
    text: 'Complete Fire Solutions. One Trusted Partner.',
    cta: { label: 'View All Services', to: '/services' },
  },
  process: {
    eyebrow: 'How We Work',
    title: { lead: 'Our', accent: 'Process' },
    text: 'A systematic and proven approach that ensures safety, compliance and long-term performance for your facility.',
    cta: { label: 'See Our Process', to: '/process' },
  },
  industries: {
    eyebrow: 'Sectors',
    title: { lead: 'Industries We', accent: 'Serve' },
    text: 'Life safety, asset protection and full compliance with statutory requirements — across diverse industries.',
    cta: { label: 'All Industries', to: '/industries' },
  },
  clients: {
    eyebrow: 'Trusted By',
    title: { lead: 'Our Valued', accent: 'Clients' },
    cta: { label: 'View Our Clients', to: '/clients' },
  },
  association: {
    cta: { label: 'About the Association', to: '/association' },
  },
  areas: {
    eyebrow: 'Expanding',
    title: { lead: 'Areas We', accent: 'Serve' },
    text: 'Proudly delivering complete fire safety solutions across Maharashtra.',
    cta: { label: 'Areas We Serve', to: '/areas-we-serve' },
  },
}
