import {
  RiPhoneLine,
  RiMailLine,
  RiWhatsappLine,
  RiMapPinLine,
  RiMessage3Line,
} from "react-icons/ri";
import Chatbot from "./Chatbot";

const contacts = [
  {
    icon: <RiPhoneLine />,
    title: "(21) 3000-4000",
    sub: "Segunda a Sexta, 8h–18h",
    color: "text-red-400 bg-red-400/10",
  },
  {
    icon: <RiMailLine />,
    title: "atendimento@ionguard.com",
    sub: "Resposta em até 2h úteis",
    color: "text-blue-400 bg-blue-400/10",
  },
  {
    icon: <RiWhatsappLine />,
    title: "WhatsApp Business",
    sub: "(21) 99000-1234 — 24 horas",
    color: "text-green-400 bg-green-400/10",
  },
  {
    icon: <RiMapPinLine />,
    title: "Rio de Janeiro — RJ",
    sub: "Rua do Catete, 311 — Catete",
    color: "text-yellow-400 bg-yellow-400/10",
  },
];

const ContactSection = () => (
  <section id="contato" className="bg-[#0A1F44] py-24 px-6"> {/* Cor da section */}
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-green-600 bg-green-600/12 border border-greenbg-green-600/30 px-4 py-1.5 rounded-full mb-4">
          Atendimento
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-['Sora',sans-serif] mb-4">
          Estamos sempre aqui para você
        </h2>
        <p className="text-white/60 text-base max-w-lg mx-auto">
          Fale com a equipe IonGuard pelo canal que preferir. Respondemos em até 2 horas úteis.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Cards de contato */}
        <div className="flex flex-col gap-4">
          {contacts.map((c, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:bg-white/10 transition"
            >
              <span className={`text-xl w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0 ${c.color}`}>
                {c.icon}
              </span>
              <div>
                <p className="text-white font-semibold text-sm">{c.title}</p>
                <p className="text-white/50 text-xs mt-0.5">{c.sub}</p>
              </div>
            </div>
          ))}

          {/* Botão INICIAR CHAT */}
          <button className="mt-2 flex items-center gap-2 w-fit px-6 py-3 bg-green-700 text-white font-semibold rounded-xl hover:bg-green-600 transition text-sm">
            <RiMessage3Line className="text-base" />
            Iniciar Chat Agora
          </button>
        </div>

        {/* Chatbot */}
        <Chatbot />
      </div>
    </div>
  </section>
);

export default ContactSection;
