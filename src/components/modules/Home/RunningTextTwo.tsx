import RunningText from "@/components/shared/RunningText";

function RunningTextTwo() {
  return (
    <div
      className="w-full h-32 bg-cover bg-center bg-no-repeat relative py-[300px]"
      style={{ backgroundImage: "url('/img/bg-img/running-bg-2.jpg')" }}
    >
      <div
        style={{
          backgroundColor: "#3F5AF3",
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
      <RunningText defaultStrokeColor="#fff" speed={100} />
    </div>
  );
}

export default RunningTextTwo;
