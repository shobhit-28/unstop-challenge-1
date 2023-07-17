import { Page } from "./components/page/page"
import { Sidebar } from "./components/sidebar/sidebar"

function App() {

  return (
    <div className="App bg-[#f6f8fa] h-screen">
      <Sidebar />
      <Page />
    </div>
  )
}

export default App
