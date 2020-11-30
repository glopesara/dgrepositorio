function createPage(product) {
    const code = document.querySelector("#productDescription span span");
    const name = document.querySelector("#productDescription h1");
    const pic = document.querySelector("#imgContainer img");
    const brand = document.querySelector("#brand span");
    const oldPrice = document.querySelector("#oldPrice");
    const currentPrice = document.querySelector("#priceAndStock strong");
    const stock = document.querySelector("#priceAndStock span span");

    const pathToImage = getPathToProductsImages();

    code.innerText = product.code;
    name.textContent = product.name;
    pic.setAttribute('src', pathToImage + product.pics[0]);
    brand.innerText = product.brand;
    if(product.promotion) {
        oldPrice.innerText = priceFormatter(product.price);
        const priceCalculated = Number(product.price) * (1 - (product.discount / 100));
        currentPrice.innerText = priceFormatter(priceCalculated);
    } else {
        oldPrice.innerText = '';
        currentPrice.innerText = priceFormatter(product.price)
    }
    stock.innerText = product.stock;
}

function renderPage(codeNumber) {
    const product = products.find(product => {
        if(product.code === Number(codeNumber)){
            return product;
        }
    });

    if (product) {
        createPage(product);    
    }else{
        console.log("Product not found");
        location.replace("../homePage/index.html");
    }
}
