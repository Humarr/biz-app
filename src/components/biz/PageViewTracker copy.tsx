"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

export function PageViewTracker() {
  const path = usePathname();
  useEffect(() => {
    let sid = localStorage.getItem("sessionId");
    if (!sid || !path) {
      sid = uuidv4();
      localStorage.setItem("sessionId", sid);
      return
    }
    console.log("sessionId: ", sid);
    console.log("path: ", path);
    
    async function trackPageView() {
      const res = await fetch("/api/pageview", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sid, path }),
      });
      if (!res.ok) {
        console.error("Failed to track page view");
      }

      const data = await res.json();
      console.log("Page view tracked: ", data);
    }

    trackPageView();

    const onExit = () => {
      const body = JSON.stringify({
        sessionId: sid,
        path,
        leftAt: new Date().toISOString(),
      });
      navigator.sendBeacon("/api/pageview/exit", body);
    };
    window.addEventListener(
      "visibilitychange",
      () => document.visibilityState === "hidden" && onExit()
    );
    window.addEventListener("beforeunload", onExit);
    return () => {
      window.removeEventListener("beforeunload", onExit);
    };
  }, [path]);
  return null;
}
