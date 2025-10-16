"use client";

import CountUp from "react-countup";

type Stat = {
  value: number;
  suffix?: string;
  l1: string; // first line
  l2: string; // second line
};

const STATS: Stat[] = [
  { value: 10, l1: "Years of", l2: "Experience" },
  { value: 18, l1: "Skilled", l2: "Team Members" },
  { value: 32, l1: "Projects", l2: "Completed" },
  { value: 1, suffix: "K", l1: "Happy", l2: "Clients" },
];

export default function CounterStrip() {
  // Structured data for statistics
  const statisticsStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aptecode.com/#organization",
    "name": "Aptecode",
    "foundingDate": "2014", // 10 years ago
    "numberOfEmployees": "18",
    "award": [
      {
        "@type": "Award",
        "name": "32+ Successful Projects Completed"
      },
      {
        "@type": "Award", 
        "name": "1000+ Happy Clients Served"
      }
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(statisticsStructuredData),
        }}
      />
      
      <section className="bg-white" itemScope itemType="https://schema.org/Organization">
        <div className="max-w-[1405px] mx-auto px-4 md:px-4 lg:px-4 pb-16 md:py-24">
        {/* layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:gap-y-16 gap-y-[15px] md:gap-y-20">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

function StatItem({ value, suffix, l1, l2 }: Stat) {
  const statLabel = `${l1} ${l2}`.trim();
  
  return (
    <div className="relative h-28 sm:h-32 md:h-36 lg:h-40" itemScope itemType="https://schema.org/QuantitativeValue">
      {/* big pale number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-none select-none leading-none text-[#3F5AF324] font-[600] text-[65px] sm:text-[112px] md:text-[130px] lg:text-[138px]  tracking-[3px]" itemProp="value">
          <CountUp
            end={value}
            duration={2}
            enableScrollSpy
            scrollSpyOnce
            suffix={suffix ?? ""}
          />
        </div>
      </div>

      {/* label over the right side of the number */}
      <div className="absolute top-1/2 lg:left-[56%] left-[49%] -translate-y-1/2 translate-x-4 sm:translate-x-6" itemProp="name">
        <p className="lg:text-[20px] text-[15px] sm:text-lg md:text-xl text-[#74787C]">
          {l1}
        </p>
        <p className="lg:text-[20px] text-[15px] sm:text-lg md:text-xl text-[#74787C]">
          {l2}
        </p>
      </div>
      
      {/* Hidden structured data */}
      <meta itemProp="description" content={`${statLabel}: ${value}${suffix ?? ""}`} />
    </div>
  );
}
