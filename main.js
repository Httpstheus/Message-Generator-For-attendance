 
  $(document).ready(function(){
    $('#btn-send').on('click', validarDados);

    function validarDados() {
      let tipo           = $('#tipo').val();
      let nome           = $('#nome').val();
      let valor          = $('#valor').val(); 
      let protocolo      = $('#protocolo').val();
      let telefone      = $('#telefone').val();
      let juros          = $('#juros').val ();
      let parcela        = ($('#parcela').val() == '') ? 1: $('#parcela').val();
      let valorDesc      = (valor - (valor *0.1)).toFixed(2); 
      let valorParcela   = (valorDesc/parcela).toFixed(2); ;
      let mensagem       = '';
      

        var valueEmprise = document.getElementById("emprise").value;
        document.getElementById("resposta").innerHTML = valueEmprise;

        
    


      
      switch(tipo) {

          // Message for Option == Mundial Editora
          case 'carta01':
            mensagem =
            // Nr.Document & telephone client
               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +

            //    Message 
                   

                   'Olá, ' + nome + ',' + '<br><br>' +
                   '*Ação Interna Executada* aguardando posicionamento do requerido.' + '<br>' +
                   'Para consulta do seu Processo: https://advocaciamaximos.com/resultado#consultar.' + '<br><br>' +
                   'Precisamos falar com o titular acima com urgência.' + '<br><br>'
                   'Responda com INFORMAÇÕES caso seja o titular.'; 

            messageFinished = document.getElementById("resposta").innerHTML = mensagem;

          break;
        // Message for Option == Edit Brasil
          case 'carta02':
            mensagem =
                    // Nr.Document & telephone client
                       'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +
     
                    //    Message 
                           '*SALDÃO DE DESCONTO* <br>' 
                           
                           + nome +  ' tudo bem? sou a Bruna Ingrid mediadora do Escritório Máximo. <br>' +
                           'Protocolo de atendimento: ' +protocolo + '<br><br>' +
                           'Aproveite hoje e quite seu contrato com a credora ' +valueEmprise+  ' com o desconto de 60% de desconto ' +
                           'e evite os possíveis bloqueios de bens de acordo com o Art. 789 da Lei 13105/15, ciente que após as 12 ' +
                           'horas será dado continuidade as medidas cabíveis.  ' + '<br><br>' +
                           'Valor da sua documentação: R$ ' + juros +
                           
                           '<br><br> DIGITE 1: Quitação por PIX ou Boleto a vista por R$ ' +valorDesc +
                           '<br>*DIGITE 2*Quitação pelo cartão de crédito ' +parcela + ' vezes de R$ ' +valorParcela +
                           '<br><br> *Qual melhor opção para pagamento HOJE?*';
                           

            messageFinished = document.getElementById("resposta").innerHTML = mensagem;

          break;
       
      }
    } 
      
  });

  function CopyToClipboard(resposta){
    var r = document.createRange();
    r.selectNode(document.getElementById(resposta));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    try {
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        console.log(r);
    } catch (err) {
        console.log('Unable to copy!');
    }
}