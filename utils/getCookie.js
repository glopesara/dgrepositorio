function getCookie(cookieKey){
    const allCookies = decodeURIComponent(document.cookie).split(";");
    
    for (let i in allCookies){
        const [ key, value ] = allCookies[i].split("=");
        if(key.trim() === cookieKey){
            return value;
        }
    }
    
    return;
}