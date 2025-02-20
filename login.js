

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(response => {
            ocultarCarregamento()
            window.location.href = "index.html";
        })  
        .catch(error => {      
       
            ocultarCarregamento()
            trocarTexto()
            console.log('Erro:', error.message);
        });

}