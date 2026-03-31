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
  // whyChooseImage: string;   
}

export const commercialLendingServices: ServiceItem[] = [
  {
    slug: "bridging-loan",
    title: "Bridging Loans",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Explore bridging loans with Phoenix Finserv for quick access to capital for property purchases, renovations or investments. Short-term financing to bridge the gap between transactions.",
    whyTitle: "Why Choose Bridging Loan?",
    heroImage: "/images/bridging_Loan/bridging-loan3.jpg",
    // whyChooseImage: "/images/bridging_Loan/bridging-loan4.jpg",   // Commented as requested
    whyContent: [
      "A bridging loan in the UK is a short-term financing option designed to \"bridge\" the gap when funds are needed quickly, often between buying a new property and selling an existing one. It provides fast access to capital, making it useful for property purchases, renovations, or covering urgent financial commitments. While interest rates are typically higher than standard mortgages, the flexibility and speed of approval make bridging loans a valuable solution for both homeowners and investors. At Wealthmax Financial Advisers, we specialise in guiding clients through bridging finance, ensuring you secure the right option tailored to your circumstances.",
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
    features: [
      { title: "Auction Finance", description: "Complete your auction purchase within the required 28-day timeframe with fast bridging finance tailored to auction buyers.", icon: "Hammer" },
      { title: "Chain Break Finance", description: "Don't let a broken property chain derail your purchase ? bridge the gap until your existing property sells.", icon: "Link2Off" },
      { title: "Refurbishment Finance", description: "Fund property renovations and improvements with bridging loans that take into account the projected uplift in value.", icon: "Paintbrush" },
      { title: "Commercial Bridging", description: "Short-term finance for commercial property acquisitions, conversions, and investment opportunities.", icon: "Building2" },
    ],
    ctaTitle: "Need Fast Finance?",
    ctaDescription: "Bridging loans can provide the speed and flexibility you need. Speak to our advisers today about your bridging finance requirements."
  },
  {
    slug: "business-finance",
    title: "Business Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Secure tailored business loans for your needs, ideal for growth and expansion. Unlock capital for your business today with flexible repayment options suited to your cash flow.",
    whyTitle: "Why Choose Business Finance?",
    heroImage: "/images/Business_Finance/Business_Finance1.jpg",
    // whyChooseImage: "/images/Business_Finance/Business_Finance3.jpg",   // Commented
    whyContent: [
      "Business finance is essential for helping companies manage cash flow, invest in growth, and seize new opportunities. It can be used for a wide range of needs, from purchasing equipment and inventory to funding expansion, marketing campaigns, or even acquiring another business. Unlike personal finance, business finance is tailored to support the unique demands of running and scaling an organisation, providing the resources needed to remain competitive in market. At Wealthmax Financial Advisers, we work closely with businesses to identify the most suitable finance options, enabling them to achieve long-term stability and sustainable growth.",
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
    features: [
      { title: "Term Loans", description: "Traditional business loans with fixed or variable rates, repaid over an agreed period ? ideal for planned investments and expansion.", icon: "Calendar" },
      { title: "Revolving Credit Facilities", description: "Flexible borrowing that allows you to draw down and repay funds as needed, only paying interest on what you use.", icon: "RefreshCw" },
      { title: "Invoice Finance", description: "Release cash tied up in unpaid invoices to improve your working capital position and maintain healthy cash flow.", icon: "FileText" },
      { title: "Start-Up Finance", description: "Funding options for new businesses, including government-backed Start Up Loans and alternative finance solutions.", icon: "Rocket" },
    ],
    ctaTitle: "Need Business Finance?",
    ctaDescription: "Find the right funding solution for your business. Contact our commercial finance team for a Free Discovery Call."
  },
  {
    slug: "property-development-finance",
    title: "Property Development Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Explore property development finance options tailored to your projects. Secure funding for your development plans effortlessly, from ground-up builds to conversions and refurbishments.",
    whyTitle: "Why Choose Property Development Finance?",
    heroImage: "/images/Commercial-Lending/Commercial-Lending4.jpg",
    // whyChooseImage: "/images/Trust_planning/trust-planning2.jpg",   // Commented
    whyContent: [
      "Property development finance is a flexible funding option designed to support the construction, renovation, or conversion of properties, whether for residential, commercial, or mixed-use projects. It provides developers and investors with access to capital at various stages of a project, from purchasing land to completing the build. Unlike traditional mortgages, this type of finance is tailored to the unique timelines and costs involved in development, offering staged payments that align with progress. At Wealthmax Financial Advisers, we help clients navigate the complexities of property development finance, ensuring they secure the right solution to bring their vision to life while maximising returns.",
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
    features: [
      { title: "Ground-Up Development", description: "Finance for new-build residential and commercial projects, with funds released in stages as construction milestones are met.", icon: "Building2" },
      { title: "Conversion & Refurbishment", description: "Funding for converting commercial properties to residential use, or refurbishing existing properties to increase their value.", icon: "Wrench" },
      { title: "Mezzanine Finance", description: "Additional funding layered on top of senior debt to increase the total loan-to-cost ratio, reducing the developer's equity requirement.", icon: "Layers" },
      { title: "Joint Venture Finance", description: "Structured finance arrangements where the lender provides a higher proportion of funding in exchange for a share of the development profit.", icon: "Handshake" },
    ],
    ctaTitle: "Planning a Development Project?",
    ctaDescription: "Get the right finance in place before you break ground. Our development finance specialists can help structure the perfect funding package."
  },
  {
    slug: "asset-finance",
    title: "Asset Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Access asset finance solutions for your business needs, from equipment purchases to vehicle leasing. Drive your business forward with ease and preserve your working capital.",
    whyTitle: "Why Choose Asset Finance?",
    heroImage: "/images/Business_Finance/Business_Finance2.jpg",
    // whyChooseImage: "/images/Business_Finance/Business_Finance4.jpg",   // Commented
    whyContent: [
      "Asset finance is a flexible way for businesses to acquire vehicles, machinery, technology, or other essential equipment without the need for large upfront costs. Instead of tying up valuable working capital, payments are spread over an agreed period, making it easier to manage cash flow while still accessing the tools needed for growth. It can also unlock value from existing assets, providing funds that can be reinvested back into the business. At Wealthmax Financial Advisers, we help clients find the right asset finance solution, ensuring they can invest in their future with confidence and financial stability.",
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
    features: [
      { title: "Hire Purchase", description: "Spread the cost of an asset over time with fixed monthly payments. You own the asset outright once all payments are made.", icon: "CreditCard" },
      { title: "Finance Lease", description: "Use the asset for an agreed period while the finance company retains ownership. Ideal if you regularly upgrade equipment.", icon: "Key" },
      { title: "Operating Lease", description: "Rent equipment for a shorter period than its useful life, with the option to return, upgrade, or extend at the end of the term.", icon: "Repeat" },
      { title: "Refinancing", description: "Release capital tied up in existing assets by refinancing them, providing a cash injection without selling the equipment.", icon: "RefreshCw" },
    ],
    ctaTitle: "Need to Finance Business Assets?",
    ctaDescription: "Don't let capital constraints hold your business back. Our asset finance team can help you acquire the equipment you need."
  },
  {
    slug: "buy-to-let-finance",
    title: "Buy to Let Finance",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Discover buy-to-let finance options for property investments. Secure financing tailored to your unique rental property goals and portfolio expansion plans.",
    whyTitle: "Why Choose Phoenix Finserv for Buy to Let Finance?",
    heroImage: "/images/Buy-to-Let-Finance/buy-to-let-finance.jpg",
    // whyChooseImage: "/images/Buy-to-Let-Finance/buy-to-let-finance1.jpg",   // Commented
    whyContent: [
      "Whether you?re looking to expand your investment portfolio or diversify your assets, understanding what's involved with a commercial buy-to-let mortgage is crucial. At Wealthmax, we can support you with options around lenders who would finance these investment opportunities. According to recent figures, the average yearly commercial rental property yield is 4.5%, meaning that this type of investment can offer a significant return - and that's before you consider the building's overall appreciation over time. Our experts can search buy-to-let mortgage deals from all of the UK's major lenders to find you the best option.",
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
    features: [
      { title: "Individual Buy-to-Let", description: "Standard buy-to-let mortgages for individual landlords purchasing in their own name, with competitive rates from leading lenders.", icon: "Home" },
      { title: "Limited Company Purchase", description: "Increasingly popular for tax efficiency, we arrange finance for properties purchased through SPV companies or trading companies.", icon: "Building" },
      { title: "Multi-Unit Freehold Blocks", description: "Specialist financing for purchasing entire blocks of flats or maisonettes, with lending based on aggregate rental income.", icon: "Building2" },
      { title: "Portfolio Refinancing", description: "Restructure your existing portfolio finance to release equity, reduce costs, or consolidate with fewer lenders.", icon: "RefreshCw" },
    ],
    ctaTitle: "Looking to Expand Your Property Portfolio?",
    ctaDescription: "Our buy-to-let finance specialists can help you structure the right funding for your investment goals. Get in touch today."
  },
  {
    slug: "commercial-mortgage",
    title: "Commercial Mortgage",
    heroSubtitle: "Commercial Lending",
    heroDescription: "Unlock growth opportunities with commercial mortgages. Access financing for business premises, whether owner-occupied or investment properties, with competitive rates and flexible terms.",
    whyTitle: "Why Choose Phoenix Finserv for Commercial Mortgages?",
    heroImage: "/images/commercial-mortgage/commercial-mortgage.jpg",
    // whyChooseImage: "/images/commercial-mortgage/commercial-mortgage1.jpg",   // Commented
    whyContent: [
      "A commercial loan is a financing solution designed specifically to support businesses in meeting their larger financial needs, such as purchasing property, funding expansion or investing in major assets. Unlike personal loans, commercial loans are structured to suit the scale and complexity of business operations, often offering flexible repayment terms and competitive rates. They provide companies with the capital required to grow, innovate, and remain resilient in a competitive marketplace. At WealthMax Financial Advisers, we guide businesses through the process of securing the right commercial loan, ensuring they have the financial foundation to achieve their goals.",
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
    features: [
      { title: "Owner-Occupied Mortgages", description: "Finance for purchasing premises from which your business will trade, often with more favourable terms than standard commercial lending.", icon: "Briefcase" },
      { title: "Investment Mortgages", description: "Loans for purchasing commercial properties to let out to tenants, with lending assessed on the property's rental income potential.", icon: "TrendingUp" },
      { title: "Semi-Commercial Mortgages", description: "Finance for mixed-use properties that combine commercial and residential elements, such as a shop with a flat above.", icon: "Building" },
      { title: "Refinancing", description: "Switch your existing commercial mortgage to a better deal, release equity for business purposes, or restructure your borrowing.", icon: "RefreshCw" },
    ],
    ctaTitle: "Need a Commercial Mortgage?",
    ctaDescription: "Whether you're buying premises for your business or investing in commercial property, our advisers can help. Book a Free Discovery Call today."
  },
];