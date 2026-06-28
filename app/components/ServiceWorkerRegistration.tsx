"use client";
import { useEffect } from "react";

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js", { scope: "/" })
          .then((reg) => {
            console.log("[SW] Registered:", reg.scope);

            // Check for updates every 60 seconds
            setInterval(() => reg.update(), 60_000);

            reg.addEventListener("updatefound", () => {
              const newWorker = reg.installing;
              if (!newWorker) return;
              newWorker.addEventListener("statechange", () => {
                if (
                  newWorker.state === "installed" &&
                  navigator.serviceWorker.controller
                ) {
                  // New version available — reload to activate
                  console.log("[SW] New version available, updating...");
                  newWorker.postMessage({ type: "SKIP_WAITING" });
                  window.location.reload();
                }
              });
            });
          })
          .catch((err) => console.warn("[SW] Registration failed:", err));
      });
    }
  }, []);

  return null;
}
