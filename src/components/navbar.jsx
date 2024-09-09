import '../styles/navBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



export function NavBar() {

    const [show, setShow] = useState(true)

    function handleShow () {
        setShow(!show)
    }
    
    return (
        <>
                
            <header className="header">
                <div className="container section-logo">
                    <h1 className="logo">Luth clothing</h1>            
                    <nav >
                        <Link to="/">Inicio</Link>
                        <Link to="/productos" onClick={handleShow}>productos</Link>
                        <Link to="#">Nosotros</Link>
                        <Link to="/contacto">Contacto</Link>
                    </nav>
                    <div><Link to="#" className="cart-btn"><img src="car.svg" alt="" /> </Link></div>
                </div>
            </header>

            <section className="separador"></section>
            {
                            show === false && <div className="content-overley">
                                <Link to="/">masculino</Link>
                                <Link to="/">femenino</Link>
                                <Link to="/productos/remeras">remeras</Link>
                                <Link to="/productos/pantalones">pantalones</Link>
                                <Link to="/productos/yort">yores</Link>
                                <Link to="/productos/camperas">camperas</Link>
                                <Link to="/productos/buzos">buzos</Link>
                            </div>
                        }
        </>
    )}