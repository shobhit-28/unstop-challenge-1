import { Contents } from "./components/contents/contents"
import { Sidebar } from "./components/sidebar/sidebar"

function App() {

  return (
    <div className="App bg-[#f6f8fa] h-screen">
      <Sidebar />
      <Contents />
    </div>
  )
}

export default App
