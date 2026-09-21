import { PageHeader, Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <>
      <PageHeader title="This page is not available" description="The link may be outdated. Try the homepage or contact us." />
      <Section tone="white">
        <div className="flex flex-wrap gap-3">
          <Button href="/">Go to the homepage</Button>
          <Button href="/contact-us" variant="secondary">
            Contact us
          </Button>
        </div>
      </Section>
    </>
  );
}
