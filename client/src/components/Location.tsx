import { useEffect, useRef, useState } from "react";
import { ExternalLink, MapPin, Navigation, Phone } from "lucide-react";

const address = "Travessa Darcy Bastos, 01 - Centro, Itaperuna - RJ, 28300-000";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

export default function Location() {
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
      id="localizacao"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[oklch(0.15_0.005_285)]"
    >
      <div className="container relative">
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Localizacao
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Encontre o Escritorio
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
            Atendimento em Itaperuna/RJ, com atuacao juridica em todo o territorio nacional.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="h-full border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <MapPin className="w-9 h-9 text-[oklch(0.72_0.12_85)] mb-6" strokeWidth={1.5} />
              <p className="text-white/50 text-xs uppercase tracking-[0.16em] mb-2">Endereco</p>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Nogueira da Gama Assessoria Juridica
              </h3>
              <p className="text-white/75 leading-relaxed mb-6">
                Travessa Darcy Bastos, nº 01<br />
                Centro - Itaperuna/RJ<br />
                CEP 28300-000
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white/75">
                  <Phone className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                  <span className="text-sm">(22) 99903-4185 | (22) 99803-4185</span>
                </div>
                <div className="flex items-center gap-3 text-white/75">
                  <Navigation className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                  <span className="text-sm">Atendimento presencial mediante agendamento</span>
                </div>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[oklch(0.72_0.12_85)] text-[oklch(0.72_0.12_85)] text-xs font-bold uppercase tracking-[0.12em] hover:bg-[oklch(0.72_0.12_85)] hover:text-[oklch(0.2_0.005_285)] transition-all"
              >
                Abrir rotas
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className={`lg:col-span-3 min-h-[360px] md:min-h-[460px] transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <iframe
              title="Mapa do escritorio Nogueira da Gama"
              src={embedUrl}
              className="w-full h-full min-h-[360px] md:min-h-[460px] border border-white/10"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
