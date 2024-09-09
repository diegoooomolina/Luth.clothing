import '../styles/footer.css'

export function Footer () {
    return(
        <>
        <footer>
            <div className="section-footer container">
                <div className="footer-section-logo">
                <img src="img/logo.png" alt="Logo" className="img-logo" />
                    
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit, quaerat.
                </p>
                <div className="social-links">
                    <a href="#" className="btn-social-link">
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="#" className="btn-social-link">
                    <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="#" className="btn-social-link">
                    <i className="fa-brands fa-x-twitter"></i>
                    </a>
                </div>
                </div>
                <div className="footer-links">
                <div className="footer-column">
                    <h4 className="footer-column-title">Negocio</h4>
                    <ul>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Contáctanos</a></li>
                    <li><a href="#">Política de Privacidad</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h4 className="footer-column-title">Servicio al Cliente</h4>
                    <ul>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                        <li><a href="#">Condiciones de Pedido</a></li>
                        <li><a href="#">Métodos de Pago</a></li>
                    </ul>
                </div>
                <div className="footer-column newsletter">
                    <h4 className="footer-column-title">
                    Suscríbete a nuestros Emails
                    </h4>
                    <p>
                        Disfruta de un 15% de descuento en tu primer pedido
                        cuando te suscribas a nuestro boletín informativo
                    </p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Tu correo electrónico" />
                        <button type="submit">
                            <i className="fas fa-arrow-right"></i>
                        </button>
                    </form>
                </div>
                </div>
            </div>
    </footer>
        </>
    )
    
}

