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
          style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0" }}
        >
          Há casos que não admitem defesa comum.
        </h1>

        {/* Description */}
        <p
          className="text-white/75 text-xl md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed animate-[fadeInUp_1s_ease-out_0.7s_both]"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Quando a liberdade, o patrimônio ou a reputação estão em jogo, você precisa de mais do que um advogado. Precisa de alguém que domine o processo, a prova e a estratégia, e que esteja ao seu lado em cada passo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-5 animate-[fadeInUp_1s_ease-out_0.9s_both]">
          <a
            href="https://wa.me/5522999034185?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-[oklch(0.35_0.15_25)] text-white text-sm font-bold uppercase tracking-[0.12em] border border-[oklch(0.35_0.15_25)] hover:bg-[oklch(0.42_0.14_25)] transition-all duration-300 active:scale-[0.97]"
          >
            AGENDE UMA CONVERSA
          </a>
          <div className="max-w-3xl text-white/70 text-sm md:text-base leading-relaxed">
            <p>Quando o caso é sério, a escolha do advogado é a primeira decisão estratégica.</p>
            <p>A técnica dos grandes centros. A atenção de quem conhece você pelo nome.</p>
          </div>
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
