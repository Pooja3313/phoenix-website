// import { NavLink } from "react-router-dom";
// import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
// import { BrandLinkedInIcon } from "@/components/icons/BrandSocialIcons";
// import { PHOENIX_LINKEDIN_URL } from "@/constants/social";
// import { Button } from "@/components/ui/button";
// import RightSidebar from "./RightSidebar";
// import { useState, useRef, useCallback, useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useClickOutside } from "@/hooks/useClickOutside";
// import {
//   serviceGroupsNav,
//   networkDropdown,
//   navLinks,
//   navLinksAfterServices,
// } from "@/data/HeaderLink";

// const Header = () => {
//   const [openServiceBar, setOpenServiceBar] = useState<string | null>(null);
//   const [networkOpen, setNetworkOpen] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
//   const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);

//   const location = useLocation();
//   const path = location.pathname;
//   const networkRef = useRef<HTMLDivElement>(null);
//   const orangeBarRef = useRef<HTMLDivElement>(null);

//   /** Hover-open for service dropdowns only at lg+; sm/md use chevron / click-outside (avoids gap + touch issues). */
//   const [serviceHoverEnabled, setServiceHoverEnabled] = useState(false);
//   useEffect(() => {
//     const mql = window.matchMedia("(min-width: 1024px)");
//     const sync = () => setServiceHoverEnabled(mql.matches);
//     sync();
//     mql.addEventListener("change", sync);
//     return () => mql.removeEventListener("change", sync);
//   }, []);

//   useEffect(() => {
//     // Desktop services: keep relevant dropdown open on its own pages
//     const activeService = serviceGroupsNav.find((group) =>
//       path.startsWith(group.href),
//     );
//     setOpenServiceBar(activeService ? activeService.name : null);

//     // Join Our Network: keep dropdown open on its own routes
//     const isNetworkRoute =
//       path.startsWith("/join-our-network") || path.startsWith("/network/");
//     setNetworkOpen(isNetworkRoute);

//     setMobileMenuOpen(false);
//   }, [path]);

//   /** Collapse service / network accordions whenever the drawer closes so reopening shows closed panels (active = orange text only). */
//   useEffect(() => {
//     if (!mobileMenuOpen) {
//       setMobileExpanded(null);
//       setMobileNetworkOpen(false);
//     }
//   }, [mobileMenuOpen]);

//   const closeOrangeBar = useCallback(() => setOpenServiceBar(null), []);
//   const closeNetwork = useCallback(() => setNetworkOpen(false), []);
//   useClickOutside(orangeBarRef, closeOrangeBar);
//   useClickOutside(networkRef, closeNetwork);

//   return (
//     <>
//       <header className="w-full sticky top-0 z-50 bg-background shadow-sm">
//         {/* xs,sm: column = upar puri gray line (email,phone,IN) | niche logo + icons. md+: row = logo | gray curve + nav */}
//         <div className="w-full flex flex-col md:flex-row border-b border-phoenix-gray-light/50 min-h-0">
//           {/* xs,sm only: gray line. xs = email/phone icons ke beech space (1st image jaisa); sm = thoda left margin, zyada nahi */}
//           <div className="header-top-bar relative bg-gray-300 text-phoenix-gray flex items-center h-9 sm:h-8 flex-shrink-0 border-b border-phoenix-gray/10 pl-5 sm:pl-4 pr-2 sm:pr-4 min-h-[2.25rem] md:hidden w-full">
//             <div className="flex items-center justify-between gap-2 sm:gap-3 text-xs sm:text-sm w-full min-w-0">
//               <div className="flex items-center gap-5 sm:gap-3 min-w-0 shrink">
//                 <NavLink
//                   to="mailto:dreams@phoenixfinserv.co.uk"
//                   className="flex items-center gap-1 sm:gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
//                   aria-label="Email"
//                 >
//                   <Mail size={12} className="shrink-0" />
//                   <span className="hidden sm:inline truncate sm:whitespace-normal">
//                     dreams@phoenixfinserv.co.uk
//                   </span>
//                 </NavLink>
//                 <NavLink
//                   to="tel:+442079932737"
//                   className="flex items-center gap-1 sm:gap-1.5 hover:text-phoenix-orange transition-colors shrink-0 whitespace-nowrap"
//                 >
//                   <Phone size={12} className="shrink-0" />
//                   <span>+44 (0) 2079 932 737</span>
//                 </NavLink>
//               </div>
//               <NavLink
//                 to={PHOENIX_LINKEDIN_URL}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:text-phoenix-orange transition-colors shrink-0"
//                 aria-label="LinkedIn"
//               >
//                 <BrandLinkedInIcon size={16} aria-hidden />
//               </NavLink>
//             </div>
//           </div>

