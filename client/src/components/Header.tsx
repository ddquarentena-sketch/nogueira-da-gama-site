import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "O Fundador", href: "/daniel-nogueira-da-gama/" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Plantão Criminal", href: "/plantao-criminal-itaperuna/" },
  { label: "Publicações", href: "/publicacoes/" },
  { label: "Instagram", href: "#instagram" },
  { label: "Equipe", href: "/equipe/" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.97_0.008_80)]/95 backdrop-blur-md shadow-sm border-b border-[oklch(0.72_0.12_85)]/20"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src="/assets/site/logo-shield-transparent_a0f663e2.png"
            alt="Nogueira da Gama Assessoria Jurídica"
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-10 md:h-12" : "h-10 md:h-12"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-300 group ${
                scrolled ? "text-[oklch(0.2_0.005_285)]" : "text-white"
              } hover:text-[oklch(0.72_0.12_85)]`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-[oklch(0.72_0.12_85)] transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </a>
          ))}
        </nav>

        {/* CTA Desktop */}
        <a
          href="#contato"
          className={`hidden xl:inline-flex items-center px-5 py-2.5 border text-xs font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
            scrolled
              ? "border-[oklch(0.35_0.15_25)] text-[oklch(0.35_0.15_25)] hover:bg-[oklch(0.35_0.15_25)] hover:text-white"
              : "border-[oklch(0.72_0.12_85)] text-[oklch(0.72_0.12_85)] hover:bg-[oklch(0.72_0.12_85)] hover:text-[oklch(0.2_0.005_285)]"
          }`}
        >
          Fale Conosco
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`xl:hidden p-2 transition-colors ${
            scrolled ? "text-[oklch(0.2_0.005_285)]" : "text-white"
          }`}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[36rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[oklch(0.97_0.008_80)]/98 backdrop-blur-md border-t border-[oklch(0.72_0.12_85)]/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold uppercase tracking-[0.1em] text-[oklch(0.2_0.005_285)] hover:text-[oklch(0.35_0.15_25)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-5 py-2.5 border border-[oklch(0.35_0.15_25)] text-[oklch(0.35_0.15_25)] text-xs font-bold uppercase tracking-[0.12em] hover:bg-[oklch(0.35_0.15_25)] hover:text-white transition-all"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
}
