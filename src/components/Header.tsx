// import { NavLink } from "react-router-dom";
// import { Mail, Phone, Linkedin, ChevronDown, Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import RightSidebar from "./RightSidebar";
// import { useState, useRef, useEffect, useCallback } from "react";
// import { useLocation } from "react-router-dom";
// import { useClickOutside } from "@/hooks/useClickOutside";

// import { serviceGroupsNav } from "@/data/servicesNavData";

// const networkDropdown = [
//   // { name: "Appointed Representative", href: "/network/appointed-representative" },
//   { name: "Self Employed Adviser", href: "/network/self-employed-adviser" },
//   { name: "Introducer", href: "/network/introducer" },
// ];

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Your Journey", href: "/your-journey" },
//   // { name: "Join Our Network", href: "/join-our-network" },
// ];

// const navLinksAfterServices = [
//   { name: "Refer a Friend", href: "/refer-a-friend" },
//   { name: "Careers", href: "/careers" },
//   { name: "Newsletter", href: "/newsletter" },
// ];

// const Header = () => {
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const [networkOpen, setNetworkOpen] = useState(false);

//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
//   const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);
//   const [mobileServiceGroup, setMobileServiceGroup] = useState<string | null>(
//     null,
//   );

//   const location = useLocation();
//   const servicesRef = useRef<HTMLDivElement>(null);
//   const networkRef = useRef<HTMLDivElement>(null);

//   // Close all dropdowns on route change
//   useEffect(() => {
//     setServicesOpen(false);
//     setNetworkOpen(false);
//     setMobileMenuOpen(false);
//     setMobileServicesOpen(false);
//     setMobileNetworkOpen(false);
//     setMobileServiceGroup(null);
//   }, [location.pathname]);

//   const closeServices = useCallback(() => setServicesOpen(false), []);
//   const closeNetwork = useCallback(() => setNetworkOpen(false), []);

//   useClickOutside(servicesRef, closeServices);
//   useClickOutside(networkRef, closeNetwork);

//   return (
//     <>
//       {/* Main Navigation */}
//       <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
//         {/* Top Bar */}
//         <div className="bg-primary text-primary-foreground">
//           <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
//             <div className="flex items-center gap-6">
//               <a
//                 href="mailto:accountants@phoenix-accountancy.co.uk"
//                 className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//               >
//                 <Mail size={14} />
//                 <span className="hidden sm:inline">
//                   accountants@phoenix-accountancy.co.uk
//                 </span>
//               </a>
//               <a
//                 href="tel:+442079932737"
//                 className="flex items-center gap-2 hover:opacity-80 transition-opacity"
//               >
//                 <Phone size={14} />
//                 <span>+44 (0) 2079 932 737</span>
//               </a>
//             </div>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:opacity-80 transition-opacity"
//             >
//               <Linkedin size={16} />
//             </a>
//           </div>
//         </div>
//         <div className="container mx-auto flex items-center justify-between px-4 py-3">
//           {/* Logo - left */}
//           <NavLink to="/" className="flex items-center shrink-0">
//             <img
//               src="/images/Phoenix-Finserv.png"
//               alt="Phoenix Finserv"
//               className="h-14 sm:h-16 w-auto object-contain"
//             />
//           </NavLink>

//           {/* Desktop Nav */}
//           <nav className="hidden lg:flex items-center gap-2 ml-10">
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.href}
//                 className={({ isActive }) =>
//                   `px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
//                     isActive
//                       ? "text-primary"
//                       : "text-foreground hover:text-primary"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//             {/* Join Our Network dropdown */}
//             <div ref={networkRef} className="relative shrink-0 group">
//               <NavLink
//                 to="/join-our-network"
//                 className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5 whitespace-nowrap"
//               >
//                 Join Our Network
//                 <ChevronDown
//                   size={14}
//                   className="transition-transform duration-200 group-hover:rotate-180"
//                 />
//               </NavLink>
//               <div className="absolute top-full left-0 mt-0 w-64 bg-card rounded-xl shadow-2xl border border-border overflow-hidden z-[60] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
//                 {networkDropdown.map((item) => (
//                   <NavLink
//                     key={item.name}
//                     to={item.href}
//                     className="block px-5 py-3 text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-200 hover:translate-x-1"
//                   >
//                     {item.name}
//                   </NavLink>
//                 ))}
//                 <div className="h-0.5 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
//               </div>
//             </div>

