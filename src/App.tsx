import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import { Login } from "./pages/login/Login"

function App() {
  return (
    <BrowserRouter>
     
        
        <Header />


        <div className="min-h-[80vh]">
          <Login />
        </div>
        
        <Footer />

     
    </BrowserRouter>
  )
}

export default App