function priceFormatter(price){
    let stringPrice = String(price);
    const dotIndex = stringPrice.indexOf('.');
    const lastIndex = stringPrice.length - 1;

    let priceFormatedToMoney = stringPrice.substring(0,dotIndex+3);

    if((lastIndex - dotIndex) === 1 ) {
        priceFormatedToMoney += '0'
    }

    const priceReplaced = priceFormatedToMoney.replace('.',',');

    // Return Example "R$ 00,00"
    return "R$ " + priceReplaced;
}