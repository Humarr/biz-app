"use client";

import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export function PageViewTracker() {
  const path = usePathname();

  // --- Helper: Create new session and persist it
  const createNewSession = async (): Promise<string> => {
    const sessionId = uuidv4();
    localStorage.setItem("sessionId", sessionId);

    await fetch("/api/session/start", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId,
        userAgent: navigator.userAgent,
        pathname: window.location.pathname,
      }),
    });

    return sessionId;
  };

  // --- Helper: Get or create sessionId
  const ensureSession = useCallback(async (): Promise<string> => {
    let sessionId = localStorage.getItem("sessionId");
  // if (sessionId) localStorage.removeItem("sessionId")
    if (!sessionId) {
      sessionId = await createNewSession();
    }
    return sessionId;
  }, []);

  // --- Helper: Track page view
  const trackPageView = useCallback(async (sessionId: string, path: string) => {
    try {
      const res = await fetch("/api/pageview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, path }),
      });
      console.log("response in trackPageView: ", res)
      if (!res.ok) throw new Error("Failed to track page view");
      const data = await res.json();
      console.log("Page view tracked:", data);
    } catch (err) {
      console.error("Page view tracking error:", err);
    }
  }, []);

  // --- Helper: Handle exit tracking
  const setupExitTracking = (sessionId: string, path: string) => {
    const handleExit = () => {
      const body = JSON.stringify({
        sessionId,
        path,
        
      });
      navigator.sendBeacon("/api/pageview/exit", body);
    };

    const handleSessionEnd = () => {
      const latestSessionId = localStorage.getItem("sessionId");
      if (!latestSessionId) return;

      const blob = new Blob(
        [JSON.stringify({ sessionId: latestSessionId })],
        { type: "application/json" }
      );
      navigator.sendBeacon("/api/session/end", blob);
    };

    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") handleExit();
    });

    window.addEventListener("beforeunload", () => {
      handleExit();
      handleSessionEnd();
    });

    return () => {
      document.removeEventListener("visibilitychange", handleExit);
      window.removeEventListener("beforeunload", handleExit);
      window.removeEventListener("beforeunload", handleSessionEnd);
    };
  };

  // --- Effect: Session setup, page view tracking, exit tracking
  useEffect(() => {
    if (!path) return;

    let cleanup: (() => void) | undefined;

    (async () => {
      const sessionId = await ensureSession();
      await trackPageView(sessionId, path);
      cleanup = setupExitTracking(sessionId, path);
    })();

    return () => {
      if (cleanup) cleanup();
    };
  }, [path, ensureSession, trackPageView]);

  return null;
}
