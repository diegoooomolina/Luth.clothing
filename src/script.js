const productos = [
    {
        id: 1, 
        productName: "remera",
        price: 100,
        quanty: 1,
        img: "./media/remera-1.jpg",
    },
    {
        id: 2, 
        productName: "remera",
        price: 100,
        quanty: 1,
        img: "./media/remera-2.jpg",
    },
    {
        id: 3, 
        productName: "remera",
        price: 100,
        quanty: 1,
        img: "./media/remera-1.jpg",
    },
]








const modalContainer = document.getElementById("modal-container");
const modalOverlay = document.getElementById("modal-overlay");

const cartBtn = document.getElementById("cart-btn");
const cartCounter = document.getElementById("cart-counter");



const displayCart = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "block";
    modalOverlay.style.display = "block";
    //modal header
    const modalHeader = document.createElement("div");

    const modalClose = document.createElement("div");
    modalClose.innerText = "❌";
    modalClose.className = "modal-close";
    //a "modalHeader" le agrege "modalClose" mediante el "append()"
    modalHeader.append(modalClose);

    modalClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
        modalOverlay.style.display = "none";
    })

    const modalTitle = document.createElement("div");
    modalTitle.innerText = "carrito";
    modalTitle.className = "modal-title";
    modalHeader.append(modalTitle);

    modalContainer.append(modalHeader);
    //modal body
    if(cart.length > 0){
    cart.forEach((product) => {
        const modalBody = document.createElement("div")
        modalBody.className = "modal-body"
        modalBody.innerHTML = `
        <div class="product">
            <img class="product-img" src="${product.img}"/>
            <div clss="product-info">
                <h4>${product.productName}</h4>
            </div>
            <div class="quantity">
                <span class="quantity-btn-decrese">➖</span>
                <span class="quantity-input">${product.quanty}</span>
                <span class="quantity-btn-increse">➕</span>
            </div>
            <div class="price">${product.price * product.quanty}$</div>
            <div class="delete-product">❌</div>
        </div>
        `;
        modalContainer.append(modalBody);

        const decrese = modalBody.querySelector(".quantity-btn-decrese")
        decrese.addEventListener("click", () => {
            if (product.quanty !== 1){
                product.quanty--;
                displayCart();
                displayCartCounter();
            };
        });

        const increse = modalBody.querySelector(".quantity-btn-increse")
        increse.addEventListener("click", () => {
            product.quanty++;
            displayCart();
            displayCartCounter();
        });

        //borrar
        const deleteProduct = modalBody.querySelector(".delete-product");

        deleteProduct.addEventListener("click", () => {
            deleteCartProduct(product.id);
        });
    });

    //modal footer
    const total = cart.reduce((acc, el) => acc + el.price * el.quanty, 0);

    const modalFooter = document.createElement("div");
    modalFooter.className = "modal-footer"
    modalFooter.innerHTML = `
    <div class="total-price">Total : ${total}$</div>
    `;
    modalContainer.append(modalFooter);
}else {
    const modalText = document.createElement("h2");
    modalText.className = "modal-body";
    modalText.innerText = "tu carrito esta vacio";
    modalContainer.append(modalText);
}
};


cartBtn.addEventListener("click", displayCart);

const deleteCartProduct = (id) => {
    const foundId = cart.findIndex((element)=> element.id === id);
    cart.splice(foundId , 1);
    displayCart();
    displayCartCounter();
}

const displayCartCounter = ()=> {
    const cartLength = cart.reduce((acc, el) => acc + el.quanty, 0);
    if (cartLength > 0){
    cartCounter.style.display = "block";
    cartCounter.innerHTML= cartLength;
    }else {
        cartCounter.style.display = "none"
    }
};




//constantes
const shopContent = document.getElementById("shopContent");


const cart = [];





//cree un div que adentro tiene una imagen un h3 y un p qeu estan sacados de "products.js" y los agrega a la div que tiene la id: "shopContent"
productos.forEach((product)=>{
    const content = document.createElement("div");
    content.className = "content-card"
    content.innerHTML = `
    <img src="${product.img}">
    <h2>${product.productName}</h2>
    <p>${product.price} $</p>
    `;
    shopContent.append(content);

//cree un button y le puse el texto Buy dentro    
    const buyButton = document.createElement("button");
    buyButton.innerText = "comprar";

//a cada uno de los productos le agrege dicho button
    content.append(buyButton)

//cuando le das click al button agrega al carrito los datos de cada producto
    buyButton.addEventListener("click", ()=> {
        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);

        if(repeat){
            cart.map((prod) => {
                if(prod.id === product.id){
                    prod.quanty++;
                    displayCartCounter();
                }
            });
        }else {
            cart.push({
                id: product.id,
                productName: product.productName,
                price: product.price,
                quanty: product.quanty,
                img: product.img,
            });
            displayCartCounter();
        }
    });
});
