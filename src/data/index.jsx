import { default as BuildingRectsIcon } from '../assets/svg/common/BuildingRectsIcon';
import { default as HouseCheckIcon } from '../assets/svg/common/HouseCheckIcon';
import { default as HouseVariantIcon } from '../assets/svg/common/HouseVariantIcon';
import { default as WindowGridIcon } from '../assets/svg/common/WindowGridIcon';

export const plans = [
  {
    name: 'Resident',
    description: 'For individual unit management',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Resident Dashboard',
      'Pay Maintenance Online',
      'Community Forum Access',
      'Basic Support'
    ],
    cta: 'Start Free',
    popular: false,
    color: 'slate'
  },
  {
    name: 'Owner',
    description: 'For property owners with multiple tenants',
    price: { monthly: 29, yearly: 290 },
    features: [
      'Import Tracking & CRM',
      'Automated Billing & Invoices',
      'Maintenance Ticket Manager',
      'Basic Analytics Reports',
      'Email & SMS Support'
    ],
    cta: 'Upgrade Now',
    popular: true,
    color: 'indigo'
  },
  {
    name: 'Enterprise',
    description: 'For large-scale societies and builders',
    price: { monthly: 99, yearly: 990 },
    features: [
      'Unlimited Society Units',
      'Advanced Financial Reports',
      'Advanced Payroll Access',
      'Secure API Integrations',
      '24/7 Priority Coverage'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'purple'
  }
];


export const trustedSocieties = [
  {
    name: "Skyline Towers",
    icon: <BuildingRectsIcon />,
  },
  {
    name: "UrbanLoft",
    icon: <HouseCheckIcon />,
  },
  {
    name: "The Gardens",
    icon: <HouseVariantIcon />,
  },
  {
    name: "Vista Heights",
    icon: <WindowGridIcon />,
  },
]