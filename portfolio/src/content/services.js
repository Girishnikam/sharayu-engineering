/**
 * Services content — overview page and the 7 service detail pages.
 * Source: docs/COMPANY_PROFILE.md §4. Slugs become URLs (/services/:slug).
 */

export const servicesPage = {
  seo: {
    title: 'Fire Protection Services',
    description:
      'Fire hydrant, sprinkler, fire alarm & detection systems, fire extinguishers, fire doors, Fire NOC assistance and fire design & engineering — complete fire solutions by Sharayu Engineering.',
  },
  breadcrumb: 'Services',
  hero: {
    eyebrow: 'What We Do',
    title: { lead: 'Our', accent: 'Services' },
    subtitle: 'Complete Fire Solutions. One Trusted Partner.',
  },
  intro: [
    'At Sharayu Engineering, we provide comprehensive fire protection and life safety solutions tailored to meet the unique needs of every project. From advanced system design to installation, testing, and compliance support, we ensure safety, reliability and peace of mind at every step.',
    'Our wide range of services is designed to protect lives, assets and the environment while ensuring full compliance with national and international standards.',
  ],
  listTitle: { lead: 'What We', accent: 'Do' },
  cardLinkLabel: 'Learn more',
  guarantees: {
    title: 'Every service we deliver is backed by expertise, quality & commitment to safety.',
    items: [
      { icon: 'BadgeCheck', label: 'Quality Assurance' },
      { icon: 'Users', label: 'Expert Team' },
      { icon: 'ShieldCheck', label: 'Safety Compliance' },
      { icon: 'Headset', label: 'Reliable Support' },
    ],
  },
  standards: {
    title: { lead: 'Standards &', accent: 'Compliance' },
    intro:
      'We deliver advanced fire protection systems that are engineered to detect, control and suppress fire hazards effectively. Our solutions ensure safety of people, property and operations across all types of facilities.',
    items: [
      { code: 'NBC', name: 'National Building Code of India' },
      { code: 'IS', name: 'Indian Standards (BIS)' },
      { code: 'NFPA', name: 'National Fire Protection Association (incl. NFPA 13 for sprinklers)' },
      { code: 'State Fire Act', name: 'Maharashtra State Fire Act and local fire safety regulations' },
    ],
  },
}

export const serviceDetail = {
  highlightsTitle: 'What We Provide',
  standardsTitle: 'Standards We Follow',
  applicationsTitle: 'Ideal For',
  otherServicesTitle: { lead: 'Other', accent: 'Services' },
  backLabel: 'All services',
}

