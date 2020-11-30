function getPathToProductsImages(){
    const path = window.location.href.split("/");
    const antepenultimateIndex = path.length - 3;
    
    const pathToProductImages = path[antepenultimateIndex] === "pages"
        ? "../../"
        : "./"

    return pathToProductImages;
}