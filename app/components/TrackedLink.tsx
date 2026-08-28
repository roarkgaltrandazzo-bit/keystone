"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function trackEvent(eventName: string) {
  window.plausible?.(eventName);
}

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
};

export function TrackedLink({ eventName, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}
