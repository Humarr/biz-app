"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PageViewTracker() {
  const path = usePathname();
  useEffect(() => {
    const sid = localStorage.getItem("sessionId");
    if (!sid || !path) return;
    fetch("/api/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: sid, path }),
    });

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
