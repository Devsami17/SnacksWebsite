

let ProductsData = [
  {
    Category: 'Healthy',
    name: 'Pistachio',
    price: '1100.00',
    img: 'Images/Products/healthy/Pistachio.jpeg',
    url:  'productpage/Pistachio.html'
  },
  {
    Category: 'Healthy',
    name: 'Almond',
    price: '1500.00',
    img: 'Images/Products/healthy/badam.jpeg',
    url:  'productpage/Almond.html'

  },
  {
    Category: 'Healthy',
    name: 'Bread',
    price: '90.00',
    img: 'Images/Products/healthy/Plain-Bread-PNG-1.png',
    url:  'productpage/Bread.html'

  }, {
    Category: 'Healthy',
    name: 'Cashew',
    price: '1300.00',
    img: 'Images/Products/healthy/cashew.jpeg',
    url:  'productpage/Cashew.html'

  }, 
  //  {
  //   Category: 'Healthy',
  //   name: 'Peanuts',
  //   price: '1200.00',
  //   img: 'Images/Products/healthy/roasted_peanuts-removebg-preview.png',

  // },
   {
    Category: 'Healthy',
    name: 'Walnut',
    price: '250.00',
    img: 'Images/Products/healthy/Walnut.png',
    url:  'productpage/Walnut.html'

  },
  // kids Snacks


  {
    Category: 'Kids',
    name: 'Wavy Spicy',
    price: '60.00',
    img: 'Images/Products/kiDS snakcs/Wavy RED.png',
    url:  'productpage/Wavy.html'
  },
  {
    Category: 'Kids',
    name: 'Cheetos',
    price: '30.00',
    img: 'Images/Products/kiDS snakcs/cheetos.png',
    url:  'productpage/cheetos.html'
  },
  {
    Category: 'Kids',
    name: 'Slanty Spicy',
    price: '30.00',
    img: 'Images/Products/kiDS snakcs/salnty red.png',
    url:  'productpage/Salanty.html'
  },
  {
    Category: 'Kids',
    name: 'Potato Chips',
    price: '20.00',
    img: 'Images/Products/kiDS snakcs/potato chips.png',
    url:  'productpage/Potato sticks.html'
  },
  {
    Category: 'Kids',
    name: 'Prince',
    price: '20.00',
    img: 'Images/Products/kiDS snakcs/prince.png',
    url:  'productpage/prince.html'
  },
  {
    Category: 'Kids',
    name: 'Chocolate Chip',
    price: '20.00',
    img: 'Images/Products/kiDS snakcs/Chocolate Chip.png',
    url:  'productpage/Chocolate Chip.html'
  },


  // Snacks
  {
    Category: 'Snacks',
    name: 'Burger',
    price: '600.00',
    img: 'Images/burger_img-removebg-preview.png',
    url:  'productpage/Burger.html'
  },
  {
    Category: 'Snacks',
    name: 'Pizza',
    price: '1990.00',
    img: 'Images/Products/snacks/pizza-isolate-white-background-generative-ai_74760-2619-removebg-preview.png',
    url:  'productpage/Pizza.html'
  },
  {
    Category: 'Snacks',
    name: 'Brownies',
    price: '300.00',
    img: 'Images/Products/snacks/brownies.png',
    url:  'productpage/Brownie.html'
  },
  {
    Category: 'Snacks',
    name: 'Roll',
    price: '600.00',
    img: 'Images/Products/snacks/roll.png',
    url:  'productpage/rolls.html'
  },
  // {
  //   Category: 'Snacks',
  //   name: 'Paratha',
  //   price: '600.00',
  //   img: 'Images/paratha.png',
  //   url:  'productpage/Chocolate Chip.html'
  // },
  // {
  //   Category: 'Snacks',
  //   name: 'Sandwich',
  //   price: '130.00',
  //   img: 'Images/Products/snacks/sandwich.png',
  //   url:  'productpage/Chocolate Chip.html'    
  // },

  // smoothies
  {
    Category: 'Smoothies',
    name: 'pakola',
    price: '80.00',
    img: 'Images/Products/SMOOTHIES/pakola.jpg',
    url:  'productpage/pakola.html'
  },
  {
    Category: 'Smoothies',
    name: 'Pepsi',
    price: '80.00',
    img: 'Images/Products/SMOOTHIES/pepsi.jpg',
    url:  'productpage/Pepsi.html'

  },
  {
    Category: 'Smoothies',
    name: ' Mirinda',
    price: '80.00',
    img: 'Images/Products/SMOOTHIES/marindia.jpg',
    url:  'productpage/Mirinda.html'
  },
  {
    Category: 'Smoothies',
    name: 'Coco Cola',
    price: '80.00',
    img: 'Images/Products/SMOOTHIES/cococola.jpeg',
    url:  'productpage/coke.html'
  },
  {
    Category: 'Smoothies',
    name: 'Slice Juice',
    price: '60.00',
    img: 'Images/Products/SMOOTHIES/slice juice.png',
    url:  'productpage/slice.html'

  },
  {
    Category: 'Smoothies',
    name: 'milo',
    price: '90.00',
    img: 'Images/Products/SMOOTHIES/milo.jpg',
    url:  'productpage/milo.html'

  },

];

