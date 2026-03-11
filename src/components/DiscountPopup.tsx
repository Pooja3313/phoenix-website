// _____________OLD DISCOUNT POPUP - CORRECTED_____________//


// import { useState, useEffect } from "react";
// import { X, Sparkles } from "lucide-react";

// const DiscountPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsOpen(true), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => {
//       setIsOpen(false);
//       setIsClosing(false);
//     }, 300);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-[100] flex items-center justify-center">
//       {/* Overlay */}
//       <div
//         className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm ${
//           isClosing ? "opacity-0 transition-opacity duration-300" : "animate-overlay-in"
//         }`}
//         onClick={handleClose}
//       />

//       {/* Popup - perfectly centered */}
//       <div
//         className={`relative w-[90%] max-w-md rounded-2xl border border-phoenix-gray-dark/30 bg-[#f4f6f8] p-8 text-phoenix-gray-dark shadow-2xl ${
//           isClosing ? "animate-popup-exit" : "animate-popup-enter"
//         }`}
//       >
//         {/* Close button */}
//         <button
//           onClick={handleClose}
//           className="absolute right-4 top-4 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
//         >
//           <X className="h-5 w-5" />
//         </button>

//         {/* Content */}
//         <div className="text-center">
//           <div className="mb-2 flex items-center justify-center gap-2">
//             <Sparkles className="h-5 w-5 text-phoenix-green" />
//             <span className="font-body text-sm font-semibold uppercase tracking-widest text-primary">
//               Limited Offer
//             </span>
//             <Sparkles className="h-5 w-5 text-phoenix-green" />
//           </div>

//           <h3 className="font-display text-2xl font-bold text-phoenix-gray-dark">
//             Revitalise Your Finances
//           </h3>

//           {/* Big 30% OFF */}
//           <div className="my-6">
//             <span className="font-display text-7xl font-black text-phoenix-green animate-glow-pulse inline-block">
//               30%
//             </span>
//             <span className="ml-2 font-display text-4xl font-bold text-phoenix-green">
//               OFF
//             </span>
//           </div>

//           <p className="mb-6 font-body text-base text-phoenix-gray-dark/80">
//             First <span className="font-semibold text-phoenix-green">3 months</span> of Premium Financial Services
//           </p>

//           <button
//             onClick={handleClose}
//             className="w-full rounded-xl bg-phoenix-green px-6 py-3.5 font-body text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-phoenix-green/30"
//           >
//             Claim Your Discount
//           </button>

//           <p className="mt-3 font-body text-xs text-phoenix-gray-dark/70">
//             *Terms & conditions apply. Offer valid for new clients only.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DiscountPopup;

// // import { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { X, Sparkles } from 'lucide-react';

// // const DiscountPopup = () => {
// //   const [isOpen, setIsOpen] = useState(false);
// //   const [count, setCount] = useState(0);
// //   const [showBurst, setShowBurst] = useState(false);

// //  useEffect(() => {
// //   setIsOpen(true);
// //   setShowBurst(true);
// //   // Comment out localStorage for now
// //   // localStorage.setItem('phoenix-discount-seen', 'true');
// // }, []);

// //   // Count-up animation
// //   useEffect(() => {
// //     if (!isOpen) return;
// //     let start = 0;
// //     const end = 30;
// //     const duration = 2200;
// //     const stepTime = 35;
// //     const steps = duration / stepTime;

// //     const timer = setInterval(() => {
// //       start += Math.ceil(end / steps);
// //       if (start >= end) {
// //         setCount(end);
// //         clearInterval(timer);
// //       } else {
// //         setCount(start);
// //       }
// //     }, stepTime);

// //     return () => clearInterval(timer);
// //   }, [isOpen]);

// //   const handleClose = () => {
// //     setShowBurst(false);
// //     setTimeout(() => setIsOpen(false), 400);
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <AnimatePresence>
// //       <motion.div
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         exit={{ opacity: 0 }}
// //         className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
// //       >
// //         {/* Overlay */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: 0.4 }}
// //           className="absolute inset-0 bg-phoenix-gray-dark/70 backdrop-blur-xs"
// //           onClick={handleClose}
// //         />

