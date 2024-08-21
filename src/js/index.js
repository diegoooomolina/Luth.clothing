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