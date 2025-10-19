"use client";
import Cal from "@calcom/embed-react";
import "./CalScheduler.css";

export default function BookingPage() {
  return (
    <section className="w-full py-8" aria-labelledby="scheduler-heading">
      {/* no Bootstrap container */}
      <div
        className="mx-auto"
        style={{
          /* match Cal’s internal max so it looks balanced */
          maxWidth: 1160, // tweak between 1040–1280 to taste
          paddingLeft: 16,
          paddingRight: 16,
          minHeight: 720,
        }}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="lrd" />

          {/* Sub-title / kicker */}
          <h3
            className="text-xs md:text-sm font-semibold uppercase 
      bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
      bg-clip-text text-transparent  h-[30px] relative z-50"
            style={{ WebkitTextFillColor: "transparent" }} // Safari fix
          >
            book a meeting
          </h3>
          <span className="rrd" />
        </div>

        {/* Title */}
        <h2 
          id="scheduler-heading"
          className="text-center text-3xl md:text-5xl font-[700] tracking-tight text-neutral-900 lg:mb-[90px] mb-[60px] uppercase"
          itemProp="name"
        >
          pick a time that works
        </h2>

        <div role="application" aria-label="Meeting scheduler calendar">
        <Cal
          namespace="30min"
          calLink="gazi-jakia-sultana-jui-ofjboj/30min"
          style={{ width: "100%", height: "100%" }}
          config={{ layout: "month_view", theme: "light" }}
        />
        </div>
      </div>
    </section>
  );
}
