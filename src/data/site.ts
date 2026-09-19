/**
 * Site constants and Brand-faithful copy fragments.
 * Page bodies follow website/public-copy-v1.1.md. Do not invent claims here.
 */

export const companyName = 'Vogon Partners OÜ';
export const ownerName = 'Joel Azemar';
export const email = 'joel@vogonpartners.com';
export const mailto = `mailto:${email}`;

export const subjects = {
  smartEnvironment: 'Smart environment: discovery',
  aiOps: 'AI-ops: discovery',
  showroom: 'Showroom',
  compliance: 'Compliance: coming soon',
} as const;

export function mailtoWithSubject(subject: string): string {
  return `${mailto}?subject=${encodeURIComponent(subject)}`;
}

/** Allowed external URLs from the Brand handoff. Do not add others. */
export const links = {
  tripGithub: 'https://github.com/joel/trip',
  moveGithub: 'https://github.com/joel/move',
  moveLive: 'https://move-easy.org',
  zhaDeviceHandler: 'https://github.com/zigpy/zha-device-handlers/pull/5258',
  starlinkStack: 'https://github.com/joel/starlink-monitoring-stack',
  haForumFieldNotes:
    'https://community.home-assistant.io/t/sonoff-mini-zbrbs-e-zigbee-roller-shutter-wall-switch-field-notes-rocker-quirks-calibration-and-traps/1022123',
  internetPi: 'https://github.com/geerlingguy/internet-pi/pull/665',
} as const;

export const primaryNav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/showroom', label: 'Showroom' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerNav = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/showroom', label: 'Showroom' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
] as const;

export const siteTitle = companyName;

export function pageTitle(page: string): string {
  return `${page} · ${companyName}`;
}
