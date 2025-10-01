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
  { value: 18, l1: "Skilled", l2: "Performance" },
  { value: 32, l1: "Visited", l2: "Conference" },
  { value: 1, suffix: "K", l1: "Years of", l2: "Experience" },
];

export default function CounterStrip() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        {/* layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 md:gap-y-20">
          {STATS.map((s, i) => (
            <StatItem key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, l1, l2 }: Stat) {
  return (
    <div className="relative h-28 sm:h-32 md:h-36 lg:h-40">
      {/* big pale number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="pointer-events-none select-none leading-none text-[#3F5AF324] font-[600] text-[84px] sm:text-[112px] md:text-[130px] lg:text-[138px]  tracking-[3px]">
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
      <div className="absolute top-1/2 left-[56%] -translate-y-1/2 translate-x-4 sm:translate-x-6">
        <p className="text-[20px] sm:text-lg md:text-xl text-[#74787C]">{l1}</p>
        <p className="text-[20px] sm:text-lg md:text-xl text-[#74787C]">{l2}</p>
      </div>
    </div>
  );
}
