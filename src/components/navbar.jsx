import '../styles/navBar.css'

export function NavBar () {
    return (
        <>
        <header>
            <div className="container section-logo">
                <img src="img/foto.png" alt="Logo" className="img-logo" />
        
                <nav>
                <a href="#">Inicio</a>
                <a href="#">Mujer</a>
                <a href="#">Hombre</a>
                <a href="#">Nosotros</a>
                <a href="#">Contacto</a>
                </nav>
                
                <div className="container-actions">
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button>
                    <i className="fa-regular fa-bell"></i>
                </button>
                <button>
                    <i className="fa-regular fa-user"></i>
                </button>
                </div>
            </div>
            <div id="modal-container"></div>
            <div id="modal-overlay"></div>
    </header>
        </>
    )
}