import { notFound } from "next/navigation";

// map LOWERCASE slugs → components (file names can be any case)
const badgeComponents: Record<string, () => Promise<{ default: React.ComponentType }>> = {
  essentiell: () => import("./essentiell/page"),
  pcap: () => import("./pcap/page"),
  pentesterlab: () => import("./pentesterlab/page"),
};

// ✅ force static export
export const dynamic = "force-static";
export const revalidate = false;

// ✅ pre-build /badges/<slug> for each key above
export async function generateStaticParams() {
  return Object.keys(badgeComponents).map((slug) => ({ slug }));
}

export default async function BadgePage({ params }: { params: { slug: string } }) {
  const slug = params.slug.toLowerCase();

  if (!badgeComponents[slug]) return notFound();

  const BadgeComponent = (await badgeComponents[slug]()).default;
  return <BadgeComponent />;
}
