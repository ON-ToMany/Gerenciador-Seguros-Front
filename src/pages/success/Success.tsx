import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="w-full h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center gap-6 p-10 border border-cyan-700 rounded-3xl shadow-lg max-w-md w-full text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-cyan-100">
                <span className="text-3xl text-cyan-700">✓</span>
            </div>

            <h1 className="text-2xl font-bold text-cyan-950">
                Solicitação enviada!
            </h1>

            <p className="text-gray-600">
                Recebemos seus dados com sucesso. Nossa equipe entrará em contato em breve com mais informações.
            </p>

            <Link
            to="/home"
            className="bg-cyan-700 text-white px-6 py-2 rounded-xl hover:bg-cyan-800 transition"
            >
                Voltar para o início
            </Link>
        </div>
    </div>
  );
}

export default Success;