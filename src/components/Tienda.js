export const Tienda = (data, sources, increaseCart) => {

    //didMount
    setTimeout(() => {
        // change the position of the menu bar when some session is clicked
        const list = document.querySelectorAll(".add-cart");

        [...list].map(a => a.onclick = () => {  
            increaseCart(); 
        })
    })

    let content = ""
    for (let i = 0; i < data.length; i++) {
        content += `
        <h3>${data[i].name}</h3>
        <div class="producto">
            <div class = "img-product" style = "background-image: url(${sources[i]});"></div>
            <div class="description">
                <p>${data[i].description}</p>
                <div class = "product-details">
                    <p class = "price">${data[i].price}€</p>
                    <buttom class = "add-cart">COMPRAR</buttom>
                </div>
            </div>
        </div>`
    }
    return `<div id = "tienda">${content}</div>`
}