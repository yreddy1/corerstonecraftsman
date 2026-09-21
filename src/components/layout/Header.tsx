"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { primaryNav } from "@/content/navigation";
import { org } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [involvedOpen, setInvolvedOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setInvolvedOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const involved = primaryNav.find((item) => item.children);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center rounded-md bg-white px-2 py-1">
          <Image
            src="/images/logo.png"
            alt="Cornerstone Craftsman"
            width={160}
            height={118}
            className="h-12 w-auto sm:h-14"
            priority
          />
          <span className="sr-only">{org.name} home</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {primaryNav.map((item) => {
            if (item.cta) {
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="ml-2 rounded-md bg-orange px-4 py-2 text-sm font-bold text-white hover:bg-orange-dark"
                >
                  {item.label}
                </Link>
              );
            }
            if (item.children) {
              return (
                <div key={item.href} className="relative">
                  <button
                    type="button"
                    className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
                    aria-expanded={involvedOpen}
                    aria-haspopup="true"
                    onClick={() => setInvolvedOpen((value) => !value)}
                    onBlur={(event) => {
                      if (!event.currentTarget.parentElement?.contains(event.relatedTarget)) {
                        setInvolvedOpen(false);
                      }
                    }}
                  >
                    {item.label}
                  </button>
                  {involvedOpen ? (
                    <div className="absolute left-0 top-full mt-1 min-w-56 rounded-md border border-line bg-white py-2 text-navy shadow-card">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm font-medium hover:bg-sand"
                          onClick={() => setInvolvedOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/ways-to-give"
            className="rounded-md bg-orange px-3 py-2 text-sm font-bold text-white hover:bg-orange-dark"
          >
            Donate
          </Link>
          <button
            type="button"
            className="rounded-md border border-white/30 px-3 py-2 text-sm font-semibold"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-white/10 bg-navy-dark px-4 py-4 lg:hidden"
        >
          <nav aria-label="Mobile primary" className="flex flex-col gap-1">
            {primaryNav
              .filter((item) => !item.cta)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-base font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            {involved?.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="rounded-md px-6 py-2 text-sm text-white/85"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
