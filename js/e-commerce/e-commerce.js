
let allProducts = [];
let allCarts = [];
let allCategories = [];
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".basket");
const categoryList = document.querySelector(".category");
const notif = document.querySelector(".notif");
const totalPrice = document.querySelector(".totalPrice");


const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
};
getProducts();

const displayProduct = () => {
  productList.innerHTML = "";
    allProducts.forEach((a) => {
      const productItem =
    `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card my-3 hover" style="width: 18rem">
        <img src="${a.thumbnail}" class="card-img-top" style="width: 100%; height: 200px;" alt="zurag">
        <div class="card-body">
          <h5 class="card-title text-center text-truncate">${a.title}</h5>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="m-0">${a.price}$</h6>
            <div class="badge bg-success">${a.discountPercentage}%</div>
          </div>
          <p class="card-text text-truncate">${a.description}</p>
          <div class="d-flex justify-content-between">
            <div>
              <i class="fa-regular fa-star text-warning"></i>
              <i class="fa-regular fa-star text-warning"></i>
              <i class="fa-regular fa-star text-warning"></i>
              <i class="fa-regular fa-star text-warning"></i>
              <i class="fa-regular fa-star text-warning"></i>
            </div>
            <div>
              <a href="#" class="btn btn-outline-danger">Watch</a>
              <button onclick="addCart(${a.id})" type="button" class="btn btn-danger"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
    </div>
    </div>`;
    productList.innerHTML += productItem;
  })
};

const addCart = (a) => {
  const findIndex = allCarts.findIndex((item)=>item.id === a);
  if(findIndex > -1){
    allCarts[findIndex].count += 1;
  }else{
    console.log("bhgui")
    const filteredProduct = allProducts.filter((item)=>item.id === a)
    const newItem = {count:1, ...filteredProduct[0]};
    allCarts.push(newItem);
  
  }
  showNotif();
  displayCart();
};

const displayCart = () => {
  cartList.innerHTML = "";
  allCarts.forEach((a, i) => {
    const cartItem = 
    `<div class="mx-2 my-3 d-flex border rounded p-2 bg-light tran">
      <div style="width: 70px; height:70px; border-radius: 50%; overflow:hidden;">
        <img class="w-100 h-100" src="${a.thumbnail}" alt="">
      </div>
      <div class="align-self-center ps-3">
        <h6 style="font-size: 12px; width: 150px;" class="m-0">${a.title}</h6>
        <p style="font-size: 16px" class="m-0">${a.price * a.count}$</p>
      </div>
      <div style="width: 50px;" class="align-self-center px-2">
        <button onclick="amount1(${i})" class="btn btn-danger d-flex align-items-center justify-content-center" style="width: 20px; height: 20px;">+</button>
        <p class="m-0 p-0 fs-5 text-center">${a.count}</p>
        <button onclick="amount2(${i})" class="btn btn-danger d-flex align-items-center justify-content-center" style="width: 20px; height: 20px;">-</button>
      </div>
      <div style="width: 50px;" class="align-self-center">
      <button onclick="remove(${i})" type="button" class="btn"><i class="fa-solid fa-x remove"></i></button>
      </div>
    </div>`;
    cartList.innerHTML += cartItem;
  })
  totalPrice.innerHTML = calculatePrice();
};

const amount1 = (i) => {
  allCarts[i].count += 1;
  displayCart();
}
const amount2 = (i) => {
  if(allCarts[i].count > 1){
    allCarts[i].count -= 1;
    displayCart();
  } else {
    remove(i);
  }
};

const showNotif = () => {
  if(allCarts.length === 0){
    notif.classList.add("d-none");
  }else{
    notif.classList.remove("d-none");
  }
  notif.innerHTML = allCarts.length;
}
showNotif();

const remove = (i) => {
  const tran = document.querySelectorAll(".tran");
  tran[i].classList.add("hide");
  allCarts.splice(i, 1);
  setTimeout(displayCart, 500);
  showNotif();
}

const getCategories = async () => {
  const response = await fetch('https://dummyjson.com/products/categories');
  const data = await response.json();
  allCategories = data;
  displayCategory()
};
getCategories();

const displayCategory = () => {
  allCategories.forEach((a) => {
    const categoryItem = 
    `<button onclick="sorter('${a}')" type="button" class="btn d-block hover1">${a}</button>`;
    categoryList.innerHTML += categoryItem;
  })
}

const sorter = async (a) => {
  const response = await fetch(`https://dummyjson.com/products/category/${a}`);
  const data = await response.json();
  allProducts = data.products
  displayProduct();
};

const calculatePrice = () => {
  let sumPrice = 0;
  for (product of allCarts){
    sumPrice = sumPrice + product.price * product.count
  }
  if(sumPrice === 0){
    return "Сагс хоосон байна";
  }
  return `Total: ${sumPrice}$`;
};