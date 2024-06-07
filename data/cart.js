export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart)
{
  cart=[
  {
    productId: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    quantity: 2,
  },
  {
    productId: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    quantity: 1,
  },
];
}


function saveTolocal()
{
  localStorage.setItem('cart',JSON.stringify(cart));
}


export function addtoCart(productId) {
  //this code will 1st check if item is already in cart then 1st copy that item in another variable..
  let matchingItem;
  cart.forEach((items) => {
    if (productId === items.productId) {
      matchingItem = items;
    }
  });
  //then increse the quantity only...
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }

  saveTolocal();
}

export function deleteCart(productId){
  let newcart=[];
  cart.forEach((cartitem)=>{
    if(cartitem.productId!=productId)
    {
      newcart.push(cartitem);
    }
  });
  cart=newcart;
  saveTolocal();
}


