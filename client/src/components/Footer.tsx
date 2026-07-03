export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.15_0.005_285)] border-t border-white/5">
      {/* Gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-[oklch(0.72_0.12_85)]/50 to-transparent" />

      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Name */}
          <div className="text-center md:text-left">
            <img
              src="/assets/site/logo-horizontal_222b1c64.jpeg"
              alt="Nogueira da Gama"
              className="h-12 w-auto mx-auto md:mx-0 rounded-sm mb-3"
            />
            <p className="text-white/40 text-xs">
              Assessoria Jurídica de Excelência
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="#inicio" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Início</a>
              <a href="#sobre" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Sobre</a>
              <a href="#areas" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Áreas</a>
              <a href="#novidades" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Novidades</a>
              <a href="#equipe" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Equipe</a>
              <a href="#localizacao" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Localização</a>
              <a href="#contato" className="text-white/50 text-xs uppercase tracking-[0.1em] hover:text-[oklch(0.72_0.12_85)] transition-colors">Contato</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <p className="text-white/50 text-xs mb-1">(22) 99903-4185 | (22) 99803-4185</p>
            <p className="text-white/50 text-xs">nogueiradagamaassessoria@gmail.com</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {currentYear} Nogueira da Gama Assessoria Jurídica. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            OAB/RJ — Itaperuna/RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
