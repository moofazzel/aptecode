"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export type CalSchedulerProps = {
  calLink: string;
  namespace?: string;
  style?: React.CSSProperties;
};

export default function CalScheduler({
  calLink,
  namespace = "30min",
  style,
}: CalSchedulerProps) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", { layout: "month_view", hideEventTypeDetails: false });
    })();
  }, [namespace]);

  return (
    <div
      className="mx-auto w-full max-w-[1160px] px-4"
      style={{ minHeight: 720 }}
    >
      <div className="rounded-2xl shadow-lg ring-1 ring-black/5 overflow-hidden bg-white dark:bg-zinc-900">
        <div className="h-[720px]">
          <Cal
            namespace={namespace}
            calLink={calLink}
            style={{ width: "100%", height: "100%", border: 0, ...style }}
            config={{ layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}
