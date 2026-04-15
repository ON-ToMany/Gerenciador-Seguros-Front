import Container from "../../components/container/Container"
import { Tag } from "../../components/tag/Tag"

function Client() {
  return (
    <>
        <Container title="Minhas Apólices">
            <table className="w-full border-4 border-white/20">
                <thead>
                    <tr className="border border-cyan-950 text-cyan-950 text-lg">
                        <th className="p-2 border border-cyan-950">Tipo do seguro</th>
                        <th className="p-2 border border-cyan-950">Data de ínicio</th>
                        <th className="p-2 border border-cyan-950">Data de término</th>
                        <th className="p-2 border border-cyan-950">Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="p-2">Infinity</td>
                        <td className="p-2">2023-01-01</td>
                        <td className="p-2">2023-12-31</td>
                        <td className="p-2"><Tag status="Pendente"/></td>
                    </tr>
                </tbody>
            </table>
        </Container>
    </>
  )
}

export default Client