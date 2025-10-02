interface SectionHeaderProps {
  title: string;
  className?: string;
  titleClassName?: string;
  accentLineClassName?: string;
  variant?: "default" | "primary" | "secondary" | "sm" | "lg" | "gradient";
  showAccentLine?: boolean;
}

const SectionHeader = ({
  title,
  className = "",
  titleClassName = "",
  accentLineClassName = "",
  variant = "default",
  showAccentLine = true,
}: SectionHeaderProps) => {
  // Variant styles
  const variants = {
    default: {
      title: "text-sm font-semibold tracking-wider uppercase text-blue-400",
      accent: "accent-line",
    },
    primary: {
      title: "text-sm font-semibold tracking-wider uppercase text-blue-500",
      accent: "accent-line accent-line-primary",
    },
    secondary: {
      title: "text-sm font-semibold tracking-wider uppercase text-purple-400",
      accent: "accent-line accent-line-secondary",
    },
    sm: {
      title: "text-xs font-semibold tracking-wider uppercase text-blue-400",
      accent: "accent-line-sm",
    },
    lg: {
      title: "text-base font-semibold tracking-wider uppercase text-blue-400",
      accent: "accent-line-lg",
    },
    gradient: {
      title: "text-sm font-semibold tracking-wider uppercase text-white",
      accent: "",
      accentStyle: {
        width: "32px",
        height: "4px",
        background:
          "linear-gradient(270deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%)",
        display: "inline-block",
      } as React.CSSProperties,
    },
  };

  const currentVariant = variants[variant];

  return (
    <div className={`flex items-center mb-4 ${className}`}>
      {showAccentLine &&
        (variant === "gradient" ? (
          <div
            aria-hidden="true"
            className={`mr-3 ${accentLineClassName}`}
            style={
              (
                currentVariant as typeof currentVariant & {
                  accentStyle?: React.CSSProperties;
                }
              ).accentStyle
            }
          ></div>
        ) : (
          <div
            aria-hidden="true"
            className={`${currentVariant.accent} mr-3 ${accentLineClassName}`}
          ></div>
        ))}
      <span className={`${currentVariant.title} ${titleClassName}`}>
        {title}
      </span>
    </div>
  );
};

export default SectionHeader;
