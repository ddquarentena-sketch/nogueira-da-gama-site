import { useEffect, useRef, useState } from "react";
import { Target, Eye, Heart } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Oferecer assessoria jurídica de excelência, atuando com ética, dedicação e profundidade técnica na defesa dos interesses de nossos clientes, transformando a complexidade do Direito em soluções eficazes e resultados concretos.",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser referência nacional em assessoria jurídica de alta complexidade, reconhecidos pela qualidade do trabalho, pela inovação na prática advocatícia e pelo compromisso inabalável com a justiça e os direitos de nossos clientes.",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Ética e integridade em cada ato processual. Excelência técnica como padrão inegociável. Compromisso com o cliente e com a justiça. Sigilo, respeito e humanização no atendimento. Atualização constante e inovação na prática jurídica.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Quem Somos
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.2_0.005_285)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Tradição e Excelência Jurídica
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-[oklch(0.5_0.01_60)] text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
            A <strong className="text-[oklch(0.35_0.15_25)]">Nogueira da Gama Assessoria Jurídica</strong> reúne
            especialistas altamente qualificados em cada ramo do Direito. Nossa vocação está nos processos de alta complexidade,
            onde a profundidade técnica, a estratégia refinada e a dedicação integral fazem a diferença
            entre um resultado ordinário e uma vitória decisiva.
          </p>
        </div>

        {/* Image + Text Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="relative">
              <img
                src="/assets/site/library-legal_451bba38.png"
                alt="Biblioteca jurídica"
                className="w-full h-80 object-cover"
              />
              {/* Gold border accent */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-[oklch(0.72_0.12_85)]/40 -z-10" />
            </div>
          </div>
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-[oklch(0.2_0.005_285)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Sua causa merece a defesa que faz diferença
            </h3>
            <p className="text-[oklch(0.5_0.01_60)] leading-relaxed mb-4">
              Fundado pelo Dr. Daniel Teixeira Nogueira da Gama, nosso escritório nasceu da convicção de que
              a advocacia de excelência exige mais do que conhecimento jurídico — exige especialização profunda,
              estratégia refinada e compromisso inabalável com cada cliente.
            </p>
            <p className="text-[oklch(0.5_0.01_60)] leading-relaxed mb-6">
              Com sede em Itaperuna/RJ e atuação em todo o território nacional, contamos com especialistas
              dedicados a cada área, preparados para enfrentar os desafios jurídicos mais complexos
              com a profundidade técnica que cada caso exige.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[oklch(0.72_0.12_85)]" />
              <span className="text-sm font-bold uppercase tracking-[0.15em] text-[oklch(0.35_0.15_25)]">
                Especialistas em cada área do Direito
              </span>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className={`relative p-8 bg-white border border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.72_0.12_85)]/50 transition-all duration-500 group ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${600 + i * 150}ms` }}
            >
              {/* Gold top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[oklch(0.72_0.12_85)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <pillar.icon className="w-8 h-8 text-[oklch(0.72_0.12_85)] mb-4" strokeWidth={1.5} />
              <h4 className="text-xl font-bold text-[oklch(0.35_0.15_25)] mb-3 uppercase tracking-[0.08em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                {pillar.title}
              </h4>
              <p className="text-[oklch(0.5_0.01_60)] text-sm leading-relaxed">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