export const services = [
  {
    slug: 'fire-hydrant-systems',
    icon: 'Droplets',
    title: 'Fire Hydrant Systems',
    summary: 'Reliable hydrant systems designed for rapid response and effective fire control in all environments.',
    // Optional photo in public/images/services/ (e.g. 'images/services/fire-hydrant.jpg').
    image: null,
    detail: [
      'Our fire hydrant systems are designed to ensure immediate and reliable water availability during fire emergencies. We provide complete solutions including design, supply, installation, testing and commissioning of hydrant pumps, underground and overhead piping networks, landing valves, hose reels, hose cabinets, yard hydrants and all associated accessories.',
      'Engineered as per NBC, IS and NFPA standards, our systems deliver optimum pressure, strong water flow and wide coverage to protect industrial plants, commercial buildings, high-rise structures, warehouses, institutions and other critical facilities with long-term reliability and effective performance.',
    ],
    highlights: [
      'Hydrant pumps',
      'Underground and overhead piping networks',
      'Landing valves',
      'Hose reels',
      'Hose cabinets',
      'Yard hydrants',
      'All associated accessories',
    ],
    standards: ['NBC', 'IS', 'NFPA'],
    applications: [
      'Industrial plants',
      'Commercial buildings',
      'High-rise structures',
      'Warehouses',
      'Institutions',
      'Other critical facilities',
    ],
    seo: {
      title: 'Fire Hydrant Systems',
      description:
        'Design, supply, installation, testing and commissioning of fire hydrant systems — hydrant pumps, piping networks, landing valves, hose reels and yard hydrants as per NBC, IS and NFPA.',
    },
  },
  {
    slug: 'fire-sprinkler-systems',
    icon: 'ShowerHead',
    title: 'Fire Sprinkler Systems',
    summary: 'Automatic sprinkler systems for early fire suppression and minimum damage protection.',
    image: null,
    detail: [
      'We offer high-performance fire sprinkler systems that automatically detect heat and discharge water to control or suppress fire at the earliest stage. Our solutions include Wet Pipe, Dry Pipe, Pre-action, Deluge and ESFR sprinkler systems with accurate hydraulic design, high-quality pipes, valves and accessories.',
      'All systems are installed and tested as per NFPA 13, IS standards and other applicable codes to ensure uniform water distribution, quick activation and minimum damage to life and property.',
    ],
    highlights: [
      'Wet Pipe sprinkler systems',
      'Dry Pipe sprinkler systems',
      'Pre-action sprinkler systems',
      'Deluge sprinkler systems',
      'ESFR sprinkler systems',
      'Accurate hydraulic design',
      'High-quality pipes, valves and accessories',
    ],
    standards: ['NFPA 13', 'IS'],
    applications: [
      'Factories',
      'Commercial complexes',
      'Hospitals',
      'Malls',
      'Data centers',
      'Hotels',
      'Cold storages',
      'Airports',
    ],
    seo: {
      title: 'Fire Sprinkler Systems',
      description:
        'Wet Pipe, Dry Pipe, Pre-action, Deluge and ESFR fire sprinkler systems with accurate hydraulic design, installed and tested as per NFPA 13 and IS standards.',
    },
  },
  {
    slug: 'fire-alarm-detection-systems',
    icon: 'BellRing',
    title: 'Fire Alarm & Detection Systems',
    summary: 'Intelligent alarm and detection solutions for early warning and enhanced safety.',
    image: null,
    detail: [
      'Our intelligent fire alarm and detection systems provide early warning, quick response and safe evacuation by identifying smoke, heat, flame and gas at the initial stage.',
      'We supply and install addressable and conventional fire alarm panels, smoke, heat, flame and gas detectors, manual call points, sounders, beacons, voice evacuation systems and integration with other safety systems. Designed for accuracy and reliability, our systems ensure real-time alarm notification and monitoring, helping protect occupants and assets in commercial, industrial, institutional and high-risk environments.',
    ],
    highlights: [
      'Addressable and conventional fire alarm panels',
      'Smoke, heat, flame and gas detectors',
      'Manual call points',
      'Sounders and beacons',
      'Voice evacuation systems',
      'Integration with other safety systems',
    ],
    standards: [],
    applications: ['Commercial', 'Industrial', 'Institutional', 'High-risk environments'],
    seo: {
      title: 'Fire Alarm & Detection Systems',
      description:
        'Addressable and conventional fire alarm panels, smoke, heat, flame and gas detectors, manual call points, sounders, beacons and voice evacuation systems for early warning.',
    },
  },
  {
    slug: 'fire-extinguishers',
    icon: 'FireExtinguisher',
    title: 'Fire Extinguishers',
    detailTitle: 'Fire Extinguisher Services',
    summary: 'Supply and maintenance of high-quality fire extinguishers for all types of risks.',
    image: null,
    detail: [
      'We provide complete fire extinguisher solutions including supply, installation, refilling, maintenance and annual servicing of all types of portable and wheeled extinguishers such as ABC Dry Powder, CO₂, Foam, Water, Wet Chemical and Clean Agent extinguishers.',
      'Our team assesses the risk profile of your premises and recommends the right type and capacity of extinguishers as per NBC and IS standards. We ensure proper placement, clear signage, regular inspection, hydrostatic testing and replacement to keep the equipment in perfect working condition.',
      'Our goal is to ensure that the first line of fire defense is always ready, reliable and easy to use during any emergency, providing maximum safety to occupants and property.',
    ],
    highlights: [
      'ABC Dry Powder extinguishers',
      'CO₂ extinguishers',
      'Foam and Water extinguishers',
      'Wet Chemical extinguishers',
      'Clean Agent extinguishers',
      'Refilling, hydrostatic testing and annual servicing',
      'Proper placement and clear signage',
    ],
    standards: ['NBC', 'IS'],
    applications: [],
    seo: {
      title: 'Fire Extinguisher Supply, Refilling & Servicing',
      description:
        'Supply, installation, refilling, hydrostatic testing and annual servicing of ABC Dry Powder, CO₂, Foam, Water, Wet Chemical and Clean Agent fire extinguishers as per NBC and IS.',
    },
  },
  {
    slug: 'fire-doors',
    icon: 'DoorClosed',
    title: 'Fire Doors',
    summary: 'Certified fire doors that prevent the spread of fire and enhance building safety.',
    image: null,
    // TODO: confirm with Sharayu — the profile only has a summary card for Fire Doors (no detailed description).
    detail: ['Certified fire doors that prevent the spread of fire and enhance building safety.'],
    highlights: [],
    standards: [],
    applications: [],
    seo: {
      title: 'Fire Doors',
      description:
        'Certified fire doors that prevent the spread of fire and enhance building safety — supplied by Sharayu Engineering, your complete fire solution partner.',
    },
  },
  {
    slug: 'fire-noc-assistance',
    icon: 'FileCheck2',
    title: 'Fire NOC Assistance',
    detailTitle: 'Fire NOC Services',
    summary: 'End-to-end support for fire NOC approvals and regulatory compliance from authorities.',
    image: null,
    detail: [
      'We assist clients in obtaining Fire NOC from Local Fire Authorities, Municipal Corporations and other statutory bodies. Our services include documentation, drawing preparation, system design review, site inspection coordination, compliance verification and liaison with authorities till final approval.',
      'We ensure that all fire protection systems, equipment and building requirements are in compliance with NBC, State Fire Act and local fire safety regulations. With our expertise and strong coordination, we make the NOC process smooth, transparent and time-efficient, enabling your project or building to operate legally and without any interruption.',
    ],
    highlights: [
      'Documentation',
      'Drawing preparation',
      'System design review',
      'Site inspection coordination',
      'Compliance verification',
      'Liaison with authorities till final approval',
    ],
    standards: ['NBC', 'State Fire Act', 'Local fire safety regulations'],
    applications: [],
    seo: {
      title: 'Fire NOC Assistance',
      description:
        'End-to-end support for Fire NOC from Local Fire Authorities and Municipal Corporations — documentation, drawings, design review, inspection coordination and liaison till final approval.',
    },
  },
  {
    slug: 'design-engineering',
    icon: 'DraftingCompass',
    title: 'Design & Engineering',
    detailTitle: 'Fire Design & Engineering',
    summary:
      'Customized fire protection designs and engineering solutions that ensure safety, efficiency and compliance.',
    image: null,
    detail: [
      'We provide professional fire protection design and engineering services for all types of facilities including industrial, commercial, residential, institutional and high-rise buildings.',
      'Our services include risk assessment, system designing, hydraulic calculations, equipment selection, BOQ preparation, technical specifications and detailed drawing preparation. We design systems such as fire hydrant, sprinkler, foam system, deluge system, fire alarm and detection system as per NBC, IS, NFPA and international standards.',
      'Our engineered solutions ensure optimal performance, safety, compliance and cost efficiency throughout the lifecycle of the project.',
    ],
    highlights: [
      'Risk assessment',
      'System designing',
      'Hydraulic calculations',
      'Equipment selection',
      'BOQ preparation',
      'Technical specifications',
      'Detailed drawing preparation',
    ],
    standards: ['NBC', 'IS', 'NFPA', 'International standards'],
    applications: ['Industrial', 'Commercial', 'Residential', 'Institutional', 'High-rise buildings'],
    seo: {
      title: 'Fire Protection Design & Engineering',
      description:
        'Risk assessment, hydraulic calculations, equipment selection, BOQ, technical specifications and detailed drawings for hydrant, sprinkler, foam, deluge and fire alarm systems.',
    },
  },
]

export const getServiceBySlug = (slug) => services.find((service) => service.slug === slug)
