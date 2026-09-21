import { PageHeader, Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Calendar Demo",
  description: "Appointment scheduling for Cornerstone Craftsman.",
  path: "/calendar-demo",
});

const calendarUrl =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2tRf2eNslglMKZer3wyN-2w3oLdD-Dwho6lDytKnXCvooTzSlv8ysVDV2MC3pwnFBbfMSHB_Bu?gv=true";

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        eyebrow="Scheduling"
        title="Book a conversation"
        description="This page preserves the existing Google Calendar appointment link from the current site."
      />
      <Section tone="white">
        <a
          className="inline-flex rounded-md bg-orange px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-dark"
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Book an appointment
        </a>
      </Section>
    </>
  );
}
