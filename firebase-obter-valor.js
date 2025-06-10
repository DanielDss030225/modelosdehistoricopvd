// Firebase SDKs
import { firebaseConfig, initializeApp, getDatabase, ref, get }from "./firebaseKeys.js";
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//dados global
  let nomeVitima = document.getElementById("nomevitima");
  let rgVitima = document.getElementById("rgvitima");
  let cpfVitima = document.getElementById("cpfvitima");
  let cpfAutor = document.getElementById("cpfautor");
  let nomeAutor = document.getElementById("nomeautor");
  let nomeMaeVitima = document.getElementById("nomeMaeVitima");
  let nomePaiVitima = document.getElementById("nomePaiVitima");
  let dataNascimentoVitima = document.getElementById("datanascimentovitima");
  let nomeMaeAutor = document.getElementById("nomeMaeAutor");
  let nomePaiAutor = document.getElementById("nomePaiAutor");
  let dataNascimentoAutor = document.getElementById("datanascimentoautor");
  let telefoneAutor = document.getElementById("telefoneautor");
  let telefoneVitima = document.getElementById("telefonevitima");
  let rgAutorOutro = document.getElementById("rgautor");
  let redsOrigem = document.getElementById("redsorigem");
  let medidaProtetiva = document.getElementById("medidaprotetiva");
  let enderecoVitima = document.getElementById("enderecoVitima");
  let enderecoAutor = document.getElementById("enderecoAutor");
  let ocupacaoVitima = document.getElementById("ocupacaoVitima");
  let ocupacaoAutor = document.getElementById("ocupacaoAutor");
  let estadoCivilAutor = document.querySelector('select[id="estadoCivilAutor"]');
  let corAutor = document.querySelector('select[id="corAutor"]');
  let escolaridadeAutor = document.querySelector('select[id="escolaridadeAutor"]');
  let escolaridadeVitima = document.querySelector('select[id="escolaridadeVitima"]');
  let corVitima = document.querySelector('select[id="cor"]');
  let estadoCivilVitima = document.querySelector('select[id="estadoCivil"]');



// Função principal
window.obterDadosDoFirebase = async function (path, dados) {
    
  const rg = rgVitima.value;



  if (!rg){ 

  } else {
     mostrarCarregamento();
  };


  const snapshot = await get(ref(db, `DADOS/${rg}`));
  ocultarCarregamento();

  const valor = snapshot.val();
  if (!valor) {
   nomeVitima.value = "";
 
  };





  let entrada;
  try {
    entrada = JSON.parse(valor);
  } catch (e) {
    return console.error("Erro ao converter dados JSON", e);
  }

  // Converte para array de strings
  const dadosArray = Array.isArray(entrada)
    ? entrada.map(item => item === null ? "NULL" : String(item))
    : new Array(25).fill("");

  // Função genérica para atualizar selects
  function atualizarSelect(id, valor) {
    const select = document.querySelector(`select[id="${id}"]`);
    if (select && valor !== "NULL") {
      const valorLimpo = valor.trim();
      const optionExists = Array.from(select.options).some(opt => opt.value.trim() === valorLimpo);
      if (optionExists) select.value = valorLimpo;
      else console.warn(`Valor "${valorLimpo}" não encontrado nas opções de '${id}'.`);
    }
  }

  // Função genérica para atualizar inputs
  function atualizarInput(id, valor) {
    const input = document.getElementById(id);
    if (input) input.value = (valor === "NULL") ? "" : valor;
  }

  // Atualiza SELECTs
  atualizarSelect("estadoCivilAutor", dadosArray[18]);
  atualizarSelect("corAutor", dadosArray[17]);
  atualizarSelect("escolaridadeAutor", dadosArray[16]);
  atualizarSelect("escolaridadeVitima", dadosArray[13]);
  atualizarSelect("cor", dadosArray[14]);
  atualizarSelect("estadoCivil", dadosArray[15]);

  // Atualiza INPUTs
  const mapeamentoInputs = {
    nomeMaeVitima: 19,
    nomePaiVitima: 20,
    datanascimentovitima: 21,
    nomeMaeAutor: 22,
    nomePaiAutor: 23,
    datanascimentoautor: 24,
    nomevitima: 0,
    cpfvitima: 7,
    enderecoVitima: 9,
    ocupacaoVitima: 11,
    telefonevitima: 1,
    nomeautor: 3,
    enderecoAutor: 10,
    ocupacaoAutor: 12,
    cpfautor: 8,
    telefoneautor: 4,
    rgautor: 2,
    redsorigem: 5,
    medidaprotetiva: 6
  };

setTimeout(getIfNot(), 500);

  for (const [id, indice] of Object.entries(mapeamentoInputs)) {
    atualizarInput(id, dadosArray[indice] || "");
  }
};

