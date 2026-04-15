function Contact() {
  return (
    <>
    <div className="w-full flex flex-col px-20 py-10 items-center gap-6">
        <h2 className="text-2xl font-bold text-cyan-950">Preencha seus dados para que nossa equipe entre em contato com você </h2>
        <form className="w-full max-w-xl mx-auto flex flex-col gap-6 p-6 border border-cyan-700 rounded-2xl shadow-md">

            <div className="flex flex-col gap-2">
                <label className="text-cyan-950 font-semibold">
                Nome completo
                </label>
                <input 
                type="text" 
                id="nome" 
                name="nome"
                placeholder="Digite seu nome completo"
                required
                className="bg-white border border-cyan-700 rounded-xl px-4 py-2 outline-none focus:border-cyan-950 transition"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label  className="text-cyan-950 font-semibold">
                E-mail
                </label>
                <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Digite seu e-mail"
                required
                className="bg-white border border-cyan-700 rounded-xl px-4 py-2 outline-none focus:border-cyan-950 transition"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label  className="text-cyan-950 font-semibold">
                Tipo de seguro
                </label>
                <select 
                id="seguro" 
                name="seguro"
                required
                className="bg-white border border-cyan-700 rounded-xl px-4 py-2 outline-none focus:border-cyan-950 transition"
                >
                <option value="">Selecione uma opção</option>
                <option value="vida">Velocity</option>
                <option value="auto">Infinity</option>
                <option value="residencial">Guardian</option>
                </select>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-cyan-950 font-semibold">
                Mensagem
                </label>
                <textarea 
                id="mensagem" 
                name="mensagem"
                placeholder="Digite sua mensagem"
                required
                className="bg-white border border-cyan-700 rounded-xl px-4 py-2 outline-none focus:border-cyan-950 transition resize-none"
                ></textarea>
            </div>

            <button 
                type="submit"
                className="bg-cyan-700 text-white font-semibold py-2 rounded-xl hover:bg-cyan-800 transition"
            >
                Enviar
            </button>

        </form>
    </div>
    </>
  )
}

export default Contact