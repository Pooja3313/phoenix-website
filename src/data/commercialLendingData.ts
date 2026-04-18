export interface BenefitItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  benefitsTitle: string;
  benefitSubtitle?: string;
  benefitItems: BenefitItem[];
  benefitsImage?: string;
  features: { title: string; description: string; icon: string }[];
  faqs?: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  heroImage: string;
  offerDescription:string;
   
}

export const commercialLendingServices: ServiceItem[] = [
  {
    slug: "bridging-loan",
    title: "Bridging Loans",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Explore bridging loans with Phoenix Finserv for quick access to capital for property purchases, renovations or investments. Short-term financing to bridge the gap between transactions.",
    whyTitle: "Why Choose Bridging Loan?",
    heroImage: "/images/bridging_Loan/bridging-loan3.jpg",
    whyContent: [
      "A bridging loan in the UK is a short-term financing option designed to \"bridge\" the gap when funds are needed quickly, often between buying a new property and selling an existing one. It provides fast access to capital, making it useful for property purchases, renovations, or covering urgent financial commitments. While interest rates are typically higher than standard mortgages, the flexibility and speed of approval make bridging loans a valuable solution for both homeowners and investors. At Phoenix Financial Advisers, we specialise in guiding clients through bridging finance, ensuring you secure the right option tailored to your circumstances.",
    ],
    benefitsTitle: "What are Benefits of Bridging Loan?",
    benefitSubtitle: "A bridging loan is a kind of short-term financing that's used to 'bridge' the gap between the purchase of a new property and the sale of your old one. Here are a few benefits of Bridging Loan",
    benefitItems: [
      {
        title: "Quick Access to Funds",
        description: "Receive financing faster than traditional loans, helping you act on time-sensitive opportunities.",
        icon: "Clock"
      },
      {
        title: "Flexible Repayment Options",
        description: "Short-term solutions tailored to your business needs without long-term commitments.",
        icon: "RefreshCw"
      },
      {
        title: "Bridge Financial Gaps",
        description: "Cover temporary cash flow shortages, property purchases, or other urgent expenses.",
        icon: "Link"
      },
      {
        title: "Support Growth Opportunities",
        description: "Secure assets or investments immediately, enabling expansion or strategic moves.",
        icon: "TrendingUp"
      },
    ],
    benefitsImage: "/images/bridging_Loan/bridging-loan4.jpg",   // Copied from whyChooseImage
  offerDescription:"Commercial financing is suitable for a wide range of individuals and organisations, whether talking about small and medium-sized enterprises (SMEs), property developers, non-profit organisations or large corporations.",
    features: [
  {
    title: "Closed Bridging Loans",
    description: "Short-term loans with a clear repayment strategy, typically tied to the sale of a specific property or a confirmed funding source. These usually offer lower interest rates due to reduced risk for the lender.",
    icon: "Target"                    
  },
  {
    title: "Open Bridging Loans",
    description: "Flexible short-term loans without a fixed repayment date. Ideal for borrowers with uncertain sale timelines or complex transactions where the exit strategy is not yet confirmed.",
    icon: "Clock"                  
  },
  {
    title: "Regulated Bridging Loans",
    description: "FCA-regulated bridging loans designed for residential properties where the borrower or their immediate family intends to live. These come with strong consumer protections and are limited to a maximum of 12 months.",
    icon: "Shield"               
  },
  {
    title: "Commercial Bridging Loans",
    description: "Short-term finance tailored for commercial properties, business premises, or investment opportunities. Suitable for purchases, refurbishments, developments, or bridging until long-term funding is secured.",
    icon: "Building2"                 
  },
],
    faqs: [
      {
        question: "How quickly can I get a bridging loan?",
        answer: "Bridging loans can be approved and funded in as little as 7?14 days, making them ideal for time-sensitive property purchases or auctions."
      },
      {
        question: "What can I use a bridging loan for?",
        answer: "Common uses include auction purchases, chain breaks, property refurbishments, and short-term funding while selling an existing property."
      }
    ],
    ctaTitle: "Looking for Bridging Loans?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of commercial lending options. Contact us today to discuss your business finance requirements and secure the ideal financing solution."
  },
  {
    slug: "business-finance",
    title: "Business Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Secure tailored business loans for your needs, ideal for growth and expansion. Unlock capital for your business today with flexible repayment options suited to your cash flow.",
    whyTitle: "Why Choose Business Finance?",
    heroImage: "/images/Business_Finance/Business_Finance1.jpg",
    whyContent: [
      "Business finance is essential for helping companies manage cash flow, invest in growth, and seize new opportunities. It can be used for a wide range of needs, from purchasing equipment and inventory to funding expansion, marketing campaigns, or even acquiring another business. Unlike personal finance, business finance is tailored to support the unique demands of running and scaling an organisation, providing the resources needed to remain competitive in market. At Phoenix Financial Advisers, we work closely with businesses to identify the most suitable finance options, enabling them to achieve long-term stability and sustainable growth.",
    ],
    benefitsTitle: "What are Benefits of Business Finance?",
    benefitSubtitle: "Empower your business with tailored funding solutions that support growth, stability and long-term success.",
    benefitItems: [
      {
        title: "Fuel Growth & Expansion",
        description: "Access funds to enter new markets, acquire businesses or scale operations with confidence.",
        icon: "TrendingUp"
      },
      {
        title: "Upgrade & Expand Facilities",
        description: "Renovate existing spaces, expand capacity or purchase essential equipment and inventory.",
        icon: "Lightbulb"
      },
      {
        title: "Stabilize Cash Flow",
        description: "Manage day-to-day financial needs effectively, ensuring smooth operations without disruptions.",
        icon: "HandCoins"
      },
      {
        title: "Unlock Growth Potential",
        description: "Turn land or property opportunities into profitable developments without upfront financial strain.",
        icon: "Target"
      },
    ],
    benefitsImage: "/images/Business_Finance/Business_Finance3.jpg",   // Copied from whyChooseImage
   offerDescription:"",
    features: [],
 faqs: [
      {
        question: "How do I become eligible for a business loan?",
        answer: "Eligibility depends on your business trading history, annual turnover, credit score, cash flow, and ability to repay. Lenders also consider the purpose of the loan and your personal guarantee in many cases."
      },
      {
        question: "How long does it take to get a business loan in the UK?",
        answer: "It varies by lender type. Alternative lenders can approve and fund in a few days to 2 weeks, while traditional banks may take 4?8 weeks or longer."
      },
      {
        question: "Can I repay my business loan early?",
        answer: "Most business loans allow early repayment, but some charge an early repayment charge (ERC) or exit fee. We always recommend checking the terms before signing."
      }
    ],
    ctaTitle: "Looking for Business Finance?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of commercial lending options. Contact us today to discuss your business finance requirements and secure the ideal financing solution."
  },
  {
    slug: "property-development-finance",
    title: "Property Development Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Explore property development finance options tailored to your projects. Secure funding for your development plans effortlessly, from ground-up builds to conversions and refurbishments.",
    whyTitle: "Why Choose Property Development Finance?",
    heroImage: "/images/Commercial-Lending/Commercial-Lending4.jpg",
    whyContent: [
      "Property development finance is a flexible funding option designed to support the construction, renovation, or conversion of properties, whether for residential, commercial, or mixed-use projects. It provides developers and investors with access to capital at various stages of a project, from purchasing land to completing the build. Unlike traditional mortgages, this type of finance is tailored to the unique timelines and costs involved in development, offering staged payments that align with progress. At Phoenix Financial Advisers, we help clients navigate the complexities of property development finance, ensuring they secure the right solution to bring their vision to life while maximising returns.",
    ],
    benefitsTitle: "What are Benefits of Property Development Finance?",
    benefitSubtitle: "Planning a new build or major refurbishment? Property Development Finance can help turn your plans into reality. Here are some of the major benefits you can expect",
    benefitItems: [
      {
        title: "Access to Large-Scale Funding",
        description: "Secure the capital required to take on ambitious property projects with confidence.",
        icon: "HandCoins"
      },
      {
        title: "Staged Drawdowns",
        description: "Funds released in phases to match project milestones, improving cash flow management.",
        icon: "RefreshCw"
      },
      {
        title: "Flexible Terms",
        description: "Finance structured around development timelines rather than rigid repayment schedules.",
        icon: "FileText"
      },
      {
        title: "Unlock Growth Potential",
        description: "Turn land or property opportunities into profitable developments without upfront financial strain.",
        icon: "TrendingUp"
      },
    ],
    benefitsImage: "/images/Trust_planning/trust-planning2.jpg",   // Copied from whyChooseImage
    offerDescription:"",
    features: [],
  faqs: [
      {
        question: "How much can I borrow for property development?",
        answer: "Loan amounts are usually based on a percentage of the project cost (Loan to Cost) or the Gross Development Value (GDV). Lenders typically fund 60?75% of costs, sometimes up to 85?90% with mezzanine finance."
      },
      {
        question: "Can I change my plan later?",
        answer: "Yes, many development finance lenders allow flexibility to adjust plans, but significant changes may require re-approval and could affect the loan terms."
      },
      {
        question: "Do you have to give a personal guarantee?",
        answer: "In most cases, especially for smaller developers, a personal guarantee is required. Some larger or experienced developers can negotiate limited or no personal guarantee."
      }
    ],
    ctaTitle: "Looking for Property Development Finance?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of commercial lending options. Contact us today to discuss your business finance requirements and secure the ideal financing solution."
  },
  {
    slug: "asset-finance",
    title: "Asset Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Access asset finance solutions for your business needs, from equipment purchases to vehicle leasing. Drive your business forward with ease and preserve your working capital.",
    whyTitle: "Why Choose Asset Finance?",
    heroImage: "/images/Business_Finance/Business_Finance2.jpg",
    whyContent: [
      "Asset finance is a flexible way for businesses to acquire vehicles, machinery, technology, or other essential equipment without the need for large upfront costs. Instead of tying up valuable working capital, payments are spread over an agreed period, making it easier to manage cash flow while still accessing the tools needed for growth. It can also unlock value from existing assets, providing funds that can be reinvested back into the business. At Phoenix Financial Advisers, we help clients find the right asset finance solution, ensuring they can invest in their future with confidence and financial stability.",
    ],
    benefitsTitle: "What are Benefits of Asset Finance?",
    benefitSubtitle: "The advantage of asset financing is that the initial cost for vehicles, machinery or indeed, any kind of essential business equipment can be met without draining your cash reserves. The asset itself serves as collateral, meaning you can preserve your working capital while at the same time maintaining liquidity.",
    benefitItems: [
      {
        title: "Preserve Working Capital",
        description: "Acquire essential business equipment without draining your cash reserves, keeping funds available for other operations.",
        icon: "HandShake"
      },
      {
        title: "Flexible Financing Options",
        description: "Asset finance offers adaptable repayment terms, allowing businesses to manage cash flow efficiently.",
        icon: "RefreshCw"
      },
      {
        title: "Tax Advantages",
        description: "Certain asset finance arrangements can provide tax benefits, reducing overall business costs.",
        icon: "Receipt"
      },
      {
        title: "Maintain Competitiveness",
        description: "By investing in critical machinery, vehicles, or IT infrastructure, your business stays modern and competitive in its sector.",
        icon: "TrendingUp"
      },
    ],
    benefitsImage: "/images/Business_Finance/Business_Finance4.jpg",   // Copied from whyChooseImage
    offerDescription:"",
    features: [],
   
   faqs: [
      {
        question: "What is the difference between Hire Purchase and Leasing?",
        answer: "Hire Purchase leads to ownership of the asset at the end of the term. Leasing allows you to use the asset without owning it, often with lower monthly payments and the option to upgrade."
      },
      {
        question: "Can I finance used equipment?",
        answer: "Yes, most asset finance providers offer funding for both new and used machinery, vehicles, and equipment."
      }
    ],
    ctaTitle: "Looking for Asset Finance?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of commercial lending options. Contact us today to discuss your business finance requirements and secure the ideal financing solution."
  },
  {
    slug: "buy-to-let-finance",
    title: "Buy to Let Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Discover buy-to-let finance options for property investments. Secure financing tailored to your unique rental property goals and portfolio expansion plans.",
    whyTitle: "Why Choose Phoenix Finserv for Buy to Let Finance?",
    heroImage: "/images/Buy-to-Let-Finance/buy-to-let-finance.jpg",
    whyContent: [
      "Whether you?re looking to expand your investment portfolio or diversify your assets, understanding what's involved with a commercial buy-to-let mortgage is crucial. At Phoenix, we can support you with options around lenders who would finance these investment opportunities. According to recent figures, the average yearly commercial rental property yield is 4.5%, meaning that this type of investment can offer a significant return - and that's before you consider the building's overall appreciation over time. Our experts can search buy-to-let mortgage deals from all of the UK's major lenders to find you the best option.",
    ],
    benefitsTitle: "What are Benefits of Buy to Let Finance?",
    benefitSubtitle: "Investing in property can be a smart way to build long-term wealth. Here's how Buy to Let Finance can make your investment journey easier and more rewarding.",
    benefitItems: [
      {
        title: "Steady Rental Income",
        description: "Investing in buy-to-let properties provides a reliable income stream, especially with long-term tenant leases.",
        icon: "Landmark"
      },
      {
        title: "Capital Appreciation",
        description: "Over time, the property you purchase is likely to increase in value, enhancing your overall investment.",
        icon: "TrendingUp"
      },
      {
        title: "Tax Advantages",
        description: "Mortgage interest and property-related expenses can be deducted, reducing your taxable income.",
        icon: "Receipt"
      },
      {
        title: "Prime Location Benefits",
        description: "Properties in desirable areas tend to attract better tenants and retain higher value, increasing profitability.",
        icon: "MapPin"
      },
    ],
    benefitsImage: "/images/Buy-to-Let-Finance/buy-to-let-finance1.jpg",   // Copied from whyChooseImage
    
    offerDescription:"",
    features: [],
    faqs: [
      {
        question: "Can I buy a commercial buy-to-let property as a first-time buyer?",
        answer: "It is possible but more difficult. Lenders usually prefer applicants with some property or letting experience."
      },
      {
        question: "How much deposit is needed for a commercial buy-to-let mortgage?",
        answer: "Typically 25%?40% deposit is required for commercial buy-to-let properties, higher than residential buy-to-let."
      },
      {
        question: "How much can I borrow for a commercial buy-to-let property?",
        answer: "Lending is usually based on rental income coverage (ICR) rather than personal income. Most lenders look for rental income to cover 125%?145% of the mortgage payments."
      }
    ],
    ctaTitle: "Looking for Buy to Let Finance?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of commercial lending options. Contact us today to discuss your business finance requirements and secure the ideal financing solution."
  },
  {
    slug: "commercial-mortgage",
    title: "Commercial Mortgage",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Unlock growth opportunities with commercial mortgages. Access financing for business premises, whether owner-occupied or investment properties, with competitive rates and flexible terms.",
    whyTitle: "Why Choose Phoenix Finserv for Commercial Mortgages?",
    heroImage: "/images/commercial-mortgage/commercial-mortgage.jpg",
    whyContent: [
      "A commercial loan is a financing solution designed specifically to support businesses in meeting their larger financial needs, such as purchasing property, funding expansion or investing in major assets. Unlike personal loans, commercial loans are structured to suit the scale and complexity of business operations, often offering flexible repayment terms and competitive rates. They provide companies with the capital required to grow, innovate, and remain resilient in a competitive marketplace. At Phoenix Financial Advisers, we guide businesses through the process of securing the right commercial loan, ensuring they have the financial foundation to achieve their goals.",
    ],
    benefitsTitle: "What are Benefits of Commercial Mortgage?",
    benefitSubtitle: "Empower your business with tailored funding solutions that support growth, stability and long-term success.",
    benefitItems: [
      {
        title: "Access to Larger Loan Amounts",
        description: "Secure higher funding compared to standard business loans, ideal for property purchases or expansions.",
        icon: "Landmark"
      },
      {
        title: "Long-Term Stability",
        description: "Benefit from fixed or variable repayment options, providing predictable financial planning.",
        icon: "Calendar"
      },
      {
        title: "Business Growth Opportunity",
        description: "Leverage property ownership to expand operations and strengthen your business presence.",
        icon: "TrendingUp"
      },
      {
        title: "Potential Investment Returns",
        description: "Property can appreciate over time, offering both equity growth and rental income opportunities.",
        icon: "TrendingUp"
      },
    ],
    benefitsImage: "/images/commercial-mortgage/commercial-mortgage1.jpg",   // Copied from whyChooseImage
    offerDescription:"",
    features: [],
  faqs: [
      {
        question: "What is the process of obtaining a commercial mortgage?",
        answer: "The process includes initial assessment, submitting financial documents, property valuation, credit checks, and legal work. It usually takes 6?12 weeks from application to completion."
      },
      {
        question: "What are the fees involved in a commercial mortgage?",
        answer: "Common fees include arrangement fees (1?2%), valuation fees, legal fees, and possibly broker fees."
      },
      {
        question: "How much deposit is needed for a commercial mortgage?",
        answer: "Deposit requirements typically range from 20% to 40%, depending on the property type, borrower strength, and lender policy."
      }
    ],
    ctaTitle: "Looking for Commercial Mortgage?",
    ctaDescription: "Phoenix is here to help. Our advisers are experienced in financing and have access to a wide range of commercial lending options. Contact us today to discuss your business finance requirements and secure the ideal financing solution."
  },
];