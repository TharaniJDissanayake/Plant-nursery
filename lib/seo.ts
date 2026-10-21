import type { Metadata } from "next";
import { BUSINESS } from "@/config/business";

/**
 * Per-page metadata with a canonical URL and matching Open Graph tags.
 * A page's openGraph replaces the layout's entirely, so shared fields are repeated here.
 */
export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean; // skip the "| Petal & Leaf" template suffix
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${BUSINESS.name}`;
  // Setting openGraph here drops the inherited app/opengraph-image, so link it explicitly.
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${BUSINESS.name} — ${BUSINESS.tagline}`,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_LK",
      siteName: BUSINESS.name,
      url: path,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
