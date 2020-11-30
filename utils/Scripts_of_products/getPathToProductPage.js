function getPathToProductPage(){
    const path = window.location.href.split("/");
    const antepenultimateIndex = path.length - 3;
    
    const pathToProductPage = path[antepenultimateIndex] === "pages"
        ? "../"
        : "./pages/"

    return pathToProductPage;
}