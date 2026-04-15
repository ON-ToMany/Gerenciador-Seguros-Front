interface ContainerProps {
    title: string;
    children: React.ReactNode;
}

function Container({ title, children }: ContainerProps) {
  return (
    <div className="flex flex-col w-full px-20 py-10 bg-white/20 border-t border-b border-cyan-950 gap-6">
      <h2 className="text-2xl font-bold text-cyan-700">{title}</h2>
      {children}
    </div>
  )
}

export default Container