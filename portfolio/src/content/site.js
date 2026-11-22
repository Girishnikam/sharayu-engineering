/**
 * Site-wide content and configuration.
 * Source of truth: docs/COMPANY_PROFILE.md — do not add facts that are not in the profile.
 */

export const site = {
  name: 'Sharayu Engineering',
  tagline: 'Complete Fire Solution',
  promise: ['Design', 'Supply', 'Execute', 'Maintain'],
  headlineSlogan: 'Protecting Lives. Securing Tomorrow.',
  footerSlogan: 'One Partner. Complete Fire Solution. Total Peace of Mind.',
  closingLine: "We don't just install systems, we create safer environments for a better tomorrow.",
  association: {
    prefix: 'in association with',
    name: 'Vishwaraaj Industrial Projects',
    description: 'Government of Maharashtra Licensed Fire Prevention & Life Safety Agency',
  },

  brand: {
    // Place the official logo in public/images/ and set its path here (e.g. 'images/logo.png').
    // While null, a built-in SVG rendition of the mark is shown.
    logoSrc: null,
    logoAlt: 'Sharayu Engineering logo',
  },

  contact: {
    phoneDisplay: '9527139867',
    phoneHref: 'tel:+919527139867',
    whatsappHref: 'https://wa.me/919527139867',
    whatsappMessage: 'Hello Sharayu Engineering, I would like to enquire about fire safety solutions.',
    email: 'sharayuengineering23@gmail.com',
    emailHref: 'mailto:sharayuengineering23@gmail.com',
    instagramHandle: '@sharayu_engineering',
    instagramHref: 'https://www.instagram.com/sharayu_engineering',
    offices: [
      {
        id: 'corporate',
        label: 'Corporate Office',
        address:
          'Vishwaraaj Industrial Projects (Sharayu Engineering), Kalpvruksha Apartment, Near Raghunandan Hall, Prayeja City Link Road, Vadgaon Budruk, Pune – 411051',
        locality: 'Pune',
        postalCode: '411051',
      },
      {
        id: 'registered',
        label: 'Registered Office',
        address: 'A/P Derde Korhale, Tal. Kopargaon, Dist. Ahilyanagar – 423601',
        locality: 'Kopargaon',
        postalCode: '423601',
      },
    ],
  },

  navigation: [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Process', to: '/process' },
    { label: 'Industries', to: '/industries' },
    { label: 'Clients', to: '/clients' },
    { label: 'Areas We Serve', to: '/areas-we-serve' },
    { label: 'Contact', to: '/contact' },
  ],

  header: {
    skipLinkLabel: 'Skip to main content',
    menuOpenLabel: 'Open menu',
    menuCloseLabel: 'Close menu',
    primaryNavLabel: 'Primary',
    ctaLabel: 'Call Now',
    topBarNote: '365 Days Support',
  },

  footer: {
    about:
      'A trusted name in fire protection and life safety solutions, delivering complete fire safety solutions that ensure the protection of lives, assets and the environment.',
    quickLinksTitle: 'Quick Links',
    quickLinks: [
      { label: 'About Us', to: '/about' },
      { label: 'Our Process', to: '/process' },
      { label: 'Industries We Serve', to: '/industries' },
      { label: 'Our Clients', to: '/clients' },
      { label: 'Business Association', to: '/association' },
      { label: 'Areas We Serve', to: '/areas-we-serve' },
      { label: 'Contact Us', to: '/contact' },
    ],
    servicesTitle: 'Our Services',
    contactTitle: 'Get In Touch',
    copyright: 'All rights reserved.',
  },

  ctaBand: {
    title: 'One Partner. Complete Fire Solution. Total Peace of Mind.',
    text: 'Get in touch with us for fire safety solutions, consultations, NOC support or any other enquiries.',
    callLabel: 'Call 9527139867',
    whatsappLabel: 'WhatsApp Us',
    contactLabel: 'Contact Us',
  },

  breadcrumbs: {
    label: 'Breadcrumb',
    homeLabel: 'Home',
  },

  seo: {
    // TODO: confirm with Sharayu — set VITE_SITE_URL (or this fallback) to the final domain.
    // Public root URL of the site including any base path, without a trailing slash.
    siteUrl: (import.meta.env.VITE_SITE_URL || 'https://girishnikam.github.io/sharayu-engineering').replace(
      /\/+$/,
      '',
    ),
    titleTemplate: '%s | Sharayu Engineering',
    defaultTitle: 'Sharayu Engineering | Complete Fire Solution',
    defaultDescription:
      'Sharayu Engineering delivers complete fire protection and life safety solutions — design, supply, execution and maintenance of fire hydrant, sprinkler, alarm and detection systems across Maharashtra.',
    locale: 'en_IN',
    // Optional social share image in public/images/ (e.g. 'images/og-image.jpg'), ideally 1200×630.
    ogImage: null,
  },
}

export const getWhatsappLink = (message = site.contact.whatsappMessage) =>
  `${site.contact.whatsappHref}?text=${encodeURIComponent(message)}`
