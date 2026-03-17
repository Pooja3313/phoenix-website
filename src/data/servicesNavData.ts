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
      href: `/services/protection/${s.slug}`,
    })),
  },
  {
    title: "Business Protection",
    items: businessProtectionServices.map((s) => ({
      name: s.title,
      href: `/services/protection/${s.slug}`,
    })),
  },
  {
    title: "Home Insurance",
    items: homeInsuranceServices.map((s) => ({
      name: s.title,
      href: `/services/protection/${s.slug}`,
    })),
  },
];

const mortgageColumn: NavColumn[] = [
  {
    title: "Mortgage Services",
    items: [
      { name: "Mortgage Calculators", href: "/services/mortgage/calculator" },
      ...mortgageServices.map((s) => ({
        name: s.title,
        href: `/services/mortgage/${s.slug}`,
      })),
    ],
  },
];

const commercialLendingColumn: NavColumn[] = [
  {
    title: "Commercial Lending",
    items: commercialLendingServices.map((s) => ({
      name: s.title,
      href: `/services/commercial-lending/${s.slug}`,
    })),
  },
];

const pensionsColumn: NavColumn[] = [
  {
    title: "Pensions",
    items: [
      { name: "State Pension", href: "/services/pensions" },
      { name: "Defined Benefits Pensions", href: "/services/pensions" },
      { name: "Private Pensions", href: "/services/pensions" },
      { name: "Pension Drawdown", href: "/services/pensions" },
    ],
  },
];

const willsColumn: NavColumn[] = [
  {
    title: "Wills & Estate Planning",
    items: [
      { name: "Will Writing", href: "/services/wills-estate-planning" },
      { name: "Inheritance Tax Planning", href: "/services/wills-estate-planning" },
      { name: "Trust Planning", href: "/services/wills-estate-planning" },
      { name: "Lasting Power of Attorney", href: "/services/wills-estate-planning" },
    ],
  },
];

export const serviceGroupsNav: ServiceGroupNav[] = [
  {
    name: "Protection",
    href: "/services/protection",
    columns: protectionColumns,
  },
  {
    name: "Mortgage",
    href: "/services/mortgage",
    columns: mortgageColumn,
  },
  {
    name: "Commercial Lending",
    href: "/services/commercial-lending",
    columns: commercialLendingColumn,
  },
  {
    name: "Pensions",
    href: "/services/pensions",
    columns: pensionsColumn,
  },
  {
    name: "Wills & Estate Planning",
    href: "/services/wills-estate-planning",
    columns: willsColumn,
  },
];
