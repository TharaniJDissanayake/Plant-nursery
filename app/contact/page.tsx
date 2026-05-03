import type { Metadata } from "next";
import { BUSINESS, WA_BASE, IG_URL, FB_URL } from "@/config/business";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${BUSINESS.name} via WhatsApp, Instagram, or Facebook. We deliver plants across ${BUSINESS.deliveryAreas}.`,
};

const faqs = [
  {
    q: "Which areas do you deliver to?",
    a: `We currently deliver to ${BUSINESS.deliveryAreas}. Not sure if we cover your area? Send us a WhatsApp message and we'll let you know.`,
  },
  {
    q: "When do you deliver?",
    a: `We deliver on ${BUSINESS.deliveryDays}. ${BUSINESS.deliveryNote}`,
  },
  {
    q: "How do I place an order?",
    a: "Just tap the 'Order via WhatsApp' button on any plant card in our shop, or send us a message directly. We'll confirm availability and arrange delivery.",
  },
  {
    q: "Can I request a plant that's not in the catalog?",
    a: "Absolutely! We take special orders. Message us on WhatsApp and we'll do our best to source it.",
  },
  {
    q: "Do you offer gift wrapping or cards?",
    a: "Yes — just mention it when you order and we'll add a gift note. Perfect for housewarming gifts.",
  },
  {
    q: "What if my plant arrives damaged?",
    a: "That's very rare, but if it happens send us a photo on WhatsApp within 24 hours and we'll replace or refund it — no questions asked.",
  },
];

const waMessage = encodeURIComponent("Hi! I'd like to get in touch about your plants.");

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Get in Touch
          </h1>
          <p className="text-brand-200 text-lg max-w-lg">
            The quickest way to reach us is WhatsApp. We usually reply within a
            few hours.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact channels */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-xl font-bold text-stone-900 mb-6">
              Contact channels
            </h2>

            {/* WhatsApp */}
            <ContactCard
              icon={<WhatsAppIcon />}
              iconBg="bg-green-500"
              title="WhatsApp"
              subtitle="Quickest way to order or ask questions"
              cta="Chat with us"
              href={`${WA_BASE}?text=${waMessage}`}
              ctaColor="bg-green-600 hover:bg-green-700"
            />

            {/* Instagram */}
            <ContactCard
              icon={<InstagramIcon />}
              iconBg="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400"
              title="Instagram"
              subtitle={`Follow us at ${BUSINESS.instagram} for new arrivals & plant tips`}
              cta="Follow on Instagram"
              href={IG_URL}
              ctaColor="bg-pink-600 hover:bg-pink-700"
            />

            {/* Facebook */}
            <ContactCard
              icon={<FacebookIcon />}
              iconBg="bg-blue-600"
              title="Facebook"
              subtitle="Like our page for updates, promotions, and community"
              cta="Find us on Facebook"
              href={FB_URL}
              ctaColor="bg-blue-700 hover:bg-blue-800"
            />

            {/* Delivery info box */}
            <div className="rounded-2xl bg-brand-50 border border-brand-200 p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <span>🚚</span> Delivery Info
              </h3>
              <ul className="space-y-2 text-sm text-stone-600">
                <li>
                  <span className="font-medium text-stone-800">Areas:</span>{" "}
                  {BUSINESS.deliveryAreas}
                </li>
                <li>
                  <span className="font-medium text-stone-800">Days:</span>{" "}
                  {BUSINESS.deliveryDays}
                </li>
                <li>{BUSINESS.deliveryNote}</li>
              </ul>
            </div>
          </div>

          {/* FAQ */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold text-stone-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-white border border-brand-100 rounded-2xl overflow-hidden"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between px-5 py-4 font-semibold text-stone-800 hover:bg-brand-50 transition-colors">
                    {faq.q}
                    <span className="text-brand-500 group-open:rotate-45 transition-transform text-xl leading-none ml-3 shrink-0">
                      +
                    </span>
                  </summary>
                  <p className="px-5 pb-5 text-stone-500 text-sm leading-relaxed border-t border-brand-100 pt-4">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  icon,
  iconBg,
  title,
  subtitle,
  cta,
  href,
  ctaColor,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  ctaColor: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-brand-100 p-5 flex items-start gap-4">
      <div
        className={`w-11 h-11 rounded-xl ${iconBg} flex items-center justify-center shrink-0 text-white`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-stone-900">{title}</p>
        <p className="text-stone-500 text-xs mt-0.5 leading-relaxed">{subtitle}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-block mt-3 text-white text-xs font-semibold px-3 py-1.5 rounded-full ${ctaColor} transition-colors`}
        >
          {cta} →
        </a>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}
