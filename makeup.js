const section = document.createElement("section");
section.setAttribute("class", "bg-dark");
section.innerHTML = `<h1 class="text-center text-white p-4">Make Up Api Data</h1>`;
const mainContent = document.createElement("div");
mainContent.setAttribute("class", "row row-cols-1 row-cols-md-3 g-4");
section.appendChild(mainContent);
document.body.appendChild(section);
const url = "https://makeup-api.herokuapp.com/api/v1/products.json";
const getMakeUpData = async () => {
  try {
    let res = await fetch(url);
    let makeupData = await res.json();
    // console.log(makeupData);
    displayData(makeupData);
  } catch (error) {
    console.log(error);
  }
};
getMakeUpData();

const displayData = (makeupData) => {
  makeupData.map((item) => {
    // console.log(item);
    const brandName = item.brand;
    const name1 = item.name;
    const category = item.category;
    const productType = item.product_type;
    const img = item.api_featured_image;
    const description = item.description;
    console.log(item.brand);
    console.log(item.name);
    console.log(item.category);
    console.log(item.product_type);
    console.log(item.api_featured_image);
    mainContent.innerHTML += `
        <div class="col">
            <div class="card h-100 bg-info text-dark">
            <div class = "card-header text-center">
                <img src="${img}" class="card-img-top" width="200" height="300" alt="${name1}">
                <h1 class="mt-2 ">${name1}</h1>
            </div>
                <div class="card-body">
                    <h5 class="card-title">Brand Name: ${brandName}</h5>
                    <h5 class="card-title">Category: ${category}</h5>
                    <h5 class="card-title">Product Type: ${productType}</h5>
                </div>
            </div>
        </div>
    `;
  });
};
