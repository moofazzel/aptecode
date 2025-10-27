// imports (make sure these exist)
import {
  BarChart3,
  Gauge,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import React from "react";

// -------- helper rules (same as before) --------
type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const RESULT_META_RULES: {
  test: RegExp;
  label: string;
  icon: IconType;
  wrap: string;
}[] = [
  {
    test: /(conversion|conversions|lead|booking|signup|checkout|sales|\+?\d+%)/i,
    label: "Conversions",
    icon: TrendingUp,
    wrap: "bg-green-50 text-green-600",
  },
  {
    test: /(speed|load|lcp|core web|lighthouse|performance)/i,
    label: "Performance",
    icon: Gauge,
    wrap: "bg-blue-50 text-blue-600",
  },
  {
    test: /(seo|rank|organic|traffic|schema|serp)/i,
    label: "SEO",
    icon: Search,
    wrap: "bg-indigo-50 text-indigo-600",
  },
  {
    test: /(mobile|ux|cta|bounce|drop-?off|retention)/i,
    label: "UX",
    icon: Sparkles,
    wrap: "bg-purple-50 text-purple-600",
  },
  {
    test: /(publish|workflow|editor|minutes|ops|process|time)/i,
    label: "Ops",
    icon: Rocket,
    wrap: "bg-amber-50 text-amber-600",
  },
  {
    test: /(trust|support|faq|receipt|thank-?you|transparen)/i,
    label: "Trust",
    icon: ShieldCheck,
    wrap: "bg-teal-50 text-teal-600",
  },
];

function getResultMeta(text: string, index: number) {
  const rule = RESULT_META_RULES.find((r) => r.test.test(text));
  if (rule) return rule;
  const wraps = [
    "bg-gray-100 text-gray-700",
    "bg-blue-50 text-blue-600",
    "bg-emerald-50 text-emerald-600",
  ];
  return {
    test: /.*/i,
    label: "Outcome",
    icon: BarChart3 as IconType,
    wrap: wraps[index % wraps.length],
  };
}

// -------- component version (fix) --------
interface ResultInfoProps {
  text: string;
  index: number;
}
const ResultInfo: React.FC<ResultInfoProps> = ({ text, index }) => {
  const meta = getResultMeta(text, index);
  const Icon = meta.icon;
  return (
    <div className="p-6 bg-white border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <span
          className={`w-10 h-10 rounded-full flex items-center justify-center ${meta.wrap}`}
        >
          <Icon className="w-5 h-5" />
        </span>
        <span className="text-gray-900 font-semibold">{meta.label}</span>
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};
export default ResultInfo;