//           {/* md+: logo left (desktop) | right column. xs,sm: niche row = logo left + icons right */}
//           <div className="w-full flex flex-1 min-w-0">
//             {/* Logo: lg = desktop; xs,sm,md = niche line pe left */}
//             <div className="pl-4 sm:pl-6 lg:pl-8 shrink-0 flex items-stretch">
//               <NavLink
//                 to="/"
//                 className="hidden lg:flex items-center pr-2 self-stretch"
//                 aria-label="Phoenix Finserv - Home"
//               >
//                 <img
//                   src="/images/Phoenix-Finserv.png"
//                   alt="Phoenix Finserv"
//                   className="h-full w-auto max-h-[100px] min-h-[70px] object-contain object-left"
//                 />
//               </NavLink>
//               <NavLink to="/" className="flex lg:hidden items-center pr-3">
//                 <img
//                   src="/images/Phoenix-Finserv.png"
//                   alt="Phoenix Finserv"
//                   className="h-12 sm:h-14 w-auto object-contain object-left"
//                 />
//               </NavLink>
//             </div>

//             {/* Right column: md+ = gray bar (curve) + nav row; xs,sm = sirf nav row (logo upar wali line ke niche) */}
//             <div className="flex-1 flex flex-col min-w-0 lg:min-h-[72px]">
//               {/* md+ only: gray line with curve */}
//               <div className="header-top-bar relative bg-phoenix-gray-light text-phoenix-gray hidden md:flex items-center justify-end h-8 flex-shrink-0 border-b border-phoenix-gray/10 pr-4 sm:pr-6 lg:pr-8">
//                 <div className="flex items-center justify-end gap-3 sm:gap-4 lg:gap-6  xl:gap-8 2xl:gap-10 3xl:gap-14 4xl:gap-18 text-xs sm:text-sm xl:text-md 2xl:text-xl 3xl:text-xl 4xl:text-2xl pl-4 xl:mr-[35px] 2xl:mr-[70px] 3xl:mr-[150px] 4xl:mr-[250px] w-full">
//                   <NavLink
//                     to="mailto:dreams@phoenixfinserv.co.uk"
//                     className="flex items-center gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
//                   >
//                     <Mail size={12} className="shrink-0" />
//                     <span>dreams@phoenixfinserv.co.uk</span>
//                   </NavLink>
//                   <NavLink
//                     to="tel:+442079932737"
//                     className="flex items-center gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
//                   >
//                     <Phone size={12} className="shrink-0" />
//                     <span>+44 (0) 2079 932 737</span>
//                   </NavLink>
//                   <NavLink
//                     to={PHOENIX_LINKEDIN_URL}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:text-phoenix-orange transition-colors shrink-0"
//                     aria-label="LinkedIn"
//                   >
//                     <BrandLinkedInIcon size={16} aria-hidden />
//                   </NavLink>
//                 </div>
//               </div>

//               {/* MAIN NAVIGATION LINE - Home to Careers + Contact Us + 3 Dots */}
//               <div className="flex items-center justify-between  py-2.5 lg:py-3 flex-shrink-0 min-h-[44px]  xl:ml-[24px]  3xl:ml-[200px] 4xl:ml-[250px] px-4 sm:px-6 lg:px-2 xl:px-5 2xl:px-10 3xl:px-15 4xl:px-20 border-b border-phoenix-gray-light/30 ">
//                 {/* Desktop Navigation (lg+) */}
//                 <nav className="hidden lg:flex items-center justify-between w-full">
//                   {/* Left side - All navigation links with responsive gaps */}
//                   <div className="flex items-center gap-4 lg:gap-6 xl:gap-10 2xl:gap-12 3xl:gap-14 4xl:gap-16">
//                     {navLinks.map((link) => (
//                       <NavLink
//                         key={link.href}
//                         to={link.href}
//                         className={({ isActive }) =>
//                           `py-2 text-sm  xl:min-w-16 2xl:min-w-24  3xl:min-w-28 4xl:min-w-32 xl:text-md 2xl:text-xl 3xl:text-xl 4xl:text-2xl font-medium rounded-md transition-colors whitespace-nowrap ${
//                             isActive
//                               ? "text-phoenix-orange"
//                               : "text-phoenix-gray hover:text-phoenix-orange"
//                           }`
//                         }
//                       >
//                         {link.name}
//                       </NavLink>
//                     ))}

//                     {/* Join Our Network Dropdown */}
//                     <div
//                       ref={networkRef}
//                       className="relative"
//                       onMouseEnter={() => setNetworkOpen(true)}
//                       onMouseLeave={() => setNetworkOpen(false)}
//                     >
//                       <div
//                         className={`py-2 text-sm  2xl:min-w-24  3xl:min-w-28 4xl:min-w-32 xl:text-md 2xl:text-xl  3xl:text-xl 4xl:text-2xl font-medium rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
//                           networkOpen ||
//                           path.startsWith("/join-our-network") ||
//                           path.startsWith("/network/")
//                             ? "text-phoenix-orange"
//                             : "text-phoenix-gray hover:text-phoenix-orange"
//                         }`}
//                       >
//                         <NavLink
//                           to="/join-our-network"
//                           className="inline-flex items-center 2xl:text-xl 3xl:text-xl 4xl:text-2xl "
//                           onClick={() => setNetworkOpen(true)}
//                         >
//                           Join Our Network
//                         </NavLink>
//                         <button
//                           type="button"
//                           className="shrink-0 flex items-center justify-center"
//                           onClick={(e) => {
//                             e.preventDefault();
//                             e.stopPropagation();
//                             setNetworkOpen((open) => !open);
//                           }}
//                           aria-label="Toggle Join Our Network options"
//                         >
//                           <ChevronDown
//                             size={14}
//                             className={`transition-transform ${networkOpen ? "rotate-180" : ""}`}
//                           />
//                         </button>
//                       </div>

