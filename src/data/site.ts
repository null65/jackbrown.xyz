export const site = {
  name: 'Jack Brown',
  url: 'https://jackbrown.xyz',
  email: 'hello@jackbrown.xyz',
  emails: [
    {
      address: 'hello@jackbrown.xyz',
      label: 'General',
    },
    {
      address: 'j.brown@rockwellhitec.co.uk',
      label: 'Rockwell Hitec',
    },
    {
      address: 'jack@radioforus.co.uk',
      label: 'RadioForUs',
    },
  ],
  location: 'UK',
  github: 'https://github.com/null65',
  linkedin: 'https://www.linkedin.com/in/driverjack',
  description:
    'Portfolio of Jack Brown — student based in the UK, building websites and systems.',
};

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'Git',
  'Linux',
  'Python',
  'SQL',
  'PBX',
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  logo?: string;
  logoAlt?: string;
  radio?: boolean;
};

export const projects: Project[] = [
  {
    slug: 'john-kinski',
    title: 'johnkinski.com',
    summary:
      'Website for historic novelist John Kinski, including a custom email address at hello@johnkinski.com.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Email'],
    href: 'https://johnkinski.com',
  },
  {
    slug: 'rockwell-hitec',
    title: 'Rockwell Hitec booking system',
    summary:
      'Custom PHP projector booking system built for Rockwell Hitec to streamline how projectors are booked in.',
    tags: ['PHP', 'SQL'],
    logo: '/rockwell-hitec.png',
    logoAlt: 'Rockwell Hitec',
  },
  {
    slug: 'radioforus',
    title: 'radioforus.co.uk',
    summary:
      'Custom website for the RadioForUs YouTube channel — tools, MultiMode docs, and channel links.',
    tags: ['HTML', 'CSS', 'JavaScript', 'YouTube API'],
    href: 'https://radioforus.co.uk',
    logo: '/radioforus.png',
    logoAlt: 'RadioForUs',
  },
  {
    slug: 'asl3-hub',
    title: 'ASL3 hub',
    summary:
      'AllStarLink hub for RadioForUs node testing and MultiMode linking. Still in use for the network.',
    tags: ['PBX', 'Linux', 'Asterisk'],
    radio: true,
  },
  {
    slug: 'mb7ijb',
    title: 'MB7IJB analogue gateway',
    summary:
      'AllStarLink gateway running a Motorola GM1280 and a Raspberry Pi 4, kindly provided by G7HMV.',
    tags: ['PBX', 'Asterisk', 'Radio', 'Linux'],
    radio: true,
  },
];

export const friends = [
  {
    name: 'RadioForUs',
    href: 'https://radioforus.co.uk',
    note: 'Amateur radio YouTube channel & MultiMode hub',
    logo: '/radioforus.png',
  },
  {
    name: 'John Kinski',
    href: 'https://johnkinski.com',
    note: 'Novelist & historian',
    logo: '/johnkinski.svg',
  },
  {
    name: 'Rockwell Hitec',
    href: 'https://www.rockwellhitec.co.uk',
    note: 'Photographic & projection equipment',
    logo: '/rockwell-hitec.png',
  },
];
