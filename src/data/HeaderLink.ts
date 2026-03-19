export interface ServiceItem {
  name: string;
  href: string;
}

export interface ServiceColumn {
  title: string;
  items: ServiceItem[];
}

export interface ServiceGroup {
  name: string;
  href: string;
  columns: ServiceColumn[];
}

import { mortgageServices } from "./mortgageData";
import { commercialLendingServices } from "./commercialLendingData";

export const serviceGroupsNav: ServiceGroup[] = [
  {
    name: "Protection",
    href: "/protection",
    columns: [
      {
        title: "Personal Protection",
        items: [
          { name: "Life Cover", href: "/protection/life-cover" },
          { name: "Critical Illness", href: "/protection/critical-illness" },
          { name: "Income Protection", href: "/protection/income-protection" }
          
        ],
      },
      // {
      //   title: "Business Protection",
      //   items: [
      //     { name: "Key Person Cover", href: "/services/protection/key-person" },
      //     { name: "Shareholder Protection", href: "/services/protection/shareholder" },
      //     { name: "Relevant Life Cover", href: "/services/protection/relevant-life" },
      //   ],
      // },
         {
        title: "Business Protection",
        items: [
          { name: "Keyman Cover", href: "/protection/keyman-cover" },
          { name: "Shareholder Protection", href: "/protection/shareholder-protection" },
          { name: "Relevant Life Cover", href: "/protection/relevant-life-cover" },
          { name: "Business Loan Protection", href: "/protection/business-loan-protection"},
          
        ],
      },
     
      //  {
      //   title: "Home Insurance",
      //   items: [
      //     { name: "Buildings & Contents", href: "/services/protection/buildings-contents" },
         
      //   ],
      // },
       {
        title: "Home Insurance",
        items: [
          { name: "Buildings & Contents", href: "/protection/buildings-and-contents" },
         
        ],
      },
    ],
  },
  {
    name: "Mortgage",
    href: "/mortgage",
    columns: [
      {
        title: "Mortgage Services",
        items: [
          { name: "Mortgage Calculator", href: "/mortgage/calculator" },
          ...mortgageServices.map((s) => ({
            name: s.title,
            href: `/mortgage/${s.slug}`,
          })),
        ],
      },
    ],
  },
  {
    name: "Commercial Lending",
    href: "/commercial-lending",
    columns: [
      {
        title: "Commercial Services",
        items: commercialLendingServices.map((s) => ({
          name: s.title,
          href: `/commercial-lending/${s.slug}`,
        })),
      },
    ],
  },
  {
    name: "Pensions",
    href: "/pensions",
    columns: [],
  },
  {
    name: "Wills & Estate Planning",
    href: "/wills-estate-planning",
    columns: [
      {
        title: "Estate Services",
        items: [
          { name: "Will Writing", href: "/wills-estate-planning/will-writing" },
          { name: "Trust Planning", href: "/wills-estate-planning/trust-planning" },
          {
            name: "Lasting Power of Attorney",
            href: "/wills-estate-planning/power-of-attorney",
          },
          {
            name: "Inheritance Tax Planning",
            href: "/wills-estate-planning/inheritance-tax-planning",
          },
        ],
      },
    ],
  },
];

export const networkDropdown = [
  { name: "Self Employed Adviser", href: "/network/self-employed-adviser" },
  { name: "Introducer", href: "/network/introducer" },
];

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Your Journey", href: "/your-journey" },
];

export const navLinksAfterServices = [
  { name: "Refer a Friend", href: "/refer-a-friend" },
  { name: "Careers", href: "/careers" },
];
