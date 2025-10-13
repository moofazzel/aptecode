import { Button } from "@/components/ui/button";
import { portfolioData } from "@/data/portfolio";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import PortfolioDetailsClient from "./PortfolioDetailsClient";

interface PortfolioDetailsPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function PortfolioDetailsPage({ params }: PortfolioDetailsPageProps) {
  const resolvedParams = await params;

  // Find project by slug from our centralized data
  const project = portfolioData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The project you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/portfolio">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return <PortfolioDetailsClient project={project} />;
}

export default PortfolioDetailsPage;
