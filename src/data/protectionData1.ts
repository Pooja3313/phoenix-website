export interface FAQ {
  question: string;
  answer: string;
}

export interface Consideration {
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  category: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
  features: { title: string; description: string }[];
  ctaTitle: string;
  ctaDescription: string;
  considerations?: Consideration[];
  faqs?: FAQ[];
}

export const personalProtectionServices: ServiceItem[] = [
  {
    slug: "life-cover",
    title: "Life Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription:
      "Protect your family's financial future with comprehensive life insurance that provides a tax-free lump sum or regular income upon death, ensuring your loved ones are supported when they need it most.",
    whyTitle: "Why Choose Phoenix Finserv for Life Cover?",
    whyContent: [
      "Life cover is one of the most important financial decisions you can make. It ensures that if the worst were to happen, your family would be financially supported. Whether you're looking to cover a mortgage, provide for dependants, or leave a financial legacy, life cover gives you peace of mind.",
      "At Phoenix Finserv, we take the time to understand your personal circumstances and help you find a policy that offers the right level of cover at a price that works for you. We work with a wide range of leading UK insurers to ensure you get the best possible deal.",
      "Our advisers will guide you through the different types of life cover available ? including level term, decreasing term, whole of life, and family income benefit ? and help you choose the option that best suits your needs.",
    ],
    features: [
      {
        title: "Level Term Life Insurance",
        description:
          "A fixed payout amount throughout the policy term, ideal for protecting your family against the unexpected.",
      },
      {
        title: "Decreasing Term Life Insurance",
        description:
          "Cover that reduces over time, typically used alongside a repayment mortgage to ensure the loan is paid off if you pass away.",
      },
      {
        title: "Whole of Life Insurance",
        description:
          "Lifetime cover that guarantees a payout whenever you pass away, providing certainty for your loved ones and estate planning.",
      },
      {
        title: "Family Income Benefit",
        description:
          "Provides a regular tax-free income to your family rather than a lump sum, helping them maintain their standard of living.",
      },
    ],
    considerations: [
      { title: "Family Dependants", description: "Consider how many people rely on your income and for how long they would need support." },
      { title: "Mortgage & Debts", description: "Ensure your cover is enough to pay off any outstanding mortgage or debts." },
      { title: "Policy Term", description: "Choose a term that aligns with your financial responsibilities, such as until your children are independent." },
      { title: "Budget", description: "Balance the level of cover you need with premiums that are affordable for your circumstances." },
      { title: "Joint vs Single", description: "Decide whether a joint policy or two single policies would be more beneficial for your situation." },
      { title: "Trust Arrangements", description: "Writing your policy in trust can help your beneficiaries avoid inheritance tax and receive the payout faster." },
    ],
    faqs: [
      { question: "What is life cover?", answer: "Life cover is a type of insurance that pays out a lump sum or regular income to your beneficiaries if you die during the policy term. It helps ensure your family's financial security." },
      { question: "How much life cover do I need?", answer: "The amount depends on your circumstances ? including your income, debts, number of dependants, and future financial goals. Our advisers can help you calculate the right level of cover." },
      { question: "What's the difference between level and decreasing term?", answer: "Level term pays a fixed amount throughout the policy. Decreasing term reduces over time and is typically used to cover a repayment mortgage." },
      { question: "Can I get life cover if I have health conditions?", answer: "Yes, many insurers offer cover for people with pre-existing health conditions. Premiums may be higher, but our advisers can search the market to find competitive options." },
      { question: "Should I write my policy in trust?", answer: "Writing your policy in trust means the payout goes directly to your beneficiaries without going through probate, which can speed up payment and may help with inheritance tax planning." },
    ],
    ctaTitle: "Looking for Life Cover?",
    ctaDescription:
      "Our advisers are experienced in helping individuals and families find the right life cover. Contact us today for a free, no-obligation consultation.",
  },
  {
    slug: "critical-illness",
    title: "Critical Illness Cover",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription:
      "Receive a tax-free lump sum if you're diagnosed with a specified critical illness, helping you focus on recovery without the added stress of financial worries.",
    whyTitle: "Why Choose Phoenix Finserv for Critical Illness Cover?",
    whyContent: [
      "A critical illness can strike at any time, and the financial impact can be devastating. Critical illness cover provides a tax-free lump sum payment if you're diagnosed with one of a specified list of serious conditions, such as cancer, heart attack, or stroke.",
      "This money can be used however you choose ? to pay off your mortgage, cover medical expenses, fund lifestyle changes, or simply to give you breathing space while you focus on your recovery.",
      "At Phoenix Finserv, we help you navigate the complexities of critical illness policies. We compare plans from leading UK insurers and explain the key differences, so you can make an informed decision about your protection.",
    ],
    features: [
      {
        title: "Standalone Critical Illness",
        description:
          "A dedicated policy that pays out a lump sum on diagnosis of a covered condition, independent of any life cover.",
      },
      {
        title: "Combined Life & Critical Illness",
        description:
          "A single policy that covers both life insurance and critical illness, offering comprehensive protection at a competitive price.",
      },
      {
        title: "Children's Critical Illness",
        description:
          "Some policies include free cover for your children, protecting the whole family against the financial impact of a serious diagnosis.",
      },
      {
        title: "Enhanced Cover Options",
        description:
          "Access policies that cover a wider range of conditions and offer additional benefits such as second opinion services and rehabilitation support.",
      },
    ],
    considerations: [
      { title: "Conditions Covered", description: "Check how many conditions are covered ? policies can vary significantly between insurers." },
      { title: "Severity Levels", description: "Some policies pay partial amounts for less severe conditions. Understand the severity definitions." },
      { title: "Combined vs Standalone", description: "Decide whether to add critical illness to your life cover or take a separate policy." },
      { title: "Children's Cover", description: "Many policies include free children's cover ? check what's included for your family." },
      { title: "Payment Terms", description: "Understand whether the policy pays on diagnosis or after a survival period." },
      { title: "Review Regularly", description: "Your needs change over time ? review your cover periodically to ensure it remains appropriate." },
    ],
    faqs: [
      { question: "What conditions are typically covered?", answer: "Most policies cover major conditions such as cancer, heart attack, stroke, and organ failure. The number of conditions varies by insurer ? some cover over 50 different conditions." },
      { question: "Is critical illness cover the same as income protection?", answer: "No. Critical illness pays a one-off lump sum on diagnosis. Income protection provides regular monthly payments if you're unable to work due to illness or injury." },
      { question: "Can I have both life cover and critical illness cover?", answer: "Yes, you can take them as separate policies or combine them into a single policy. Combined policies are often more affordable but pay out only once." },
      { question: "What happens if I'm never diagnosed with a critical illness?", answer: "If you don't make a claim during the policy term, the policy simply expires. Some whole-of-life critical illness policies may have different terms." },
    ],
    ctaTitle: "Need Critical Illness Cover?",
    ctaDescription:
      "Protect yourself and your family from the financial impact of a serious illness. Speak to our advisers today for expert guidance.",
  },
  {
    slug: "income-protection",
    title: "Income Protection",
    category: "Personal Protection",
    heroSubtitle: "Protection",
    heroDescription:
      "Replace a portion of your income if you're unable to work due to illness or injury, ensuring your financial commitments are met during the most difficult times.",
    whyTitle: "Why Choose Phoenix Finserv for Income Protection?",
    whyContent: [
      "Your income is your most valuable asset. If illness or injury prevents you from working, income protection insurance ensures you still receive a regular monthly payment ? typically between 50% and 70% of your gross salary ? until you're able to return to work or reach retirement age.",
      "Unlike critical illness cover, which pays a one-off lump sum, income protection provides ongoing financial support for as long as you're unable to work. This makes it an essential part of any comprehensive financial plan.",
      "At Phoenix Finserv, we help you find an income protection policy that fits your budget and provides the level of cover you need. We explain the different options available, including short-term and long-term policies, and help you understand deferred periods, benefit amounts, and policy terms.",
    ],
    features: [
      {
        title: "Long-Term Income Protection",
        description:
          "Pays out until you return to work, reach retirement age, or the policy ends ? providing sustained financial security.",
      },
      {
        title: "Short-Term Income Protection",
        description:
          "Covers you for a defined period (typically 1-2 years), ideal if you want lower premiums or have other savings to fall back on.",
      },
      {
        title: "Own Occupation Cover",
        description:
          "Pays out if you're unable to perform your specific job, offering the strongest level of protection for professionals.",
      },
      {
        title: "Day One Cover",
        description:
          "Some policies can be arranged to pay from the first day of incapacity, though most have a deferred period to keep premiums affordable.",
      },
    ],
    considerations: [
      { title: "Deferred Period", description: "The waiting period before payments begin ? longer deferrals mean lower premiums." },
      { title: "Benefit Amount", description: "Most policies cover 50-70% of your gross income. Choose an amount that covers your essential outgoings." },
      { title: "Own vs Any Occupation", description: "'Own occupation' pays if you can't do your specific job. 'Any occupation' only pays if you can't do any job at all." },
      { title: "Policy Length", description: "Consider whether you need cover until retirement age or for a shorter fixed term." },
      { title: "Employer Benefits", description: "Check what sick pay your employer provides ? this affects how much additional cover you need." },
      { title: "Tax Treatment", description: "Benefits from personal income protection policies are usually paid tax-free." },
    ],
    faqs: [
      { question: "How much of my income can I protect?", answer: "Typically 50-70% of your gross annual income. The exact amount depends on the insurer and policy type." },
      { question: "What is a deferred period?", answer: "The deferred period is the waiting time between becoming unable to work and receiving your first payment. Common options are 4, 8, 13, 26, or 52 weeks." },
      { question: "Is income protection the same as critical illness cover?", answer: "No. Income protection pays a regular monthly income if you can't work. Critical illness pays a one-off lump sum on diagnosis of a specified condition." },
      { question: "Will my premiums increase over time?", answer: "This depends on whether you choose a guaranteed or reviewable premium policy. Guaranteed premiums stay the same; reviewable premiums may change." },
      { question: "Can I claim more than once?", answer: "Yes, unlike critical illness cover, income protection allows multiple claims throughout the life of the policy." },
    ],
    ctaTitle: "Looking for Income Protection?",
    ctaDescription:
      "Don't leave your income unprotected. Our advisers can help you find the right policy to safeguard your finances if you're unable to work.",
  },
];

