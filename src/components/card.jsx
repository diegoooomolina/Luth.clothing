import { useCart } from '../context/useCart';
import '../styles/card.css'
import { Filters } from './filters';

export const Products = ({ products }) => {  


    const { addToCart, removeFromCart, cart } = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <>
            <main >
                <h2 className="product-title">productos</h2>
            <Filters />
                <div className="main-products">
                    {
                        products.map(product => {
                            const isProductInCart = checkProductInCart(product)
                            return ( 

                        <div className="product-container" key={product.id}>
                            <figure className="image">
                                <img src={product.img} alt={product.title} />
                            </figure >
                            
                                <div className="card-content">
                                    <div className="wrapper">
                                        <h3>{product.title}</h3>
                                        <p>${product.price}</p>
                                        <button onClick={() => 
                                            isProductInCart 
                                                ? removeFromCart(product) 
                                                : addToCart(product)}>
                                            {
                                                isProductInCart
                                                ?   <img src="./png/003-quitar-del-carrito.png" alt="eliminar del carrito"/>
                                                :   <img src="./png/icons8-añadir-al-carrito-100.png" alt="añadir al carrito"/>
                                            }
                                        </button>
                                    </div>
                                </div>
                        </div>
                    )})}
                    </div>
            </main>
        </>
    )
};