function getIfNot() {
 let nomeMaeVitimay = nomeMaeVitima.value
  if (!nomeMaeVitimay) {
obterDadosVitima();
  };
}


//function to obtain dados of victim

window.obterDadosVitima = async function (path, dados) {
  const rg = rgVitima.value;
  
  if (!rg){ 

  } else {
     mostrarCarregamento();
  };

  const snapshot = await get(ref(db, `DADOSGERAIS/${rg}`));
  ocultarCarregamento();

  const valor = snapshot.val();
  if (!valor) return console.error("ERRO: RG Não cadastrado no sistema!");

  let entrada;
  try {
    entrada = JSON.parse(valor);
  } catch (e) {
    return console.error("Erro ao converter dados JSON", e);
  };

  // Converte para array de strings
  const dadosArray = Array.isArray(entrada)
    ? entrada.map(item => item === null ? "NULL" : String(item))
    : new Array(25).fill("");
  // Função genérica para atualizar selects
  function atualizarSelect(id, valor) {
    const select = document.querySelector(`select[id="${id}"]`);
    if (select && valor !== "NULL") {
      const valorLimpo = valor.trim();
      const optionExists = Array.from(select.options).some(opt => opt.value.trim() === valorLimpo);
      if (optionExists) select.value = valorLimpo;
      else console.warn(`Valor "${valorLimpo}" não encontrado nas opções de '${id}'.`);
    }
  };

  // Função genérica para atualizar inputs
  function atualizarInput(id, valor) {
    const input = document.getElementById(id);
    if (input) input.value = (valor === "NULL") ? "" : valor;
  };



 // Atualiza SELECTs
  atualizarSelect("escolaridadeVitima", dadosArray[6]);
  atualizarSelect("cor", dadosArray[7]);
  atualizarSelect("estadoCivil", dadosArray[8]);
  // Atualiza INPUTs
  const mapeamentoInputs = {
    nomeMaeVitima: 9,
    nomePaiVitima: 10,
    datanascimentovitima: 11,
    nomevitima: 0,
    cpfvitima: 3,
    enderecoVitima: 4,
    ocupacaoVitima: 5,
    telefonevitima: 1,
  };


for (const [id, indice] of Object.entries(mapeamentoInputs)) {
    atualizarInput(id, dadosArray[indice] || "");
  }
};
//NECESSÁRIO AJUSTAR A ORDEM DOS INDICES NOS INPUTS




// Function to obtain dados of author
window.obterDadosAutor = async function (path, dados) {
  const rg = rgAutorOutro.value
  
  if (!rg){ 

  } else {
     mostrarCarregamento();
  };
  const snapshot = await get(ref(db, `DADOSGERAIS/${rg}`));
  ocultarCarregamento();

  const valor = snapshot.val();
  if (!valor) return console.error("ERRO: RG Não cadastrado no sistema!");

  let entrada;
  try {
    entrada = JSON.parse(valor);
  } catch (e) {
    return console.error("Erro ao converter dados JSON", e);
  };

  // Converte para array de strings
  const dadosArray = Array.isArray(entrada)
    ? entrada.map(item => item === null ? "NULL" : String(item))
    : new Array(25).fill("");
  // Função genérica para atualizar selects
  function atualizarSelect(id, valor) {
    const select = document.querySelector(`select[id="${id}"]`);
    if (select && valor !== "NULL") {
      const valorLimpo = valor.trim();
      const optionExists = Array.from(select.options).some(opt => opt.value.trim() === valorLimpo);
      if (optionExists) select.value = valorLimpo;
      else console.warn(`Valor "${valorLimpo}" não encontrado nas opções de '${id}'.`);
    }
  };

  // Função genérica para atualizar inputs
  function atualizarInput(id, valor) {
    const input = document.getElementById(id);
    if (input) input.value = (valor === "NULL") ? "" : valor;
  };

  // Atualiza SELECTs
  atualizarSelect("estadoCivilAutor", dadosArray[8]);
  atualizarSelect("corAutor", dadosArray[7]);
  atualizarSelect("escolaridadeAutor", dadosArray[6]);
  // Atualiza INPUTs
  const mapeamentoInputs = {
    nomeMaeAutor: 9,
    nomePaiAutor: 10,
    datanascimentoautor: 11,
    nomeautor: 0,
    enderecoAutor: 4,
    ocupacaoAutor: 5,
    cpfautor: 3,
    telefoneautor: 1,
  };
for (const [id, indice] of Object.entries(mapeamentoInputs)) {
    atualizarInput(id, dadosArray[indice] || "");
  };
};
//NECESSÁRIO AJUSTAR A ORDEM DOS INDICES NOS INPUTS
