import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Check, BadgeCheck, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const pricingPlans = [
  {
    name: "Standard",
    price: "₹36,999",
    period: "per month per provider",
    description: "Perfect for individual physicians or small practices looking to streamline documentation.",
    features: [
      "Voice to documentation conversion",
      "Basic EHR integration",
      "Up to 250 patient notes per month",
      "Email support within 24 hours",
      "HIPAA-compliant security",
      "Mobile app access"
    ],
    highlighted: false,
    buttonText: "Get Started"
  },
  {
    name: "Professional",
    price: "₹74,999",
    period: "per month per provider",
    description: "Ideal for established practices requiring advanced features and dedicated support.",
    features: [
      "Everything in Standard, plus:",
      "Advanced AI summarization",
      "Unlimited patient notes",
      "Priority support (response within 4 hours)",
      "Custom documentation templates",
      "Advanced analytics dashboard",
      "Multi-specialty support"
    ],
    highlighted: true,
    buttonText: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact for pricing",
    description: "Tailored solutions for hospitals and large healthcare organizations with complex needs.",
    features: [
      "Everything in Professional, plus:",
      "Dedicated account manager",
      "Custom EHR integrations",
      "Advanced decision support features",
      "White-labeled solution option",
      "24/7 Premium technical support",
      "On-site training and implementation",
      "SLA guarantees"
    ],
    highlighted: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="w-full py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-bleep-blue-light/30">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="flex justify-center mb-4">
                <DollarSign className="h-10 w-10 text-bleep-blue" />
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                <span className="gradient-text">Simple, Transparent Pricing</span>
              </h1>
              <p className="text-lg md:text-xl text-bleep-neutral-dark mb-8 animate-slide-up">
                Choose the plan that's right for your practice, with no hidden fees or long-term contracts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {pricingPlans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`border ${plan.highlighted ? 'border-bleep-blue shadow-lg relative overflow-hidden' : 'border-bleep-neutral-light'} hover:shadow-xl transition-all hover:-translate-y-1 duration-300`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-bleep-blue to-bleep-green"></div>
                  )}
                  <CardHeader className="pb-2">
                    <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                    <div className="mt-4 mb-2">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="text-sm text-bleep-neutral-dark ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-bleep-neutral-dark">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 my-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.includes("Everything in") ? 
                            <BadgeCheck className="h-5 w-5 text-bleep-green mr-2 shrink-0 mt-0.5" /> :
                            <Check className="h-5 w-5 text-bleep-green mr-2 shrink-0 mt-0.5" />
                          }
                          <span className="text-bleep-neutral-dark">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-4 ${plan.highlighted ? 'glow-button-primary bg-bleep-blue hover:bg-bleep-blue-dark text-white' : 'glow-button bg-white text-bleep-blue border border-bleep-blue hover:bg-bleep-blue-light'}`}
                    >
                      {plan.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-20 text-center bg-white p-8 rounded-xl shadow-lg border border-bleep-neutral-light">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Is there a free trial?</h3>
                  <p className="text-bleep-neutral-dark">Yes, we offer a 14-day free trial on all plans so you can experience Bleep in your practice before committing.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Can I change plans later?</h3>
                  <p className="text-bleep-neutral-dark">Absolutely. You can upgrade or downgrade your plan at any time, with changes taking effect on your next billing cycle.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">What EHR systems do you integrate with?</h3>
                  <p className="text-bleep-neutral-dark">We support Epic, Cerner, Athenahealth, AllScripts, eClinicalWorks, and more. Contact us for specific integration questions.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Do you offer discounts for annual billing?</h3>
                  <p className="text-bleep-neutral-dark">Yes, we offer a 15% discount when you choose annual billing on any of our plans.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
