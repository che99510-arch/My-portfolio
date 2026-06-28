"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Mike Software portfolio"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0f172a]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          {/* Background blobs */}
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600 rounded-full opacity-20 blur-3xl blob-animation pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-3xl blob-animation-delay pointer-events-none" />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "backOut" }}
            className="flex flex-col items-center gap-5 z-10"
          >
            {/* Logo image */}
            <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white/10 border border-white/20 shadow-2xl shadow-blue-500/30 flex items-center justify-center">
              <Image
                src="/logodesign.jpeg"
                alt="Mike Software Logo"
                width={96}
                height={96}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-black text-white tracking-tight">Mike Software</h1>
              <p className="text-blue-400 text-sm mt-1.5 font-medium">Loading portfolio...</p>
            </div>
          </motion.div>

          {/* Spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10 z-10"
          >
            <div className="loader-ring" />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
