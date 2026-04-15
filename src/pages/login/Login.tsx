import { useState } from "react";
import { Link } from "react-router-dom";

interface LoginProps {
  tipo: "funcionario" | "cliente";
  demo?: string;
}

function Login({ tipo, demo }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirecionarCaminho =
    tipo === "funcionario" ? "/portal-funcionario" : "/portal-cliente";

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/4locmoidr/carrossel.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <main className="relative z-10 w-full max-w-md bg-gray-300 backdrop-blur-md rounded-[40px] shadow-2xl px-10 py-12 flex flex-col gap-8 border border-cyan-950">
        <h2 className="text-3xl font-bold text-[#004a61] text-center">
          Fazer Login
        </h2>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-800 text-lg ml-2">
              Usuário
            </label>
            <input
              type="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 border border-[#007396]/30 rounded-full focus:outline-none focus:border-[#007396] focus:ring-2 focus:ring-[#007396]/20 bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-gray-800 text-lg ml-2">
              Senha
            </label>
            <input
              type="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-3 border border-[#007396]/30 rounded-full focus:outline-none focus:border-[#007396] focus:ring-2 focus:ring-[#007396]/20 bg-white shadow-sm"
            />
          </div>

          <Link
            to={redirecionarCaminho}
            className="w-full text-center bg-[#3d718a] text-white py-4 rounded-full font-bold text-xl hover:bg-[#2d5569] transition-all shadow-lg active:scale-95"
          >
            Entrar
          </Link>
        </form>

        <footer className="text-center text-[13px] text-gray-700 pt-4">
          <p>{demo}</p>
        </footer>
      </main>
    </div>
  )
}

export default Login