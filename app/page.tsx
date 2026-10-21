import Link from "next/link";
import { BUSINESS, whatsappLink, IG_URL } from "@/config/business";
import PlantCard from "@/components/PlantCard";
import JsonLd from "@/components/JsonLd";
import TrackedLink from "@/components/TrackedLink";
import { plants } from "@/data/plants";
import { pageMetadata } from "@/lib/seo";
import { storeSchema } from "@/lib/structured-data";

export const metadata = pageMetadata({
  // absolute: the layout template would otherwise append the shop name a second time
  title: `${BUSINESS.name} | Fresh Plants Delivered in Kadawatha & Colombo`,
  description:
    "Sri Lanka's friendliest plant shop. Order beautiful indoor & outdoor plants online, delivered to your door in Kadawatha, Colombo and nearby.",
  path: "/",
  absoluteTitle: true,
});

const features = [
  {
    icon: "🌱",
    title: "Nursery Fresh",
    desc: "Every plant is grown locally and delivered fresh — never sitting in a warehouse.",
  },
  {
    icon: "🚚",
    title: "Delivered to Your Door",
    desc: `We deliver across ${BUSINESS.serviceArea} and surrounding areas on scheduled days.`,
  },
  {
    icon: "💬",
    title: "Order in Seconds",
    desc: "Just tap 'Order on WhatsApp' — no accounts, no checkout forms, just a chat.",
  },
  {
    icon: "🪴",
    title: "Care Guidance Included",
    desc: "Every order comes with simple care tips so your plant thrives from day one.",
  },
];

const waUrl = whatsappLink(
  "Hi! I'd like to browse your plants. What's available this week?"
);

export default function HomePage() {
  const featuredPlants = plants.slice(0, 4);

  return (
    <>
      <JsonLd data={storeSchema(plants)} />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 text-white">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-brand-900/40 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-brand-100 text-sm font-medium px-3 py-1 rounded-full mb-6">
              🌿 {BUSINESS.serviceArea} & Surrounding Areas
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6">
              {BUSINESS.tagline}
            </h1>
            <p className="text-brand-100 text-lg leading-relaxed mb-8 max-w-xl">
              Discover beautiful indoor and outdoor plants — curated, grown locally,
              and delivered right to your home. Just order via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <TrackedLink
                href={waUrl}
                event={{ name: "whatsapp_order_click", params: { location: "hero" } }}
                className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-800 hover:bg-brand-50 font-bold px-7 py-3.5 rounded-full text-base transition-colors shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Order on WhatsApp
              </TrackedLink>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-colors"
              >
                Browse Plants →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ───────────────────────────────────── */}
      <section className="bg-white border-b border-brand-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-stone-500">
            <TrustItem icon="✅" text="Healthy, well-rooted plants" />
            <TrustItem icon="📦" text="Careful packaging" />
            <TrustItem icon="🇱🇰" text="Locally grown in Sri Lanka" />
            <TrustItem icon="💚" text="Free care tips with every order" />
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-stone-900 mb-3">
            Why shop with us?
          </h2>
          <p className="text-stone-500 max-w-md mx-auto">
            We make it simple to bring more green into your home.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 border border-brand-100 hover:border-brand-300 hover:shadow-sm transition-all"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-stone-900 mb-1">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PLANTS ───────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-stone-900 mb-1">
                Popular Plants
              </h2>
              <p className="text-stone-500">Customers love these.</p>
            </div>
            <Link
              href="/shop"
              className="text-brand-600 hover:text-brand-800 font-semibold text-sm transition-colors hidden sm:block"
            >
              View all plants →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPlants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 text-brand-600 hover:text-brand-800 font-semibold"
            >
              View all plants →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-stone-900 mb-3">
            How to Order
          </h2>
          <p className="text-stone-500">Three simple steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {[
            {
              step: "01",
              title: "Browse & Pick",
              desc: "Find a plant you love in our shop or send us a WhatsApp — we'll help you choose.",
            },
            {
              step: "02",
              title: "Send a Message",
              desc: "Tap 'Order via WhatsApp'. Your message is pre-filled — just hit send.",
            },
            {
              step: "03",
              title: "We Deliver",
              desc: `We confirm your order and deliver on the next available delivery day to ${BUSINESS.deliveryAreas}.`,
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative bg-white rounded-2xl p-7 border border-brand-100 text-center"
            >
              <div className="text-5xl font-extrabold text-brand-100 mb-3 leading-none">
                {item.step}
              </div>
              <h3 className="font-bold text-stone-900 text-lg mb-2">{item.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="bg-brand-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to green up your space?
          </h2>
          <p className="text-brand-200 text-lg mb-8 max-w-lg mx-auto">
            Chat with us on WhatsApp or follow us on Instagram for new arrivals
            and plant care tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <TrackedLink
              href={waUrl}
              event={{ name: "whatsapp_order_click", params: { location: "home_cta" } }}
              className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-800 hover:bg-brand-50 font-bold px-7 py-3.5 rounded-full transition-colors shadow"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </TrackedLink>
            <TrackedLink
              href={IG_URL}
              event={{ name: "instagram_click", params: { location: "home_cta" } }}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white font-semibold px-7 py-3.5 rounded-full transition-colors"
            >
              Follow on Instagram
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}

function TrustItem({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="flex items-center gap-1.5">
      <span>{icon}</span>
      <span>{text}</span>
    </span>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={`fill-current ${className ?? "w-4 h-4"}`} viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
