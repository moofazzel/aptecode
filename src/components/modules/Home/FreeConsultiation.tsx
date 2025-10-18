import SectionHeader from "@/components/shared/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";

function FreeConsultiation() {
  return (
    <section
      className="w-full min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] bg-cover bg-center bg-no-repeat relative flex items-center"
      style={{ backgroundImage: "url('/img/bg-img/cta-bg-2.jpg')" }}
    >
      {/* Dark overlay */}
      <div
        style={{
          backgroundColor: "#070a16db",
          mixBlendMode: "multiply",
          filter: "saturate(0)",
          content: '""',
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      {/* Content container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 items-center lg:items-center">
          {/* Left side - Text content */}
          <div className="space-y-4 sm:space-y-6 flex-1 lg:flex-2 text-center lg:text-left">
            {/* Purple accent line and "READY TO GROW?" */}
            <div className="flex justify-center lg:justify-start">
              <SectionHeader
                title="Stop Losing Money to Poor Web Design"
                variant="gradient"
              />
            </div>

            {/* Main headlines */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
              Turn visitors into customers in 30 days.
            </h2>
          </div>

          {/* Right side - CTA Button */}
          <div className="flex justify-center lg:justify-end flex-1 lg:flex-shrink-0">
            <GradientButton
              variant="ctabutton"
              href="/contact"
              size="lg"
              className="w-full sm:w-auto min-w-[200px] sm:min-w-[250px]"
            >
              Get My Free Website Audit
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeConsultiation;
