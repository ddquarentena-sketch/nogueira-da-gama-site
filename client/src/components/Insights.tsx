import { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  BriefcaseBusiness,
  ExternalLink,
  Newspaper,
  Scale,
  ShieldCheck,
} from "lucide-react";

const notes = [
  {
    icon: BookOpen,
    label: "Informação útil",
    title: "Atendimento orientado por estratégia",
    text: "Cada demanda passa por leitura técnica inicial para definir riscos, urgências, documentos necessários e caminhos jurídicos possíveis.",
  },
  {
    icon: Scale,
    label: "Novidade",
    title: "Acompanhamento de temas jurídicos relevantes",
    text: "O escritório acompanha mudanças legislativas, entendimentos dos tribunais e temas de impacto nas áreas criminal, cível, médica e empresarial.",
  },
  {
    icon: ShieldCheck,
    label: "Prevenção",
    title: "Atuação preventiva e contenciosa",
    text: "A consultoria preventiva ajuda a reduzir riscos antes do conflito. Quando o litígio já existe, a atuação é conduzida com planejamento probatório e processual.",
  },
];

const publications = [
  {
    title: "Benefício negado pelo INSS",
    href: "/beneficio-negado-inss-o-que-fazer/",
    area: "Previdenciário",
  },
  {
    title: "Protocolo antigolpe para clientes",
    href: "/protocolo-antigolpe-falso-advogado/",
    area: "Segurança jurídica",
  },
  {
    title: "Plantão criminal e cadeia de custódia",
    href: "/flagrante-trafico-cadeia-de-custodia-quebrada/",
    area: "Criminal",
  },
  {
    title: "TCLE e responsabilidade médica",
    href: "/tcle-mal-redigido-responsabilidade-medica/",
    area: "Defesa médica",
  },
  {
    title: "Golpe do falso advogado",
    href: "/golpe-do-falso-advogado-como-identificar/",
    area: "Prevenção",
  },
  {
    title: "Partilha de bens e contrato retrodatado",
    href: "/partilha-de-bens-divorcio-contrato-retrodatado/",
    area: "Família e patrimônio",
  },
];

export default function Insights() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="novidades"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[oklch(0.97_0.008_80)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.04]">
        <img
          src="/assets/site/justice-detail_67c5acd6.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Atualizações
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.2_0.005_285)] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Novidades e Informações
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="max-w-3xl mx-auto text-[oklch(0.5_0.01_60)] text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.18rem" }}>
            Um espaço para comunicados, orientações jurídicas e frentes de atuação do escritório,
            sempre com linguagem clara e responsabilidade técnica.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-14">
          {notes.map((item, i) => (
            <article
              key={item.title}
              className={`relative bg-white border border-[oklch(0.88_0.01_80)] p-7 group transition-all duration-500 hover:border-[oklch(0.72_0.12_85)]/60 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${160 + i * 100}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-[oklch(0.72_0.12_85)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/40">
                  <item.icon className="w-5 h-5 text-[oklch(0.72_0.12_85)]" strokeWidth={1.5} />
                </div>
                <span className="text-[oklch(0.35_0.15_25)] text-xs font-bold uppercase tracking-[0.16em]">
                  {item.label}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[oklch(0.2_0.005_285)] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                {item.title}
              </h3>
              <p className="text-[oklch(0.5_0.01_60)] text-sm leading-relaxed">
                {item.text}
              </p>
            </article>
          ))}
        </div>

        <div className={`grid lg:grid-cols-5 gap-8 items-stretch transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="lg:col-span-2 bg-[oklch(0.2_0.005_285)] p-8 md:p-10 text-white">
            <Newspaper className="w-8 h-8 text-[oklch(0.72_0.12_85)] mb-5" strokeWidth={1.5} />
            <p className="text-[oklch(0.72_0.12_85)] text-xs font-bold uppercase tracking-[0.18em] mb-3">
              Publicações
            </p>
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Artigos e orientações do escritório
            </h3>
            <p className="text-white/65 leading-relaxed">
              Conteúdos escritos para orientar clientes, registrar teses de atuação e
              fortalecer a presença digital do escritório em temas estratégicos.
            </p>
          </div>

          <div className="lg:col-span-3 bg-white border border-[oklch(0.88_0.01_80)] p-8 md:p-10">
            <div className="flex items-center gap-3 mb-7">
              <BriefcaseBusiness className="w-6 h-6 text-[oklch(0.72_0.12_85)]" strokeWidth={1.5} />
              <h3 className="text-2xl font-bold text-[oklch(0.2_0.005_285)]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Artigos publicados
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {publications.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group flex items-start gap-3 border-b border-[oklch(0.88_0.01_80)] pb-4 no-underline"
                >
                  <ExternalLink className="w-4 h-4 text-[oklch(0.72_0.12_85)] mt-1 shrink-0" strokeWidth={1.8} />
                  <span>
                    <span className="block text-[oklch(0.35_0.15_25)] text-[11px] font-bold uppercase tracking-[0.14em] mb-1">
                      {item.area}
                    </span>
                    <span className="block text-[oklch(0.42_0.01_60)] text-sm leading-relaxed group-hover:text-[oklch(0.35_0.15_25)] transition-colors">
                      {item.title}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
