import Breadcrumb from "@/components/modules/Blog/Breadcrumb";
import CtaSection from "./components/Services/ctasection";
import PricingSection from "./components/Services/pricingSection/PricingSection";
import RunningCards from "./components/Services/RunningCards/RunningCards";
import ServicesCard from "./components/Services/serviceCard";

export const metadata = {
  title: "Aptecode Services — Websites that Win Customers",
  description:
    "Fast, conversion-ready websites for new brands, entrepreneurs, and SMBs. Website development, e-commerce stores, SaaS dashboards, and professional services sites.",
  alternates: {
    canonical: "https://aptecode.com/services",
    languages: {
      en: "https://aptecode.com/en/services",
    },
  },
  openGraph: {
    type: "website",
    url: "https://aptecode.com/services",
    title: "Aptecode Services — Websites that Win Customers",
    description:
      "Fast, conversion-ready websites for new brands, entrepreneurs, and SMBs. No fluff. Just strategy, clean UX, and sites that sell.",
    images: [{ url: "https://aptecode.com/og/services.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aptecode Services — Websites that Win Customers",
    description:
      "Fast, conversion-ready websites for new brands, entrepreneurs, and SMBs.",
    images: ["https://aptecode.com/og/services.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

function ServicesPage() {
  return (
    <>
      {/* ---------------Title/Banner------------------- */}
      <div className="text-center mx-auto max-w-5xl px-4 py-16 md:py-25 ">
        <h1
          className="text-2xl md:text-7xl font-bold uppercase text-black mb-[30px]
          "
        >
          Our{" "}
          <span
            className="text-2xl md:text-7xl font-bold uppercase
          bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
          bg-clip-text text-transparent  relative "
            style={{ WebkitTextFillColor: "transparent" }}
          >
            {" "}
            SERVICES
          </span>
        </h1>

        <div className="flex justify-center mb-4">
          <Breadcrumb />
        </div>

        <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Fast, conversion-ready websites for new brands, entrepreneurs, and
          SMBs. No fluff. Just strategy, clean UX, and sites that sell.
        </p>
      </div>

      {/* -----------------Service Advertisements------------------- */}

      <ServicesCard />

      <RunningCards speed={35} direction="left" className="mt-20" />

      {/* Process Section - How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50  px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500  animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm tracking-wide">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              How We
              <span className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Work
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A proven process that delivers results. Fast timelines, clear
              communication, and websites that win customers.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Strategy Call",
                description:
                  "15-minute call to understand your goals, audience, and desired outcomes.",
              },
              {
                step: "02",
                title: "Plan & Design",
                description:
                  "We create a custom plan with wireframes, content strategy, and UX design.",
              },
              {
                step: "03",
                title: "Build & Test",
                description:
                  "Fast development with clean code, SEO fundamentals, and conversion optimization.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description:
                  "Smooth launch with training, documentation, and ongoing support options.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/30 border border-white/40  px-6 py-3 mb-8 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500  animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm tracking-wide">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Built for
              <span className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Results
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We focus on what matters: getting you a website that converts
              visitors into customers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Fast Timelines",
                description:
                  "Most projects live in 3-4 weeks. No endless revisions. Just focused execution.",
              },
              {
                icon: "🎯",
                title: "Strategy-Led",
                description:
                  "Every choice—from layout to copy—is driven by conversion goals, not trends.",
              },
              {
                icon: "📱",
                title: "Mobile-First",
                description:
                  "Your site looks perfect on every device. Fast load times and clean UX everywhere.",
              },
              {
                icon: "🔍",
                title: "SEO-Ready",
                description:
                  "Built-in SEO fundamentals. No plugins needed. Just clean code and best practices.",
              },
              {
                icon: "💬",
                title: "Clear Communication",
                description:
                  "Weekly updates. No jargon. You'll always know where we are and what's next.",
              },
              {
                icon: "🛠️",
                title: "You Own Everything",
                description:
                  "Full code ownership. No vendor lock-in. Take it anywhere, anytime.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-8 hover:bg-white/80 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results/Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50  px-6 py-3 mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500  animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm tracking-wide">
                Real Results
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Numbers That
              <span className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Matter
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "150+",
                label: "Projects Completed",
                sublabel: "For new brands & SMBs",
              },
              {
                number: "3-4",
                label: "Week Timeline",
                sublabel: "Average project duration",
              },
              {
                number: "98%",
                label: "Client Satisfaction",
                sublabel: "Would recommend us",
              },
              {
                number: "38%",
                label: "Avg. Lead Increase",
                sublabel: "Within first 3 months",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-lg font-bold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-500">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        titleTop="Ready to Build Your"
        titleBottom="Winning Website?"
        ctaText="Get Strategy Call"
        ctaHref="/contact"
      />

      {/* <RunningCards speed={35} direction="left" className="mt-20" /> */}

      {/* // comment this for deploy issues */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 backdrop-blur-md bg-white/30 border border-white/40  px-6 py-3 mb-8 shadow-xl">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500  animate-pulse"></div>
              <span className="text-gray-700 font-semibold text-sm tracking-wide">
                FAQ
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Common
              <span className="ml-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How long does a typical project take?",
                answer:
                  "Most websites are live in 3-4 weeks. E-commerce and complex projects may take 6-8 weeks. We provide a clear timeline during your strategy call.",
              },
              {
                question: "What's included in the price?",
                answer:
                  "Strategy, design, development, SEO fundamentals, mobile optimization, training, and 30 days of post-launch support. No hidden fees.",
              },
              {
                question: "Do I own the website after launch?",
                answer:
                  "Yes. You own everything—code, content, and design files. No vendor lock-in. Host it anywhere you want.",
              },
              {
                question: "Can you migrate my existing site?",
                answer:
                  "Yes. We handle migrations from Wix, WordPress, Squarespace, and other platforms. We ensure zero SEO loss during the transition.",
              },
              {
                question: "Do you offer ongoing support?",
                answer:
                  "Yes. We offer monthly retainer packages for updates, edits, and support. Or use our on-demand service for one-off changes.",
              },
              {
                question: "What if I need changes after launch?",
                answer:
                  "First 30 days include free minor edits. After that, we offer affordable monthly packages or hourly rates for updates.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm p-6 hover:bg-white/80 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
