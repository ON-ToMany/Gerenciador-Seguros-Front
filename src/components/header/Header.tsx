import { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-10 py-4 bg-[#F0F2F5] border-b border-gray-300">
      <div className="flex items-center gap-3">
        <img
          src="src\assets\logoescrita.svg"
          alt="IonGuard Logo"
          className="h-10 w-auto"
        />

      </div>

      <div className="flex gap-8 items-center">
        {["Home", "Planos", "Atendimento", "Solicitar Apolice"].map((item) => (
          <Link
            key={item}
            to={`/${item.toLowerCase()}`}
            className="text-gray-700 font-medium hover:text-[#007396] transition-all"
          >
            {item}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6 relative">
        <button className="border-2 border-[#007396] text-[#007396] px-6 py-2 rounded-full font-bold hover:bg-[#007396] hover:text-white transition-all cursor-pointer">
          Aviso de Sinistro
        </button>

        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-[#007396] cursor-pointer flex items-center"
          >
            <BiUserCircle size={45} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#007396] rounded-b-xl shadow-lg z-50 overflow-hidden">
              <div className="flex flex-col text-white">
                <Link
                  to="/login-cliente"
                  className="px-6 py-4 hover:bg-[#005c78] transition-colors border-b border-white/10"
                >
                  Cliente
                </Link>
                <Link
                  to="/login-funcionario"
                  className="px-6 py-4 hover:bg-[#005c78] transition-colors"
                >
                  Funcionario
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
