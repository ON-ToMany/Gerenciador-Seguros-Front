const About = () => {
  return (
    <section
      id="sobre"
      className="py-16 px-6 bg-white border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <h2 className="text-3xl font-bold text-cyan-950 mb-6">Sobre Nós</h2>
        {/* Conteúdo: texto + logo */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Texto */}
          <p className="text-black text-2xl text-justify leading-relaxed max-w-3xl">
            A OneToMany é um ecossistema de inovação dedicado a desenvolver
            soluções tecnológicas com propósito. Nossa missão transcende a
            simples escrita de código; focamos em gerar impacto positivo e
            transformar ideias visionárias em plataformas reais e escaláveis.
            Acreditamos que a tecnologia é a ferramenta definitiva para
            solucionar desafios globais e criar um futuro mais eficiente e
            humano.
          </p>
          {/* Logo OneToMany */}
          <div className="flex flex-col items-center gap-2 flex-shrink-0">
            <img
              src="https://ik.imagekit.io/9yqf3fqpw/OneToMany..png"
              alt="OneToMany"
              className="w-96 h-74 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
