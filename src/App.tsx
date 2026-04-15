import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import Employee from "./pages/employee/Employee"
import Client from "./pages/client/Client"
import Contact from "./pages/contact/Contact"

function App() {
  return (
    <BrowserRouter>
      <Header />

      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/portal-cliente" element={<Client />} />
          <Route path="/portal-funcionario" element={<Employee />} />
          <Route path="/atendimento" element={<Contact />} />
        </Routes>
      </div>
        
      <Footer />
    </BrowserRouter>
  )
}

export default App