//                       {networkOpen && (
//                         <div className="absolute top-full left-0 mt-1 bg-background border border-phoenix-gray-light/50 rounded-xl shadow-xl py-2 min-w-[200px] 2xl:min-w-[260px] 3xl:min-w-[260px] 4xl:min-w-[320px] z-[100] animate-dropdown-from-top overflow-hidden">
//                           {networkDropdown.map((item) => {
//                             const isItemActive =
//                               path === item.href ||
//                               path.startsWith(item.href + "/");
//                             return (
//                               <NavLink
//                                 key={item.href}
//                                 to={item.href}
//                                 className={`block px-4 py-2.5 text-sm lg:text-md xl:min-w-16 2xl:min-w-24 3xl:min-w-30 4xl:min-w-32  xl:text-md 2xl:text-xl 3xl:text-xl 4xl:text-2xl rounded-md mx-1 transition-all duration-200 ${
//                                   isItemActive
//                                     ? "bg-phoenix-green-light/50 text-phoenix-orange font-semibold"
//                                     : "text-foreground hover:bg-phoenix-green-light/50 hover:text-phoenix-orange"
//                                 }`}
//                                 onClick={() => setNetworkOpen(false)}
//                               >
//                                 {item.name}
//                               </NavLink>
//                             );
//                           })}
//                           <div className="h-1 w-full rounded-b-xl bg-gradient-to-r from-phoenix-green via-phoenix-orange to-phoenix-green mt-1" />
//                         </div>
//                       )}
//                     </div>

//                     {/* Refer a Friend and Careers */}
//                     {navLinksAfterServices.map((link) => (
//                       <NavLink
//                         key={link.href}
//                         to={link.href}
//                         className={({ isActive }) =>
//                           `py-2 text-sm  xl:min-w-16 2xl:min-w-24 3xl:min-w-28 4xl:min-w-32 xl:text-md 2xl:text-xl 3xl:text-xl 4xl:text-2xl font-medium rounded-md transition-colors whitespace-nowrap ${
//                             isActive
//                               ? "text-phoenix-orange"
//                               : "text-phoenix-gray hover:text-phoenix-orange"
//                           }`
//                         }
//                       >
//                         {link.name}
//                       </NavLink>
//                     ))}

//                     {/* Right side - Contact Us and 3 Dots with small right margin */}
//                     <div className="flex items-center gap-2 2xl:gap-4 3xl:gap-5 4xl:gap-6 pl-2 xl:pl-4  shrink-0">
//                       <NavLink
//                         to="/contact"
//                         className="flex items-center justify-center bg-phoenix-orange hover:bg-phoenix-orange-dark text-white text-sm  2xl:text-xl  3xl:text-xl 4xl:text-2xl font-semibold py-2 px-4 lg:py-1 lg:px-2 xl:px-5  3xl:px-6 4xl:px-8 xl:py-2   rounded-md transition-all shrink-0"
//                       >
//                         Contact Us
//                       </NavLink>

//                       <button
//                         onClick={() => setSidebarOpen(true)}
//                         className="p-1 xl:p-2  2xl:p-4  3xl:p-6 4xl:p-8 hover:bg-muted rounded-md transition-colors shrink-0"
//                         aria-label="Open menu"
//                       >
//                         <div className="flex flex-col gap-0.5 xl:gap-1 2xl:gap-1.5 4xl:gap-2">
//                           {[0, 1, 2].map((r) => (
//                             <div
//                               key={r}
//                               className="flex lg:gap-0.5 xl:gap-1 2xl:gap-1.5 4xl:gap-2"
//                             >
//                               {[0, 1, 2].map((c) => (
//                                 <span
//                                   key={c}
//                                   className=" w-1 h-1 xl:w-1.5 xl:h-1.5 2xl:w-2 2xl:h-2 4xl:w-2.5 4xl:h-2.5 rounded-full bg-foreground"
//                                 />
//                               ))}
//                             </div>
//                           ))}
//                         </div>
//                       </button>
//                     </div>
//                   </div>
//                 </nav>

//                 {/* Mobile + Tablet Controls (lg and below hidden - only for xs, sm, md) - Contact Us and 3 Dots + Hamburger on right end */}
//                 <div className="flex lg:hidden items-center justify-end gap-3 w-full">
//                   {/* Contact Us Button - Visible on sm and md, hidden on xs */}
//                   <NavLink
//                     to="/contact"
//                     className="hidden sm:flex items-center justify-center bg-phoenix-orange hover:bg-phoenix-orange-dark text-white text-sm font-semibold py-2 px-5 rounded-md transition-all shrink-0"
//                   >
//                     Contact Us
//                   </NavLink>

