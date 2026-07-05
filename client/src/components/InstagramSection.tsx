import { useEffect, useRef, useState } from "react";
import { ExternalLink, Instagram } from "lucide-react";

const instagramUrl = "https://www.instagram.com/nogueiradagamaassessoria/";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function InstagramSection() {
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

  useEffect(() => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    if (existingScript) {
      window.instgrm?.Embeds?.process();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => window.instgrm?.Embeds?.process();
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="instagram"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)]/45 to-transparent" />

      <div className="container relative">
        <div
          className={`grid lg:grid-cols-5 gap-10 lg:gap-14 items-center transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="lg:col-span-2">
            <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
              Instagram
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.2_0.005_285)] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Acompanhe o escritório
            </h2>
            <div className="gold-line w-24 mb-8" />
            <p
              className="text-[oklch(0.5_0.01_60)] text-base md:text-lg leading-relaxed mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.18rem" }}
            >
              Publicações, artigos, reportagens e comunicados sobre a atuação da
              Nogueira da Gama Assessoria Jurídica também são divulgados no Instagram.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[oklch(0.35_0.15_25)] text-white text-xs font-bold uppercase tracking-[0.12em] hover:bg-[oklch(0.42_0.14_25)] transition-colors"
                aria-label="Abrir o Instagram da Nogueira da Gama Assessoria Jurídica"
              >
                <Instagram className="w-4 h-4" />
                Seguir no Instagram
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[oklch(0.35_0.15_25)] text-[oklch(0.35_0.15_25)] text-xs font-bold uppercase tracking-[0.12em] hover:bg-[oklch(0.35_0.15_25)] hover:text-white transition-colors"
              >
                Ver publicações
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="border border-[oklch(0.88_0.01_80)] bg-[oklch(0.97_0.008_80)] p-4 md:p-6">
              <div className="min-h-[520px] flex items-center justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={instagramUrl}
                  data-instgrm-version="14"
                  style={{
                    background: "#fff",
                    border: 0,
                    margin: "0 auto",
                    minWidth: "326px",
                    maxWidth: "540px",
                    width: "100%",
                  }}
                >
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-8 text-center text-[oklch(0.35_0.15_25)] font-semibold"
                  >
                    @nogueiradagamaassessoria
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
