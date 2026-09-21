import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Eyebrow, Note, Section } from "@/components/ui/Section";
import { graduates, homepageStory } from "@/content/stories";
import { org } from "@/content/site";

const pathways = [
  {
    title: "Students & Families",
    body: "Learn how to join the pre-apprenticeship program.",
    href: "/join-the-program",
    cta: "Learn how to join",
  },
  {
    title: "Donors",
    body: "Help expand opportunity for more Alexandria youth.",
    href: "/ways-to-give",
    cta: "Help expand opportunity",
  },
  {
    title: "Volunteers",
    body: "Share your skills and time with students and families.",
    href: "/volunteer-opportunities",
    cta: "Share your skills and time",
  },
  {
    title: "Community Partners",
    body: "Work with us to open pathways into the trades.",
    href: "/partner-with-us",
    cta: "Work with us",
  },
];

const programSteps = [
  {
    title: "Hands-on skilled-trades instruction",
    body: "Students learn safety, tools, drywall, painting, carpentry, and related construction skills through structured lessons and projects.",
  },
  {
    title: "Mentoring and character development",
    body: "The program emphasizes the 5Cs of Positive Youth Development: Competence, Confidence, Connection, Character, and Caring.",
  },
  {
    title: "Life skills and career preparation",
    body: "Instruction includes conflict resolution, critical thinking, self-awareness, and accountability, alongside technical training.",
  },
  {
    title: "School-year and summer participation",
    body: "Students meet with instructors and mentors during the school year and more frequently during the summer at the Learning Center.",
  },
  {
    title: "Support for students and families",
    body: "The organization provides mentoring, benevolent/support services, transportation, and ongoing family engagement.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[34rem] overflow-hidden bg-navy-dark text-white sm:min-h-[38rem]">
        <Image
          src="/images/program/hero.jpg"
          alt="Young people in safety gear installing metal framing at the Cornerstone Craftsman workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/75 to-navy/40" />
        <div className="relative mx-auto flex min-h-[34rem] max-w-6xl flex-col justify-end px-4 py-16 sm:min-h-[38rem] sm:px-6 lg:justify-center lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-orange">
            Alexandria, Virginia
          </p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Building Skills. Confidence. Futures.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Cornerstone Craftsman provides hands-on skilled-trades training,
            mentorship, and life-skills development for young people ages 12–17
            in Alexandria, Virginia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/our-program">Explore the Program</Button>
            <Button href="/ways-to-give" variant="secondary">
              Support a Student
            </Button>
          </div>
        </div>
      </section>

      <Section tone="white">
        <Eyebrow>Find your path</Eyebrow>
        <h2 className="max-w-3xl text-3xl font-bold text-navy">How you can connect</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="flex h-full flex-col rounded-xl border border-line bg-cream p-5 shadow-sm transition-shadow hover:shadow-card"
            >
              <h3 className="text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-muted">{item.body}</p>
              <span className="mt-4 text-sm font-semibold text-orange">{item.cta} →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Our program</Eyebrow>
            <h2 className="text-3xl font-bold text-navy">How the program works</h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Cornerstone Craftsman is an Alexandria-based pre-apprenticeship
              program. Young people ages 12–17 learn skilled trades, receive
              mentoring, and build a path toward a livable wage and a viable
              career.
            </p>
            <ol className="mt-6 space-y-4">
              {programSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Button href="/our-program" variant="navy">
                Read the full program page
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/program/workshop-1.jpg"
              alt="Three students in hard hats and safety vests measuring and fastening wall framing together"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <Eyebrow>Results</Eyebrow>
        <h2 className="text-3xl font-bold">What we can say today</h2>
        <p className="mt-4 max-w-3xl text-white/85">
          These figures are taken from Cornerstone Craftsman’s current public
          materials. They are not presented as independently audited outcomes.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl bg-white/10 p-6">
            <p className="text-4xl font-bold text-orange">28</p>
            <h3 className="mt-2 font-semibold">Current pre-apprentices</h3>
            <p className="mt-2 text-sm text-white/80">
              The website describes 28 active, year-round participants. The
              exact reporting date is not specified on the page.
            </p>
          </article>
          <article className="rounded-xl bg-white/10 p-6">
            <p className="text-4xl font-bold text-orange">44</p>
            <h3 className="mt-2 font-semibold">Youth served to date</h3>
            <p className="mt-2 text-sm text-white/80">
              Published on the Our History page: Cornerstone has served 44
              youth since the informal program began in 2021.
            </p>
          </article>
          <article className="rounded-xl border border-dashed border-white/30 bg-white/5 p-6">
            <p className="text-4xl font-bold text-white/50">—</p>
            <h3 className="mt-2 font-semibold">Waitlist size</h3>
            <p className="mt-2 text-sm text-white/80">
              Public pages currently list both 17 and “over 45.” This number
              will be published here after staff confirm the current count and
              date.
            </p>
          </article>
        </div>
        <p className="mt-6 text-sm text-white/75">
          A 95% retention rate appears on the current website, but the reporting
          period, participant count, and internal source are not stated. It is
          not featured as a headline metric until those details can be verified.
        </p>
        <div className="mt-8">
          <Button href="/our-impact" variant="primary">
            See our impact
          </Button>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/program/measuring.jpg"
              alt="An instructor helps a student fit a respirator while another student watches during workshop safety preparation"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <Eyebrow>Student voice</Eyebrow>
            <h2 className="text-3xl font-bold text-navy">Skills that carry beyond the shop</h2>
            <blockquote className="mt-5 border-l-4 border-orange pl-5 text-lg leading-8 text-ink">
              “{homepageStory.quote}”
            </blockquote>
            <p className="mt-4 text-sm font-medium text-muted">
              — {homepageStory.attribution}, published on the Cornerstone
              Craftsman testimonials page with no last name given.
            </p>
            <p className="mt-4 text-sm text-muted">
              Additional parent and community reflections are collected on the
              impact page. Sensitive court or juvenile-justice history is not
              used as a homepage story.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Recent graduates</Eyebrow>
        <h2 className="text-3xl font-bold text-navy">Building Our Future: Recent Graduates</h2>
        <p className="mt-3 max-w-3xl text-sm text-muted">
          Graduate graphics published on the original homepage. First names only,
          as shown on the live site.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {graduates.map((graduate) => (
            <figure key={graduate.name} className="overflow-hidden rounded-xl bg-sand">
              <div className="relative aspect-[4/5]">
                <Image
                  src={graduate.src}
                  alt={`Graduate spotlight: ${graduate.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-contain"
                />
              </div>
            </figure>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>Ways to help</Eyebrow>
        <h2 className="text-3xl font-bold text-navy">Give. Volunteer. Partner.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Give</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Donations support pre-apprentice assistance, instructor time, job
              materials, tools, meals, transportation, and general operations.
            </p>
            <div className="mt-5">
              <Button href="/ways-to-give">Donate</Button>
            </div>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Volunteer</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Current posted roles include writer/researcher, program
              instructor, and weekend driver. All incoming volunteers complete a
              background check.
            </p>
            <div className="mt-5">
              <Button href="/volunteer-opportunities" variant="navy">
                Volunteer
              </Button>
            </div>
          </article>
          <article className="rounded-xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-navy">Partner</h3>
            <p className="mt-3 text-sm leading-6 text-muted">
              Employers, unions, schools, and community organizations can help
              with instruction, materials, jobsites, and pathways into
              apprenticeships.
            </p>
            <div className="mt-5">
              <Button href="/partner-with-us" variant="secondary">
                Partner with us
              </Button>
            </div>
          </article>
        </div>
      </Section>

      <Section tone="white">
        <Eyebrow>Trust</Eyebrow>
        <h2 className="text-3xl font-bold text-navy">Accountable to this community</h2>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-4 text-sm leading-7 text-muted">
            <p>
              {org.legalName} is a {org.taxStatus} public charity. EIN {org.ein}.
            </p>
            <p>{org.taxStatusNote}</p>
            <p>
              Learning Center: {org.address.line1}, {org.address.city},{" "}
              {org.address.state} {org.address.zip}
            </p>
            <p>
              Email:{" "}
              <a className="font-medium text-navy underline" href={`mailto:${org.email}`}>
                {org.email}
              </a>
            </p>
            <Note>
              Logos below appear on the current public website. They show
              organizations students have been connected with or that are
              displayed as community affiliations. They are not presented here
              as formal partnership contracts.
            </Note>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                ["IBEW", "/images/partners/ibew.png"],
                ["Carpenters", "/images/partners/carpenters.png"],
                ["SMART", "/images/partners/smart.png"],
                ["Local 5", "/images/partners/local5.png"],
                ["Inova", "/images/partners/inova.png"],
                ["Simpson", "/images/partners/simpson.webp"],
                ["Clark", "/images/partners/clark.svg"],
                ["Alexandria Chamber", "/images/partners/chamber.png"],
              ].map(([name, src]) => (
                <div key={name} className="flex h-20 items-center justify-center rounded-md border border-line bg-cream p-3">
                  {/* Partner logos include SVG; native img is used for format compatibility. */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt={`${name} logo`} width={140} height={70} className="max-h-12 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
          <a
            href={org.candidProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center rounded-xl border border-line bg-cream p-6 text-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/candid-platinum.svg"
              alt="Candid Platinum Seal of Transparency"
              width={180}
              height={180}
            />
            <p className="mt-3 text-sm font-semibold text-navy">
              Candid Platinum Seal of Transparency
            </p>
            <p className="mt-1 text-sm text-muted">View our nonprofit profile</p>
          </a>
        </div>
      </Section>

      <Section tone="navy" className="text-center">
        <h2 className="text-3xl font-bold">Ready to join, support, or talk with us?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/85">
          Whether you are a family exploring the program, a neighbor who wants
          to give, or a partner opening a jobsite, there is a next step.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/join-the-program">Join the program</Button>
          <Button href="/ways-to-give" variant="secondary">
            Donate
          </Button>
          <Button href="/contact-us" variant="ghost">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