window.onload = function() {
  displayProducts(ProductsData);
};

function displayProducts(products) {
  var main = document.getElementById('pro-one');
  main.innerHTML = '';
  
  for (var i = 0; i < products.length; i++) {
    main.innerHTML += `<div class="col-lg-4 col-sm-12 col-md-4">
                          <div class="CARDS">
                            <img src="${products[i].img}" alt="${products[i].name}">
                            
                            <a href="${products[i].url}">${products[i].name}</a>
                            <span>Rs : <span style="color: red;">${products[i].price}</span></span>
                            <button id="addcartbtn" onclick="AddtoCart('${products[i].name}', ${products[i].price}, '${products[i].img}')">
                              <i class="fa-solid fa-cart-plus"></i> Add To Cart
                            </button>
                          </div>
                        </div>`;
  }
}
function filterPro(search) {
  let temparray = ProductsData.filter(object =>
    object.Category === search
  );

  var main = document.getElementById('pro-one').innerHTML = '';
  for (var i = 0; i < temparray.length; i++) {
    var main = document.getElementById('pro-one');
    main.innerHTML += `<div class="col-lg-4 col-sm-12 col-md-4">
                          <div class="CARDS">
                            <img src="${temparray[i].img}" alt="">
                            <p>${temparray[i].name}</p>
                            <span>Rs : <span style="color: red;">${temparray[i].price}</span></span>
                            <button id="addcartbtn" onclick="AddtoCart('${temparray[i].name}', ${temparray[i].price},'${temparray[i].img}')">
                              <i class="fa-solid fa-cart-plus"></i> Add To Cart
                            </button>
                          </div>
                        </div>`;
  }
}

var cart = [];
var total = 0;
var cartitems = document.getElementById('cartitems');
var totalPrice = document.getElementById('totalPrice');
var badge = document.getElementById('profile-circle');


function AddtoCart(productname, price, image) {
  cart.push({
    name: productname,
    price: price,
    image: image,
    quantity: 1
  });
  total = total + price;
  updateCart();
}

function updateCart() {
  var str = "";
  cart.map((data, index) => {
    return (
      str += `<img id="addtocartimg" src="${data.image}"><li id="addtocartli">${data.name} - Rs : ${data.price}</li> <button id="addtocartrem" onclick="remove(${index})" class="btn btn-danger ms-5"><span id="trashicon" class="fa-solid fa-trash"></span></button>`
    );
  });
  cartitems.innerHTML = str;
  totalPrice.innerHTML = 'Total Balance : ' + total;
 var cartlength=cart.length;
 var cartsave=localStorage.setItem('badge1',cartlength);
 var badgevalue=localStorage.getItem('badge1')
 badge.innerHTML=badgevalue;
}

function remove(index) {
  var removeitem = cart.splice(index, 1)[0];
  total -= removeitem.price * removeitem.quantity;
  updateCart();
}
