import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "./button";

interface GradientButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showArrow?: boolean;
  fullWidth?: boolean;
}

export function GradientButton({
  children,
  href,
  onClick,
  className = "",
  showArrow = false,
  fullWidth = false,
}: GradientButtonProps) {
  const buttonClasses = `text-white bg-gradient-theme group rounded-none relative z-10 ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <motion.div
          className="relative ml-2"
          whileHover={{
            rotate: 45,
            transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.div>
      )}
    </>
  );

  if (href) {
    return (
      <motion.div
        whileHover={{
          scale: 1.02,
          y: -1,
          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <Button size="lg" className={buttonClasses}>
          <Link
            href={href}
            className="flex items-center justify-center"
            onClick={onClick}
          >
            {content}
          </Link>
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -1,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Button size="lg" className={buttonClasses} onClick={onClick}>
        {content}
      </Button>
    </motion.div>
  );
}
