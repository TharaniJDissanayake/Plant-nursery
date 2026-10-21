import Link from "next/link";
import { BUSINESS } from "@/config/business";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us: Locally Grown Plants",
  description: `Meet ${BUSINESS.name}, a Sri Lankan plant shop growing healthy, well-rooted indoor and outdoor plants and delivering them to homes in Kadawatha and Colombo.`,
  path: "/about",
});

const values = [
  {
    icon: "🌱",
    title: "Always Fresh",
    desc: "We don't stockpile plants in a warehouse. Every order is prepared from healthy, growing stock so what arrives at your door is thriving.",
  },
  {
    icon: "🇱🇰",
    title: "Locally Rooted",
    desc: "Our plants are grown right here in Sri Lanka — adapted to the local climate and ready to flourish in your home or garden.",
  },
  {
    icon: "📦",
    title: "Packed with Care",
    desc: "Plants are wrapped securely so leaves and roots arrive undamaged. We treat every order like we're delivering to our own home.",
  },
  {
    icon: "💚",
    title: "Grown Sustainably",
    desc: "We use organic compost mixes and avoid harsh chemical fertilisers. Good for your plants, good for the planet.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <span className="inline-block bg-white/10 border border-white/20 text-brand-200 text-sm px-3 py-1 rounded-full mb-5">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
              We believe every home deserves a little green.
            </h1>
            <p className="text-brand-200 text-lg leading-relaxed">
              {BUSINESS.name} started with a simple idea: make it easy for people
              in Colombo to bring plants into their lives — without the hassle of
              visiting a nursery or worrying whether a plant will survive the
              journey home.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-stone-900 mb-5">
              How it all started
            </h2>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                It started with a balcony full of pots and too many cuttings to
                keep. What began as a hobby quickly turned into something more when
                friends and neighbours started asking for plants.
              </p>
              <p>
                We realised that most people in Colombo want plants but finding
                good quality ones — delivered safely, with honest care advice — is
                harder than it should be. So we decided to fix that.
              </p>
              <p>
                Today we deliver locally grown indoor plants, flowering plants,
                succulents, and edible herbs right to your doorstep. Every plant
                leaves us healthy, well-potted, and ready to thrive in its new
                home.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "200+", label: "Happy Customers" },
              { value: "30+", label: "Plant Varieties" },
              { value: "3×", label: "Deliveries Per Week" },
              { value: "100%", label: "Locally Grown" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-brand-50 border border-brand-100 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-brand-700 mb-1">
                  {s.value}
                </div>
                <div className="text-sm text-stone-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900 mb-3">
              What we stand for
            </h2>
            <p className="text-stone-500 max-w-md mx-auto">
              These aren&apos;t just words — they&apos;re how we run every order.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-6 border border-brand-100 hover:border-brand-300 hover:shadow-sm transition-all bg-brand-50"
              >
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-stone-900 mb-2">{v.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery promise */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="bg-brand-800 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="text-5xl shrink-0">🚚</div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
              Our delivery promise
            </h2>
            <p className="text-brand-200 leading-relaxed">
              We deliver to{" "}
              <strong className="text-white">{BUSINESS.deliveryAreas}</strong> on{" "}
              <strong className="text-white">{BUSINESS.deliveryDays}</strong>.{" "}
              {BUSINESS.deliveryNote} We&apos;ll always confirm your slot via WhatsApp
              before we set off.
            </p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 bg-white text-brand-800 hover:bg-brand-50 font-bold px-6 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            Shop Now →
          </Link>
        </div>
      </section>
    </>
  );
}
