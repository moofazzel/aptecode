"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { ReactNode, forwardRef, useState } from "react";
import { Button } from "./button";

type ButtonVariant =
  | "default"
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "ctabutton";
type ButtonSize = "sm" | "md" | "lg" | "xl";
type IconPosition = "left" | "right";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  "aria-label"?: string;
  "aria-describedby"?: string;
}

// Helper function to get variant classes
const getVariantClasses = (
  variant: ButtonVariant,
  disabled: boolean,
  loading: boolean
) => {
  const baseClasses = "group relative transition-all duration-300";
  const disabledClasses =
    disabled || loading ? "opacity-50 cursor-not-allowed" : "";

  switch (variant) {
    case "primary":
      return cn(
        "text-white bg-gradient-theme hover-effect-theme",
        baseClasses,
        disabledClasses
      );
    case "secondary":
      return cn(
        "text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 hover-effect-theme",
        baseClasses,
        disabledClasses
      );
    case "outline":
      return cn(
        "text-white border-2 border-white bg-transparent hover-effect-theme",
        baseClasses,
        disabledClasses
      );
    case "ghost":
      return cn(
        "text-gray-700 border border-black bg-transparent hover:text-white hover-effect-theme",
        baseClasses,
        disabledClasses
      );
    case "ctabutton":
      return cn(
        "text-white border-2 border-white bg-transparent hover-effect-theme",
        baseClasses,
        disabledClasses
      );
    default:
      return cn(
        "text-white bg-gradient-theme hover-effect-theme",
        baseClasses,
        disabledClasses
      );
  }
};

// Helper function to get size classes
const getSizeClasses = (size: ButtonSize) => {
  switch (size) {
    case "sm":
      return "h-8 px-3 text-xs rounded-none";
    case "md":
      return "h-10 px-4 text-sm rounded-none";
    case "lg":
      return "h-12 px-6 text-base rounded-none";
    case "xl":
      return "h-14 px-8 text-lg rounded-none";
    default:
      return "h-12 px-6 text-base rounded-none";
  }
};

export const GradientButton = forwardRef<
  HTMLButtonElement,
  GradientButtonProps
>(
  (
    {
      children,
      href,
      onClick,
      className = "",
      showArrow = false,
      fullWidth = false,
      style,
      variant = "default",
      size = "lg",
      disabled = false,
      loading = false,
      icon,
      iconPosition = "right",
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
    },
    ref
  ) => {
    const variantClasses = getVariantClasses(variant, disabled, loading);
    const sizeClasses = getSizeClasses(size);
    const widthClasses = fullWidth ? "w-full" : "";

    const buttonClasses = cn(
      variantClasses,
      sizeClasses,
      widthClasses,
      "rounded-none",
      className
    );

    const isDisabled = disabled || loading;

    // Arrow animation state
    const [isHovered, setIsHovered] = useState(false);

    const renderIcon = (iconComponent: ReactNode, position: IconPosition) => {
      if (!iconComponent) return null;

      return (
        <motion.div
          className={cn(
            "flex items-center justify-center",
            position === "left" ? "mr-2" : "ml-2"
          )}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 },
          }}
        >
          {iconComponent}
        </motion.div>
      );
    };

    const renderArrow = () => {
      if (!showArrow) return null;

      return (
        <motion.div
          className="relative ml-2"
          animate={{
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      );
    };

    const renderLoadingSpinner = () => {
      if (!loading) return null;

      return (
        <motion.div
          className="mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <Loader2 className="w-4 h-4" />
        </motion.div>
      );
    };

    const content = (
      <div className="flex items-center justify-center">
        {loading && renderLoadingSpinner()}
        {icon && iconPosition === "left" && renderIcon(icon, "left")}
        <span className={loading ? "opacity-70" : ""}>{children}</span>
        {icon && iconPosition === "right" && renderIcon(icon, "right")}
        {showArrow && renderArrow()}
      </div>
    );

    const motionProps = {
      whileHover: !isDisabled
        ? {
            scale: 1.02,
            y: -2,
            transition: { duration: 0.3 },
          }
        : undefined,
      whileTap: !isDisabled
        ? {
            scale: 0.98,
            transition: { duration: 0.1 },
          }
        : undefined,
      initial: { scale: 1 },
      animate: { scale: 1 },
      onHoverStart: () => setIsHovered(true),
      onHoverEnd: () => setIsHovered(false),
    };

    const buttonProps = {
      ref,
      className: buttonClasses,
      style,
      disabled: isDisabled,
      "aria-label": ariaLabel,
      "aria-describedby": ariaDescribedBy,
      "aria-disabled": isDisabled,
    };

    if (href && !isDisabled) {
      return (
        <motion.div {...motionProps}>
          <Button size="lg" className={buttonClasses} style={style}>
            <Link
              href={href}
              className="flex items-center justify-center w-full h-full rounded-none"
              onClick={onClick}
              aria-label={ariaLabel}
            >
              {content}
            </Link>
          </Button>
        </motion.div>
      );
    }

    return (
      <motion.div {...motionProps}>
        <Button {...buttonProps} onClick={!isDisabled ? onClick : undefined}>
          {content}
        </Button>
      </motion.div>
    );
  }
);

GradientButton.displayName = "GradientButton";
