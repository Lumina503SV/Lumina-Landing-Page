import { LayoutDashboard, Globe, Smartphone } from "lucide-react";
import { servicesSoftware, servicesMarketing } from "@/data/navigation";

// Clases completas y estáticas para que Tailwind las detecte (no usar interpolación de clases)
const accent = {
  core: {
    soft: "bg-core/10",
    text: "text-core",
    border: "group-hover:border-core/50",
    Icon: LayoutDashboard,
  },
  desk: {
    soft: "bg-desk/10",
    text: "text-desk",
    border: "group-hover:border-desk/50",
    Icon: Globe,
  },
  order: {
    soft: "bg-order/10",
    text: "text-order",
    border: "group-hover:border-order/50",
    Icon: Smartphone,
  },
} as const;

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.3 6.8-6.8a1 1 0 0 1 1.4 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Servicios
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Lo que ofrecemos para tu empresa
        </h2>
        <p className="mt-4 text-lg text-body">
          Cada proyecto se construye apartir de tus necesidades y en como
          funciona tu negocio.
        </p>
      </div>

      <section className="mt-15 flex flex-col justify-center">
        <div className="flex w-full justify-center">
          <h1 className="text-4xl italic text-center font-bold text-primary border-b-2 border-secondary">
            Tecnología
          </h1>
        </div>
        <div className="mt-5 grid gap-6 md:grid-cols-3">
          {servicesSoftware.map((service) => {
            const a = accent[service.accent];
            return (
              <article
                key={service.name}
                className={`group flex flex-col rounded-2xl border border-border bg-white p-8 transition-colors ${a.border}`}
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.soft}`}
                >
                  <a.Icon className={`h-6 w-6 ${a.text}`} strokeWidth={1.75} />
                </div>

                <h3 className="mt-6 text-xl font-bold">{service.name}</h3>
                <p className="mt-3 flex-1 text-body">{service.description}</p>

                <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2.5 text-sm text-body"
                    >
                      <CheckIcon className={`h-4 w-4 shrink-0 ${a.text}`} />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <section className="mt-5 flex flex-col justify-center">
          <div className="flex w-full justify-center mt-20">
            <h1 className="text-4xl italic text-center font-bold text-primary border-b-2 border-secondary">
              Marketing
            </h1>
          </div>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            {servicesMarketing.map((service) => {
              const a = accent[service.accent];
              return (
                <article
                  key={service.name}
                  className={`group flex flex-col rounded-2xl border border-border bg-white p-8 transition-colors ${a.border}`}
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.soft}`}
                  >
                    <a.Icon
                      className={`h-6 w-6 ${a.text}`}
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">{service.name}</h3>
                  <p className="mt-3 flex-1 text-body">{service.description}</p>

                  <ul className="mt-6 space-y-2.5 border-t border-border pt-6">
                    {service.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-center gap-2.5 text-sm text-body"
                      >
                        <CheckIcon className={`h-4 w-4 shrink-0 ${a.text}`} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
      </section>
    </section>
  );
}
