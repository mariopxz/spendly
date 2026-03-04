const items = [
  { key: 'dashboard', label: 'Dashboard', icon: '📊' },
  { key: 'transactions', label: 'Transactions', icon: '🔁' },
  { key: 'reports', label: 'Reports', icon: '📈' },
  { key: 'budgets', label: 'Budgets', icon: '💼' },
  { key: 'settings', label: 'Settings', icon: '⚙️' },
]

const Sidebar = ({ active = 'dashboard' }) => {
  return (
    <aside className="fixed left-0 top-16 md:top-0 flex flex-col justify-between w-64 h-screen bg-white border-r border-gray-200">
      {/* logo + plan */}
      <div className="px-6 pt-6">
        <div className="flex items-center gap-2">
          <div className="text-3xl">💰</div>
          <div>
            <h2 className="text-xl font-bold">Spendly</h2>
            <p className="text-xs text-gray-500">Premium Plan</p>
          </div>
        </div>
      </div>

      {/* menu items */}
      <nav className="flex-1 px-4 mt-10">
        <ul className="space-y-2">
          {items.map(item => {
            const isActive = item.key === active
            return (
              <li key={item.key}>
                <a
                  href="#"
                  className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                    isActive ? 'bg-indigo-100 text-indigo-600' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* storage card */}
      <div className="px-4 pb-6">
        <div className="bg-white rounded-xl shadow-md p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide">Storage used</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '65%' }} />
          </div>
          <button className="mt-4 w-full py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar