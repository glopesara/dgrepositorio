function priceFormatter(price){
    let stringPrice = String(price);
    const dotIndex = stringPrice.indexOf('.');
    const lastIndex = stringPrice.length - 1;

    let priceFormatedToMoney = stringPrice.substring(0,dotIndex+3);

    if((lastIndex - dotIndex) === 1 ) {
        priceFormatedToMoney += '0'
    }

    const priceReplaced = priceFormatedToMoney.replace('.',',');

    return "R$ " + priceReplaced;
}

function createPage(product) {
    const code = document.querySelector("#productDescription span span");
    const name = document.querySelector("#productDescription h1");
    const pic = document.querySelector("#imgContainer img");
    const brand = document.querySelector("#brand span");
    const oldPrice = document.querySelector("#oldPrice");
    const currentPrice = document.querySelector("#priceAndStock strong");
    const stock = document.querySelector("#priceAndStock span span");

    code.innerText = product.code;
    name.textContent = product.name;
    pic.setAttribute('src', product.pics[0]);
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
    console.log(codeNumber)
    const product = products.find(product => {
        console.log(codeNumber)
        if(product.code === Number(codeNumber)){
            return product;
        }
    });

    console.log(product)

    if (product) {
        createPage(product);    
    }else{
        console.log("Product not find");
        location.replace("../homePage/index.html");
    }
}
