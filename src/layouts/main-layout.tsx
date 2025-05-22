import Footer from "@/components/footer"
import Header from "@/components/header"
import { Container } from "lucide-react"
import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
        {/* handler to store user data */}
        <Header/>
        <Container className="flex-grow"/>
        <main className="flex-grow">
          <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout
