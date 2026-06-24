import { site } from "@/data/navigation";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-border"
    >
      {/* Resplandor de marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-mist blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-6rem] top-24 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center lg:px-8 lg:py-32">
        <span className="lumina-rise inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-1.5 text-sm font-medium text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          Desarrollo de software · {site.location}
        </span>

        <h1 className="lumina-rise mx-auto mt-8 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          El software{" "}
          <span className="relative whitespace-nowrap text-primary">
            a la medida
            <svg
              aria-hidden
              viewBox="0 0 280 16"
              className="absolute -bottom-1 left-0 h-3 w-full text-secondary"
              preserveAspectRatio="none"
            >
              <path
                d="M2 12 C 70 4, 210 4, 278 12"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          de tu empresa
        </h1>

        <p className="lumina-rise mx-auto mt-6 max-w-xl text-lg text-body text-left">
          La mejor forma de ayudar a tu empresa es ver las aréas en las que
          falla y tomar accion!!!
          <br />
          Somos{" "}
          <span className="text-primary border-b-2 border-secondary">
            Lumina
          </span>{" "}
          un estudio de software para convertir tus procesos manuales a una
          solución digital.
        </p>

        <div className="lumina-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contacto"
            className="w-full rounded-full bg-primary px-7 py-3.5 text-center text-base font-semibold text-white transition-colors hover:bg-indigo-deep sm:w-auto"
          >
            Conversemos tu proyecto
          </a>
          <a
            href="#servicios"
            className="w-full rounded-full border border-border bg-white px-7 py-3.5 text-center text-base font-semibold text-heading transition-colors hover:border-primary hover:text-primary sm:w-auto"
          >
            Ver servicios
          </a>
        </div>

        <p className="mt-8 text-sm text-muted">
          Sistemas internos · Aplicaciones web · Apps móviles
        </p>
      </div>
    </section>
  );
}