export const businessProtectionServices: ServiceItem[] = [
  {
    slug: "keyman-cover",
    title: "Keyman Cover",
    category: "Protection",
    heroSubtitle: "Protection",
    heroDescription:
      "Protect your business against the financial impact of losing a key employee. Keyman cover ensures business continuity and stability when it matters most.",
    whyTitle: "Why Choose Phoenix Finserv for Keyman Cover?",
    whyContent: [
      "Every business has individuals whose skills, knowledge, or leadership are critical to its success. If one of these key people were to become seriously ill or pass away, the impact on the business could be devastating ? from lost revenue and client relationships to difficulty meeting financial commitments.",
      "Keyman cover (also known as key person insurance) provides a financial safety net, paying out a lump sum that can be used to cover the costs of finding and training a replacement, repaying business debts, or simply keeping the business afloat during a difficult period.",
      "At Phoenix Finserv, we help businesses of all sizes assess their exposure to key person risk and find appropriate cover. We work with leading insurers to ensure you get comprehensive protection at a competitive price.",
    ],
    features: [
      { title: "Death Cover", description: "Pays out a lump sum if your key person passes away, helping the business manage the financial impact and fund recruitment costs." },
      { title: "Critical Illness Cover", description: "Provides a payout if your key person is diagnosed with a serious illness, giving your business the resources to adapt and continue operating." },
      { title: "Revenue Protection", description: "Cover can be structured to replace lost revenue attributable to the key person, helping maintain cash flow during the transition period." },
      { title: "Loan & Debt Protection", description: "Ensures that any business loans or financial commitments tied to the key person can be repaid if they are no longer able to contribute." },
    ],
    considerations: [
      { title: "Identify Key People", description: "Determine which individuals are critical to revenue, operations, or client relationships." },
      { title: "Valuation Method", description: "Calculate cover based on the person's contribution to revenue or the cost of replacement." },
      { title: "Policy Ownership", description: "The business owns the policy and pays the premiums ? ensure this is set up correctly." },
      { title: "Tax Implications", description: "Premiums may be tax-deductible but the payout may be taxable ? seek specialist tax advice." },
      { title: "Cover Duration", description: "Match the policy term to how long the person is expected to remain critical to the business." },
      { title: "Regular Reviews", description: "Review cover as the business grows and key personnel change." },
    ],
    faqs: [
      { question: "What is keyman insurance?", answer: "Keyman insurance protects a business against the financial loss caused by the death or critical illness of a key employee or director." },
      { question: "Who can be covered?", answer: "Any employee, director, or partner whose absence would significantly impact the business financially." },
      { question: "How is the cover amount calculated?", answer: "Typically based on the person's contribution to profits, the cost of replacement, or the value of business loans they guarantee." },
      { question: "Are premiums tax-deductible?", answer: "In many cases yes, if the policy is designed to cover loss of profits rather than capital. HMRC guidance applies." },
    ],
    ctaTitle: "Need Keyman Cover for Your Business?",
    ctaDescription:
      "Protect your business from the unexpected. Our advisers can help you assess your key person risk and find the right level of cover.",
  },
  {
    slug: "shareholder-protection",
    title: "Shareholder Protection",
    category: "Protection",
    heroSubtitle: "Protection",
    heroDescription:
      "Ensure business continuity and financial security in unforeseen events. Shareholder protection provides the means to buy out a deceased or critically ill partner's shares.",
    whyTitle: "Why Choose Phoenix Finserv for Shareholder Protection?",
    whyContent: [
      "If a business partner or shareholder were to die or become critically ill, without proper planning their shares could pass to someone outside the business ? potentially a family member with no interest in or knowledge of the company. This could create serious problems for the remaining shareholders.",
      "Shareholder protection insurance, combined with a suitable legal agreement, ensures that the remaining shareholders have the funds to purchase the outgoing shareholder's shares at an agreed value, while the deceased's family receives fair compensation.",
      "At Phoenix Finserv, we work with business owners to put the right shareholder protection arrangements in place. We help you understand the options available and connect you with specialist legal advisers to draft the necessary agreements.",
    ],
    features: [
      { title: "Cross Option Agreement", description: "A legal arrangement that gives surviving shareholders the option to buy, and the deceased's estate the option to sell, the shares at an agreed price." },
      { title: "Life Cover for Shareholders", description: "Each shareholder takes out a life policy for the value of their shares, ensuring funds are available when needed." },
      { title: "Critical Illness Add-On", description: "Extends protection to cover shareholders who are diagnosed with a critical illness, not just those who pass away." },
      { title: "Business Valuation Support", description: "We help you establish a fair market value for the shares, ensuring all parties are treated equitably." },
    ],
    considerations: [
      { title: "Share Valuation", description: "Agree on a method for valuing shares ? this should be documented in the agreement." },
      { title: "Legal Agreements", description: "A cross-option agreement is essential ? we can refer you to specialist business solicitors." },
      { title: "All Shareholders", description: "Ensure all shareholders are covered, not just the majority holders." },
      { title: "Regular Reviews", description: "Share values change ? review cover amounts periodically to stay aligned." },
      { title: "Tax Efficiency", description: "Properly structured arrangements can be very tax-efficient. Seek specialist advice." },
      { title: "Business Relief", description: "Shares in qualifying businesses may attract business relief for inheritance tax purposes." },
    ],
    faqs: [
      { question: "What is shareholder protection?", answer: "It's an insurance arrangement that provides funds for surviving shareholders to buy the shares of a deceased or critically ill partner." },
      { question: "Do I need a legal agreement?", answer: "Yes. A cross-option agreement is usually recommended to formalise the buy/sell arrangement." },
      { question: "How are the shares valued?", answer: "Shares can be valued using various methods ? your accountant can advise on the most appropriate approach for your business." },
      { question: "What happens without shareholder protection?", answer: "Without it, shares may pass to the deceased's family, who could become unwilling or unsuitable co-owners of the business." },
    ],
    ctaTitle: "Need Shareholder Protection?",
    ctaDescription:
      "Protect your business partnership with the right agreements and insurance in place. Speak to our advisers today.",
  },
  {
    slug: "relevant-life-cover",
    title: "Relevant Life Cover",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription:
      "Tax-efficient life insurance for company directors and employees. A cost-effective way for businesses to provide death-in-service benefits outside of a registered group life scheme.",
    whyTitle: "Why Choose Phoenix Finserv for Relevant Life Cover?",
    whyContent: [
      "Relevant life cover is a tax-efficient way for employers to provide life insurance for individual employees or directors. Premiums are paid by the company and are typically treated as an allowable business expense for corporation tax purposes, while the benefit is not treated as a P11D benefit for the employee.",
      "This makes it an attractive alternative to group life schemes, particularly for small businesses with just one or two directors, or for high-earning employees who may exceed the lifetime allowance for pension contributions.",
      "At Phoenix Finserv, we help businesses understand the tax advantages of relevant life cover and find the most suitable policy for their needs. We ensure the arrangements are set up correctly to maximise the tax benefits for both the company and the individual.",
    ],
    features: [
      { title: "Corporation Tax Relief", description: "Premiums are usually deductible as a business expense, reducing your company's tax bill." },
      { title: "No P11D Benefit", description: "The employee doesn't pay income tax or National Insurance on the premiums, making it genuinely tax-free cover." },
      { title: "Written in Trust", description: "Policies are automatically written into trust, ensuring fast and tax-efficient payment to the employee's beneficiaries." },
      { title: "Flexible Cover Levels", description: "Cover can be tailored to the individual's salary and circumstances, with no requirement for a minimum number of employees." },
    ],
    considerations: [
      { title: "Eligibility", description: "Available to employees and directors of limited companies, LLPs, and some partnerships." },
      { title: "Corporation Tax", description: "Premiums are usually deductible as a business expense for corporation tax." },
      { title: "No P11D", description: "Unlike group life schemes, there is no benefit-in-kind tax for the employee." },
      { title: "Trust Setup", description: "Policies are written into a discretionary trust ? this is handled automatically by most insurers." },
      { title: "Cover Level", description: "Cover is typically a multiple of salary ? ensure the amount meets the employee's needs." },
      { title: "Alternative to Group Life", description: "Ideal for small businesses that don't qualify for or don't want a group life scheme." },
    ],
    faqs: [
      { question: "What is relevant life cover?", answer: "It's a tax-efficient life insurance policy paid for by an employer for an individual employee or director." },
      { question: "Is it tax-efficient?", answer: "Yes. Premiums are typically a deductible business expense and there's no P11D benefit-in-kind for the employee." },
      { question: "Who can have relevant life cover?", answer: "Any employee or director of a limited company, LLP, or qualifying partnership." },
      { question: "How does it compare to group life?", answer: "It's more flexible for small businesses, doesn't require minimum numbers, and avoids the lifetime allowance issues of registered group schemes." },
    ],
    ctaTitle: "Looking for Relevant Life Cover?",
    ctaDescription:
      "Provide tax-efficient life cover for your directors and employees. Contact our advisers to find out how your business can benefit.",
  },
  {
    slug: "business-loan-protection",
    title: "Business Loan Protection",
    category: "Business Protection",
    heroSubtitle: "Business Protection",
    heroDescription:
      "Provides financial protection against losses, legal claims and property damage. Ensure your business loans are covered if a key individual passes away or becomes critically ill.",
    whyTitle: "Why Choose Phoenix Finserv for Business Loan Protection?",
    whyContent: [
      "Many business owners take out personal guarantees when securing business loans. If the guarantor were to die or become critically ill, the lender could call in the debt, putting the business and the individual's family at serious financial risk.",
      "Business loan protection insurance ensures that if the worst happens, the loan can be repaid in full, protecting both the business and the guarantor's personal assets and family.",
      "At Phoenix Finserv, we help business owners identify their loan protection needs and find appropriate cover. We assess the level of outstanding debt, the terms of any personal guarantees, and recommend a policy that provides the right level of protection.",
    ],
    features: [
      { title: "Loan Repayment Cover", description: "Ensures outstanding business loans are repaid if the guarantor dies or is diagnosed with a critical illness." },
      { title: "Personal Guarantee Protection", description: "Protects the personal assets of directors who have provided guarantees for business borrowing." },
      { title: "Decreasing or Level Cover", description: "Choose between cover that reduces in line with the loan balance or remains fixed throughout the term." },
      { title: "Multiple Loan Cover", description: "Policies can be structured to cover multiple loans and financial commitments under a single arrangement." },
    ],
    considerations: [
      { title: "Outstanding Debt", description: "Calculate the total amount of business debt that needs to be covered." },
      { title: "Personal Guarantees", description: "Identify all directors who have provided personal guarantees for business loans." },
      { title: "Repayment Profile", description: "Match the cover type (decreasing or level) to the loan repayment schedule." },
      { title: "Multiple Loans", description: "Ensure all business borrowing is covered, not just the largest loan." },
      { title: "Policy Term", description: "Align the policy term with the loan repayment period." },
      { title: "Director Changes", description: "Review cover when directors join or leave the business." },
    ],
    faqs: [
      { question: "What is business loan protection?", answer: "Insurance that repays business loans if the guarantor or key person dies or becomes critically ill." },
      { question: "Do I need it if I have personal guarantees?", answer: "Yes ? if you've personally guaranteed business debt, your personal assets (including your home) could be at risk without protection." },
      { question: "Should I choose decreasing or level cover?", answer: "Decreasing cover is cheaper and matches a reducing loan balance. Level cover stays the same and suits revolving credit or interest-only loans." },
      { question: "Can I cover multiple loans?", answer: "Yes, policies can be structured to cover all your business borrowing under one arrangement." },
    ],
    ctaTitle: "Need Business Loan Protection?",
    ctaDescription:
      "Don't let a business loan become a personal liability. Our advisers can help you find the right protection for your business borrowing.",
  },
];

