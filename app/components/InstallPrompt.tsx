"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Download, Smartphone } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [show, setShow] = useState(false);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    // Don't show if already running as installed PWA
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
      return;
    }

    // Don't show if user dismissed recently (24h cooldown)
    const dismissed = localStorage.getItem("pwa-prompt-dismissed");
    if (dismissed && Date.now() - parseInt(dismissed) < 24 * 60 * 60 * 1000) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      // Delay showing prompt by 4 seconds so it's not intrusive
      setTimeout(() => setShow(true), 4000);
    };

    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener("appinstalled", () => setInstalled(true));

    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") setInstalled(true);
    setDeferredPrompt(null);
    setShow(false);
  };

  const handleDismiss = () => {
    setShow(false);
    localStorage.setItem("pwa-prompt-dismissed", Date.now().toString());
  };

  if (installed || !show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.95 }}
          transition={{ type: "spring", damping: 20, stiffness: 260 }}
          className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:w-[360px] z-[200]"
          role="dialog"
          aria-label="Install Mike Software app"
        >
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl shadow-2xl shadow-blue-500/20 border border-blue-100 dark:border-blue-800/50 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-blue-400" />

            <div className="p-5">
              <div className="flex items-start gap-4">
                {/* App icon */}
                <div className="w-14 h-14 rounded-2xl overflow-hidden border border-blue-100 dark:border-blue-800/50 shadow-md shrink-0">
                  <Image
                    src="/logodesign.jpeg"
                    alt="Mike Software"
                    width={56}
                    height={56}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-black text-gray-900 dark:text-white text-base leading-tight">
                        Install Mike Software
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5 flex items-center gap-1">
                        <Smartphone size={11} />
                        Add to your home screen
                      </p>
                    </div>
                    <button
                      onClick={handleDismiss}
                      className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shrink-0"
                      aria-label="Dismiss"
                    >
                      <X size={15} />
                    </button>
                  </div>

                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mt-2">
                    Get instant access to my portfolio — works offline, no browser needed.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={handleDismiss}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-sm font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  Maybe Later
                </button>
                <button
                  onClick={handleInstall}
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/25"
                >
                  <Download size={15} />
                  Install App
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
