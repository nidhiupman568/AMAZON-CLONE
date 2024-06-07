import { cart, addtoCart } from "../data/cart.js";
import { products } from "../data/products.js";
let htmlProducrt = "";
products.forEach((product) => {
  htmlProducrt += `
    <div class="product-container">
    <div class="product-image-container">
      <img class="product-image"
        src=${product.image}>
    </div>

    <div class="product-name limit-text-to-2-lines">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents / 100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select class="js-select-quantity" onclick=addSelectedQuantity()>
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
    <span class="added-to-cart-icon"><img src="images/icons/checkmark.png"> Added</span>
    </div>

    <button class="add-to-cart-button button-primary js-add-tocart" data-product-id="${
      product.id
    }">
      Add to Cart
    </button>
  </div>`;
});

document.querySelector(".js-product-grid").innerHTML = htmlProducrt;

function updateCart() {
  let cartQuantity = 0;
  //now update quantity
  cart.forEach((item) => {
    cartQuantity += item.quantity;
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
}


document.querySelectorAll(".js-add-tocart").forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productId;
    addtoCart(productId);
    updateCart();
  });
});


// let waitInterval;
// // function showAddedMessage() {
//     document.querySelector('.add-to-cart-button').forEach((addedIcon) => {
//       addedIcon.addEventListener("click", () => {
//         const addButton =document.querySelector('.added-to-cart-icon');
//     addButton.style.opacity = "1";

//     clearTimeout(waitInterval);

//     waitInterval = setTimeout(function () {
//       addButton.style.opacity = "0";
//     }, 1500);
//   });
// });
// }

// const addButton = document.querySelector('.add-to-cart-button');
// addButton.addEventListener('click', showAddedMessage);
