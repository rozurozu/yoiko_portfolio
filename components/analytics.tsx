"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // This is where you would typically add analytics tracking
      // Example: window.gtag('config', 'GA_MEASUREMENT_ID', { page_path: pathname });
      console.log(`Page view: ${pathname}${searchParams ? `?${searchParams}` : ""}`);
    }
  }, [pathname, searchParams]);

  return null;
}