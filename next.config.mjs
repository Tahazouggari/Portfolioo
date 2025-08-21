// next.config.mjs (or next.config.js if you're using CJS)
/** @type {import('next').NextConfig} */
import nextMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

const nextConfig = {
  // ✅ Required for GitHub Pages (static export)
  output: "export",

  // ✅ next/image doesn't optimize on static export
  images: {
    unoptimized: true,
    domains: ["images.unsplash.com", "res.cloudinary.com"],
  },

  // Optional but nice if you embed .md/.mdx as pages
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  experimental: {
    mdxRs: true,
  },
};

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
});

export default withMDX(nextConfig);
