export interface WillsServiceItem {
  slug: string;
  title: string;
  heroSubtitle: string;
  heroDescription: string;
  whyTitle: string;
  whyContent: string[];
features: { title: string; description: string; icon: string }[];
  ctaTitle: string;
  ctaDescription: string;
  heroImage: string;
  whyChooseImage: string;
}

export const willsEstatePlanningServices: WillsServiceItem[] = [
  {
    slug: "will-writing",
    title: "Will Writing",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription:
      "Ensure your assets are distributed according to your wishes with a professionally drafted will that reflects your intentions.",
    whyTitle: "Why Choose Phoenix Finserv for Will Writing?",
    heroImage: "/images/Will-Writing/Will_Writing.jpg",           
    whyChooseImage: "/images/Will-Writing/Will_Writing1.jpg",
    whyContent: [
      "While it’s possible to write a will yourself, most people benefit from professional support to make sure everything is clear and legally robust.",
      "We take time to understand your family situation, assets and goals so that your will reflects what truly matters to you.",
    ],
    features: [
  { title: "Legal Expertise", description: "Professionals understand the intricacies of writing a will and ensure your document complies with all legal requirements.", icon: "Scale" },
      { title: "Complex Situations", description: "We can help with more complex circumstances such as business ownership, blended families or overseas assets so every aspect is addressed.", icon: "Users" },
      { title: "Avoiding Errors", description: "Poorly drafted wills can create ambiguity and disputes. Professional guidance reduces the risk of mistakes that could cause problems later.", icon: "Shield" },
      { title: "Peace of Mind", description: "Knowing your wishes are clearly documented and legally binding provides reassurance for you and your loved ones.", icon: "ShieldCheck" },
      { title: "Updates and Amendments", description: "As your life changes, your will can be reviewed and updated so it always reflects your current intentions.", icon: "Edit3" },
    ],
    ctaTitle: "Need Help with Will Writing?",
    ctaDescription:
      "Speak to our estate planning specialists to draft or review your will and protect your legacy.",
  },
  {
    slug: "trust-planning",
    title: "Trust Planning",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription:
      "Safeguard your wealth and secure your family's future with expert trust planning tailored to your needs.",
    whyTitle: "Why Choose Phoenix Finserv for Trust Planning?",
    heroImage: "/images/Trust_planning/trust-planning5.jpg",           
    whyChooseImage: "/images/Trust_planning/trust-planning3.jpg",
    whyContent: [
      "Trusts are widely used as part of inheritance tax and estate planning, and come in a variety of different forms.",
      "We explain how each type of trust works and help you decide which options are most appropriate for your circumstances.",
    ],
    features: [
      { title: "Bare Trust", description: "Beneficiaries have an immediate right to the trust assets, making this a simple way to pass assets to children.", icon: "Gift" },
      { title: "Interest in Possession Trust", description: "Beneficiaries are entitled to income from the trust, while the underlying capital can be protected for others.", icon: "Eye" },
      { title: "Discretionary Trust", description: "Trustees have discretion over how and when benefits are distributed among a class of beneficiaries.", icon: "SlidersHorizontal" },
      { title: "Charitable Trust", description: "Assets are held for charitable purposes, allowing you to support causes that matter to you in a tax-efficient way.", icon: "Heart" },
      { title: "Life Interest Trust", description: "Provides income or benefit for one beneficiary during their lifetime, with capital passing to others afterwards.", icon: "Clock" },
      { title: "Asset Protection Trust", description: "Helps shield assets from certain creditors and long?term care costs, subject to legal and tax rules.", icon: "Shield" },
    ],
    ctaTitle: "Looking at Trust Options?",
    ctaDescription:
      "Arrange a consultation to explore how trusts could support your family and estate planning goals.",
  },
  {
    slug: "power-of-attorney",
    title: "Lasting Power of Attorney",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription:
      "Appoint trusted individuals to make decisions on your behalf should you become unable to do so.",
    whyTitle: "Why Arrange a Lasting Power of Attorney?",
    heroImage: "images/Lasting Power of Attorney/lasting-power-attorney2.jpg",           
    whyChooseImage: "/images/Lasting Power of Attorney/lasting-power-attorney5.jpg",
    whyContent: [
      "A lasting power of attorney (LPA) ensures someone you trust can make decisions about your finances or health if you lose capacity.",
      "Putting LPAs in place early can reduce stress and uncertainty for your loved ones in difficult circumstances.",
    ],
    features: [],
    ctaTitle: "Set Up a Power of Attorney",
    ctaDescription:
      "Talk to our team about arranging lasting powers of attorney that reflect your wishes.",
  },
  {
    slug: "inheritance-tax-planning",
    title: "Inheritance Tax Planning",
    heroSubtitle: "Wills & Estate Planning",
    heroDescription:
      "Reduce potential inheritance tax liabilities through strategic planning, helping your loved ones retain more of your estate.",
    whyTitle: "Why Plan for Inheritance Tax?",
    heroImage: "/images/Inheritance-Tax-Planning/Inheritance-Tax-Planning.jpg",           
    whyChooseImage: "/images/Inheritance-Tax-Planning/Inheritance-Tax-Planning2.jpg",
    whyContent: [
      "Effective inheritance tax planning can significantly reduce the tax payable on your estate.",
      "We help you understand available allowances and strategies, working alongside tax specialists where appropriate.",
    ],
    features: [],
    ctaTitle: "Review Your Inheritance Tax Position",
    ctaDescription:
      "Book a review to understand your potential inheritance tax exposure and planning options.",
  },
];

