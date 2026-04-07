import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Calendar,
  MessageCircle,
  PhoneCall,
  CheckSquare,
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BrandFacebookIcon,
  BrandLinkedInIcon,
  BrandTwitterIcon,
} from "@/components/icons/BrandSocialIcons";
import { PHOENIX_LINKEDIN_URL } from "@/constants/social";
import AnimatedSection from "@/components/AnimatedSection";

const products = [
  "Protection Planning",
  "Mortgages",
  "Commercial Lending",
  "Pension",
  "Wills and Estate Planning",
];

const contactMethods = [
  {
    icon: PhoneCall,
    title: "Request a Callback",
    desc: "Fill in the form and we'll call you back at a convenient time.",
    href: "tel:+44 (0) 2079 932 737",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Us",
    desc: "Send us a message on WhatsApp for quick answers.",
    href: "https://wa.me/918488891091?text=Hi%20Phoenix%20Finserv%20team%2C%20I%20would%20like%20to%20speak%20with%20an%20adviser%20about%20financial%20planning.",
  },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyValue: "",
    loanValue: "",
    message: "",
  });
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);

  const toggleProduct = (p: string) => {
    setSelectedProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", propertyValue: "", loanValue: "", message: "" });
    setSelectedProducts([]);
    setAgreed(false);
  };

  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/website_images/contact_us1.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--phoenix-green)/0.10),transparent_60%)]" />

          <div className="absolute top-20 right-20 text-white/10 text-[180px] md:text-[220px] font-bold animate-pound-rotate select-none pointer-events-none">
            £
          </div>
          <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-accent/5 animate-pound-morph pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedSection delay={0.6}>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">
                Contact Us
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in{" "}
                <span className="font-handwritten text-5xl md:text-6xl text-primary pen-underline">
                  Touch
                </span>{" "}
                Now
              </h1>
              <p className="text-white/90 max-w-xl mx-auto">
                For any questions or concerns, please don't hesitate to contact
                Phoenix Finserv using the information provided below.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {contactMethods.map((method, i) => (
                <AnimatedSection 
                  key={method.title} 
                  delay={0.1 + i * 0.15}
                  animation="animate-fade-scale"
                >
                  <NavLink
                    to={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full bg-card border border-border rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-500"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                      <method.icon
                        size={26}
                        className="text-primary group-hover:text-accent-foreground transition-colors"
                      />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {method.desc}
                    </p>
                  </NavLink>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Form + Contact Info Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
              {/* Form */}
              <AnimatedSection delay={0.1} animation="animate-fade-left">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Send Us a{" "}
                  <span className="text-accent highlighter-mark">Message</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="First name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="example@domain.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Contact Number <span className="text-primary">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+441234567890"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Property Value <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder=" £500,000"
                        value={form.propertyValue}
                        onChange={(e) => setForm({ ...form, propertyValue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">
                        Loan Value <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder=" £350,000"
                        value={form.loanValue}
                        onChange={(e) => setForm({ ...form, loanValue: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">
                      Product Interested
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {products.map((p) => (
                        <label
                          key={p}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border cursor-pointer transition-all duration-300 text-sm ${
                            selectedProducts.includes(p)
                              ? "border-primary bg-primary/5 text-primary font-semibold"
                              : "border-border hover:border-primary/30 text-muted-foreground"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={selectedProducts.includes(p)}
                            onChange={() => toggleProduct(p)}
                            className="sr-only"
                          />
                          <CheckSquare
                            size={16}
                            className={
                              selectedProducts.includes(p)
                                ? "text-primary"
                                : "text-muted-foreground/40"
                            }
                          />
                          {p}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">
                      Your Message <span className="text-muted-foreground">(optional)</span>
                    </label>
                    <textarea
                      placeholder="Tell us how we can help..."
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    />
                  </div>

                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="mt-1 accent-primary"
                      required
                    />
                    <span className="text-xs text-muted-foreground">
                      By completing your information below, you agree for us to
                      contact you via phone, email, post or SMS.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" /> 
                    Submit Message
                  </button>
                </form>
              </AnimatedSection>

              {/* Contact Information */}
              <AnimatedSection delay={0.4} animation="animate-fade-right">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Contact{" "}
                  <span className="font-handwritten text-3xl text-primary">
                    Information
                  </span>
                </h2>

                <div className="space-y-5 mb-10">
                  {[
                    { icon: Mail, label: "EMAIL", value: "dreams@phoenixfinserv.co.uk", to: "mailto:dreams@phoenixfinserv.co.uk" },
                    { icon: Phone, label: "PHONE", value: "+44 (0) 2079 932 737", to: "tel:+442079932737" },
                    { icon: MapPin, label: "ADDRESS", value: "21 Heath Drive, Romford, Essex, RM2 5QH" },
                    { icon: Clock, label: "OFFICE TIMINGS", value: "9:00 AM to 6:00 PM" },
                    { icon: Calendar, label: "OFFICE DAYS", value: "Monday to Friday" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="group flex items-start gap-4 p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                        <item.icon size={22} className="text-primary group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                          {item.label}
                        </p>
                        {item.to ? (
                          <NavLink
                            to={item.to}
                            className="text-foreground font-medium text-sm hover:text-primary transition-colors break-all"
                          >
                            {item.value}
                          </NavLink>
                        ) : (
                          <p className="text-foreground font-medium text-sm break-words">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <p className="text-sm font-semibold text-foreground mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    <NavLink
                      to={PHOENIX_LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce text-primary"
                    >
                      <BrandLinkedInIcon size={18} />
                    </NavLink>
                    {[
                      { Icon: BrandFacebookIcon, label: "Facebook" },
                      { Icon: BrandTwitterIcon, label: "Twitter" },
                    ].map(({ Icon, label }) => (
                      <NavLink
                        key={label}
                        to="."
                        className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 icon-hover-bounce text-primary"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Icon size={18} />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-0">
          <AnimatedSection>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168120642536509!3d51.52877184051424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Phoenix Finserv Location - London, UK"
              className="w-full"
            />
          </AnimatedSection>
        </section>
      </main>
    </div>
  );
};

export default Contact;