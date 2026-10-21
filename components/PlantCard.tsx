import Image from "next/image";
import { Plant, lightLabel, waterLabel } from "@/data/plants";
import { BUSINESS, whatsappLink } from "@/config/business";
import TrackedLink from "@/components/TrackedLink";

export default function PlantCard({
  plant,
  priority = false,
}: {
  plant: Plant;
  priority?: boolean; // only for cards visible above the fold
}) {
  const waUrl = whatsappLink(
    `Hi! I'd like to order ${plant.name} (${BUSINESS.currency} ${plant.price.toLocaleString()}). Please let me know if it's available.`
  );

  return (
    <div id={plant.id} className="group scroll-mt-24 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-brand-100 hover:border-brand-300 transition-all duration-200 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.imageAlt}
          width={800}
          height={600}
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={priority}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {plant.badge && (
          <span className="absolute top-3 left-3 bg-warm-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
            {plant.badge}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-white/90 text-brand-800 text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
          {plant.category}
        </span>
      </div>

      {/* Body */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-bold text-stone-900 text-base leading-tight">
              {plant.name}
            </h3>
            {plant.nameSi && (
              <p className="text-brand-600 text-sm">{plant.nameSi}</p>
            )}
          </div>
          <p className="text-brand-700 font-bold text-lg whitespace-nowrap">
            {BUSINESS.currency} {plant.price.toLocaleString()}
          </p>
        </div>

        <p className="text-stone-500 text-sm leading-relaxed mt-2 flex-1">
          {plant.care}
        </p>

        {/* Care badges */}
        <div className="flex gap-2 mt-3 flex-wrap">
          <CareBadge icon="☀️" label={lightLabel[plant.light]} />
          <CareBadge icon="💧" label={waterLabel[plant.water]} />
        </div>

        {/* CTA */}
        <TrackedLink
          href={waUrl}
          event={{
            name: "whatsapp_order_click",
            params: { location: "plant_card", plant_name: plant.name, price: plant.price },
          }}
          className="mt-4 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-semibold text-sm py-2.5 rounded-xl transition-colors"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Order via WhatsApp
        </TrackedLink>
      </div>
    </div>
  );
}

function CareBadge({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-stone-500 bg-brand-50 border border-brand-100 px-2 py-0.5 rounded-full">
      {icon} {label}
    </span>
  );
}
