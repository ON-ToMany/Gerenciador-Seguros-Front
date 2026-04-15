import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa"; 

export const Footer = () => {
  return (
    <footer className="bg-[#1a2344] text-gray-300 py-12 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-10">

        <div className="space-y-6">
          <div className="flex items-center gap-2">


            <img src="src\Assets\logoescrita.svg" alt="" />
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Seguro especializado em e-bikes. Proteção completa para você pedalar
            com tranquilidade por todo o Brasil.
          </p>


          <div className="flex gap-4">
            <FaInstagram
              size={20}
              className="cursor-pointer hover:text-cyan-600 transition-colors"
            />
            <FaLinkedinIn
              size={20}
              className="cursor-pointer hover:text-cyan-600 transition-colors"
            />
            <FaFacebookF
              size={20}
              className="cursor-pointer hover:text-cyan-600 transition-colors"
            />
            <FaTwitter
              size={20}
              className="cursor-pointer hover:text-cyan-600 transition-colors"
            />
          </div>
        </div>


        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg">Links Rápidos</h3>
          <ul className="space-y-4">
            {["Home", "Quem Somos", "Assistência 24hs"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-cyan-600 transition-colors text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div className="space-y-6">
          <h3 className="text-white font-bold text-lg">Contatos</h3>
          <ul className="space-y-4 text-sm">
            <li className="hover:text-cyan-600 cursor-default transition-colors">
              55+ 21 3003-1313
            </li>
            <li className="hover:text-cyan-600 cursor-pointer transition-colors">
              contato@ionguard.com.br
            </li>
          </ul>
        </div>
      </div>


      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© 2026 IonGuard. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cyan-600 transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-cyan-600 transition-colors">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
};
