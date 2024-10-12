import { useId } from "react"
import '../styles/cart.css'
import { useCart } from "../context/useCart"


function CartItem ({ img, price, title, quantity, addToCart }) {
    return (
        <li>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4> - ${price}
            </div>
            <footer>
                <small>
                    <p>cantidad: {quantity}</p>
                    <button onClick={addToCart}>+</button>
                </small>
            </footer>
        </li>
    )
}
export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <img src="./png/icons8-carrito-de-compras-100.png" alt="carrito" />
            </label>
            <input 
                type="checkbox" 
                id={cartCheckboxId} 
                hidden
            />

            <aside className="cart">
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}

                        />
                    ))}

                </ul>
                <button className="clearCartbtn" onClick={clearCart}>VACIAR CARRITO</button>
            </aside>
        </>
    )
}