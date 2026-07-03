import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        const img = sectionRef.current.querySelector(".parallax-bg") as HTMLElement;
        if (img) {
          img.style.transform = `translateY(${scrollY * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 parallax-bg">
        <img
          src="/assets/site/hero-office_37e3e0ab.png"
          alt="Escritório Nogueira da Gama"
          className="w-full h-[120%] object-cover"
        />
      </div>

      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/75" />

      {/* Gold line top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo Shield - recortada em bordô */}
        <div className="mb-8 flex justify-center animate-[fadeIn_1.2s_ease-out]">
          <img
            src="/assets/site/logo-shield-transparent_a0f663e2.png"
            alt="Nogueira da Gama - Escudo"
            className="h-28 md:h-36 lg:h-44 w-auto drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Gold separator */}
        <div className="flex items-center justify-center gap-4 mb-8 animate-[fadeInUp_1s_ease-out_0.3s_both]">
          <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[oklch(0.72_0.12_85)]" />
          <div className="w-2 h-2 rotate-45 border border-[oklch(0.72_0.12_85)]" />
          <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[oklch(0.72_0.12_85)]" />
        </div>

        {/* Main Headline */}
        <h1
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-[fadeInUp_1s_ease-out_0.5s_both]"
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.02em" }}
        >
          Complexidade é o nosso território
        </h1>

        {/* Description */}
        <p className="text-white/75 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_1s_ease-out_0.7s_both]">
          Especialistas dedicados a cada área do Direito, com atuação de excelência
          em processos de alta complexidade.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_1s_ease-out_0.9s_both]">
          <a
            href="#areas"
            className="px-8 py-3.5 bg-[oklch(0.35_0.15_25)] text-white text-sm font-bold uppercase tracking-[0.12em] border border-[oklch(0.35_0.15_25)] hover:bg-[oklch(0.42_0.14_25)] transition-all duration-300 active:scale-[0.97]"
          >
            Nossas Especialidades
          </a>
          <a
            href="#contato"
            className="px-8 py-3.5 border border-[oklch(0.72_0.12_85)]/60 text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.12em] hover:bg-[oklch(0.72_0.12_85)]/10 hover:border-[oklch(0.72_0.12_85)] transition-all duration-300 active:scale-[0.97]"
          >
            Agende uma Consulta
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-[oklch(0.72_0.12_85)] to-transparent" />
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
