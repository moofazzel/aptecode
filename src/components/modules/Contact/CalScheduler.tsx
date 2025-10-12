"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

type Props = {
  calLink: string;
  namespace?: string;
  style?: React.CSSProperties;
};

export default function CalScheduler({
  calLink,
  namespace = "30min",
  style,
}: Props) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace });
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view", // 'month_view' | 'week_view' | 'day_view'
        // theme: 'light' | 'dark' | 'auto'
      });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "auto", ...style }}
      config={{ layout: "month_view" }}
    />
  );
}