//                   {/* 3 Dots Menu Button - Visible on xs, sm, md */}
//                   <button
//                     onClick={() => setSidebarOpen(true)}
//                     className="p-2 hover:bg-muted rounded-md transition-colors shrink-0"
//                     aria-label="Open menu"
//                   >
//                     <div className="flex flex-col gap-0.5">
//                       {[0, 1, 2].map((r) => (
//                         <div key={r} className="flex gap-1">
//                           {[0, 1, 2].map((c) => (
//                             <span
//                               key={c}
//                               className="w-1.5 h-1.5 rounded-full bg-foreground"
//                             />
//                           ))}
//                         </div>
//                       ))}
//                     </div>
//                   </button>

//                   {/* Mobile Hamburger (for opening mobile menu) */}
//                   <button
//                     onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                     className="p-1.5 hover:bg-muted rounded-md transition-colors"
//                     aria-label="Menu"
//                   >
//                     {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Five services orange bar: md+ only (xs and sm use hamburger) */}
//         <div
//           ref={orangeBarRef}
//           className="relative overflow-visible bg-phoenix-green-light/25 py-1.5 lg:py-1 hidden md:block"
//         >
//           <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex justify-center">
//             <div className="relative flex items-center justify-center w-full">
//               <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-2.5  2xl:gap-3 w-full sm:w-fit max-w-full rounded-xl sm:rounded-2xl bg-phoenix-orange px-2 py-1 sm:px-4 sm:py-1.5 2xl:py-2.5 lg:px-5 2xl:px-6 shadow-md ring-1 ring-black/5 mx-auto">
//                 {serviceGroupsNav.map((group) => {
//                   const hasDropdown = group.columns.some(
//                     (col) => col.items.length > 0,
//                   );
//                   const isGroupActive =
//                     path === group.href ||
//                     path.startsWith(group.href + "/") ||
//                     group.columns.some((col) =>
//                       col.items.some(
//                         (item) =>
//                           path === item.href ||
//                           path.startsWith(item.href + "/"),
//                       ),
//                     );
//                   const isOpen = openServiceBar === group.name;
//                   return (
//                     <div
//                       key={group.name}
//                       className="relative overflow-visible"
//                       onMouseEnter={() =>
//                         serviceHoverEnabled &&
//                         hasDropdown &&
//                         setOpenServiceBar(group.name)
//                       }
//                       onMouseLeave={() =>
//                         serviceHoverEnabled &&
//                         hasDropdown &&
//                         setOpenServiceBar(null)
//                       }
//                     >
//                       <div
//                         className={`min-w-0 sm:min-w-[5rem] lg:min-w-[5.5rem] px-1.5 sm:px-2.5 lg:px-3 py-1 text-[11px] sm:text-xs lg:text-[13px] font-semibold rounded-md sm:rounded-lg transition-all flex items-center justify-center gap-0.5 sm:gap-1 ${
//                           isGroupActive || isOpen
//                             ? "bg-white text-phoenix-orange shadow-sm"
//                             : "text-white hover:bg-white/15"
//                         }`}
//                       >
//                         <NavLink
//                           to={group.href}
//                           className="inline-flex items-center"
//                           onClick={() => setOpenServiceBar(group.name)}
//                         >
//                           {group.name}
//                         </NavLink>
//                         {hasDropdown && (
//                           <button
//                             type="button"
//                             className="shrink-0 flex items-center justify-center"
//                             onClick={(e) => {
//                               e.preventDefault();
//                               e.stopPropagation();
//                               setOpenServiceBar(
//                                 openServiceBar === group.name
//                                   ? null
//                                   : group.name,
//                               );
//                             }}
//                             aria-label={`${group.name} services`}
//                           >
//                             <ChevronDown
//                               size={12}
//                               className={`shrink-0 transition-transform ${
//                                 isOpen ? "rotate-180" : ""
//                               }`}
//                             />
//                           </button>
//                         )}
//                       </div>
//                       {hasDropdown && isOpen && (
//                         <div className="absolute left-0 top-full z-[100] pt-1 sm:min-w-[220px] max-w-[min(100vw-1rem,280px)]">
//                           <div className="bg-background border border-phoenix-gray-light/50 rounded-xl shadow-xl py-2 min-w-[220px] max-h-[70vh] flex flex-col animate-dropdown-from-top origin-top">
//                             <div className="py-1 overflow-y-auto flex-1 min-h-0">
//                               {group.columns.map((col) => {
//                                 const titleLower = col.title.toLowerCase();
//                                 const isPersonal =
//                                   titleLower.includes("personal");
//                                 const isBusiness =
//                                   titleLower.includes("business");
//                                 const isHome = titleLower.includes("home");
//                                 const titleColorClass = isPersonal
//                                   ? "text-phoenix-green font-semibold"
//                                   : isBusiness
//                                     ? "text-phoenix-green font-semibold"
//                                     : isHome
//                                       ? "text-phoenix-green font-semibold"
//                                       : "text-phoenix-orange font-semibold";
//                                 return (
//                                   <div key={col.title}>
//                                     {group.columns.length > 1 && (
//                                       <div
//                                         className={`px-3 py-1.5 text-xs uppercase tracking-wider border-b border-phoenix-gray-light/50 ${titleColorClass}`}
//                                       >
//                                         {col.title}
//                                       </div>
//                                     )}
//                                     {col.items.map((item) => {
//                                       const isItemActive =
//                                         path === item.href ||
//                                         path.startsWith(item.href + "/");
//                                       return (
//                                         <NavLink
//                                           key={item.href}
//                                           to={item.href}
//                                           className={`block px-3 py-2 text-sm rounded-lg mx-0.5 transition-all duration-200 ${
//                                             isItemActive
//                                               ? "bg-phoenix-green-light/50 text-phoenix-orange font-semibold"
//                                               : "text-foreground hover:bg-phoenix-green-light/40 hover:text-phoenix-orange"
//                                           }`}
//                                           onClick={() =>
//                                             setOpenServiceBar(null)
//                                           }
//                                         >
//                                           {item.name}
//                                         </NavLink>
//                                       );
//                                     })}
//                                   </div>
//                                 );
//                               })}
//                             </div>
//                             <div className="h-1.5 w-full rounded-b-xl bg-gradient-to-r from-phoenix-green via-phoenix-orange to-phoenix-green shrink-0" />
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu - y-axis scroll, scrollbar hidden, smooth */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden bg-background border-b border-border shadow-lg">
//             <div
//               className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto scrollbar-hide overflow-x-hidden overscroll-y-contain"
//               style={{ scrollBehavior: "smooth" }}
//             >
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.href}
//                   to={link.href}
//                   className={({ isActive }) =>
//                     `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
//                       isActive
//                         ? "text-phoenix-orange bg-phoenix-orange/10"
//                         : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
//                     }`
//                   }
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}

