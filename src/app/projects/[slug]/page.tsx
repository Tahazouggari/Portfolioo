import { Container } from "@/components/Container";
import { SingleProduct } from "@/components/Product";
import { products } from "@/constants/products";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export const dynamic = "force-static";
export const revalidate = false;

export async function generateStaticParams() {
  if (!products?.length) {
    throw new Error("No products found at build time");
  }
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = products.find((x) => x.slug === params.slug);
  return p
    ? { title: p.title, description: p.description }
    : { title: "Projects | Taha ZOUGGARI", description: "Projects." };
}

export default function SingleProjectPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();
  return (
    <Container>
      <SingleProduct product={product} />
    </Container>
  );
}
