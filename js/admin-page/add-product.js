//POST
const title = document.getElementById("name");
const category = document.getElementById("category");
const price = document.getElementById("price");
const saveBtn = document.querySelector(".save");

const postProducts = async () => {
  const response = await fetch('http://192.168.1.220:4040/product',{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          title: title.value,
          category: category.value,
          price: price.value,
          imageURL: "kkk",
          isSpecial: false,
          days: "14",
      })
  });
  window.location =  "./admin-page.html";
};

saveBtn.addEventListener("click", postProducts);