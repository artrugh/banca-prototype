export const Cart = (data, pictures) => {

  let content = "";
  let totalPrice = 0;
  let totalQuantity = 0;

  data.map((product, i) => {
    // sum the total price od the cart
    let totalProductPrice = product.price * product.quantity;
    // sum the total price for each product
    totalPrice += totalProductPrice;
    // sum quantity of products
    totalQuantity += product.quantity;

    content +=
      `<div class = "${product.name} product">
          <div class = "quant-contr">
            <button class = "increase"> + </button>
            <button class = "decrease"> - </button>
          </div>
          <p class = "quantity" id= "${product.name}-quantity">${product.quantity}${product.quantity === 1 ? "ud" : "uds."}</p>
          <div class = "mini-product-picture" style = "background-image: url(${pictures[i]});"></div>
          <p class = "total-product-price" id = "total-price-${product.name}">${totalProductPrice}€</p>
      </div>`
  })

  const total =
    `<div class = "total sold product">
      <button class = "pagar">PAGAR</button>
      <div class = "total-info">
          <p class = "quantity" id= "total">${totalQuantity}${totalQuantity === 1 ? "ud" : "uds."}</p>
          <p class = "total-product-price" id = "total-price">total: ${totalPrice}€</p>
      </div>    
    </div>`

  return `<div id = "cart" class = "cart">${content}${total}</div>`
}