//             {/* Services mega dropdown (Odoo-style) */}
//             <div ref={servicesRef} className="relative">
//               <button
//                 className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
//                 type="button"
//                 onClick={() => {
//                   setServicesOpen((open) => !open);
//                   setNetworkOpen(false); // close network dropdown when services opens
//                 }}
//               >
//                 Services
//                 <ChevronDown
//                   size={14}
//                   className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
//                 />
//               </button>

//               {servicesOpen && (
//                 <div className="absolute left-1/2 top-full mt-3 mb-8 w-[1100px] max-w-[calc(100vw-2rem)] -translate-x-1/2 z-50">
//                   <div className="rounded-xl bg-background shadow-xl border border-border animate-services-dropdown overflow-hidden">
//                     <div className="grid grid-cols-2 lg:grid-cols-5 gap-0 w-full">
//                       {serviceGroupsNav.map((group, index) => (
//                         <div
//                           key={group.name}
//                           className="p-6 text-left animate-service-item border-r border-border last:border-r-0"
//                           style={{ animationDelay: `${index * 0.05}s` }}
//                         >
//                           <h3 className="mb-4 pb-2 text-sm font-semibold tracking-wide text-phoenix-green uppercase border-b border-border">
//                             <NavLink
//                               to={group.href}
//                               className="hover:text-primary transition-colors"
//                               onClick={() => setServicesOpen(false)}
//                             >
//                               {group.name}
//                             </NavLink>
//                           </h3>
//                           {group.name === "Protection" ? (
//                             <>
//                               {group.columns.map((col) => (
//                                 <div key={col.title} className="mb-5 last:mb-0">
//                                   <p className="mb-2 text-xs font-semibold tracking-wide text-phoenix-green uppercase">
//                                     {col.title}
//                                   </p>
//                                   <ul className="space-y-1.5">
//                                     {col.items.map((item) => (
//                                       <li key={item.href}>
//                                         <NavLink
//                                           to={item.href}
//                                           className="block text-sm text-muted-foreground hover:text-primary transition-colors"
//                                           onClick={() => setServicesOpen(false)}
//                                         >
//                                           {item.name}
//                                         </NavLink>
//                                       </li>
//                                     ))}
//                                   </ul>
//                                 </div>
//                               ))}
//                             </>
//                           ) : (
//                             <ul className="space-y-2">
//                               {group.columns[0]?.items.map((item) => (
//                                 <li key={item.href}>
//                                   <NavLink
//                                     to={item.href}
//                                     className="block text-sm text-muted-foreground hover:text-primary transition-colors"
//                                     onClick={() => setServicesOpen(false)}
//                                   >
//                                     {item.name}
//                                   </NavLink>
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                     <div className="h-6 bg-transparent" aria-hidden />
//                   </div>
//                 </div>
//               )}
//             </div>

//             {navLinksAfterServices.map((link) => (
//               <NavLink
//                 key={link.name}
//                 to={link.href}
//                 className={({ isActive }) =>
//                   `px-4 py-2 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
//                     isActive
//                       ? "text-primary"
//                       : "text-foreground hover:text-primary"
//                   }`
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-3">
//             <NavLink
//               to="/contact"
//               className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-phoenix-orange-dark text-primary-foreground text-[13px] font-semibold py-2 px-4 rounded-md shadow-lg hover:shadow-xl transition-all shrink-0"
//             >
//               Contact Us
//             </NavLink>

//             <button
//               onClick={() => setSidebarOpen(true)}
//               className="p-2 hover:bg-muted rounded-md transition-colors"
//               aria-label="Open menu"
//             >
//               <div className="flex flex-col gap-1">
//                 <div className="flex gap-1">
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                 </div>
//                 <div className="flex gap-1">
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                 </div>
//                 <div className="flex gap-1">
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                   <span className="w-1.5 h-1.5 rounded-full bg-foreground"></span>
//                 </div>
//               </div>
//             </button>

