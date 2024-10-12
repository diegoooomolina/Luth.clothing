import { useState,  } from 'react'
import '../styles/navBar.css'
import { Link } from 'react-router-dom'



export function NavBar() {

    const [dropDown, setDropDown]=useState(true)
        const handleDropDown = () => {
            setDropDown(!dropDown)
            console.log(dropDown)
        }
    return (
        <>
                
            <header className="header">
                <div className="content-line" onClick={handleDropDown}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                {
                            dropDown == true &&
                            <nav className="dropDawnNav">
                            
                            <Link to="/">Inicio</Link>
                            <Link to="/productos">productos</Link>
                            <Link to="#">Nosotros</Link>
                            <Link to="/contacto">Contacto</Link>
                            </nav>

                        }
                <div className="container section-logo">
                    <h1 className="logo">Luth clothing</h1>  
                    <nav className="nav">
                            
                            <Link to="/">Inicio</Link>
                            <Link to="/productos">productos</Link>
                            <Link to="#">Nosotros</Link>
                            <Link to="/contacto">Contacto</Link>
                        </nav>
                        
                    <div><Link to="#" className="cart-btn"><img src="car.svg" alt="" /> </Link></div>

                </div>
            </header>

            <section className="separador"></section>

        </>
    )}