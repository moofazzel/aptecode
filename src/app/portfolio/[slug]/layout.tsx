import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio Details | ApteCode",
  description:
    "Detailed case study of our portfolio project showcasing our development process, technologies used, and project results.",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
