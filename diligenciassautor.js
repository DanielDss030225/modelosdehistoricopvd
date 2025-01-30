
    

     function teste() {

  
      let titulo = " PASSO DO PROTOCOLO DE 2ª RESPOSTA DO SPVD: ASSISTIDO NÃO LOCALIZADO"
      let mensagem01 = " CONFORME PROTOCOLO DO SERVIÇO DE PREVENÇÃO À VIOLÊNCIA DOMÉSTICA (SPVD), PROCURAMOS POR "
      let nomeautor = document.getElementById("nomeautor").value  
      let rgautor = document.getElementById("rgautor").value 
      let ocorrencia  = document.getElementById("redsorigem").value 
      let nomevitima = document.getElementById("nomevitima").value 
      let rgvitima = document.getElementById("rgvitima").value 
      let telefoneautor = document.getElementById("telefoneautor").value 
    
      if (nomeautor == "") {
        nomeautor = "*********"
      }
      if (rgautor == "") {
        rgautor = "*********"
      }
      if (ocorrencia == "") {
        ocorrencia = "*********"
      }
      if (nomevitima == "") {
        nomevitima = "*********"
      }
      if (rgvitima == "") {
        rgvitima = "*********"
      }
      if (telefoneautor == "") {
        telefoneautor = "*********"
      }
    
      document.getElementById("idteste").value = titulo  + "\n\n" + mensagem01 + nomeautor + ", RG: " + rgautor 
      + ", (PARA NOTIFICÁ-LO SOBRE SUA INCLUSÃO NO SERVIÇO DEVIDO AO REGISTRO DA OCORRÊNCIA Nº " + ocorrencia + ", REGISTRADO EM SEU DESFAVOR POR SUA (EX-)COMPANHEIRA," + " " + nomevitima + ", " + rgvitima + ".)  (PARA APRESENTÁ-LO A LEI 11.340/2006 (LEI MARIA DA PENHA), DEVIDO AO MONITORAMENTO DO CASO ENVOLVENDO ELE E SUA (EX-)COMPANHEIRA, "
      + nomevitima + ", " + rgvitima + ".) (PARA MONITORAR O CASO ENVOLVENDO ELE E SUA (EX-)COMPANHEIRA, " + nomevitima + ", " + rgvitima + ".)" + "\n\n" +
      " ESTA EQUIPE NÃO OBTEVE ÊXITO EM LOCALIZAR O ASSISTIDO. AINDA TENTAMOS CONTATO TELEFÔNICO ATRAVÉS DO NÚMERO" 
      + " " + telefoneautor + ", MAS A LIGAÇÃO FOI DIRECIONADA PARA A CAIXA POSTAL." 
      + "\n\n" + " DESSA FORMA, SERÃO REALIZADAS NOVAS TENTATIVAS DE CONTATO COM O INTUITO DE DAR PROSSEGUIMENTO AO PROTOCOLO DE ATENDIMENTO DO ASSISTIDO NO SERVIÇO DE PREVENÇÃO A VIOLÊNCIA DOMÉSTICA."
    
    
       
}

document.getElementById("DSSA").addEventListener("click", function(event) {
  localStorage.setItem("nome", "PASSO DO PROTOCOLO DE 2ª RESPOSTA DO SPVD: ASSISTIDO NÃO LOCALIZADO");
});

document.getElementById("DSSV").addEventListener("click", function(event) {
  localStorage.setItem("nome", "ADDPASSO DO PROTOCOLO DE 2ª RESPOSTA DO SPVD: ASSISTIDO NÃO LOCALIZADO");
});
