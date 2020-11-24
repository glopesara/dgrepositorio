const container = document.getElementById("productsList");

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

function renderCard(product){
    const coverLink = document.createElement('a');
    const mainDiv = document.createElement('div');
    const imageDiv = document.createElement('div');
    const discountArea = document.createElement('div');
    const descriptions = document.createElement('div');
    const nameOfProduct = document.createElement('p');
    const oldPrice = document.createElement('h3');
    const currentPrice = document.createElement('h2');
    const buyButton = document.createElement('button');

    coverLink.setAttribute('class', 'productCardCover');
    coverLink.setAttribute('href','../product/index.html?code=' + String(product.code));
    

        mainDiv.setAttribute('class', 'productCard');
            imageDiv.setAttribute('class', 'productImg');
            imageDiv.style.backgroundImage = "url(" + product.pics[0] + ")";
                if (!product.promotion) {
                    discountArea.style.visibility = 'hidden';
                }
                
            discountArea.innerText = String(product.discount) + '% Off';
            imageDiv.appendChild(discountArea);
            
        mainDiv.appendChild(imageDiv);

            descriptions.setAttribute('class', 'productDescription');
                nameOfProduct.innerText = String(product.name);

                if(product.promotion){
                    oldPrice.innerText = priceFormatter(product.price);
                    const priceCalculated = Number(product.price) * (1 - (product.discount / 100));
                    currentPrice.innerText = priceFormatter(priceCalculated);
                } else if (!product.promotion) {
                    oldPrice.innerText = '';
                    currentPrice.innerText = priceFormatter(product.price);
                }

                buyButton.setAttribute('class', 'principalButton redButton');
                buyButton.innerHTML = 'Comprar';
                
            descriptions.appendChild(nameOfProduct);
            descriptions.appendChild(oldPrice)
            descriptions.appendChild(currentPrice)
            descriptions.appendChild(buyButton)

        mainDiv.appendChild(descriptions);

    coverLink.appendChild(mainDiv);

    container.appendChild(coverLink);
}

function findProducts(params) {
    container.innerHTML = '';
    let availableProducts = [];
    const filtredProducts = [];

    if(params[0] === 'promotion=true'){
        products.forEach(product => {
            if(product.promotion === true){
                availableProducts.push(product)
            }
        })
    }else {
        availableProducts = products;
    }

    if(params[0] === 'promotion=true' && params.length >= 2 
        || params[0] !== 'promotion=true' && params.length >= 1 ){
        params.map(param => {
            const [ key, value ] = param.split("=");

            availableProducts.forEach((availableProduct)=> {
                if(key === 'name'){
                    const separedValues = value.toLowerCase().split("+");
                    const separedName = availableProduct.name.toLowerCase().split(" ");

                    separedValues.forEach(world => {
                        for(let i in separedName) {
                            if (world === separedName[i]) {
                                filtredProducts.push(availableProduct);
                            }
                        }
                    });
                    
                }else if(availableProduct[key] === value) {
                    filtredProducts.push(availableProduct);
                };
            });
        });

        console.log('entrou'+filtredProducts)

        filtredProducts.forEach(filtredProduct => renderCard(filtredProduct));
    } else {
        availableProducts.forEach(availableProduct => renderCard(availableProduct));
    }

    return;
}