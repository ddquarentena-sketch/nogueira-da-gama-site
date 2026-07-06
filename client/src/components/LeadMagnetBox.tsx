type LeadMagnetKey = "inss" | "antigolpe" | "tcle";

type LeadMagnet = {
  text: string;
  whatsappMessage: string;
};

const leadMagnets: Record<LeadMagnetKey, LeadMagnet> = {
  inss: {
    text: "Material gratuito. Guia prático: Benefício negado, o passo a passo dos primeiros 30 dias. Peça o seu pelo WhatsApp.",
    whatsappMessage: "Olá, quero receber o guia gratuito sobre benefício negado.",
  },
  antigolpe: {
    text: "Material gratuito. Cartilha Antigolpe do Cliente de Advogado: os sinais que denunciam a fraude e como se proteger. Peça a sua pelo WhatsApp.",
    whatsappMessage: "Olá, quero receber a Cartilha Antigolpe.",
  },
  tcle: {
    text: "Material gratuito. Checklist: os 7 pontos que todo TCLE deve conter. Peça o seu pelo WhatsApp.",
    whatsappMessage: "Olá, sou da área da saúde e quero receber o checklist do TCLE.",
  },
};

export default function LeadMagnetBox({
  buttonLabel,
  type,
}: {
  buttonLabel: string;
  type: LeadMagnetKey;
}) {
  const material = leadMagnets[type];
  const href = `https://wa.me/5522999034185?text=${encodeURIComponent(material.whatsappMessage)}`;

  return (
    <aside className="border-l-3 border-[oklch(0.72_0.12_85)] bg-[oklch(0.97_0.008_80)] p-6">
      <p className="text-[oklch(0.5_0.01_60)] leading-relaxed">{material.text}</p>
      <a
        className="mt-5 inline-flex min-h-12 items-center justify-center bg-[oklch(0.35_0.15_25)] px-5 text-xs font-bold uppercase tracking-[0.12em] text-white"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonLabel}
      </a>
    </aside>
  );
}
