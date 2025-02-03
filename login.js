

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            window.location.href = "index.html";
        })
        .catch(error => {
            console.log('Erro:', error.message);
            alert("Atenção! Credenciais incorretas.");
        });
}