//               <div>
//                 {(() => {
//                   const networkRouteActive =
//                     path.startsWith("/join-our-network") ||
//                     path.startsWith("/network/");
//                   const networkTitleOrange =
//                     networkRouteActive || mobileNetworkOpen;
//                   return (
//                     <>
//                       <button
//                         type="button"
//                         className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-left ${
//                           networkTitleOrange
//                             ? "text-phoenix-orange"
//                             : "text-foreground"
//                         }`}
//                         onClick={() => setMobileNetworkOpen((open) => !open)}
//                         aria-expanded={mobileNetworkOpen}
//                       >
//                         <span>Join Our Network</span>
//                         <ChevronDown
//                           size={16}
//                           className={`shrink-0 transition-transform ${
//                             networkTitleOrange ? "text-phoenix-orange" : ""
//                           } ${mobileNetworkOpen ? "rotate-180" : ""}`}
//                           aria-hidden
//                         />
//                       </button>
//                       {mobileNetworkOpen && (
//                         <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-phoenix-orange/30 pl-3">
//                           <div className="rounded-lg border border-phoenix-gray-light/60 bg-background p-1 shadow-sm">
//                             <NavLink
//                               to="/join-our-network"
//                               className="block px-3 py-2 text-sm rounded-md font-semibold text-phoenix-orange"
//                               onClick={() => {
//                                 setMobileMenuOpen(false);
//                                 setMobileNetworkOpen(false);
//                               }}
//                             >
//                               Join Our Network
//                             </NavLink>
//                             {networkDropdown.map((item) => {
//                               const itemActive =
//                                 path === item.href ||
//                                 path.startsWith(`${item.href}/`);
//                               return (
//                                 <NavLink
//                                   key={item.href}
//                                   to={item.href}
//                                   className={`block border-l-2 px-3 py-2 text-sm rounded-md transition-colors ${
//                                     itemActive
//                                       ? "border-phoenix-orange bg-phoenix-orange/10 font-semibold text-phoenix-orange"
//                                       : "border-transparent text-muted-foreground hover:bg-phoenix-orange/5 hover:text-phoenix-orange"
//                                   }`}
//                                   onClick={() => {
//                                     setMobileMenuOpen(false);
//                                     setMobileNetworkOpen(false);
//                                   }}
//                                 >
//                                   {item.name}
//                                 </NavLink>
//                               );
//                             })}
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   );
//                 })()}
//               </div>

//               {/* xs-sm: five services in drawer; md+ orange header bar */}
//               <div className="md:hidden">
//                 {serviceGroupsNav.map((group) => {
//                   const hasDropdown = group.columns.some(
//                     (col) => col.items.length > 0,
//                   );

//                   if (!hasDropdown) {
//                     return (
//                       <NavLink
//                         key={group.name}
//                         to={group.href}
//                         className={({ isActive }) =>
//                           `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
//                             isActive
//                               ? "text-phoenix-orange bg-phoenix-orange/10"
//                               : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
//                           }`
//                         }
//                         onClick={() => setMobileMenuOpen(false)}
//                       >
//                         {group.name}
//                       </NavLink>
//                     );
//                   }

//                   const groupActive =
//                     path === group.href || path.startsWith(`${group.href}/`);
//                   const serviceTitleOrange =
//                     groupActive || mobileExpanded === group.name;

