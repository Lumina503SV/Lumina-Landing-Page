import { steps } from "@/data/navigation";

export default function About() {
  return (
    <section id="nosotros" className="border-y border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Quiénes somos */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Nosotros
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Un equipo cercano que entiende tu contexto
            </h2>
            <p className="mt-5 text-lg text-body">
              Somos un estudio de software salvadoreño. Trabajamos con empresas
              e instituciones locales que necesitan herramientas reales, no
              demos bonitas que nadie usa.
            </p>
            <p className="mt-4 text-body">
              Hablamos tu idioma, conocemos cómo opera una empresa en El
              Salvador y construimos pensando en quienes van a usar el sistema
              todos los días.
            </p>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-heading">
                  100%
                </p>
                <p className="mt-1 text-sm text-muted">
                  Código tuyo al entregar
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-heading">
                  Local
                </p>
                <p className="mt-1 text-sm text-muted">
                  Soporte en tu zona horaria
                </p>
              </div>
            </div>
          </div>

          {/* Proceso (secuencia real → numeración justificada) */}
          <div>
            <p className="text-sm font-semibold text-muted">Cómo trabajamos</p>
            <ol className="mt-6 space-y-px">
              {steps.map((step, i) => (
                <li
                  key={step.title}
                  className="flex gap-5 rounded-2xl border border-transparent p-5 transition-colors hover:border-border hover:bg-background"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-mist font-display text-sm font-bold text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1.5 text-body">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
