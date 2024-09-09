import pedirProductos from './pedirProductos.js'


const Cart = (() => {


    return (
        <>
        <div className="modal-container">
            <div className="modal-header">
                <div className="modal-close">❌</div>
                <div className="modal-title">carrito</div>
            </div>
            <div className="modal-body">
                <div className="product">

                </div>
                <div className="modal-footer">total : </div>
            </div>
        </div>
        </>
    );
});

export default Cart;