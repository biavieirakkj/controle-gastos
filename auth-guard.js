firebase.auth().onAuthStateChange(user => {
    if(user) 
    {
        window.location.href = "../../index.html"
    }
})