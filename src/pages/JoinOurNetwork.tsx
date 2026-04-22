import {
  ArrowRight,
  Briefcase,
  Users,
  BarChart3,
  Shield,
  Megaphone,
  Code,
  Handshake,
  Phone,
  CheckCircle,
} from "lucide-react";

import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";



const roles = [
  {
    icon: Users,
    title: "Join as Self Employed Adviser",
    description:
      "Work independently while leveraging our resources. Deliver trusted advice and expand your client base.",
    href: "/network/self-employed-adviser",
  },
  {
    icon: Briefcase,
    title: "Join as Introducer",
    description:
      "Connect clients with the right solutions easily. Earn rewards while building meaningful relationships.",
    href: "/network/introducer",
  },
];

const benefits = [
  {
    icon: BarChart3,
    title: "Diverse Product Portfolio",
    description:
      "Access to whole-of-market product range designed to meet the actual needs of your clients.",
  },
  {
    icon: Shield,
    title: "Transparent Commissions",
    description:
      "We offer a commissions structure designed to be clear and competitive within the market.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    description:
      "Marketing support that truly helps you grow your business, enhance brand visibility and attract clientele.",
  },
  {
    icon: CheckCircle,
    title: "Robust Compliance Framework",
    description:
      "Operate with confidence using a cutting-edge compliance system that exceeds regulatory standards.",
  },
  {
    icon: Handshake,
    title: "Community Collaboration",
    description:
      "Be part of a network built with like-minded professionals, fostering collaboration and sharing insights.",
  },
  {
    icon: Code,
    title: "Technology that Simplifies",
    description:
      "Benefit from CRM systems and software that streamline your workflow and help you run your business.",
  },
];

const supportItems = [
  "Onboarding support",
  "Training and Development",
  "Access to our Product Proposition",
  "Marketing Library Support",
  "CRM and Compliance Support",
];

const Network = () => {
  return (
    <div className="min-h-screen">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Background Image - Full Cover (Responsive) */}
          <img
            src="/images/website_images/group-businesspeople-using-laptop-workplace.webp"
            alt="Join our network"
            loading="eager"
            fetchpriority="high"
            className="absolute inset-0 w-full h-full object-cover md:object-[center_40%]"
          />

          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40" />

          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.08),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.06),transparent_50%)]" />

          <div className="absolute bottom-16 right-16 md:bottom-20 md:right-20 text-white/10 text-[180px] font-bold animate-pound-rotate select-none pointer-events-none">
             £
          </div>
          <div className="absolute bottom-10 left-10 w-28 h-28 rounded-full bg-accent/10 animate-pound-morph pointer-events-none hidden md:block" />

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
            <AnimatedSection delay={0.05}>
              <p className="text-primary font-semibold text-sm uppercase tracking-[0.25em] mb-4">
                JOIN OUR NETWORK
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-lg">
                Phoenix Finserv Network, Helping Financial Advisers{" "}
                <span className="font-handwritten text-5xl md:text-6xl lg:text-7xl text-primary pen-underline">
                  Build Stronger
                </span>{" "}
                Businesses
              </h1>

              <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
                From early setup to long-term planning, Phoenix Finserv Network
                provides the structure and support behind successful advisory
                businesses.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* 2 Roles Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {roles.map((role, i) => (
                <AnimatedSection 
                  key={role.title}
                  delay={i * 0.2}
                  animation="animate-fade-scale"
                >
                  <div className="group h-full bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                      <role.icon
                        size={30}
                        className="text-primary group-hover:text-accent-foreground transition-colors"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {role.description}
                    </p>
                    <NavLink
                      to={role.href}
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all group/link"
                    >
                      Get Started Now{" "}
                      <ArrowRight
                        size={16}
                        className="group-hover/link:translate-x-1 transition-transform"
                      />
                    </NavLink>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4">
            <AnimatedSection className="text-center mb-14" delay={0.2}>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
                Why Phoenix Finserv Network
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What makes Phoenix Finserv Network the{" "}
                <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">
                  right fit
                </span>{" "}
                for your Advisory Business?
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((item, i) => (
                <AnimatedSection key={item.title} delay={0.1 + i * 0.12}>
                  <div className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-500 h-full">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300 icon-hover-bounce">
                      <item.icon
                        size={24}
                        className="text-primary group-hover:text-accent-foreground transition-colors"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Network Package Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <AnimatedSection className="flex-1" delay={0.1} animation="animate-fade-left">
                <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                  Phoenix Finserv Network Package
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Network Designed to{" "}
                  <span className="font-handwritten text-4xl md:text-5xl text-primary pen-underline">
                    Elevate
                  </span>{" "}
                  Your Practice
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  In the ever evolving landscape of Financial Services, it is
                  our pleasure to guide you through a network designed to
                  elevate your practice and amplify your impact. Our network is
                  more than a collaborative platform ? it's a community where
                  innovation meets tradition, and where your aspirations find
                  the support they deserve.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By seamlessly integrating into the Phoenix Finserv ecosystem,
                  our network opens doors to unparalleled opportunities for
                  firms seeking to make a mark in the financial industry.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={0.3} className="flex-1">
                <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-phoenix-gold/5 border border-border rounded-3xl p-10">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    Our Support Suite{" "}
                    <span className="font-handwritten text-3xl text-primary">
                      Covers
                    </span>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-8">
                    Joining the Phoenix Finserv Network is your gateway to a
                    thriving career in the financial industry.
                  </p>
                  <ul className="space-y-4">
                    {supportItems.map((item, i) => (
                      <AnimatedSection key={item} delay={0.4 + i * 0.08}>
                        <li className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <CheckCircle size={16} className="text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">
                            {item}
                          </span>
                        </li>
                      </AnimatedSection>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Integrated Portfolio Section */}
        <section className="py-20 bg-gradient-to-br from-phoenix-gray-light/50 via-background to-phoenix-green-light/30">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <AnimatedSection delay={0.17} animation="animate-fade-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                One Network, A Fully{" "}
                <span className="font-handwritten text-4xl md:text-5xl text-primary highlighter-mark">
                  Integrated
                </span>{" "}
                Product Portfolio
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Phoenix Finserv enables our partners and advisers with a broad
                and integrated product portfolio, giving them a whole-of-market
                experience unlocking multiple opportunities across the client
                base.
              </p>
              <NavLink
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-phoenix-orange-dark text-primary-foreground font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </NavLink>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary via-primary to-phoenix-orange-dark text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-3xl">
            <AnimatedSection delay={0.18} animation="animate-fade-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Unlock the Opportunities with{" "}
                <span className="font-handwritten text-4xl md:text-5xl">
                  Phoenix Finserv
                </span>{" "}
                Network
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Join a team of dedicated financial professionals committed to
                empowering individuals and families with tailored solutions,
                expert guidance, and long-term financial security.
              </p>
              <NavLink
                to="tel:+442079932737"
                className="inline-flex items-center gap-3 bg-card text-primary font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-background"
              >
                <Phone size={20} />
                Request a Callback
              </NavLink>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Network;
