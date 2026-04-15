import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import Employee from "./pages/employee/Employee";
import Client from "./pages/client/Client";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import LoginClient from "./pages/login/LoginClient";
import LoginEmployee from "./pages/login/LoginEmployee";
import Success from "./pages/success/Success";

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <div className="min-h-[80vh]">      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portal-cliente" element={<Client />} />
          <Route path="/portal-funcionario" element={<Employee />} />
          {/* O espaço na rota foi substituído por um hífen */}
          <Route path="/solicitar-apolice" element={<Contact />} />
          <Route path="/login-cliente" element={<LoginClient />} />
          <Route path="/login-funcionario" element={<LoginEmployee />} />
          <Route path="/sucesso" element={<Success />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;