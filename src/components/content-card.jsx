/* eslint-disable react/prop-types */

export function Card ({ titulo, precio, img}) {
    return (
        
        <div className="content-product">
        <img className="product-img" src={img} alt="" />
        <h1 className="product-name">{titulo}</h1>
        <p className="product-precio">${precio}</p>
        <button className="product-button">añadir al carrito</button>
        </div>
        
    )


}