// //         {/* Floating particles */}
// //         <div className="absolute inset-0 pointer-events-none overflow-hidden">
// //           {[...Array(18)].map((_, i) => (
// //             <div
// //               key={i}
// //               className={`absolute w-2 h-2 rounded-full bg-gradient-to-br from-phoenix-orange to-phoenix-green opacity-60 ${
// //                 i % 3 === 0 ? 'animate-float-slow' :
// //                 i % 3 === 1 ? 'animate-float-medium' :
// //                 'animate-float-fast'
// //               }`}
// //               style={{
// //                 left: `${Math.random() * 100}%`,
// //                 top: '100%',
// //                 animationDelay: `${Math.random() * 10}s`,
// //               }}
// //             />
// //           ))}
// //         </div>

// //         {/* Confetti burst on open */}
// //         {showBurst && (
// //           <div className="absolute inset-0 pointer-events-none">
// //             {[...Array(10)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="absolute w-3 h-3 rounded-full bg-gradient-to-br from-phoenix-orange via-phoenix-green to-white animate-sparkle-burst"
// //                 style={{
// //                   left: '50%',
// //                   top: '50%',
// //                   transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`,
// //                   animationDelay: `${i * 0.08}s`,
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         )}

// //         {/* Main popup card */}
// //         <motion.div
// //           initial={{ y: '100vh', scale: 0.8 }}
// //           animate={{ y: 0, scale: 1 }}
// //           exit={{ y: '100vh', scale: 0.9 }}
// //           transition={{ type: 'spring', stiffness: 280, damping: 24 }}
// //           className="relative w-full max-w-md"
// //         >
// //           <div className="relative rounded-2xl border-2 border-transparent bg-gradient-to-br from-phoenix-orange/10 via-transparent to-phoenix-green/10 p-[2px]">
// //             <div className="bg-white/80 backdrop-blur-2xl rounded-2xl p-7 shadow-2xl relative overflow-hidden">
// //               {/* Close button */}
// //               <button
// //                 onClick={handleClose}
// //                 className="absolute right-4 top-4 z-10 rounded-full p-1.5 text-phoenix-gray-dark hover:bg-white/40 transition-colors"
// //               >
// //                 <X size={20} />
// //               </button>

// //               <div className="text-center space-y-5">
// //                 {/* Badge */}
// //                               {/* Badge - continuous sparkling forever */}
// // {/* <div className="flex items-center justify-center gap-3 mb-4">
// //   <Sparkles 
// //     size={20} 
// //     className="text-phoenix-orange animate-sparkle-loop drop-shadow-sm" 
// //   />
  
// //   <span 
// //     className="
// //       text-sm font-bold uppercase tracking-widest 
// //       text-phoenix-orange 
// //       bg-phoenix-orange/10 
// //       px-4 py-1.5 rounded-full 
// //       animate-subtle-glow
// //     "
// //   >
// //     Limited Offer
// //   </span>
  
// //   <Sparkles 
// //     size={20} 
// //     className="text-phoenix-orange animate-sparkle-loop drop-shadow-sm" 
// //     style={{ animationDelay: '1.2s' }} // makes left & right sparkle alternate nicely
// //   />
// // </div> */}

// //                 <div className="flex items-center justify-center gap-2">
// //                   <Sparkles size={18} className="text-phoenix-orange animate-sparkle-burst" />
// //                   <span className="text-xs font-bold uppercase tracking-wider text-phoenix-orange bg-phoenix-orange/10 px-3 py-1 rounded-full">
// //                     Limited Offer
// //                   </span>
// //                   <Sparkles size={18} className="text-phoenix-orange animate-sparkle-burst" style={{ animationDelay: '0.7s' }} />
// //                 </div>

// //                 <h3 className="text-2xl font-display font-black text-phoenix-gray-dark tracking-tight">
// //                   Revitalise Your Finances
// //                 </h3>

