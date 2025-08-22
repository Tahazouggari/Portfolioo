import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  experimental: { mdxRs: true },
  trailingSlash: true, // helps GitHub Pages: .../index.html
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] },
});

export default withMDX(nextConfig);
