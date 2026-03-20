firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // Se não tem usuário, manda para o login (index.html na raiz)
        window.location.href = "../../index.html";
    }
})