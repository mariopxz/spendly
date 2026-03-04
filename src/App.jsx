import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <>
      <Header />
      <div className="flex">
        <div className="hidden md:block">
          <Sidebar />
        </div>
        <main className="flex-1 w-full md:ml-64">
          <Dashboard />
        </main>
      </div>
    </>
  )
}

export default App