//             {/* Mobile Menu Toggle */}
//             <button
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="lg:hidden p-2 hover:bg-muted rounded-md transition-colors"
//             >
//               {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden border-t border-border bg-background animate-fade-in">
//             <div className="container mx-auto px-4 py-4 space-y-2 max-h-[70vh] overflow-y-auto">
//               {navLinks.concat(navLinksAfterServices).map((link) => (
//                 <NavLink
//                   key={link.name}
//                   to={link.href}
//                   className={({ isActive }) =>
//                     `block px-4 py-2 transition-colors rounded-md hover:bg-primary/5 ${
//                       isActive
//                         ? "text-primary"
//                         : "text-foreground hover:text-primary"
//                     }`
//                   }
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}

//               {/* Mobile Network Dropdown */}
//               <div>
//                 <button
//                   onClick={() => {
//                     setMobileNetworkOpen(!mobileNetworkOpen);
//                     setMobileServicesOpen(false); // close services when network opens
//                   }}
//                   className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
//                 >
//                   Join Our Network
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-200 ${mobileNetworkOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {mobileNetworkOpen && (
//                   <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1 mt-1">
//                     {networkDropdown.map((item) => (
//                       <NavLink
//                         key={item.name}
//                         to={item.href}
//                         className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               <div>
//                 <button
//                   onClick={() => {
//                     setMobileServicesOpen(!mobileServicesOpen);
//                     setMobileNetworkOpen(false); // close network when services opens
//                   }}
//                   className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
//                 >
//                   Services
//                   <ChevronDown
//                     size={16}
//                     className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
//                   />
//                 </button>
//                 {mobileServicesOpen && (
//                   <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1 mt-1">
//                     {serviceGroupsNav.map((group) => (
//                       <div key={group.name}>
//                         <button
//                           onClick={() =>
//                             setMobileServiceGroup(
//                               mobileServiceGroup === group.name
//                                 ? null
//                                 : group.name,
//                             )
//                           }
//                           className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
//                         >
//                           {group.name}
//                           <ChevronDown
//                             size={14}
//                             className={`transition-transform duration-200 ${mobileServiceGroup === group.name ? "rotate-180" : ""}`}
//                           />
//                         </button>
//                         {mobileServiceGroup === group.name && (
//                           <div className="ml-4 pl-4 border-l border-border space-y-1">
//                             {group.columns.flatMap((col) =>
//                               col.items.map((item) => (
//                                 <NavLink
//                                   key={item.href}
//                                   to={item.href}
//                                   className="block px-4 py-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
//                                   onClick={() => setMobileMenuOpen(false)}
//                                 >
//                                   {item.name}
//                                 </NavLink>
//                               ))
//                             )}
//                           </div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {navLinksAfterServices.map((link) => (
//                 <NavLink
//                   key={link.name}
//                   to={link.href}
//                   className={({ isActive }) =>
//                     `block px-4 py-2.5 text-sm font-medium transition-colors rounded-md hover:bg-primary/5 ${
//                       isActive
//                         ? "text-primary bg-primary/5"
//                         : "text-foreground hover:text-primary"
//                     }`
//                   }
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//               {/* Mobile Services Dropdown */}
//               {/* {serviceGroups.map((group) => (
//                 <div key={group.name}>
//                   <button
//                     onClick={() =>
//                       setActiveDropdown(
//                         activeDropdown === group.name ? null : group.name,
//                       )
//                     }
//                     className="flex items-center justify-between w-full px-4 py-2 text-foreground hover:text-primary transition-colors rounded-md hover:bg-primary/5"
//                   >
//                     {group.name}
//                     <ChevronDown
//                       size={14}
//                       className={`transition-transform ${activeDropdown === group.name ? "rotate-180" : ""}`}
//                     />
//                   </button>
//                   {activeDropdown === group.name && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {group.items.map((item) => (
//                         <a
//                           key={item}
//                           href="#"
//                           className="block px-4 py-2 text-sm text-muted-foreground hover:text-phoenix-green transition-colors"
//                         >
//                           {item}
//                         </a>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))} */}
//               <Button className="w-full mt-4 bg-primary hover:bg-phoenix-green text-primary-foreground transition-colors duration-300">
//                 Contact Us
//               </Button>
//             </div>
//           </div>
//         )}
//       </header>

//       <RightSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
//     </>
//   );
// };

// export default Header;







import { NavLink } from "react-router-dom";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import { BrandLinkedInIcon } from "@/components/icons/BrandSocialIcons";
import { PHOENIX_LINKEDIN_URL } from "@/constants/social";
import { Button } from "@/components/ui/button";
import RightSidebar from "./RightSidebar";
import { useState, useRef, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useClickOutside } from "@/hooks/useClickOutside";
import { serviceGroupsNav, networkDropdown, navLinks, navLinksAfterServices } from "@/data/HeaderLink";

const Header = () => {
  const [openServiceBar, setOpenServiceBar] = useState<string | null>(null);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);

  const location = useLocation();
  const path = location.pathname;
  const networkRef = useRef<HTMLDivElement>(null);
  const orangeBarRef = useRef<HTMLDivElement>(null);

  /** Hover-open for service dropdowns only at lg+; sm/md use chevron / click-outside (avoids gap + touch issues). */
  const [serviceHoverEnabled, setServiceHoverEnabled] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const sync = () => setServiceHoverEnabled(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  useEffect(() => {

    // Desktop services: keep relevant dropdown open on its own pages
    const activeService = serviceGroupsNav.find((group) =>
      path.startsWith(group.href),
    );
    setOpenServiceBar(activeService ? activeService.name : null);

    // Join Our Network: keep dropdown open on its own routes
    const isNetworkRoute =
      path.startsWith("/join-our-network") || path.startsWith("/network/");
    setNetworkOpen(isNetworkRoute);

    setMobileMenuOpen(false);
  }, [path]);

  /** Collapse service / network accordions whenever the drawer closes so reopening shows closed panels (active = orange text only). */
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileExpanded(null);
      setMobileNetworkOpen(false);
    }
  }, [mobileMenuOpen]);

  const closeOrangeBar = useCallback(() => setOpenServiceBar(null), []);
  const closeNetwork = useCallback(() => setNetworkOpen(false), []);
  useClickOutside(orangeBarRef, closeOrangeBar);
  useClickOutside(networkRef, closeNetwork);

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-background shadow-sm">
        {/* xs,sm: column = upar puri gray line (email,phone,IN) | niche logo + icons. md+: row = logo | gray curve + nav */}
        <div className="w-full flex flex-col md:flex-row border-b border-phoenix-gray-light/50 min-h-0">
          {/* xs,sm only: gray line. xs = email/phone icons ke beech space (1st image jaisa); sm = thoda left margin, zyada nahi */}
          <div className="header-top-bar relative bg-gray-300 text-phoenix-gray flex items-center h-9 sm:h-8 flex-shrink-0 border-b border-phoenix-gray/10 pl-5 sm:pl-4 pr-2 sm:pr-4 min-h-[2.25rem] md:hidden w-full">
            <div className="flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm w-full min-w-0">
              <div className="flex items-center gap-5 sm:gap-3 min-w-0 shrink">
                <NavLink
                  to="mailto:accountants@phoenix-accountancy.co.uk"
                  className="flex items-center gap-1 sm:gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
                  aria-label="Email"
                >
                  <Mail size={12} className="shrink-0" />
                  <span className="hidden sm:inline truncate sm:whitespace-normal">accountants@phoenix-accountancy.co.uk</span>
                </NavLink>
                <NavLink
                  to="tel:+442079932737"
                  className="flex items-center gap-1 sm:gap-1.5 hover:text-phoenix-orange transition-colors shrink-0 whitespace-nowrap"
                >
                  <Phone size={12} className="shrink-0" />
                  <span>+44 (0) 2079 932 737</span>
                </NavLink>
              </div>
              <NavLink
                to={PHOENIX_LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-phoenix-orange transition-colors shrink-0"
                aria-label="LinkedIn"
              >
                <BrandLinkedInIcon size={16} aria-hidden />
              </NavLink>
            </div>
          </div>

          {/* md+: logo left (desktop) | right column. xs,sm: niche row = logo left + icons right */}
          <div className="w-full flex flex-1 min-w-0">
            {/* Logo: lg = desktop; xs,sm,md = niche line pe left */}
            <div className="pl-4 sm:pl-6 lg:pl-8 shrink-0 flex items-stretch">
              <NavLink
                to="/"
                className="hidden lg:flex items-center pr-4 self-stretch"
                aria-label="Phoenix Finserv - Home"
              >
                <img
                  src="/images/Phoenix-Finserv.png"
                  alt="Phoenix Finserv"
                  className="h-full w-auto max-h-[80px] min-h-[56px] object-contain object-left"
                />
              </NavLink>
              <NavLink to="/" className="flex lg:hidden items-center pr-3">
                <img src="/images/Phoenix-Finserv.png" alt="Phoenix Finserv" className="h-12 sm:h-14 w-auto object-contain object-left" />
              </NavLink>
            </div>

            {/* Right column: md+ = gray bar (curve) + nav row; xs,sm = sirf nav row (logo upar wali line ke niche) */}
            <div className="flex-1 flex flex-col min-w-0 lg:min-h-[72px]">
              {/* md+ only: gray line with curve */}
              <div className="header-top-bar relative bg-phoenix-gray-light text-phoenix-gray hidden md:flex items-center justify-end h-8 flex-shrink-0 border-b border-phoenix-gray/10 pr-4 sm:pr-6 lg:pr-8">
                <div className="flex items-center justify-end gap-3 sm:gap-4 lg:gap-5 text-xs sm:text-sm pl-4 w-full">
                  <NavLink
                    to="mailto:accountants@phoenix-accountancy.co.uk"
                    className="flex items-center gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
                  >
                    <Mail size={12} className="shrink-0" />
                    <span>accountants@phoenix-accountancy.co.uk</span>
                  </NavLink>
                  <NavLink
                    to="tel:+442079932737"
                    className="flex items-center gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
                  >
                    <Phone size={12} className="shrink-0" />
                    <span>+44 (0) 2079 932 737</span>
                  </NavLink>
                  <NavLink
                    to={PHOENIX_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-phoenix-orange transition-colors shrink-0"
                    aria-label="LinkedIn"
                  >
                    <BrandLinkedInIcon size={16} aria-hidden />
                  </NavLink>
                </div>
              </div>

              {/* Nav row: proper height, width, space for Home About etc */}
              <div className="flex items-center justify-between gap-3 py-2.5 lg:py-3 flex-shrink-0 min-h-[44px] pr-4 sm:pr-6 lg:pr-8">
              <nav className="hidden lg:flex items-center gap-3 xl:gap-4 min-w-0 flex-1 justify-end pr-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `px-3 xl:px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive ? "text-phoenix-orange" : "text-phoenix-gray hover:text-phoenix-orange"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div
                  ref={networkRef}
                  className="relative"
                  onMouseEnter={() => setNetworkOpen(true)}
                  onMouseLeave={() => setNetworkOpen(false)}
                >
                  <div
                    className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                      networkOpen || path.startsWith("/join-our-network") || path.startsWith("/network/")
                        ? "bg-white text-phoenix-orange shadow-sm rounded-md"
                        : "text-phoenix-gray hover:text-phoenix-orange"
                    }`}
                  >
                    <NavLink
                      to="/join-our-network"
                      className="inline-flex items-center"
                      onClick={() => setNetworkOpen(true)}
                    >
                      Join Our Network
                    </NavLink>
                    <button
                      type="button"
                      className="shrink-0 flex items-center justify-center"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setNetworkOpen((open) => !open);
                      }}
                      aria-label="Toggle Join Our Network options"
                    >
                      <ChevronDown size={14} className={`transition-transform ${networkOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {networkOpen && (
                    <div className="absolute top-full left-0 mt-1 bg-background border border-phoenix-gray-light/50 rounded-xl shadow-xl py-2 min-w-[200px] z-[100] animate-dropdown-from-top overflow-hidden">
                      {networkDropdown.map((item) => {
                        const isItemActive = path === item.href || path.startsWith(item.href + "/");
                        return (
                          <NavLink
                            key={item.href}
                            to={item.href}
                            className={`block px-4 py-2.5 text-sm rounded-md mx-1 transition-all duration-200 ${
                              isItemActive
                                ? "bg-phoenix-green-light/50 text-phoenix-orange font-semibold"
                                : "text-foreground hover:bg-phoenix-green-light/50 hover:text-phoenix-orange"
                            }`}
                            onClick={() => setNetworkOpen(false)}
                          >
                            {item.name}
                          </NavLink>
                        );
                      })}
                      <div className="h-1 w-full rounded-b-xl bg-gradient-to-r from-phoenix-green via-phoenix-orange to-phoenix-green mt-1" />
                    </div>
                  )}
                </div>
                {navLinksAfterServices.map((link) => (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `px-3 xl:px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive ? "text-phoenix-orange" : "text-phoenix-gray hover:text-phoenix-orange"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              {/* xs,sm,md: 3-line hamburger sab right side; lg: Contact Us + grid + border */}
              <div className="flex items-center justify-end gap-2 shrink-0 ml-auto lg:ml-0 lg:border-l lg:border-phoenix-gray-light/60 lg:pl-4">
                <NavLink
                  to="/contact"
                  className="hidden sm:inline-flex items-center justify-center bg-phoenix-orange hover:bg-phoenix-orange-dark text-white text-sm font-semibold py-2 px-4 rounded-md transition-all shrink-0"
                >
                  Contact Us
                </NavLink>
                <button onClick={() => setSidebarOpen(true)} className="p-1.5 hover:bg-muted rounded-md transition-colors" aria-label="Open menu">
                  <div className="flex flex-col gap-0.5">
                    {[0, 1, 2].map((r) => (
                      <div key={r} className="flex gap-0.5">
                        {[0, 1, 2].map((c) => (
                          <span key={c} className="w-1 h-1 rounded-full bg-foreground" />
                        ))}
                      </div>
                    ))}
                  </div>
                </button>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-1.5 hover:bg-muted rounded-md transition-colors order-last" aria-label="Menu">
                  {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Five services orange bar: md+ only (xs and sm use hamburger) */}
        <div
          ref={orangeBarRef}
          className="relative overflow-visible bg-phoenix-green-light/25 py-1.5 lg:py-2 hidden md:block"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex justify-center">
            <div className="relative flex items-center justify-center w-full">
              <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-2.5 w-full sm:w-fit max-w-full rounded-xl sm:rounded-2xl bg-phoenix-orange px-2 py-1 sm:px-4 sm:py-1.5 lg:px-5 shadow-md ring-1 ring-black/5 mx-auto">
                {serviceGroupsNav.map((group) => {
                  const hasDropdown = group.columns.some(
                    (col) => col.items.length > 0,
                  );
                  const isGroupActive =
                    path === group.href ||
                    path.startsWith(group.href + "/") ||
                    group.columns.some((col) =>
                      col.items.some(
                        (item) =>
                          path === item.href ||
                          path.startsWith(item.href + "/"),
                      ),
                    );
                  const isOpen = openServiceBar === group.name;
                  return (
                  <div
                    key={group.name}
                    className="relative overflow-visible"
                    onMouseEnter={() =>
                      serviceHoverEnabled &&
                      hasDropdown &&
                      setOpenServiceBar(group.name)
                    }
                    onMouseLeave={() =>
                      serviceHoverEnabled && hasDropdown && setOpenServiceBar(null)
                    }
                  >
                    <div
                      className={`min-w-0 sm:min-w-[5rem] lg:min-w-[5.5rem] px-1.5 sm:px-2.5 lg:px-3 py-1 text-[11px] sm:text-xs lg:text-[13px] font-semibold rounded-md sm:rounded-lg transition-all flex items-center justify-center gap-0.5 sm:gap-1 ${
                        isGroupActive || isOpen
                          ? "bg-white text-phoenix-orange shadow-sm"
                          : "text-white hover:bg-white/15"
                      }`}
                    >
                      <NavLink
                        to={group.href}
                        className="inline-flex items-center"
                        onClick={() => setOpenServiceBar(group.name)}
                      >
                        {group.name}
                      </NavLink>
                      {hasDropdown && (
                        <button
                          type="button"
                          className="shrink-0 flex items-center justify-center"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenServiceBar(
                              openServiceBar === group.name ? null : group.name,
                            );
                          }}
                          aria-label={`${group.name} services`}
                        >
                          <ChevronDown
                            size={12}
                            className={`shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>
                    {hasDropdown && isOpen && (
                      <div className="absolute left-0 top-full z-[100] pt-1 sm:min-w-[220px] max-w-[min(100vw-1rem,280px)]">
                        <div className="bg-background border border-phoenix-gray-light/50 rounded-xl shadow-xl py-2 min-w-[220px] max-h-[70vh] flex flex-col animate-dropdown-from-top origin-top">
                        <div className="py-1 overflow-y-auto flex-1 min-h-0">
                          {group.columns.map((col) => {
                            const titleLower = col.title.toLowerCase();
                            const isPersonal = titleLower.includes("personal");
                            const isBusiness = titleLower.includes("business");
                            const isHome = titleLower.includes("home");
                            const titleColorClass =
                              isPersonal ? "text-phoenix-green font-semibold" :
                              isBusiness ? "text-phoenix-green font-semibold" :
                              isHome ? "text-phoenix-green font-semibold" :
                              "text-phoenix-orange font-semibold";
                            return (
                              <div key={col.title}>
                                {group.columns.length > 1 && (
                                  <div className={`px-3 py-1.5 text-xs uppercase tracking-wider border-b border-phoenix-gray-light/50 ${titleColorClass}`}>
                                    {col.title}
                                  </div>
                                )}
                                {col.items.map((item) => {
                                  const isItemActive =
                                    path === item.href ||
                                    path.startsWith(item.href + "/");
                                  return (
                                    <NavLink
                                      key={item.href}
                                      to={item.href}
                                      className={`block px-3 py-2 text-sm rounded-lg mx-0.5 transition-all duration-200 ${
                                        isItemActive
                                          ? "bg-phoenix-green-light/50 text-phoenix-orange font-semibold"
                                          : "text-foreground hover:bg-phoenix-green-light/40 hover:text-phoenix-orange"
                                      }`}
                                      onClick={() => setOpenServiceBar(null)}
                                    >
                                      {item.name}
                                    </NavLink>
                                  );
                                })}
                              </div>
                            );
                          })}
                        </div>
                        <div className="h-1.5 w-full rounded-b-xl bg-gradient-to-r from-phoenix-green via-phoenix-orange to-phoenix-green shrink-0" />
                        </div>
                      </div>
                    )}
                  </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu - y-axis scroll, scrollbar hidden, smooth */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-b border-border shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto scrollbar-hide overflow-x-hidden overscroll-y-contain" style={{ scrollBehavior: "smooth" }}>
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "text-phoenix-orange bg-phoenix-orange/10" : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              <div>
                {(() => {
                  const networkRouteActive =
                    path.startsWith("/join-our-network") ||
                    path.startsWith("/network/");
                  const networkTitleOrange =
                    networkRouteActive || mobileNetworkOpen;
                  return (
                    <>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-left ${
                          networkTitleOrange
                            ? "text-phoenix-orange"
                            : "text-foreground"
                        }`}
                        onClick={() => setMobileNetworkOpen((open) => !open)}
                        aria-expanded={mobileNetworkOpen}
                      >
                        <span>Join Our Network</span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 transition-transform ${
                            networkTitleOrange ? "text-phoenix-orange" : ""
                          } ${mobileNetworkOpen ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                      {mobileNetworkOpen && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-phoenix-orange/30 pl-3">
                          <div className="rounded-lg border border-phoenix-gray-light/60 bg-background p-1 shadow-sm">
                            <NavLink
                              to="/join-our-network"
                              className="block px-3 py-2 text-sm rounded-md font-semibold text-phoenix-orange"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileNetworkOpen(false);
                              }}
                            >
                              Join Our Network
                            </NavLink>
                            {networkDropdown.map((item) => {
                              const itemActive =
                                path === item.href ||
                                path.startsWith(`${item.href}/`);
                              return (
                                <NavLink
                                  key={item.href}
                                  to={item.href}
                                  className={`block border-l-2 px-3 py-2 text-sm rounded-md transition-colors ${
                                    itemActive
                                      ? "border-phoenix-orange bg-phoenix-orange/10 font-semibold text-phoenix-orange"
                                      : "border-transparent text-muted-foreground hover:bg-phoenix-orange/5 hover:text-phoenix-orange"
                                  }`}
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setMobileNetworkOpen(false);
                                  }}
                                >
                                  {item.name}
                                </NavLink>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </>
                  );
                })()}
              </div>

              {/* xs-sm: five services in drawer; md+ orange header bar */}
              <div className="md:hidden">
                {serviceGroupsNav.map((group) => {
                  const hasDropdown = group.columns.some(
                    (col) => col.items.length > 0,
                  );

                  if (!hasDropdown) {
                    return (
                      <NavLink
                        key={group.name}
                        to={group.href}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                            isActive
                              ? "text-phoenix-orange bg-phoenix-orange/10"
                              : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
                          }`
                        }
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {group.name}
                      </NavLink>
                    );
                  }

                  const groupActive =
                    path === group.href ||
                    path.startsWith(`${group.href}/`);
                  const serviceTitleOrange =
                    groupActive || mobileExpanded === group.name;

                  return (
                    <div key={group.name}>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-left ${
                          serviceTitleOrange
                            ? "text-phoenix-orange"
                            : "text-foreground"
                        }`}
                        onClick={() =>
                          setMobileExpanded((prev) =>
                            prev === group.name ? null : group.name,
                          )
                        }
                        aria-expanded={mobileExpanded === group.name}
                      >
                        <span>{group.name}</span>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 transition-transform ${
                            serviceTitleOrange ? "text-phoenix-orange" : ""
                          } ${mobileExpanded === group.name ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </button>
                      {mobileExpanded === group.name && (
                        <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-phoenix-orange/30 pl-3">
                          <div className="rounded-lg border border-phoenix-gray-light/60 bg-background p-1 shadow-sm">
                            <NavLink
                              to={group.href}
                              className="block px-3 py-2 text-sm rounded-md font-semibold text-phoenix-orange"
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setMobileExpanded(null);
                              }}
                            >
                              {group.name}
                            </NavLink>
                            {group.columns.flatMap((col) =>
                              col.items.map((item) => {
                                const itemActive =
                                  path === item.href ||
                                  path.startsWith(`${item.href}/`);
                                return (
                                  <NavLink
                                    key={item.href}
                                    to={item.href}
                                    className={`block border-l-2 px-3 py-2 text-sm rounded-md transition-colors ${
                                      itemActive
                                        ? "border-phoenix-orange bg-phoenix-orange/10 font-semibold text-phoenix-orange"
                                        : "border-transparent text-muted-foreground hover:bg-phoenix-orange/5 hover:text-phoenix-orange"
                                    }`}
                                    onClick={() => {
                                      setMobileMenuOpen(false);
                                      setMobileExpanded(null);
                                    }}
                                  >
                                    {item.name}
                                  </NavLink>
                                );
                              }),
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {navLinksAfterServices.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive ? "text-phoenix-orange bg-phoenix-orange/10" : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* xs only: Contact in drawer; sm+ uses header button */}
              <NavLink
                to="/contact"
                className="mt-3 block sm:hidden"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button className="w-full bg-phoenix-orange hover:bg-phoenix-orange-dark text-white">
                  Contact Us
                </Button>
              </NavLink>
            </div>
          </div>
        )}
      </header>

      <RightSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
};

export default Header;
