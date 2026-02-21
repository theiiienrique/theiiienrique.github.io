if (typeof window !== "undefined" && typeof window.gtag !== "function") {
  // Prevent runtime errors when gtag is unavailable (e.g., blocked scripts).
  window.gtag = () => {};
}