//                   return (
//                     <div key={group.name}>
//                       <button
//                         type="button"
//                         className={`flex w-full items-center justify-between gap-2 px-4 py-2.5 text-sm font-medium rounded-md text-left ${
//                           serviceTitleOrange
//                             ? "text-phoenix-orange"
//                             : "text-foreground"
//                         }`}
//                         onClick={() =>
//                           setMobileExpanded((prev) =>
//                             prev === group.name ? null : group.name,
//                           )
//                         }
//                         aria-expanded={mobileExpanded === group.name}
//                       >
//                         <span>{group.name}</span>
//                         <ChevronDown
//                           size={16}
//                           className={`shrink-0 transition-transform ${
//                             serviceTitleOrange ? "text-phoenix-orange" : ""
//                           } ${mobileExpanded === group.name ? "rotate-180" : ""}`}
//                           aria-hidden
//                         />
//                       </button>
//                       {mobileExpanded === group.name && (
//                         <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-phoenix-orange/30 pl-3">
//                           <div className="rounded-lg border border-phoenix-gray-light/60 bg-background p-1 shadow-sm">
//                             <NavLink
//                               to={group.href}
//                               className="block px-3 py-2 text-sm rounded-md font-semibold text-phoenix-orange"
//                               onClick={() => {
//                                 setMobileMenuOpen(false);
//                                 setMobileExpanded(null);
//                               }}
//                             >
//                               {group.name}
//                             </NavLink>
//                             {group.columns.flatMap((col) =>
//                               col.items.map((item) => {
//                                 const itemActive =
//                                   path === item.href ||
//                                   path.startsWith(`${item.href}/`);
//                                 return (
//                                   <NavLink
//                                     key={item.href}
//                                     to={item.href}
//                                     className={`block border-l-2 px-3 py-2 text-sm rounded-md transition-colors ${
//                                       itemActive
//                                         ? "border-phoenix-orange bg-phoenix-orange/10 font-semibold text-phoenix-orange"
//                                         : "border-transparent text-muted-foreground hover:bg-phoenix-orange/5 hover:text-phoenix-orange"
//                                     }`}
//                                     onClick={() => {
//                                       setMobileMenuOpen(false);
//                                       setMobileExpanded(null);
//                                     }}
//                                   >
//                                     {item.name}
//                                   </NavLink>
//                                 );
//                               }),
//                             )}
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>

//               {navLinksAfterServices.map((link) => (
//                 <NavLink
//                   key={link.href}
//                   to={link.href}
//                   className={({ isActive }) =>
//                     `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
//                       isActive
//                         ? "text-phoenix-orange bg-phoenix-orange/10"
//                         : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
//                     }`
//                   }
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}

