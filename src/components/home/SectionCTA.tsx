import { RiArrowRightLine } from "react-icons/ri";

const SectionCTA = () => {
  return (
    <section className="relative h-[300px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://ik.imagekit.io/9yqf3fqpw/e-bike.png')" }}
      />

      {/* Overlay with blueish gradient to match image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44]/70 via-[#0A1F44]/50 to-[#0A1F44]/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Main Text */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-xl font-['Sora',sans-serif]">
            <span className="text-cyan-400">Proteja</span> sua e-bike <br />
            <span className="text-cyan-400">hoje mesmo!</span>
          </h2>

          {/* Subtext */}
          <p className="text-white font-medium text-lg md:text-xl max-w-sm">
            Não espere o imprevisto acontecer. <br />
            Garanta segurança e tranquilidade agora.
          </p>

          {/* Action Button */}
          <a
            href="#planos"
            className="flex items-center gap-3 px-8 py-4 bg-cyan-400 text-[#0A1F44] font-bold rounded-full hover:bg-cyan-300 transition-all hover:scale-105 shadow-xl whitespace-nowrap"
          >
            Contratar agora
            <RiArrowRightLine className="text-xl" />
          </a>

        </div>
      </div>
    </section>
  );
};

export default SectionCTA;
