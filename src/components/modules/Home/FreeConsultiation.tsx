import SectionHeader from "@/components/shared/SectionHeader";
import { GradientButton } from "@/components/ui/gradient-button";

function FreeConsultiation() {
  return (
    <section
      className="w-full min-h-[600px] bg-cover bg-center bg-no-repeat relative flex items-center"
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
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-10 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6 flex-2">
              {/* Purple accent line and "READY TO GROW?" */}
              <SectionHeader title="ready to grow" variant="gradient" />

              {/* Main headlines */}
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let&apos;s Build Your Next Project Contact Aptecode Today
              </h2>
            </div>

            {/* Right side - CTA Button */}
            <div className="flex justify-center lg:justify-end flex-1">
              <GradientButton variant="ctabutton">
                Get A Free Consultation
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FreeConsultiation;
