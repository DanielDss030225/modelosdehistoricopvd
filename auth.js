// auth.js

// Verifica se o usuário está autenticado antes de carregar a página
firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // Se não estiver logado, redireciona para a página de login
        window.location.href = "login.html";
    }
});

