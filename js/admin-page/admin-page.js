
const body = document.querySelector(".body");

const getProducts = async () => {
    const response = await fetch('http://192.168.1.220:4040/product');
    const data = await response.json();
    allProducts = data.product;
    console.log(data);
    displayProduct();
  };
  getProducts();

  const displayProduct = () => {
    body.innerHTML = "";
      allProducts.forEach((a) => {
        const productItem =
      `<tr>
      <th scope="row">1</th>
      <td></td>
      <td><img src="${a.imageURL}"></td>
      <td>${a.title}</td>
      <td></td>
      <td>${a.price}</td>
      <td>${a.category}</td>
      <td>
          <button class="btn"><i class="fa-solid fa-pen"></i></button>
          <button class="btn"><i class="fa-solid fa-x"></i></button>
      </td>
  </tr>`;
      body.innerHTML += productItem;
    })
  };

