import React from "react";

export default function Root({ children }) {
  if (typeof window !== "undefined" && typeof window.gtag !== "function") {
    // Prevent route-change errors when analytics scripts are blocked.
    window.gtag = () => {};
  }

  return <>{children}</>;
}
