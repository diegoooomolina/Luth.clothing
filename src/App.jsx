import { NavBar } from './components/navbar.jsx'
import { Footer } from './components/footer.jsx'
import { Products } from './components/card.jsx'
import { Cart } from './components/cart.jsx'
import { products } from './data/product.json'
import './styles/index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useFilters } from './context/useFilters.js'
import { CartProvider } from './context/cart.jsx'
import { Header } from './components/Header.jsx'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)


  return (
    <CartProvider>
      <BrowserRouter>

      <NavBar />

      <Header />

      <Cart />
      
      <Routes>
        <Route path="/" element={
          <Products 
            products={filteredProducts}
          />
          } 
        />
      </Routes>

      <Footer />

      </BrowserRouter>
    </CartProvider>
  )
}

export default App 