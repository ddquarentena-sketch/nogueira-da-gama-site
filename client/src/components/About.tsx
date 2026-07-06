import { useEffect, useRef, useState } from "react";
import { BrainCircuit, ClipboardCheck, MessageCircle, ShieldCheck } from "lucide-react";

const pillars = [
  {
    icon: ClipboardCheck,
    title: "Profundidade, não volume.",
    text: "Não somos um escritório de massa. O seu caso recebe estudo individual, estratégia própria e a atenção direta de quem responde por ele.",
  },
  {
    icon: BrainCircuit,
    title: "Tecnologia a serviço da sua defesa.",
    text: "Forense digital, cadeia de custódia e inteligência artificial aplicada. Onde outros veem um documento, nós examinamos a integridade da prova que decide o seu caso.",
  },
  {
    icon: ShieldCheck,
    title: "Cuidado até na comunicação.",
    text: "Somos um dos raros escritórios do país com um sistema próprio de comunicação segura, o ConfereAdv, que blinda a relação com nossos clientes contra a fraude do falso advogado.",
    href: "/protocolo-antigolpe-falso-advogado/",
  },
  {
    icon: MessageCircle,
    title: "Atendimento como método.",
    text: "A queixa mais comum de quem contrata um advogado é o silêncio. Aqui ela não existe: você acompanha o seu caso, recebe retorno e sabe, a cada fase, exatamente onde está e qual é o próximo passo.",
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
            A advocacia que os casos difíceis exigem
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <div className="max-w-4xl mx-auto space-y-5 text-[oklch(0.5_0.01_60)] text-base md:text-lg leading-relaxed text-left md:text-center" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem" }}>
            <p>
              A Nogueira da Gama Assessoria Jurídica nasceu de uma convicção: existe uma diferença profunda entre defender um caso e dominá-lo. Nossa vocação são os litígios de alta complexidade, aqueles em que a profundidade técnica, a leitura estratégica da prova e a dedicação integral definem o que estará ao alcance da defesa.
            </p>
            <p>
              Fundado pelo Dr. <a href="/daniel-nogueira-da-gama/" className="text-[oklch(0.35_0.15_25)] underline underline-offset-4">Daniel Teixeira Nogueira da Gama</a>, advogado com mais de vinte anos de atuação, ex-Procurador-Geral de Município, professor universitário de Direito e autor de estudos científicos sobre prova digital e cadeia de custódia, o escritório uniu duas tradições que raramente caminham juntas: a advocacia clássica, de rigor, sobriedade e combate técnico, e a fronteira tecnológica do Direito, com formação em Inteligência Artificial pelo MIT aplicada diretamente à análise de provas, à forense digital e à estratégia processual.
            </p>
            <p>
              Com sede em Itaperuna, no Rio de Janeiro, e atuação em todo o território nacional, atendemos casos criminais, médicos, previdenciários, de família e empresariais com um único padrão: cada causa é estudada como se fosse a única. Porque, para quem a vive, ela é.
            </p>
            <p>
              E se você chegou até aqui, provavelmente atravessa um momento difícil, ou quer impedir que ele chegue. Então saiba desde já: aqui você não será um número. Será recebido pelo nome, ouvido com atenção e orientado em linguagem clara, sem juridiquês. Você não precisa entender de Direito. Essa parte é nossa. A sua é dar o primeiro passo.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pillars.map((pillar, i) => {
            const cardClass = `relative p-8 bg-white border border-[oklch(0.88_0.01_80)] hover:border-[oklch(0.72_0.12_85)]/50 transition-all duration-500 group no-underline ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`;
            const cardContent = (
              <>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[oklch(0.72_0.12_85)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <pillar.icon className="w-8 h-8 text-[oklch(0.72_0.12_85)] mb-4" strokeWidth={1.5} />
                <h4 className="text-xl font-bold text-[oklch(0.35_0.15_25)] mb-3 uppercase tracking-[0.08em]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {pillar.title}
                </h4>
                <p className="text-[oklch(0.5_0.01_60)] text-sm leading-relaxed">
                  {pillar.text}
                </p>
              </>
            );

            return pillar.href ? (
              <a key={pillar.title} href={pillar.href} className={cardClass} style={{ transitionDelay: `${600 + i * 150}ms` }}>
                {cardContent}
              </a>
            ) : (
              <div key={pillar.title} className={cardClass} style={{ transitionDelay: `${600 + i * 150}ms` }}>
                {cardContent}
              </div>
            );
          })}
        </div>

        <p
          className={`mt-16 text-center text-3xl md:text-4xl font-bold text-[oklch(0.35_0.15_25)] transition-all duration-700 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Advocacia não se promete. Demonstra-se.
        </p>
      </div>
    </section>
  );
}
