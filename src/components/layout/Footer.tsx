import Image from "next/image";
import Link from "next/link";
import { footerNav } from "@/content/navigation";
import { addressLine, org } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/images/logo.png"
            alt="Cornerstone Craftsman"
            width={160}
            height={118}
            className="mb-4 h-14 w-auto rounded-md bg-white p-1"
          />
          <p className="text-sm leading-6 text-white/80">
            Hands-on skilled-trades training, mentorship, and life-skills
            development for young people ages 12–17 in Alexandria, Virginia.
          </p>
          <p className="mt-4 text-sm text-white/80">{addressLine}</p>
          <p className="mt-1 text-sm">
            <a className="underline decoration-white/30 underline-offset-2 hover:decoration-orange" href={`mailto:${org.email}`}>
              {org.email}
            </a>
          </p>
        </div>
        {footerNav.map((group) => (
          <div key={group.heading}>
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-orange">
              {group.heading}
            </h2>
            <ul className="space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link className="text-white/85 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            {org.legalName} is a {org.taxStatus} nonprofit. EIN {org.ein}.
          </p>
          <p className="flex flex-wrap gap-4">
            <a href={org.social.instagram} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={org.social.facebook} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href={org.social.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={org.candidProfileUrl} target="_blank" rel="noopener noreferrer">
              Candid profile
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
