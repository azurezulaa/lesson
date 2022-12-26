
let allProducts = [];
const productList = document.querySelector(".productList");

const getProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
};

const displayProduct = () => {
    allProducts.forEach((a) => {
      const item =
    `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
    <div class="card my-3" style="width: 20rem">
        <img src="${a.thumbnail}" class="card-img-top" style="width: 100%; height: 200px;" alt="zurag">
        <div class="card-body">
          <h5 class="card-title text-center">${a.title}</h5>
          <div class="d-flex justify-content-between align-items-center mb-2">
            <h6 class="m-0">${a.price}$</h6>
            <div class="badge bg-success">${a.discountPercentage}%</div>
          </div>
          <p class="card-text text-truncate">${a.description}</p>
          <i class="fa-light fa-star"></i>
          <a href="#" class="btn btn-outline-danger">Watch</a>
          <button type="button" class="btn btn-danger"><i class="fa-solid fa-plus"></i></button>
        </div>
    </div>
    </div>`;
    productList.innerHTML += item;
  })
};
getProducts();

