import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

const badges = [
  { name: "Essentiell Badge", slug: "essentiell" },
  { name: "PCAP Badge", slug: "pcap" },
];

export default function BadgesPage() {
  return (
    <Container>
      <div className="text-center mb-10">
        <Heading className="text-3xl font-extrabold mb-4">My Badges</Heading>
        <Paragraph className="text-neutral-400 max-w-2xl mx-auto">
          Explore the certifications and badges I have earned through various platforms and challenges.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {badges.map((badge) => (
          <a
            key={badge.slug}
            href={`/badges/${badge.slug}`}
            className="block p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 
                       bg-white dark:bg-neutral-900 shadow-sm hover:shadow-lg hover:border-blue-500 
                       transition group"
          >
            <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-500">
              {badge.name}
            </h3>
          </a>
        ))}
      </div>
    </Container>
  );
}

export const ctfs = [
  {
    name: "PentesterLab",
    image: "/images/pentesterlab.png",
    href: "../badges",
    description: "Learn web application security and penetration testing through hands-on labs.",
  },
];
