import RunningText from "@/components/shared/RunningText";

function RunningTextTwo() {
  const items = [
    { text: "Generative AI GEO Optimization," },
    { text: "Local Search AI-Ready," },
    { text: "Next-Gen Local SEO," },
  ];
  return (
    <div
      className="w-full h-[310px] bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/img/bg-img/running-bg-2.jpg')" }}
    >
      <div
        style={{
          backgroundColor: "#7B9AF7 ",
          mixBlendMode: "multiply",
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
      <RunningText defaultStrokeColor="#fff" speed={100} items={items} />
    </div>
  );
}

export default RunningTextTwo;
