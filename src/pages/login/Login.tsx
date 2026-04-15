import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center p-4 relative"
      style={{
        backgroundImage:
          "url('https://ik.imagekit.io/4locmoidr/carrossel.png')",
      }}
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      <main className="relative z-10 w-full max-w-md bg-white/90 backdrop-blur-md rounded-[40px] shadow-2xl px-10 py-12 flex flex-col gap-8 border border-white/20">
        <h2 className="text-3xl font-bold text-[#004a61] text-center tracking-tight">
          Entrar
        </h2>

        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="font-bold text-gray-800 text-lg ml-2"
            >
              Usuário
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-6 py-3 border border-[#007396]/30 rounded-full focus:outline-none focus:border-[#007396] focus:ring-2 focus:ring-[#007396]/20 transition-all bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="font-bold text-gray-800 text-lg ml-2"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-6 py-3 border border-[#007396]/30 rounded-full focus:outline-none focus:border-[#007396] focus:ring-2 focus:ring-[#007396]/20 transition-all bg-white shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#3d718a] text-white py-4 rounded-full font-bold text-xl hover:bg-[#2d5569] transition-all shadow-lg active:scale-95"
          >
            Entrar
          </button>
        </form>

        <footer className="text-center text-[13px] text-gray-700 space-y-2 pt-4">
          <p>
            <strong>demo:</strong> cliente@cliente.com <strong>senha:</strong>{" "}
            123456
          </p>
          <p>
            <strong>demo:</strong> funcionario@funcionario.com{" "}
            <strong>senha:</strong> 123456
          </p>
        </footer>
      </main>
    </div>
  );
};
