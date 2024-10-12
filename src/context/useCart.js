import { useContext } from "react";
import { CartContext } from "./cart";

export const useCart = () => {
    const context = useContext(CartContext)
    
    if(context === undefined) {
        throw new Error("hola algo salio mal")
    }

    return context
}