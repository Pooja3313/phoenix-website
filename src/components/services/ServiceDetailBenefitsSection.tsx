import { TrendingUp, ShieldCheck, Award } from "lucide-react";

interface Benefit {
  title: string;
  description: string;
  iconName: string;
}

interface ServiceDetailBenefitsSectionProps {
  title?: string;
  subtitle?: string;
  benefitItems: Benefit[];
  image?: string;
}

const ServiceDetailBenefitsSection = ({
  title = "What are Benefits of Buy to Let Mortgage?",
  subtitle = "Obtaining a buy to let mortgage gives you a range of investor benefits, meaning that you'll benefit beyond a monthly rental income and property appreciation",
  benefitItems,
  image,
}: ServiceDetailBenefitsSectionProps) => {
  // Icon mapping
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Portfolio Diversification":
        return TrendingUp;
      case "Inflation Protection":
        return ShieldCheck;
      case "Tax Advantages":
        return Award;
      default:
        return TrendingUp;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* ==================== TITLE & SUBTITLE - CENTER ALIGNED ==================== */}
        <div className="text-center mb-16">
          <h2 className="font-handwritten text-4xl md:text-6xl font-bold text-accent tracking-tight">
            {title}
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* ==================== LEFT SIDE - Benefits ==================== */}
          <div className="space-y-12">
            {/* Benefits List */}
            <div className="space-y-10">
              {benefitItems.map((item, index) => {
                const IconComponent = getIcon(item.iconName);
                
                return (
                  <div key={index} className="flex gap-6 group">
                    {/* Orange Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-orange-600" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[15.8px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ==================== RIGHT SIDE - Couple Image ==================== */}
          <div className="relative flex justify-center pt-8">
            <div className="relative w-full max-w-md">
              {/* Main Couple Image */}
              <img
                src={image || "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070"}
                alt="Happy couple discussing buy to let mortgage"
                className="w-full rounded-3xl shadow-2xl object-cover"
              />

              {/* Large Orange Circle Background */}
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-orange-500 rounded-full -z-10" />

              {/* Floating Orange Bubble with House & % */}
              <div className="absolute -top-8 right-16 bg-white rounded-3xl shadow-xl px-6 py-4 flex items-center gap-4 border border-orange-100">
                <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl">
                  ??
                </div>
                <div className="text-orange-600 text-4xl font-bold">%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
// 
export default ServiceDetailBenefitsSection;

// import { TrendingUp, ShieldCheck, Award } from "lucide-react";

// interface Benefit {
//   title: string;
//   description: string;
//   iconName: string;
// }

// interface ServiceDetailBenefitsSectionProps {
//   title?: string;
//   subtitle?: string;
//   benefitItems: Benefit[];
//   image?: string;
// }

// const ServiceDetailBenefitsSection = ({
//   title = "What are Benefits of Buy to Let Mortgage?",
//   subtitle = "Obtaining a buy to let mortgage gives you a range of investor benefits, meaning that you'll benefit beyond a monthly rental income and property appreciation",
//   benefitItems,
//   image,
// }: ServiceDetailBenefitsSectionProps) => {
//   // Icon mapping
//   const getIcon = (iconName: string) => {
//     switch (iconName) {
//       case "Portfolio Diversification":
//         return TrendingUp;
//       case "Inflation Protection":
//         return ShieldCheck;
//       case "Tax Advantages":
//         return Award;
//       default:
//         return TrendingUp;
//     }
//   };

//   return (
//     <section className="py-20 bg-white">
//       <div className="container mx-auto px-4 max-w-6xl">
        
//         {/* ==================== TITLE & SUBTITLE - CENTER ALIGNED ==================== */}
//         <div className="text-center mb-16">
//           <h2 className=" font-script text-4xl md:text-5xl font-bold text-foreground tracking-tight">
//             {title}
//           </h2>
//           <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
//             {subtitle}
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-16 items-start">
          
//           {/* ==================== LEFT SIDE - Benefits ==================== */}
//           <div className="space-y-12">
//             {/* Benefits List */}
//             <div className="space-y-10">
//               {benefitItems.map((item, index) => {
//                 const IconComponent = getIcon(item.iconName);
                
//                 return (
//                   <div key={index} className="flex gap-6 group">
//                     {/* Orange Icon */}
//                     <div className="flex-shrink-0 w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-200 transition-all duration-300">
//                       <IconComponent className="w-8 h-8 text-orange-600" />
//                     </div>

//                     <div>
//                       <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//                         {item.title}
//                       </h3>
//                       <p className="text-gray-600 leading-relaxed text-[15.8px]">
//                         {item.description}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* ==================== RIGHT SIDE - Couple Image ==================== */}
//           <div className="relative flex justify-center pt-8">
//             <div className="relative w-full max-w-md">
//               {/* Main Couple Image */}
//               <img
//                 src={image || "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070"}
//                 alt="Happy couple discussing buy to let mortgage"
//                 className="w-full rounded-3xl shadow-2xl object-cover"
//               />

//               {/* Large Orange Circle Background */}
//               <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-orange-500 rounded-full -z-10" />

//               {/* Floating Orange Bubble with House & % */}
//               <div className="absolute -top-8 right-16 bg-white rounded-3xl shadow-xl px-6 py-4 flex items-center gap-4 border border-orange-100">
//                 <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl">
//                   ??
//                 </div>
//                 <div className="text-orange-600 text-4xl font-bold">%</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceDetailBenefitsSection;