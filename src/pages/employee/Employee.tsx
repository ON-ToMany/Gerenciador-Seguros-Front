import Container from "../../components/container/Container"
import { Tag } from "../../components/tag/Tag"

function Employee() {
  return (
    <>
        <Container title="Solicitações">
            <table className="w-full border-4 border-white/20">
                <thead>
                    <tr className="border border-cyan-950 text-cyan-950 text-lg">
                        <th className="p-2 border border-cyan-950">Tipo do seguro</th>
                        <th className="p-2 border border-cyan-950">Data de ínicio</th>
                        <th className="p-2 border border-cyan-950">Data de término</th>
                        <th className="p-2 border border-cyan-950">Status</th>
                        <th className="p-2 border border-cyan-950">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                    <td className="p-2 border">Infinity</td>
                    <td className="p-2 border">2023-01-01</td>
                    <td className="p-2 border">2023-12-31</td>
                    <td className="p-2 border"><Tag status="Pendente" /></td>
                    <td className="p-2 border">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full mr-2">Aprovar</button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full">Reprovar</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </Container>
    </>
  )
}

export default Employee