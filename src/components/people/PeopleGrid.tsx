import Image from "next/image";
import type { Person } from "@/content/people";

export function PeopleGrid({ people }: { people: Person[] }) {
  return (
    <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.name} className="overflow-hidden rounded-xl border border-line bg-white">
          <div className="relative aspect-[4/5] bg-sand">
            <Image
              src={person.photo}
              alt={person.name}
              fill
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-4">
            <p className="font-semibold text-navy">{person.name}</p>
            <p className="mt-1 text-sm text-muted">
              {person.role || "Title not listed on the current site"}
            </p>
            {person.bioPdf ? (
              <a
                className="mt-3 inline-block text-sm font-semibold text-orange"
                href={person.bioPdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read bio (PDF)
              </a>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
