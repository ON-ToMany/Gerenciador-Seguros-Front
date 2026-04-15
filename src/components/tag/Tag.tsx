type Status = 'Pendente' | 'Ativo' | 'Cancelado';

interface TagProps {
  status: Status;
}

const statusColors: Record<Status, string> = {
  Pendente: 'font-bold text-sm bg-amber-500/30 text-amber-500 border border-amber-500 rounded-full p-2',
  Ativo: 'font-bold text-sm bg-green-500/30 text-green-500 border border-green-500 rounded-full p-2',
  Cancelado: 'font-bold text-sm bg-red-500/30 text-red-500 border border-red-500 rounded-full p-2',
};

export function Tag({ status }: TagProps) {
  return (
    <span className={statusColors[status]}>
      {status}
    </span>
  );
}