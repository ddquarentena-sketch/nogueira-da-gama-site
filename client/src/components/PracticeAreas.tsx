import { useEffect, useRef, useState } from "react";
import {
  Scale,
  Shield,
  Stethoscope,
  Users,
  Briefcase,
  Gavel,
  Building2,
  HeartHandshake,
  FileText,
} from "lucide-react";

const areas = [
  {
    icon: Gavel,
    title: "Direito Criminal",
    description: "Defesa técnica em processos penais de alta complexidade, investigações defensivas, habeas corpus, tribunais do júri e recursos em todas as instâncias — do inquérito ao STF.",
  },
  {
    icon: Stethoscope,
    title: "Defesa Médica",
    description: "Atuação especializada na defesa de médicos e profissionais de saúde nas esferas administrativa (CRM e CFM), cível e criminal. Proteção integral da carreira e reputação do profissional.",
  },
  {
    icon: Scale,
    title: "Direito Civil",
    description: "Indenizações, responsabilidade civil, contratos complexos, direitos reais e obrigações — com estratégia processual refinada em litígios de alto valor.",
  },
  {
    icon: Users,
    title: "Família e Sucessões",
    description: "Divórcios litigiosos, inventários complexos, testamentos, planejamento sucessório patrimonial e disputas de alta monta com rigor técnico e sensibilidade.",
  },
  {
    icon: Briefcase,
    title: "Direito do Trabalho",
    description: "Tutela individual e coletiva com expertise em causas de alta complexidade e valor, tanto na defesa de empregados quanto de empregadores.",
  },
  {
    icon: HeartHandshake,
    title: "Direito do Consumidor",
    description: "Defesa especializada em relações de consumo, ações revisionais, reparação de danos e litígios contra grandes corporações.",
  },
  {
    icon: Shield,
    title: "Direito Previdenciário",
    description: "Aposentadorias, benefícios por incapacidade, pensões e revisões — atuação estratégica junto ao INSS e à Justiça Federal em casos complexos.",
  },
  {
    icon: Building2,
    title: "Direito Administrativo",
    description: "Licitações, contratos administrativos, improbidade, mandados de segurança e defesa perante tribunais de contas com profundidade técnica.",
  },
  {
    icon: FileText,
    title: "Direito Empresarial",
    description: "Constituição societária, contratos empresariais, recuperação judicial, falência e consultoria corporativa para operações de alta complexidade.",
  },
];

export default function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="areas"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[oklch(0.2_0.005_285)]"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/assets/site/courtroom-columns_7de5acd5.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[oklch(0.2_0.005_285)]/90" />

      <div className="container relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Especialidades
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Áreas de Atuação
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
            Não somos generalistas. Cada área conta com especialistas dedicados,
            com formação e experiência aprofundada para enfrentar os desafios mais complexos do Direito.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`group relative p-7 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-[oklch(0.72_0.12_85)]/50 hover:bg-white/[0.06] transition-all duration-500 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              {/* Hover gold accent */}
              <div className="absolute top-0 left-0 w-[2px] h-0 bg-[oklch(0.72_0.12_85)] group-hover:h-full transition-all duration-500" />

              <area.icon className="w-7 h-7 text-[oklch(0.72_0.12_85)] mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-bold text-white mb-2 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                {area.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-12 text-center transition-all duration-700 delay-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          <p className="text-white/50 text-sm italic" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem" }}>
            Atuação em todo o território nacional — processos em todas as instâncias e tribunais superiores.
          </p>
        </div>
      </div>
    </section>
  );
}
