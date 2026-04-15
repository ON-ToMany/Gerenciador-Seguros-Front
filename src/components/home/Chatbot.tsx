import { useState, useRef, useEffect } from "react";
import { RiSendPlaneFill, RiShieldLine } from "react-icons/ri";

interface Message {
  text: string;
  type: "bot" | "user";
}

const responses: Record<string, string> = {
  planos: "Temos 3 planos: Básico (R$49,90/mês), Intermediário (R$89,90/mês) e Premium (R$149,90/mês). Qual gostaria de conhecer?",
  basico: "O plano Básico cobre roubo e furto qualificado com cobertura de até R$5.000 e assistência 24h básica.",
  intermediario: "O Intermediário cobre roubo, danos acidentais e assistência de resgate. Cobertura de até R$10.000.",
  premium: "O Premium é cobertura completa: roubo, danos, responsabilidade civil e bike reserva. Até R$20.000!",
  sinistro: "Para acionar um sinistro, acesse o portal do cliente ou ligue (21) 3000-4000. Você precisará do número da apólice.",
  cobertura: "Cobrimos roubo, furto, danos acidentais, colisão, incêndio e responsabilidade civil (plano Premium).",
  cancelar: "O cancelamento pode ser feito a qualquer momento sem multa. Acesse o Portal do Cliente.",
  default: "Nossa equipe pode te ajudar! Ligue (21) 3000-4000 ou use o WhatsApp Business (24h).",
};

const getResponse = (msg: string): string => {
  const m = msg.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (m.includes("plan")) return responses.planos;
  if (m.includes("basico")) return responses.basico;
  if (m.includes("inter") || m.includes("intermediar")) return responses.intermediario;
  if (m.includes("premium")) return responses.premium;
  if (m.includes("sinistro") || m.includes("roubo") || m.includes("acionar")) return responses.sinistro;
  if (m.includes("cobr") || m.includes("cobre") || m.includes("garante")) return responses.cobertura;
  if (m.includes("cancel")) return responses.cancelar;
  return responses.default;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Olá! 👋 Sou o Ion, assistente virtual da IonGuard. Como posso ajudá-lo hoje?", type: "bot" },
    { text: "Você pode perguntar sobre planos, coberturas, preços ou sinistros.", type: "bot" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;
    const newMessages: Message[] = [...messages, { text, type: "user" }];
    setMessages(newMessages);
    setInput("");
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getResponse(text), type: "bot" }]);
    }, 700);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col h-[380px]">  {/* Cor do chat  */}
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
        <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
          <RiShieldLine className="text-white text-lg" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm">Ion — Assistente Virtual</p>
          <div className="flex items-center gap-1.5 mt-0.5">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-xs">Online agora</span>
          </div>
        </div>
      </div>

      {/* Mensagens */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-3 mb-4 pr-1">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.type === "bot"
              ? "bg-blue-900 text-white/90 self-start rounded-tl-sm"
              : "bg-green-500 text-white self-end rounded-tr-sm"
              }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Digite sua mensagem..."
          className="flex-1 bg-white/10 border border-white/15 text-white placeholder-white/40 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-cyan-600 transition"
        />
        <button
          onClick={sendMessage}
          className="w-11 h-11 bg-blue-800 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition"
        >
          <RiSendPlaneFill className="text-base" />
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
