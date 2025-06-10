
import {AtualizarDados} from "./atualizarDados.js";
import { firebaseConfig, initializeApp, getAuth, onAuthStateChanged, signOut, getDatabase, ref, set  } from "./firebaseKeys.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);

// Monitorar autenticação do usuário
onAuthStateChanged(auth, (user) => {
  const userInfo = document.getElementById("user-info");
  if (user) {
    if(userInfo) userInfo.innerText = `Usuário: ${user.email}`;
  } else {
    if(userInfo) userInfo.innerText = "Nenhum usuário autenticado";
    window.location.href = "login.html";
  }
});

// Função para logout
export function logout() {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  }).catch(error => {
    console.error("Erro ao sair:", error);
  });
}

// Funções para mostrar e esconder alertas
const alertBox = document.getElementById("fullscreenAlert");
const alertaSucesso = document.getElementById("alertaSucesso");
const closeAlertButton = document.getElementById("closeAlert");

function mostrarAlerta() {
  if (alertBox) alertBox.style.display = "flex";
}

function esconderAlerta() {
  if (alertBox) alertBox.style.display = "none";
}

 function mostrarAlertaSucesso() {
  if (alertaSucesso) {
    alertaSucesso.style.display = "block";
    setTimeout(() => {
      alertaSucesso.style.display = "none";
    }, 4000);
  }
};

// Fechar alerta ao clicar no botão
if(closeAlertButton){
  closeAlertButton.addEventListener("click", () => {
    esconderAlerta();
  });
}

// Funções para salvar dados no Firebase Realtime Database
function salvarDadosEmLista(caminho, dados) {
  const rgvitimavalor01 = document.getElementById("rgvitima")?.value;
  const nomevitima = document.getElementById("nomevitima")?.value;

  if (!rgvitimavalor01) {
    mostrarAlerta();
    console.error("O ID da vítima está vazio.");
    return;
  } else if (!nomevitima) {
    mostrarAlerta();
    console.error("O nome da vítima está vazio.");
    
  } else {

  const referencia = ref(db, `${caminho}/${rgvitimavalor01}`);
  const dadosJSON = JSON.stringify(dados);

  set(referencia, dadosJSON)
    .then(() => console.log("Dados salvos com sucesso no Realtime Database!"))
    .catch(erro => console.error("Erro ao salvar dados:", erro));}
};






// Função para formatar telefone: remove não numéricos, pega últimos 9 dígitos e formata XXX-XXX-XXX
function formatarTelefone(telefone) {
  if (!telefone) return "NULL";
  let tel = telefone.replace(/\D/g, "").slice(-9);
  tel = tel.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
  return tel || "NULL";
}

// Evento ao clicar no botão "showAlert"
document.getElementById("showAlert")?.addEventListener("click", () => {
 
  // Capturar dados dos inputs
  const nomeVitima = document.getElementById("nomevitima")?.value || "NULL";
  const rgVitima = document.getElementById("rgvitima")?.value || "NULL";
  const cpfVitima = document.getElementById("cpfvitima")?.value || "NULL";
  const cpfAutor = document.getElementById("cpfautor")?.value || "NULL";
  const nomeAutor = document.getElementById("nomeautor")?.value || "NULL";
  const nomeMaeVitima = document.getElementById("nomeMaeVitima")?.value || "NULL";
  const nomePaiVitima = document.getElementById("nomePaiVitima")?.value || "NULL";
  const dataNascimentoVitima = document.getElementById("datanascimentovitima")?.value || "NULL";
  const nomeMaeAutor = document.getElementById("nomeMaeAutor")?.value || "NULL";
  const nomePaiAutor = document.getElementById("nomePaiAutor")?.value || "NULL";
  const dataNascimentoAutor = document.getElementById("datanascimentoautor")?.value || "NULL";
  const telefoneAutor = formatarTelefone(document.getElementById("telefoneautor")?.value);
  const telefoneVitima = formatarTelefone(document.getElementById("telefonevitima")?.value);
  const rgAutorOutro = document.getElementById("rgautor")?.value || "NULL";
  const redsOrigem = document.getElementById("redsorigem")?.value || "NULL";
  const medidaProtetiva = document.getElementById("medidaprotetiva")?.value || "NULL";
  const enderecoVitima = document.getElementById("enderecoVitima")?.value || "NULL";
  const enderecoAutor = document.getElementById("enderecoAutor")?.value || "NULL";
  const ocupacaoVitima = document.getElementById("ocupacaoVitima")?.value || "NULL";
  const ocupacaoAutor = document.getElementById("ocupacaoAutor")?.value || "NULL";
  const estadoCivilAutor = document.querySelector('select[id="estadoCivilAutor"]')?.value || "NULL";
  const corAutor = document.querySelector('select[id="corAutor"]')?.value || "NULL";
  const escolaridadeAutor = document.querySelector('select[id="escolaridadeAutor"]')?.value || "NULL";
  const escolaridadeVitima = document.querySelector('select[id="escolaridadeVitima"]')?.value || "NULL";
  const corVitima = document.querySelector('select[id="cor"]')?.value || "NULL";
  const estadoCivilVitima = document.querySelector('select[id="estadoCivil"]')?.value || "NULL";



  // Montar os arrays com dados para salvar
  const dadosLista = [
    nomeVitima,
    telefoneVitima,
    rgAutorOutro,
    nomeAutor,
    telefoneAutor,
    redsOrigem,
    medidaProtetiva,
    cpfVitima,
    cpfAutor,
    enderecoVitima,
    enderecoAutor,
    ocupacaoVitima,
    ocupacaoAutor,
    escolaridadeVitima,
    corVitima,
    estadoCivilVitima,
    escolaridadeAutor,
    corAutor,
    estadoCivilAutor,
    nomeMaeVitima,
    nomePaiVitima,
    dataNascimentoVitima,
    nomeMaeAutor,
    nomePaiAutor,
    dataNascimentoAutor
    
  ];

 


  if(!rgAutorOutro.trim()) {
    alert("Preencha o RG do autor.");
    return;
  }

  // Salvar dados no Firebase
  salvarDadosEmLista("DADOS", dadosLista);
let block = document.getElementById("rgvitima").value;

    if (rgVitima == "NULL") {
  } else if (nomeVitima == "NULL") {
     }
    else { mostrarAlertaSucesso(), AtualizarDados();

  };


});

// Expor logout para uso no HTML, se quiser usar onclick="logout()"
window.logout = logout;


window.onload = function () {

  showText(); // Chama sua função aqui
};

export {mostrarAlertaSucesso};