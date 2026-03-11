import { NavLink } from "react-router-dom";
import { Mail, Phone, Linkedin, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import RightSidebar from "./RightSidebar";
import { useState, useRef, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useClickOutside } from "@/hooks/useClickOutside";

const serviceGroups = [
  {
    name: "Protection",
    items: [
      "First Time Buyer Mortgages",
      "Remortgage Advice",
      "Buy to Let Mortgages",
      "Self-Employed Mortgages",
      "Commercial Mortgages",
    ],
  },
  {
    name: "Mortgage",
    items: [
      "First Time Buyer Mortgages",
      "Remortgage Advice",
      "Buy to Let Mortgages",
      "Self-Employed Mortgages",
      "Commercial Mortgages",
    ],
  },
  {
    name: "Commercial Lending",
    items: [
      "Business Loans",
      "Asset Finance",
      "Invoice Finance",
      "Property Development Finance",
      "Bridging Finance",
    ],
  },
  {
    name: "Pensions",
    items: [
      "Personal Pensions",
      "Workplace Pensions",
      "Pension Consolidation",
      "Pension Drawdown",
      "Retirement Planning Review",
    ],
  },
  {
    name: "Wills & Estate Planning",
    items: [
      "Will Writing",
      "Trust Planning",
      "Lasting Power of Attorney",
      "Inheritance Tax Planning",
      "Estate Administration",
    ],
  },
];

const networkDropdown = [
  // { name: "Appointed Representative", href: "/network/appointed-representative" },
  { name: "Self Employed Adviser", href: "/network/self-employed-adviser" },
  { name: "Introducer", href: "/network/introducer" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Your Journey", href: "/your-journey" },
  // { name: "Join Our Network", href: "/join-our-network" },
];

const navLinksAfterServices = [
  { name: "Refer a Friend", href: "/refer-a-friend" },
  { name: "Careers", href: "/careers" },
  { name: "Newsletter", href: "/newsletter" },
];

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 
  const [networkOpen, setNetworkOpen] = useState(false);
 
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);
  const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(null);

  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);

  // Close all dropdowns on route change
  useEffect(() => {
    setServicesOpen(false);
    setNetworkOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileNetworkOpen(false);
    setMobileServiceGroup(null);
  }, [location.pathname]);

  const closeServices = useCallback(() => setServicesOpen(false), []);
  const closeNetwork = useCallback(() => setNetworkOpen(false), []);

  useClickOutside(servicesRef, closeServices);
  useClickOutside(networkRef, closeNetwork);

  return (
    <>
      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        {/* Top Bar */}
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
            <div className="flex items-center gap-6">
              <a
                href="mailto:accountants@phoenix-accountancy.co.uk"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Mail size={14} />
                <span className="hidden sm:inline">
                  accountants@phoenix-accountancy.co.uk
                </span>
              </a>
              <a
                href="tel:+442079932737"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <Phone size={14} />
                <span>+44 (0) 2079 932 737</span>
              </a>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Linkedin size={16} />
            </a>
          </div>
        </div>
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo - left */}
          <NavLink to="/" className="flex items-center shrink-0">
            <img
              src="/images/Phoenix-Finserv.png"
              alt="Phoenix Finserv"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 ml-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            {/* Join Our Network dropdown */}
            <div ref={networkRef} className="relative shrink-0 group">
              <NavLink
                to="/join-our-network"
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
              >
                Join Our Network
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </NavLink>
              <div className="absolute top-full left-0 mt-0 w-64 bg-card rounded-xl shadow-2xl border border-border overflow-hidden z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                {networkDropdown.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className="block px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1"
                  >
                    {item.name}
                  </NavLink>
                ))}
                <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
              </div>
            </div>


            {/* Services mega dropdown (Odoo-style) */}
            <div ref={servicesRef} className="relative">
              <button
                className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                type="button"
                onClick={() => {
                  setServicesOpen((open) => !open);
                  setNetworkOpen(false); // close network dropdown when services opens
                }}
              >
                Services
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-1/2 top-full mt-3 w-[960px] max-w-[calc(100vw-2rem)] -translate-x-1/2 z-50">
                  <div className="rounded-2xl bg-background shadow-2xl border border-border animate-services-dropdown">
                    <div className="grid gap-8 px-10 py-8 sm:grid-cols-2 lg:grid-cols-4">
                      {serviceGroups.map((group, index) => (
                        <div
                          key={group.name}
                          className="text-left animate-service-item"
                          style={{ animationDelay: `${index * 0.08}s` }}
                        >
                          <h3 className="mb-4 pb-2 text-sm font-semibold tracking-wide text-phoenix-green uppercase border-b border-border">
                            {group.name}
                          </h3>
                          <ul className="space-y-2">
                            {group.items.map((item) => (
                              <li key={item}>
                                <a
                                  href="#"
                                  className="block text-sm leading-relaxed text-foreground transition-colors hover:text-primary"
                                >
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {navLinksAfterServices.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <Button className="hidden sm:inline-flex bg-primary hover:bg-phoenix-green text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              Contact Us
            </Button>

            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                </div>
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
                </div>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-in">
            <div className="container mx-auto px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
              {navLinks.concat(navLinksAfterServices).map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2 transition-colors rounded-md hover:bg-primary/5 ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Mobile Network Dropdown */}
              <div>
                <button
                  onClick={() => {
                    setMobileNetworkOpen(!mobileNetworkOpen);
                    setMobileServicesOpen(false); // close services when network opens
                  }}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  Join Our Network
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileNetworkOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileNetworkOpen && (
                  <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1 mt-1">
                    {networkDropdown.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => {
                    setMobileServicesOpen(!mobileServicesOpen);
                    setMobileNetworkOpen(false); // close network when services opens
                  }}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                >
                  Services
                  <ChevronDown size={16} className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileServicesOpen && (
                  <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1 mt-1">
                    {serviceGroups.map((group) => (
                      <div key={group.name}>
                        <button
                          onClick={() =>
                            setMobileServiceGroup(
                              mobileServiceGroup === group.name ? null : group.name
                            )
                          }
                          className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {group.name}
                          <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServiceGroup === group.name ? "rotate-180" : ""}`} />
                        </button>
                        {mobileServiceGroup === group.name && (
                          <div className="ml-4 pl-4 border-l border-border space-y-1">
                            {group.items.map((item) => (
                              <a
                                key={item}
                                href="#"
                                className="block px-4 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                              >
                                {item}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {navLinksAfterServices.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
                      isActive ? "text-primary bg-primary/5" : "text-foreground hover:text-primary"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}
              {/* Mobile Services Dropdown */}
              {/* {serviceGroups.map((group) => (
                <div key={group.name}>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === group.name ? null : group.name,
                      )
                    }
                    className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
                  >
                    {group.name}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${activeDropdown === group.name ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeDropdown === group.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {group.items.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-phoenix-green transition-colors"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))} */}
              <Button className="w-full mt-4 bg-primary hover:bg-phoenix-green text-primary-foreground transition-colors duration-300">
                Contact Us
              </Button>
            </div>
          </div>
        )}


        

        
      </header>
      

      <RightSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