export const homeInsuranceServices: ServiceItem[] = [
  {
    slug: "buildings-and-contents",
    title: "Buildings & Contents Insurance",
    category: "Home Insurance",
    heroSubtitle: "Home Insurance",
    heroDescription:
      "Protect your home and everything in it with comprehensive buildings and contents insurance. Cover your property structure and personal belongings against damage, theft and unexpected events.",
    whyTitle: "Why Choose Phoenix Finserv for Home Insurance?",
    whyContent: [
      "Your home is likely your most valuable asset, and protecting it should be a priority. Buildings insurance covers the structure of your home ? walls, roof, floors, and permanent fixtures ? against risks such as fire, flood, subsidence, and storm damage. Contents insurance protects your personal belongings, from furniture and electronics to jewellery and clothing.",
      "Many homeowners are underinsured because they underestimate the cost of rebuilding their home or replacing their possessions. At Phoenix Finserv, we help you assess the true value of your property and belongings to ensure you have adequate cover.",
      "We work with leading UK insurers to find competitive home insurance policies that provide comprehensive protection. Whether you're a homeowner, landlord, or tenant, we can help you find the right policy for your needs.",
    ],
    features: [
      { title: "Buildings Insurance", description: "Covers the cost of repairing or rebuilding your home if it's damaged by an insured event such as fire, flood, storm or subsidence." },
      { title: "Contents Insurance", description: "Protects your personal belongings inside the home against theft, accidental damage, fire and other covered events." },
      { title: "Combined Policies", description: "Get both buildings and contents cover in a single policy for convenience and often a better price than buying separately." },
      { title: "Accidental Damage Cover", description: "Optional add-on that covers unexpected damage to your home and belongings, such as spilling paint on a carpet or putting your foot through the ceiling." },
    ],
    considerations: [
      { title: "Rebuild Value", description: "The rebuild cost of your home is usually different from its market value ? get an accurate assessment." },
      { title: "Contents Value", description: "List all your belongings and their replacement cost to avoid being underinsured." },
      { title: "High-Value Items", description: "Expensive items like jewellery and art may need to be listed separately on your policy." },
      { title: "Excess Amounts", description: "Understand the excess you'll pay on any claim ? higher excess means lower premiums." },
      { title: "Flood Risk", description: "Properties in flood-risk areas may face higher premiums or restrictions ? check before you buy." },
      { title: "Home Security", description: "Good locks, alarms, and security measures can help reduce your premiums." },
    ],
    faqs: [
      { question: "Do I need buildings and contents insurance?", answer: "If you own your home, buildings insurance is usually required by your mortgage lender. Contents insurance is optional but highly recommended to protect your belongings." },
      { question: "What's the difference between buildings and contents?", answer: "Buildings insurance covers the structure of your home. Contents insurance covers your personal belongings inside it." },
      { question: "How do I calculate my rebuild cost?", answer: "The rebuild cost is usually lower than the market value. You can use the RICS rebuild cost calculator or get a professional survey." },
      { question: "What is accidental damage cover?", answer: "An optional add-on that covers unexpected damage you cause accidentally, such as drilling through a pipe or dropping your laptop." },
    ],
    ctaTitle: "Looking for Home Insurance?",
    ctaDescription:
      "Protect your home and belongings with comprehensive insurance cover. Speak to our advisers today for a tailored quote.",
  },
];

export const allProtectionServices: ServiceItem[] = [
  ...personalProtectionServices,
  ...businessProtectionServices,
  ...homeInsuranceServices,
];
