import { useEffect, useRef, useState } from "react";
import { Shield, Phone, Clock, AlertTriangle } from "lucide-react";

export default function CriminalDuty() {
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

  const situations = [
    "Prisão em flagrante",
    "Mandado de busca e apreensão",
    "Condução coercitiva",
    "Audiência de custódia",
    "Operações policiais",
    "Medidas cautelares urgentes",
  ];

  return (
    <section
      id="plantao"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Dark background with texture */}
      <div className="absolute inset-0 bg-[oklch(0.15_0.02_25)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.25_0.1_25)]/20 to-transparent" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 36px)`
      }} />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className={`transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-[oklch(0.72_0.12_85)]/30 bg-[oklch(0.72_0.12_85)]/5 mb-6">
              <AlertTriangle className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
              <span className="text-[oklch(0.72_0.12_85)] text-xs font-bold uppercase tracking-[0.15em]">
                Atendimento de Urgência
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Plantão Criminal
              <span className="block text-[oklch(0.72_0.12_85)] text-xl md:text-2xl mt-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
                24 horas — Todos os dias
              </span>
            </h2>

            <div className="gold-line w-16 mb-8" />

            <p
              className="text-white/80 text-base md:text-lg leading-relaxed mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}
            >
              A liberdade não espera horário comercial. Nosso plantão criminal funciona
              ininterruptamente — período noturno, finais de semana, feriados e recesso forense —
              garantindo assistência jurídica imediata quando cada minuto é decisivo.
            </p>

            <p
              className="text-white/60 text-base leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem" }}
            >
              Atuação rápida e estratégica para preservar seus direitos desde o primeiro momento.
              Advogados criminalistas experientes prontos para agir em qualquer situação de urgência.
            </p>

            {/* CTA - WhatsApp */}
            <a
              href="https://wa.me/5522999034185?text=Ol%C3%A1!%20Preciso%20de%20atendimento%20urgente%20no%20plant%C3%A3o%20criminal."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[oklch(0.35_0.15_25)] text-white text-sm font-bold uppercase tracking-[0.12em] border border-[oklch(0.35_0.15_25)] hover:bg-[oklch(0.42_0.14_25)] transition-all duration-300 active:scale-[0.97] group"
            >
              <Phone className="w-4 h-4 group-hover:animate-pulse" />
              Ligar para o Plantão
            </a>

            <p className="text-white/40 text-xs mt-3 flex items-center gap-2">
              <Clock className="w-3 h-3" />
              Atendimento imediato — (22) 99903-4185
            </p>
          </div>

          {/* Right: Situations Grid */}
          <div className={`transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Card with situations */}
            <div className="border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-10">
              <div className="flex items-center gap-3 mb-8">
                <Shield className="w-6 h-6 text-[oklch(0.72_0.12_85)]" />
                <h3 className="text-white text-lg font-bold uppercase tracking-[0.08em]">
                  Quando Acionar
                </h3>
              </div>

              <div className="space-y-4">
                {situations.map((situation, i) => (
                  <div
                    key={situation}
                    className={`flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:border-[oklch(0.72_0.12_85)]/30 hover:bg-[oklch(0.72_0.12_85)]/5 transition-all duration-300 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${400 + i * 80}ms` }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/40">
                      <span className="text-[oklch(0.72_0.12_85)] text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <span className="text-white/90 text-sm font-medium tracking-wide">
                      {situation}
                    </span>
                  </div>
                ))}
              </div>

              {/* Availability badges */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                {["Noturno", "Fins de Semana", "Feriados", "Recesso Forense"].map((period) => (
                  <span
                    key={period}
                    className="px-3 py-1.5 text-[oklch(0.72_0.12_85)] text-[10px] font-bold uppercase tracking-[0.12em] border border-[oklch(0.72_0.12_85)]/30 bg-[oklch(0.72_0.12_85)]/5"
                  >
                    {period}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
