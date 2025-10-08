"use client";

type GradientTitleProps = {
  title: string;
  className?: string;
};

export default function GradientTitle({
  title,
  className = "",
}: GradientTitleProps) {
  return (
    <h3
      className={`text-xs md:text-sm font-semibold uppercase tracking-[0.18em]
                  bg-[linear-gradient(120deg,#5c3afa_0%,#a868fa_50%,#3dabf4_100%)]
                  bg-clip-text text-transparent ${className}`}
      style={{ WebkitTextFillColor: "transparent" }} // Safari
    >
      {title}
    </h3>
  );
}
