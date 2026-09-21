"use client";

import { useEffect } from "react";
import { org } from "@/content/site";

export function GivebutterEmbed() {
  useEffect(() => {
    const src = `https://widgets.givebutter.com/latest.umd.cjs?acct=${org.givebutterAccount}`;
    if (document.querySelector(`script[src="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-white">
      <givebutter-widget id={org.givebutterWidgetId} />
      <p className="px-4 py-3 text-sm text-muted">
        If the form does not load, donate at{" "}
        <a className="font-semibold text-navy underline" href={org.givebutterUrl} target="_blank" rel="noopener noreferrer">
          {org.givebutterUrl}
        </a>
        .
      </p>
    </div>
  );
}
