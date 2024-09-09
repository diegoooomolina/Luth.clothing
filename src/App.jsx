import { NavBar } from './components/navbar.jsx'
import { Footer } from './components/footer.jsx'
import { Cards } from './components/card.jsx'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App () {
  return (
    <div>
      <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/productos" element={<Cards/>} />
        <Route path='/productos/:categoria' element={<Cards/>}/>
      </Routes>

      <Footer />

      </BrowserRouter>
    </div>
  )
}

export default App 