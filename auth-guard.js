firebase.auth().onAuthStateChanged(user => {
    if(user) 
    {
        if (!window.location.pathname.includes("home.html")) {
            window.location.href = "pages/home/home.html";
        }
    }
});