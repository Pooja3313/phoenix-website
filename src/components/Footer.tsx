import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BrandFacebookIcon,
  BrandInstagramIcon,
  BrandLinkedInIcon,
  BrandTwitterIcon,
} from "@/components/icons/BrandSocialIcons";
import { PHOENIX_LINKEDIN_URL } from "@/constants/social";

const footerNavClass =
  "text-md text-primary-foreground/70 hover:text-primary transition-colors flex items-center gap-2 group";

const PHOENIX_LOGO_SRC = "/images/Phoenix-Finserv.webp";

const Footer = () => {
  const [email, setEmail] = useState("");

  const serviceLinks = [
    { name: "Protection", to: "/protection" },
    { name: "Mortgage", to: "/mortgage" },
    { name: "Commercial Lending", to: "/commercial-lending" },
    { name: "Pensions", to: "/pensions" },
    { name: "Wills & Estate Planning", to: "/wills-estate-planning" },
  ];

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Your Journey", to: "/your-journey" },
    { name: "Join Our Network", to: "/join-our-network" },
    { name: "Careers", to: "/careers" },
    { name: "Contact", to: "/contact" },
    { name: "Refer a Friend", to: "/refer-a-friend" },
    { name: "Newsletter", to: "/newsletter" },
  ];

  const policyLinksInternal = [
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms & Conditions", to: "/terms-and-conditions" },
    { name: "Complaints Procedure", to: "/complaints-procedure" },
    { name: "Fair Treatment of Customers", to: "/fair-treatment" },
    { name: "Financial Ombudsman Service", to: "/financial-ombudsman" },
  ];

  return (
    <footer className="relative overflow-x-clip overflow-y-visible bg-zinc-900 text-primary-foreground">
      {/* Animated top line */}
      <div className="glow-line h-1 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />

      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/3 blur-[80px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 text-primary/[0.03] text-[200px] font-bold animate-pound-rotate select-none pointer-events-none">
        £
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-4">
          {/* Company Info £ column + logo nudge so graphic lines up with paragraph / icons (PNG often has soft left bleed) */}
          <div className="flex min-w-0 flex-col items-start text-left">
            <NavLink
              to="/"
              aria-label="Phoenix Finserv - Home"
              className="mb-4 block w-fit max-w-full self-start rounded-md p-0 hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-phoenix-gray-dark"
            >
              <img
                src={PHOENIX_LOGO_SRC}
                alt="Phoenix Finserv"
                className="block h-16 w-auto max-h-[180px] max-w-[280px] object-contain object-left 
               sm:h-20 sm:max-w-[320px] 
               md:h-24 md:max-w-[380px] 
               -ml-4 sm:-ml-6"
                decoding="async"
                loading="lazy"
              />
            </NavLink>
            <p className="w-full text-md text-primary-foreground/70 leading-relaxed mb-6">
              Trusted financial services providing expert advice in protection,
              mortgages, pensions, and estate planning across the United
              Kingdom.
            </p>
            <div className="flex w-full flex-wrap justify-start gap-3">
              <NavLink
                to={PHOENIX_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Phoenix on LinkedIn"
                className="icon-hover-bounce flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                <BrandLinkedInIcon size={16} aria-hidden />
              </NavLink>
              {(
                [
                  { Icon: BrandFacebookIcon, label: "Facebook" },
                  { Icon: BrandTwitterIcon, label: "Twitter" },
                  { Icon: BrandInstagramIcon, label: "Instagram" },
                ] as const
              ).map(({ Icon, label }) => (
                <NavLink
                  key={label}
                  to="."
                  aria-label={`${label} (link coming soon)`}
                  className="icon-hover-bounce flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground/10 transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  onClick={(e) => e.preventDefault()}
                  onAuxClick={(e) => e.preventDefault()}
                >
                  <Icon size={16} aria-hidden />
                </NavLink>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              <span className="animated-underline services-underline">
                Our Services
              </span>
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={footerNavClass}>
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              <span className="animated-underline quicklinks-underline">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={footerNavClass}>
                    <ArrowRight
                      size={12}
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-primary"
                    />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-5">
              <span className="animated-underline contact-underline">
                Contact Us
              </span>
            </h3>
            <div className="space-y-4 mb-6">
              <NavLink
                to="mailto:dreams@phoenixfinserv.co.uk"
                className="flex items-start gap-3 text-md text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Mail size={16} className="mt-0.5 shrink-0" />
                dreams@phoenixfinserv.co.uk
              </NavLink>
              <NavLink
                to="tel:+442079932737"
                className="flex items-start gap-3 text-md text-primary-foreground/70 hover:text-primary transition-colors"
              >
                <Phone size={16} className="mt-0.5 shrink-0" />
                +44 (0) 2079 932 737
              </NavLink>
              <div className="flex items-start gap-3 text-md text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                21 Heath Drive, Romford, Essex, RM2 5QH
              </div>
            </div>

            <h4 className="font-semibold text-md mb-3">Newsletter</h4>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-primary-foreground/10 rounded-lg text-md text-primary-foreground placeholder:text-primary-foreground/30 border border-primary-foreground/10 focus:border-primary outline-none transition-colors"
              />
              <button className="px-4 py-2 bg-primary rounded-lg text-primary-foreground hover:bg-phoenix-orange-dark transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
        {/* === Regulatory / Disclaimer Section (WealthMax Style - Improved) === */}
        <div className="  p-6 md:p-8 mb-3 mt-0">
          <div className="max-w-6xl mx-auto text-md leading-relaxed tracking-[0.01em] text-primary-foreground/70 space-y-3 text-justify">
            <p>
              Phoenix Advisers is a trading style of
              Phoenix Finserv Limited. Phoenix Financial Advisers
              Limited is authorised and regulated by the Financial Conduct
              Authority, FRN No 766509. Registered company in England & Wales,
              Company No 10501962. (ICO Registration Reference 28925674).
            </p>

            <p>
              Your Insurance policies may lapse if you do not keep up to date
              with regular premium payments and you may not be cover if a claim
              is made.
            </p>

            <p>
              A pension is a long-term investment. The fund value may fluctuate
              and can go down" and "Your eventual income may depend on the size
              of fund when accessed, interest rates and legislation.
            </p>

            <p>
              Your Home may be repossessed if you do not keep up repayment on
              your mortgages.
            </p>

            <p>
              Some Commercial and Buy to Let mortgages are not regulated by the
              Financial Conduct Authority. We are a credit broker, not a lender.
              We work with a panel of providers and lenders; we will typically
              receive commission from lenders. Different lenders pay different
              amounts depending on different commission models. For transparency
              we work with the following commission models: fixed application
              and completion fee and percentage of the amount you borrow and
              rate for risk.
            </p>

            <p>
              Wills & Estate planning services are provided through Wealthmax
              Estate Planning Limited and are not regulated by the Financial
              Conduct Authority.
            </p>
          </div>
        </div>

        {/* Policy Links Bar */}
        <div className="border-t border-primary-foreground/10 pt-2 pb-2">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {policyLinksInternal.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-sm transition-colors ${
                    isActive
                      ? "text-primary"
                      : "text-primary-foreground/70 hover:text-primary"
                  }`
                }
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/70">
            {"\u00A9"} {new Date().getFullYear()} Phoenix Finserv. All rights
            reserved.
          </p>
          <p className="text-xs text-primary-foreground/70">
            Authorised and Regulated by the Financial Conduct Authority
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
