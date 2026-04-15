import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./components/header/Header"
import { Footer } from "./components/footer/Footer"
import Home from "./pages/home/Home"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-[80vh]">
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App