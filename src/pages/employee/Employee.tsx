import { useState } from "react";
import Container from "../../components/container/Container";
import { Tag } from "../../components/tag/Tag";

type Status = 'Pendente' | 'Ativo' | 'Cancelado';

type Request = {
  id: number;
  cliente: string;
  tipo: string;
  inicio: string;
  fim: string;
  status: Status;
};

function Employee() {

  const [requests, setRequests] = useState<Request[]>([
    {
      id: 1,
      cliente: "José Rodrigues",
      tipo: "Infinity",
      inicio: "2023-01-01",
      fim: "2023-12-31",
      status: "Pendente",
    },
    {
      id: 2,
      cliente: "Maria Souza",
      tipo: "Guardian",
      inicio: "2023-02-01",
      fim: "2023-12-31",
      status: "Pendente",
    },
    {
      id: 3,
      cliente: "Carlos Oliveira",
      tipo: "Velocity",
      inicio: "2023-03-01",
      fim: "2023-12-31",
      status: "Pendente",
    },
    {
      id: 4,
      cliente: "Ana Costa",
      tipo: "Infinity",
      inicio: "2023-04-01",
      fim: "2023-12-31",
      status: "Pendente",
    },
  ]);

  const updateStatus = (id: number, newStatus: Status) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id ? { ...req, status: newStatus } : req
      )
    );
  };

  return (
    <Container title="Solicitações">
      <table className="w-full border-4 border-white/20">
        <thead>
          <tr className="border border-cyan-950 text-cyan-950 text-lg">
            <th className="p-2 border border-cyan-950">Cliente</th>
            <th className="p-2 border border-cyan-950">Tipo do seguro</th>
            <th className="p-2 border border-cyan-950">Data de início</th>
            <th className="p-2 border border-cyan-950">Data de término</th>
            <th className="p-2 border border-cyan-950">Status</th>
            <th className="p-2 border border-cyan-950">Ações</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((req) => (
            <tr key={req.id} className="text-center">
              <td className="p-2 border">{req.cliente}</td>
              <td className="p-2 border">{req.tipo}</td>
              <td className="p-2 border">{req.inicio}</td>
              <td className="p-2 border">{req.fim}</td>

              <td className="p-2 border">
                <Tag status={req.status} />
              </td>

              <td className="p-2 border">
                <button
                  onClick={() => updateStatus(req.id, "Ativo")}
                  className="bg-green-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-green-600 transition"
                >
                  Aprovar
                </button>

                <button
                  onClick={() => updateStatus(req.id, "Cancelado")}
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
                >
                  Reprovar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Employee;