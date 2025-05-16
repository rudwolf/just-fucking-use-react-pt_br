"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

export default function StateManagementDemoLoader() {
  const [stateManagementDemo, setStateManagementDemo] =
    useState<React.ReactNode>(null);
  const scrollMarkerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadStateManagementDemo = async () => {
      const { default: StateManagementDemo } = await import(
        "@/components/StateManagementDemo"
      );

      setStateManagementDemo(<StateManagementDemo />);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadStateManagementDemo();
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (scrollMarkerRef.current) {
      observer.observe(scrollMarkerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={scrollMarkerRef}
        className={cn(
          "rounded-lg border p-2 bg-background text-foreground h-[50vh]",
          stateManagementDemo && "hidden"
        )}
      />

      <div
        className={cn(
          "opacity-0",
          stateManagementDemo && "opacity-100 transition-opacity duration-500"
        )}
      >
        {stateManagementDemo}
      </div>
    </>
  );
}