// //                 {/* Discount with rotating ring */}
// //                 <div className="relative my-8">
// //                   <div className="absolute inset-0 flex items-center justify-center">
// //                     <div className="w-44 h-44 rounded-full border-4 border-phoenix-orange/20 animate-rotate-ring opacity-60" />
// //                   </div>

// //                   <div className="relative">
// //                     <span
// //                       className={`text-7xl font-black bg-gradient-to-r from-phoenix-orange to-phoenix-green bg-clip-text text-transparent animate-glow-pulse inline-block ${
// //                         count === 30 ? 'scale-100' : 'scale-[1.1]'
// //                       }`}
// //                     >
// //                       {count}%
// //                     </span>
// //                     <span className="ml-2 text-4xl font-bold text-phoenix-gray-dark align-middle">
// //                       OFF
// //                     </span>
// //                   </div>
// //                 </div>

// //                 <p className="text-base text-phoenix-gray-dark/80 font-medium">
// //                   First <span className="font-bold text-phoenix-green">3 months</span> of Premium Financial Services
// //                 </p>

// //                 {/* CTA */}
// //                 <motion.button
// //                   whileHover={{ scale: 1.04 }}
// //                   whileTap={{ scale: 0.97 }}
// //                   onClick={() => window.location.href = '/contact'}
// //                   className="relative w-full py-4 px-6 rounded-xl bg-gradient-to-r from-phoenix-green to-phoenix-orange text-white font-bold text-base shadow-lg overflow-hidden group"
// //                 >
// //                   <span className="relative z-10">Claim Your Discount</span>
// //                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer-sweep" />
// //                 </motion.button>

// //                 <p className="text-xs text-phoenix-gray-dark/60 italic pt-2">
// //                   *Terms & conditions apply. Offer valid for new clients only.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </motion.div>
// //     </AnimatePresence>
// //   );
// // };

// // export default DiscountPopup;




import { useState, useEffect } from "react";
import { X, Sparkles, Gift } from "lucide-react";

const DiscountPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => { setIsOpen(false); setIsClosing(false); }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className={`absolute inset-0 bg-foreground/60 backdrop-blur-sm ${isClosing ? "opacity-0 transition-opacity duration-300" : "animate-overlay-in"}`} onClick={handleClose} />

      <div className={`relative w-[90%] max-w-md rounded-3xl overflow-hidden shadow-2xl ${isClosing ? "animate-popup-exit" : "animate-popup-enter"}`}>
        {/* Top gradient bar */}
        <div className="h-2 bg-gradient-to-r from-primary via-accent to-phoenix-gold" />
        
        <div className="bg-card p-8 relative">
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[80px]" />
          
          <button onClick={handleClose} className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-all hover:bg-destructive/10 hover:text-destructive hover:rotate-90 duration-300 z-10">
            <X className="h-5 w-5" />
          </button>

          <div className="text-center relative z-10">
            {/* Gift icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 animate-bounce" style={{ animationDuration: '2s' }}>
              <Gift className="h-8 w-8 text-primary" />
            </div>

            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-phoenix-gold" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Special Offer</span>
              <Sparkles className="h-4 w-4 text-phoenix-gold" />
            </div>

            <h3 className="font-handwritten text-3xl text-foreground mb-1">
              Revitalise Your Finances
            </h3>

            <div className="my-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-2xl" />
              <span className="font-handwritten text-8xl font-bold text-primary inline-block relative">
                30%
                <span className="absolute -top-2 -right-6 text-lg font-sans font-bold text-accent bg-accent/10 px-2 py-1 rounded-lg">OFF</span>
              </span>
            </div>

            <p className="text-muted-foreground mb-6">
              First <span className="font-bold text-accent">3 months</span> of Premium Financial Services
            </p>

            <button
              onClick={handleClose}
              className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-bold text-primary-foreground transition-all hover:bg-phoenix-orange-dark hover:shadow-lg hover:shadow-primary/30 uppercase tracking-wider group"
            >
              Claim Your Discount
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>

            <p className="mt-3 text-xs text-muted-foreground">
              *Terms & conditions apply. New clients only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountPopup;
