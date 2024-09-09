const ItemList = ( {productos} ) => {
    return (
        <div>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        
                        <div key={producto.id} className="product">
                            <img src="yort-1-f.jpg" alt="imagen" />
                            <h2>{producto.title}</h2>
                            <p>${producto.price}</p>
                            <p>{producto.description}</p>
                        </div>
                
                    )
                })
                
            }
        </div>
    )
}


export default ItemList;