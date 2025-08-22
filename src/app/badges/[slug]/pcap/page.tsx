import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react"; 
const challenges = [
  {
    title: "Network Analysis",
    pdf: "/pdf/pcap.pdf",
  },
  
];

export default function PCAPBadgePage() {
  return (
    <Container>
       {/* Back button */}
       <div className="mb-6">
        <Link
          href="/badges"
          className="inline-flex items-center text-neutral-500 hover:text-neutral-900 
                     dark:hover:text-white transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Badges
        </Link>
      </div>
      <div className="flex items-center gap-4 mb-8">
        
        <Heading className="font-black text-2xl">PCAP Badge Notes</Heading>
      </div>
      <p className="mb-6 text-lg text-neutral-300">
        Here are my notes and writeups from PCAP certification challenges.
      </p>
      <div className="mb-6">
        <a
          href="https://pentesterlab.com/certs/121a1ed7ffc71029be803b9285ddfe"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Earned Badge Credential
        </a>
      </div>
      <div className="space-y-12">
        {challenges.map((challenge) => (
          <div
            key={challenge.title}
            className="p-4 rounded-lg bg-neutral-900 border border-neutral-800"
          >
            <h2 className="font-bold text-lg text-white mb-4">
              {challenge.title}
            </h2>
            <div className="w-full flex flex-col items-center">
              <iframe
                src={challenge.pdf}
                width="100%"
                height="600px"
                style={{ border: "1px solid #ccc", borderRadius: "8px" }}
                title={challenge.title + " PDF"}
              />
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}