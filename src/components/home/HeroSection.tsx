import { useState, useEffect, useCallback } from "react";
import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiShieldCheckLine,
} from "react-icons/ri";

const slides = [
  {
    bg: "https://ik.imagekit.io/9yqf3fqpw/e-bike.png",
    badge: "Seguro líder em mobilidade elétrica",
    title: "Proteja sua E-Bike com",
    highlight: "IonGuard",
    sub: "Segurança completa contra furtos e roubos. Tranquilidade para você pedalar sem preocupações.",
  },
  {
    bg: "https://ik.imagekit.io/9yqf3fqpw/tipos.png",
    badge: "Cobertura 100% nacional",
    title: "Cobertura completa para",
    highlight: "sua mobilidade",
    sub: "Do roubo a danos acidentais, a IonGuard cuida da sua bike onde você estiver.",
  },
  {
    bg: "https://i.postimg.cc/P5PHS5N5/pessoas-na-bike.png",
    badge: "Aprovação em até 24h",
    title: "Apólice rápida e",
    highlight: "sem burocracia",
    sub: "Cadastre-se online, aprovação em até 24 horas e proteção imediata para sua e-bike.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => setAnimating(false), 800);
      setCurrent((idx + slides.length) % slides.length);
    },
    [animating],
  );

  useEffect(() => {
    const t = setInterval(() => goTo(current + 1), 5500);
    return () => clearInterval(t);
  }, [current, goTo]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Slides/Carrossel */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms]"
            style={{
              backgroundImage: `url(${slide.bg})`,
              transform: i === current ? "scale(1)" : "scale(1.05)",
            }}
          />
          {/* Camada por cima da imagem com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/85 via-[#0A1F44]/50 to-transparent" />
        </div>
      ))}

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-[72px]">
        <div className="max-w-2xl">

          {/* Etiqueta visual */}
          <div className="inline-flex items-center gap-2 bg-cyan-700/20 border border-cyan-600/40 text-cyan-400 px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide">
            <RiShieldCheckLine className="text-base" />
            {slides[current].badge}
          </div>

          {/* Título */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5 font-['Sora',sans-serif]">
            {slides[current].title}{" "}
            <em className="not-italic text-cyan-400">
              {slides[current].highlight}
            </em>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
            {slides[current].sub}
          </p>

          {/* Botões */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#planos"
              className="px-8 py-3.5 bg-cyan-700 text-white font-semibold rounded-2xl hover:bg-cyan-600 transition-all hover:-translate-y-0.5 text-sm"
            >
              Conheça nossos planos
            </a>

            <a
              href="#contato"
              className="px-8 py-3.5 bg-white/15 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/25 transition-all text-sm backdrop-blur-sm"
            >
              Falar com especialista
            </a>
          </div>

          {/* Trust items */}
          <div className="flex flex-wrap gap-6 mt-8">
            {["Aprovação em 24h", "Cobertura nacional", "Sem carência"].map(
              (t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 text-white/70 text-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  {t}
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={() => goTo(current - 1)}
          className="w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition backdrop-blur-sm"
        >
          <RiArrowLeftSLine className="text-xl" />
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-7 bg-white" : "w-2 bg-white/40"}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          className="w-10 h-10 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center hover:bg-white/30 transition backdrop-blur-sm"
        >
          <RiArrowRightSLine className="text-xl" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
