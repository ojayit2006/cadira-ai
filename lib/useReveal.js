"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -48px 0px" }
    );

    reveals.forEach((node) => observer.observe(node));

    return () => reveals.forEach((node) => observer.unobserve(node));
  }, []);
}