//               {/* xs only: Contact in drawer; sm+ uses header button */}
//               {/* Contact Us in mobile drawer - only for xs (very small screens) */}
//               <NavLink
//                 to="/contact"
//                 className="mt-3 block xs:block sm:hidden"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <Button className="w-full bg-phoenix-orange hover:bg-phoenix-orange-dark text-white">
//                   Contact Us
//                 </Button>
//               </NavLink>
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
import {
  serviceGroupsNav,
  networkDropdown,
  navLinks,
  navLinksAfterServices,
} from "@/data/HeaderLink";

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
                  to="mailto:dreams@phoenixfinserv.co.uk"
                  className="flex items-center gap-1 sm:gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
                  aria-label="Email"
                >
                  <Mail size={12} className="shrink-0" />
                  <span className="hidden sm:inline truncate sm:whitespace-normal">
                    dreams@phoenixfinserv.co.uk
                  </span>
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
                className="hidden lg:flex items-center pr-2 self-stretch"
                aria-label="Phoenix Finserv - Home"
              >
                <img
                  src="/images/Phoenix-Finserv.png"
                  alt="Phoenix Finserv"
                  className="h-full w-auto max-h-[100px] min-h-[70px] object-contain object-left"
                />
              </NavLink>
              <NavLink to="/" className="flex lg:hidden items-center pr-3">
                <img
                  src="/images/Phoenix-Finserv.png"
                  alt="Phoenix Finserv"
                  className="h-12 sm:h-14 w-auto object-contain object-left"
                />
              </NavLink>
            </div>

            {/* Right column: md+ = gray bar (curve) + nav row; xs,sm = sirf nav row (logo upar wali line ke niche) */}
            <div className="flex-1 flex flex-col min-w-0 lg:min-h-[72px]">
              {/* md+ only: gray line with curve */}
              <div className="header-top-bar relative bg-phoenix-gray-light text-phoenix-gray hidden md:flex items-center justify-end h-8 flex-shrink-0 border-b border-phoenix-gray/10 pr-4 sm:pr-6 lg:pr-8">
                <div className="flex items-center justify-end gap-3 sm:gap-4 lg:gap-6  xl:gap-8 2xl:gap-10 3xl:gap-14 4xl:gap-18 text-xs sm:text-sm xl:text-md 2xl:text-xl 3xl:text-2xl 4xl:text-3xl pl-4 xl:mr-[35px] 2xl:mr-[48px] 3xl:mr-[85px] 4xl:mr-[110px] w-full">
                  <NavLink
                    to="mailto:dreams@phoenixfinserv.co.uk"
                    className="flex items-center gap-1.5 hover:text-phoenix-orange transition-colors shrink-0"
                  >
                    <Mail size={12} className="shrink-0" />
                    <span>dreams@phoenixfinserv.co.uk</span>
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

              {/* MAIN NAVIGATION LINE - Home to Careers + Contact Us + 3 Dots */}
              <div className="w-full flex items-center justify-between py-2.5 lg:py-3 flex-shrink-0 min-h-[44px] border-b border-phoenix-gray-light/30 px-4 sm:px-6 lg:px-6 xl:px-12 2xl:px-12 3xl:px-20 4xl:px-24">
                {/* Desktop Navigation (lg+) */}
                <nav className="hidden lg:flex items-center justify-between w-full">
                  {/* Left side - All navigation links with responsive gaps */}
                
                      <div className="flex flex-1 items-center min-w-0 justify-start gap-4 lg:justify-between lg:gap-0  xl:gap-10 2xl:justify-between 2xl:gap-0 3xl:justify-between 3xl:gap-0 4xl:justify-between 4xl:gap-0 pr-3  xl:pr-6 ">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) =>
                          `py-2 text-sm xl:min-w-16 2xl:min-w-24 3xl:min-w-32 4xl:min-w-40 xl:text-md 2xl:text-xl 3xl:text-2xl 4xl:text-4xl font-medium rounded-md transition-colors whitespace-nowrap ${
                            isActive
                              ? "text-phoenix-orange"
                              : "text-phoenix-gray hover:text-phoenix-orange"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}

                    {/* Join Our Network Dropdown */}
                    <div
                      ref={networkRef}
                      className="relative"
                      onMouseEnter={() => setNetworkOpen(true)}
                      onMouseLeave={() => setNetworkOpen(false)}
                    >
                      <div
                        className={`py-2 text-sm 2xl:min-w-24 3xl:min-w-32 4xl:min-w-40 xl:text-md 2xl:text-xl 3xl:text-2xl  4xl:text-4xl font-medium rounded-md transition-colors flex items-center gap-1 whitespace-nowrap ${
                          networkOpen ||
                          path.startsWith("/join-our-network") ||
                          path.startsWith("/network/")
                            ? "text-phoenix-orange"
                            : "text-phoenix-gray hover:text-phoenix-orange"
                        }`}
                      >
                        <NavLink
                          to="/join-our-network"
                          className="inline-flex items-center 2xl:text-xl 3xl:text-2xl 4xl:text-4xl "
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
                          <ChevronDown
                            size={14}
                            className={`transition-transform ${networkOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {networkOpen && (
                        <div className="absolute top-full left-0 mt-1 bg-background border border-phoenix-gray-light/50 rounded-xl shadow-xl py-2 min-w-[200px] 2xl:min-w-[260px] 3xl:min-w-[260px] 4xl:min-w-[320px] z-[100] animate-dropdown-from-top overflow-hidden">
                          {networkDropdown.map((item) => {
                            const isItemActive =
                              path === item.href ||
                              path.startsWith(item.href + "/");
                            return (
                              <NavLink
                                key={item.href}
                                to={item.href}
                                className={`block px-4 py-2.5 text-sm lg:text-md xl:min-w-16 2xl:min-w-24 3xl:min-w-30 4xl:min-w-32  xl:text-md 2xl:text-xl 3xl:text-xl 4xl:text-2xl rounded-md mx-1 transition-all duration-200 ${
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

                    {/* Refer a Friend and Careers */}
                    {navLinksAfterServices.map((link) => (
                      <NavLink
                        key={link.href}
                        to={link.href}
                        className={({ isActive }) =>
                          `py-2 text-sm xl:min-w-16 2xl:min-w-24 3xl:min-w-32 4xl:min-w-40 xl:text-md 2xl:text-xl 3xl:text-2xl 4xl:text-4xl font-medium rounded-md transition-colors whitespace-nowrap ${
                            isActive
                              ? "text-phoenix-orange"
                              : "text-phoenix-gray hover:text-phoenix-orange"
                          }`
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </div>

                  {/* Right side - Contact Us and 3 Dots */}
                  <div className="flex items-center gap-2 2xl:gap-4 3xl:gap-5 4xl:gap-6 pl-2 xl:pl-4  shrink-0">
                    <NavLink
                      to="/contact"
                      className="flex items-center justify-center bg-phoenix-orange hover:bg-phoenix-orange-dark text-white text-sm  2xl:text-xl  3xl:text-2xl 4xl:text-4xl font-semibold py-2 px-4 lg:py-1 lg:px-2 xl:px-5  3xl:px-6 4xl:px-8 xl:py-2   rounded-md transition-all shrink-0"
                    >
                      Contact Us
                    </NavLink>

                    <button
                      onClick={() => setSidebarOpen(true)}
                      className="p-1 xl:p-2  2xl:p-4  3xl:p-6 4xl:p-8 hover:bg-muted rounded-md transition-colors shrink-0"
                      aria-label="Open menu"
                    >
                      <div className="flex flex-col gap-0.5 xl:gap-1 2xl:gap-1.5 4xl:gap-2">
                        {[0, 1, 2].map((r) => (
                          <div
                            key={r}
                            className="flex lg:gap-0.5 xl:gap-1 2xl:gap-1.5 4xl:gap-2"
                          >
                            {[0, 1, 2].map((c) => (
                              <span
                                key={c}
                                className=" w-1 h-1 xl:w-1.5 xl:h-1.5 2xl:w-2 2xl:h-2 4xl:w-2.8 4xl:h-2.8 rounded-full bg-foreground"
                              />
                            ))}
                          </div>
                        ))}
                      </div>
                    </button>
                  </div>
                </nav>

                {/* Mobile + Tablet Controls (lg and below hidden - only for xs, sm, md) - Contact Us and 3 Dots + Hamburger on right end */}
                <div className="flex lg:hidden items-center justify-end gap-1 w-full">
                  {/* Contact Us Button - Visible on sm and md, hidden on xs */}
                  <NavLink
                    to="/contact"
                    className="hidden sm:flex items-center justify-center bg-phoenix-orange hover:bg-phoenix-orange-dark text-white text-sm font-semibold py-2 px-5 rounded-md transition-all shrink-0"
                  >
                    Contact Us
                  </NavLink>

                  {/* 3 Dots Menu Button - Visible on xs, sm, md */}
                  <button
                    onClick={() => setSidebarOpen(true)}
                    className="p-2 hover:bg-muted rounded-md transition-colors shrink-0"
                    aria-label="Open menu"
                  >
                    <div className="flex flex-col gap-0.5">
                      {[0, 1, 2].map((r) => (
                        <div key={r} className="flex gap-1">
                          {[0, 1, 2].map((c) => (
                            <span
                              key={c}
                              className="w-1.5 h-1.5 rounded-full bg-foreground"
                            />
                          ))}
                        </div>
                      ))}
                    </div>
                  </button>

                  {/* Mobile Hamburger (for opening mobile menu) */}
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-1.5 hover:bg-muted rounded-md transition-colors"
                    aria-label="Menu"
                  >
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
          className="relative overflow-visible bg-phoenix-green-light/25 py-1.5 lg:py-1 hidden md:block"
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 flex justify-center">
            <div className="relative flex items-center justify-center w-full">
              <div className="inline-flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-2.5  2xl:gap-3 w-full  sm:w-fit max-w-full rounded-xl sm:rounded-2xl bg-phoenix-orange px-2 py-1 sm:px-4 sm:py-1.5 2xl:py-2.5 lg:px-5 2xl:px-6 shadow-md ring-1 ring-black/5 mx-auto">
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
                        serviceHoverEnabled &&
                        hasDropdown &&
                        setOpenServiceBar(null)
                      }
                    >
                      <div
                        className={`min-w-0 sm:min-w-[5rem] lg:min-w-[5.5rem] px-1.5 sm:px-2.5 lg:px-3 py-1 text-sm sm:text-sm 2xl:text-md 3xl:text-lg 4xl:text-xl font-semibold rounded-md sm:rounded-lg transition-all flex items-center justify-center gap-0.5 sm:gap-1 ${
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
                                openServiceBar === group.name
                                  ? null
                                  : group.name,
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
                              <div className="py-1 overflow-y-auto scrollbar-hide scroll-smooth overscroll-contain flex-1 min-h-0">
                              {group.columns.map((col) => {
                                const titleLower = col.title.toLowerCase();
                                const isPersonal =
                                  titleLower.includes("personal");
                                const isBusiness =
                                  titleLower.includes("business");
                                const isHome = titleLower.includes("home");
                                const titleColorClass = isPersonal
                                  ? "text-phoenix-green font-semibold"
                                  : isBusiness
                                    ? "text-phoenix-green font-semibold"
                                    : isHome
                                      ? "text-phoenix-green font-semibold"
                                      : "text-phoenix-orange font-semibold";
                                return (
                                  <div key={col.title}>
                                    {group.columns.length > 1 && (
                                      <div
                                        className={`px-3 py-1.5 text-xs md:text-xs lg:text-sm    uppercase tracking-wider border-b border-phoenix-gray-light/50 ${titleColorClass}`}
                                      >
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
                                          className={`block px-3 py-2 text-sm sm:text-sm 2xl:text-md 3xl:text-lg 4xl:text-xl  rounded-lg mx-0.5 transition-all duration-200 ${
                                            isItemActive
                                              ? "bg-phoenix-green-light/50 text-phoenix-orange font-semibold"
                                              : "text-foreground hover:bg-phoenix-green-light/40 hover:text-phoenix-orange"
                                          }`}
                                          onClick={() =>
                                            setOpenServiceBar(null)
                                          }
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
            <div
              className="max-w-7xl mx-auto px-4 py-4 space-y-1 max-h-[70vh] overflow-y-auto scrollbar-hide overflow-x-hidden overscroll-y-contain"
              style={{ scrollBehavior: "smooth" }}
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-phoenix-orange bg-phoenix-orange/10"
                        : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
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
                    path === group.href || path.startsWith(`${group.href}/`);
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
                      isActive
                        ? "text-phoenix-orange bg-phoenix-orange/10"
                        : "text-foreground hover:text-phoenix-orange hover:bg-phoenix-orange/5"
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </NavLink>
              ))}

              {/* xs only: Contact in drawer; sm+ uses header button */}
              {/* Contact Us in mobile drawer - only for xs (very small screens) */}
              <NavLink
                to="/contact"
                className="mt-3 block xs:block sm:hidden"
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
