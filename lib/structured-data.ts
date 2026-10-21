import { BUSINESS, IG_URL, FB_URL } from "@/config/business";
import type { Plant } from "@/data/plants";

const absolute = (path: string) => new URL(path, BUSINESS.siteUrl).toString();

/** schema.org Store (a LocalBusiness subtype) for the home page. */
export function storeSchema(plants: Plant[]) {
  const prices = plants.map((p) => p.price);

  return {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": `${BUSINESS.siteUrl}/#store`,
    name: BUSINESS.name,
    description: BUSINESS.description,
    slogan: BUSINESS.tagline,
    url: BUSINESS.siteUrl,
    image: absolute("/opengraph-image"),
    currenciesAccepted: BUSINESS.currency,
    priceRange: `${BUSINESS.currency} ${Math.min(...prices)}–${Math.max(...prices)}`,
    address: { "@type": "PostalAddress", addressCountry: "LK" },
    areaServed: BUSINESS.deliveryAreaList.map((name) => ({ "@type": "City", name })),
    // Placeholder contact details would be invalid data, so only publish real ones.
    ...(!BUSINESS.isDemo && {
      telephone: `+${BUSINESS.whatsapp}`,
      sameAs: [IG_URL, FB_URL],
    }),
  };
}

/** schema.org ItemList of Products with LKR offers for the shop page. */
export function productListSchema(plants: Plant[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${BUSINESS.name} plant catalogue`,
    numberOfItems: plants.length,
    itemListElement: plants.map((plant, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        "@id": `${BUSINESS.siteUrl}/shop#${plant.id}`,
        name: plant.name,
        image: absolute(plant.image),
        description: plant.care,
        category: plant.category,
        brand: { "@type": "Brand", name: BUSINESS.name },
        offers: {
          "@type": "Offer",
          url: `${BUSINESS.siteUrl}/shop#${plant.id}`,
          price: plant.price,
          priceCurrency: BUSINESS.currency,
          availability:
            plant.inStock === false
              ? "https://schema.org/OutOfStock"
              : "https://schema.org/InStock",
          seller: { "@id": `${BUSINESS.siteUrl}/#store` },
        },
      },
    })),
  };
}
