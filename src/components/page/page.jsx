import { Content } from "../content/content"
import { Header } from "../header/header"

export const Page = () => {

  return (
    <div className="ml-40 mr-5 h-screen bg-white overflow-auto md:m-0 md:w-screen">
        <Header />
        <Content />
    </div>
  )
}
