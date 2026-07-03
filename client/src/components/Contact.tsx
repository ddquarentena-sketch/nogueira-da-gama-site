import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build WhatsApp message
    const msg = `Olá! Meu nome é ${formData.name}. ${formData.subject ? `Assunto: ${formData.subject}. ` : ""}${formData.message}`;
    const whatsappUrl = `https://wa.me/5522999034185?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[oklch(0.2_0.005_285)]"
    >
      <div className="container relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="text-[oklch(0.72_0.12_85)] text-sm font-bold uppercase tracking-[0.2em] mb-3">
            Contato
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            Fale Conosco
          </h2>
          <div className="gold-line w-24 mx-auto mb-8" />
          <p className="max-w-2xl mx-auto text-white/70 text-base md:text-lg leading-relaxed" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem" }}>
            Entre em contato para agendar uma consulta ou esclarecer suas dúvidas.
            Estamos prontos para atendê-lo com a atenção que sua causa merece.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/30">
                  <Phone className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.15em] mb-1">Telefones</p>
                  <p className="text-white font-medium">(22) 99903-4185</p>
                  <p className="text-white font-medium">(22) 99803-4185</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/30">
                  <Mail className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.15em] mb-1">E-mail</p>
                  <p className="text-white font-medium">nogueiradagamaassessoria@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/30">
                  <MapPin className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.15em] mb-1">Endereço</p>
                  <p className="text-white font-medium">Travessa Darcy Bastos, nº 01</p>
                  <p className="text-white/70">Centro — Itaperuna/RJ</p>
                  <p className="text-white/70">CEP 28300-000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/30">
                  <Instagram className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.15em] mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/nogueiradagamaassessoria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium hover:text-[oklch(0.72_0.12_85)] transition-colors"
                  >
                    @nogueiradagamaassessoria
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 flex items-center justify-center border border-[oklch(0.72_0.12_85)]/30">
                  <Clock className="w-4 h-4 text-[oklch(0.72_0.12_85)]" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-[0.15em] mb-1">Horário</p>
                  <p className="text-white font-medium">Segunda a Sexta</p>
                  <p className="text-white/70">8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-[0.15em] mb-2 block">Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[oklch(0.72_0.12_85)]/50 focus:outline-none transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-xs uppercase tracking-[0.15em] mb-2 block">Telefone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[oklch(0.72_0.12_85)]/50 focus:outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-[0.15em] mb-2 block">E-mail</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[oklch(0.72_0.12_85)]/50 focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-[0.15em] mb-2 block">Assunto</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-white focus:border-[oklch(0.72_0.12_85)]/50 focus:outline-none transition-colors appearance-none"
                >
                  <option value="" className="bg-[oklch(0.2_0.005_285)]">Selecione uma área</option>
                  <option value="Direito Criminal" className="bg-[oklch(0.2_0.005_285)]">Direito Criminal</option>
                  <option value="Direito Médico" className="bg-[oklch(0.2_0.005_285)]">Direito Médico</option>
                  <option value="Direito Civil" className="bg-[oklch(0.2_0.005_285)]">Direito Civil</option>
                  <option value="Família e Sucessões" className="bg-[oklch(0.2_0.005_285)]">Família e Sucessões</option>
                  <option value="Direito do Trabalho" className="bg-[oklch(0.2_0.005_285)]">Direito do Trabalho</option>
                  <option value="Direito do Consumidor" className="bg-[oklch(0.2_0.005_285)]">Direito do Consumidor</option>
                  <option value="Direito Previdenciário" className="bg-[oklch(0.2_0.005_285)]">Direito Previdenciário</option>
                  <option value="Direito Administrativo" className="bg-[oklch(0.2_0.005_285)]">Direito Administrativo</option>
                  <option value="Direito Empresarial" className="bg-[oklch(0.2_0.005_285)]">Direito Empresarial</option>
                  <option value="Outro" className="bg-[oklch(0.2_0.005_285)]">Outro</option>
                </select>
              </div>

              <div>
                <label className="text-white/50 text-xs uppercase tracking-[0.15em] mb-2 block">Mensagem</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/[0.05] border border-white/10 px-4 py-3 text-white placeholder:text-white/30 focus:border-[oklch(0.72_0.12_85)]/50 focus:outline-none transition-colors resize-none"
                  placeholder="Descreva brevemente sua necessidade jurídica..."
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[oklch(0.35_0.15_25)] text-white text-sm font-bold uppercase tracking-[0.12em] border border-[oklch(0.35_0.15_25)] hover:bg-[oklch(0.42_0.14_25)] transition-all duration-300 active:scale-[0.97]"
              >
                {submitted ? "Mensagem Enviada!" : "Enviar via WhatsApp"}
              </button>

              <p className="text-white/40 text-xs mt-3">
                Ao enviar, você será redirecionado para o WhatsApp do escritório.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
