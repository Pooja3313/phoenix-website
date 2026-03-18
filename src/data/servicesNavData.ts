/**
 * Services navigation data for header dropdown.
 * Protection has 3 columns: Personal Protection, Business Protection, Home Insurance.
 * Other services have one column each with main page link and sub-service links (slugs).
 */

import {
  personalProtectionServices,
  businessProtectionServices,
  homeInsuranceServices,
} from "./protectionData";
import { mortgageServices } from "./mortgageData";
import { commercialLendingServices } from "./commercialLendingData";

export interface NavServiceItem {
  name: string;
  href: string;
}

export interface NavColumn {
  title: string;
  items: NavServiceItem[];
}

export interface ServiceGroupNav {
  name: string;
  href: string;
  /** If set, render as multiple columns (e.g. Protection: Personal, Business, Home). Otherwise single column. */
  columns: NavColumn[];
}

const protectionColumns: NavColumn[] = [
  {
    title: "Personal Protection",
    items: personalProtectionServices.map((s) => ({
      name: s.title,
      href: `protection/${s.slug}`,
    })),
  },
  {
    title: "Business Protection",
    items: businessProtectionServices.map((s) => ({
      name: s.title,
      href: `protection/${s.slug}`,
    })),
  },
  {
    title: "Home Insurance",
    items: homeInsuranceServices.map((s) => ({
      name: s.title,
      href: `protection/${s.slug}`,
    })),
  },
];

const mortgageColumn: NavColumn[] = [
  {
    title: "Mortgage Services",
    items: [
      { name: "Mortgage Calculators", href: "/mortgage/calculator" },
      ...mortgageServices.map((s) => ({
        name: s.title,
        href: `/mortgage/${s.slug}`,
      })),
    ],
  },
];

const commercialLendingColumn: NavColumn[] = [
  {
    title: "Commercial Lending",
    items: commercialLendingServices.map((s) => ({
      name: s.title,
      href: `/commercial-lending/${s.slug}`,
    })),
  },
];

const pensionsColumn: NavColumn[] = [
  {
    title: "Pensions",
    items: [
      { name: "State Pension", href: "/pensions" },
      { name: "Defined Benefits Pensions", href: "/pensions" },
      { name: "Private Pensions", href: "/pensions" },
      { name: "Pension Drawdown", href: "/pensions" },
    ],
  },
];

const willsColumn: NavColumn[] = [
  {
    title: "Wills & Estate Planning",
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
];

export const serviceGroupsNav: ServiceGroupNav[] = [
  {
    name: "Protection",
    href: "/protection",
    columns: protectionColumns,
  },
  {
    name: "Mortgage",
    href: "/mortgage",
    columns: mortgageColumn,
  },
  {
    name: "Commercial Lending",
    href: "/commercial-lending",
    columns: commercialLendingColumn,
  },
  {
    name: "Pensions",
    href: "/pensions",
    columns: pensionsColumn,
  },
  {
    name: "Wills & Estate Planning",
    href: "/wills-estate-planning",
    columns: willsColumn,
  },
];
