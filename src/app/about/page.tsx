import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import About from "@/components/About";
import { WorldMap } from "@/components/WorldMap";
// ✅ Ensure static export
export const dynamic = "force-static";
export const revalidate = false;

export default function AboutPage() {
  return (
    <Container>
      <span className="text-4xl">💬</span>
      <Heading className="font-black">About Me</Heading>
      <About />
      <div className="mt-12">
      <Heading as="h2" className="text-xl font-bold mt-6">
      Visited Countries
      </Heading>
        <WorldMap />
      </div>
    </Container>
  );
}
