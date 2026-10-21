"use client";

import type { AnchorHTMLAttributes } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: AnalyticsEvent;
};

/** External link that sends a GA4 event when clicked. Opens in a new tab. */
export default function TrackedLink({ event, onClick, children, ...props }: Props) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      onClick={(e) => {
        trackEvent(event.name, event.params);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
