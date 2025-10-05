"use client";

import MotionCard from "@/components/ui/MotionCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function AboutCta() {
  return (
    <section className="relative overflow-hidden bg-[#11151c] z-50">
      <div className="bg_shape">
        <img src="/img/about/ftshap.png" alt="" />
      </div>
      {/* background waves */}

      <div className="relative mx-auto sm:flex max-w-screen-2xl items-center justify-between px-6 py-[60px] sm:py-28 md:px-10 lg:py-36">
        {/* text */}
        <div className="max-w-5xl">
          <MotionCard delay={0.2} direction="right">
            <h1
              className="font-[600] lg:leading-[92px] text-white tracking-tight
                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-[92px]"
            >
              LET&apos;S START YOUR NEXT
              {/* <br className="hidden sm:block" /> */}
              <span className="block mt-2">DREAM PROJECT</span>
            </h1>
          </MotionCard>
        </div>

        {/* right-side controls / CTA */}
        <div className="relative flex shrink-0 items-center mt-[35px] lg:mt-0">
          {/* circle CTA */}
          <MotionCard delay={0.2} direction="left">
            <Link href="/contact" className="cursor-pointer">
              <button
                className="cursor-pointer group relative grid aspect-square w-28 place-items-center rounded-full
                       ring-1 ring-[#a868fa] transition
                       hover:ring-2 hover:ring-violet-400 sm:w-32 lg:w-[130px]"
                aria-label="Go"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/5 to-white/0" />
                <FaArrowRight className="h-6 w-[60px] sm:h-7 sm:w-[60px] text-white/90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                {/* subtle purple outline */}
                <span className=" absolute inset-0 -z-10 rounded-full ring-2 ring-violet-500/50" />
              </button>
            </Link>
          </MotionCard>

          {/* tiny purple dot */}

          {/* floating settings pill on far right (like screenshot) */}
        </div>
      </div>
    </section>
  );
}
