const Header = () => {
  // Datos del usuario (puedes obtenerlos de un contexto o props)
  const user = {
    name: 'Mario López',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=user1'
  }
  const page = {
    title: 'Dashboard',
    icon: '📊'
  }

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-200 ml-64">
      {/* Logo y nombre */}
      <div className="flex items-center gap-3">
        <div className="text-3xl">{page.icon}</div>
        <h1 className="text-2xl font-bold text-gray-900">{page.title}</h1>
      </div>

      {/* Perfil del usuario */}
      <div className="flex items-center gap-3 px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors">
        <div className="flex flex-col">
          <span className="text-sm font-medium">{user.name}</span>
          <span className="text-xs font-medium text-gray-500">PREMIUM USER</span>
        </div>
        <img 
          src={user.avatar} 
          alt={user.name}
          className="w-9 h-9 rounded-full border-2 border-gray-300"
        />
      </div>
    </header>
  )
}

export default Header