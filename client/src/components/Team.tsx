import { useEffect, useRef, useState } from "react";

const teamMembers = [
  {
    name: "Daniel Nogueira da Gama",
    role: "Sócio Fundador",
    photo: "/assets/site/daniel-gama_ee2b1816.webp",
    description:
      "Advogado com ampla experiência em processos de alta complexidade, dedicado à defesa técnica de excelência e ao compromisso inabalável com os interesses de cada cliente.",
  },
  {
    name: "Danielle Lima",
    role: "Advogada Associada",
    photo: "/assets/site/danielle-lima_a6e94a37.webp",
    description:
      "Profissional comprometida com a advocacia de excelência, atuando com rigor técnico e sensibilidade em causas que exigem atenção especializada.",
  },
  {
    name: "Lucas Furtado",
    role: "Advogado Associado",
    photo: "/assets/site/lucas-furtado_227e4e60.webp",
    description:
      "Advogado dedicado à defesa estratégica dos interesses dos clientes, com atuação técnica e assertiva em processos de alta complexidade.",
  },
  {
    name: "Thayna Bizarro",
    role: "Advogada Associada",
    photo: "/assets/site/thayna-bizarro_c5ccef39.webp",
    description:
      "Profissional com atuação firme e dedicada, comprometida com a tutela integral dos direitos e a busca por resultados concretos.",
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const founder = teamMembers[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="equipe"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white"
    >
      <div className="container relative">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Sócio Fundador
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.2_0.005_285)] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Daniel Nogueira da Gama
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p
            className="max-w-2xl mx-auto text-[oklch(0.5_0.01_60)] text-base md:text-lg leading-relaxed"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.15rem",
            }}
          >
            {founder.description}
          </p>
        </div>

        <div
          className={`group relative mx-auto max-w-md text-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="w-44 h-44 mx-auto mb-5 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105 border-2 border-[oklch(0.72_0.12_85)]/20">
            <img
              src={founder.photo}
              alt={founder.name}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="w-8 h-[2px] bg-[oklch(0.72_0.12_85)] mx-auto mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3
            className="text-lg font-bold text-[oklch(0.2_0.005_285)] mb-1"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {founder.name}
          </h3>
          <p className="text-[oklch(0.35_0.15_25)] text-xs font-bold uppercase tracking-[0.1em] mb-6">
            {founder.role}
          </p>
          <a
            href="/equipe/"
            className="inline-flex items-center justify-center px-8 py-3.5 border border-[oklch(0.35_0.15_25)] text-[oklch(0.35_0.15_25)] text-xs font-bold uppercase tracking-[0.12em] hover:bg-[oklch(0.35_0.15_25)] hover:text-white transition-all"
          >
            Equipe
          </a>
        </div>
      </div>
    </section>
  );
}
