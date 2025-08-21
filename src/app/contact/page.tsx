import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export default function ContactPage() {
  return (
    <Container>
      <Heading className="text-3xl font-extrabold mb-2">Get in touch</Heading>
      <Paragraph className="text-neutral-600 mb-6">
        I’m open to opportunities in cybersecurity, software engineering, and research collaborations. 
        For project inquiries, partnerships, or speaking requests, please reach out via email or LinkedIn.
      </Paragraph>

      <div className="mt-4 grid gap-3">
        <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-1">Email</p>
          <a
            href="mailto:tahazouggari61@gmail.com"
            className="text-lg font-medium underline underline-offset-4 hover:opacity-80"
          >
            tahazouggari61@gmail.com
          </a>
        </div>

        <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 p-4">
          <p className="text-sm uppercase tracking-wider text-neutral-500 mb-1">LinkedIn</p>
          <a
            href="https://www.linkedin.com/in/taha-zouggari/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium underline underline-offset-4 hover:opacity-80"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      <Paragraph className="text-neutral-500 mt-6">
        Based in Caen, France • Typically replies within 24–48 hours.
      </Paragraph>
    </Container>
  );
}
