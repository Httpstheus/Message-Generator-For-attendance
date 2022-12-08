
  document.getElementById('telefone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  });

const input = document.getElementById('cpf')

      input.addEventListener('keypress', () => {
          let inputLength = input.value.length

          // MAX LENGHT 14  CPF
          if (inputLength == 3 || inputLength == 7) {
              input.value += '.'
          }else if (inputLength == 11) {
              input.value += '-'
          }
      },


 
  $(document).ready(function(){
    $('#btn-send').on('click', validarDados);

    function validarDados() {
      let tipo           = $('#tipo').val();
      let nome           = $('#nome').val();
     
      let valor          = $('#valor').val(); 
      let protocolo      = $('#protocolo').val();
      let telefone       = $('#telefone').val();
      let juros          = $('#juros').val ();
      let parcela        = ($('#parcela').val() == '') ? 1: $('#parcela').val();
      let valorDesc      = (valor - (valor *0.3)).toFixed(2); 
      let valorParcela   = (valorDesc/parcela).toFixed(2); ;
      let mensagem       = '';
      let cpfCliente     = $('#cpf').val();
      let replaceNumbers = '.XXX.XXX';
      let inicioReplace = cpfCliente.substring(0,3);
      let endReplace = cpfCliente.substring(11);
      let resultMaskReplace = inicioReplace + replaceNumbers + endReplace;

      
      var valueEmprise = document.getElementById("emprise").value;
            document.getElementById("resposta").innerHTML = valueEmprise;
  
   
      switch(tipo) {

          // Message for Option 1
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
        // Message for Option 2
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
                           
                           '<br><br> *DIGITE 1*: Quitação por PIX ou Boleto a vista por R$ ' +valorDesc +
                           '<br>*DIGITE 2*Quitação pelo cartão de crédito ' +parcela + ' vezes de R$ ' +valorParcela +
                           '<br><br> *Qual melhor opção para pagamento HOJE?*';
                           

            messageFinished = document.getElementById("resposta").innerHTML = mensagem;

          break;

                  // Message for Option 3
                  case 'carta03':
                    mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +
             
                            //    Message 
                                   '*PROCESSO DE EXECUÇÃO PARA AÇÃO INTERNA* <br><br>' +
                                   
                                   'Olá ' + nome + '  <br>' +
                                   'Ação Interna aberta em seu nome e CPF, com pedido de visita do *Oficial de Justiça* para avaliação de *Penhora de Bens*. <br><br>' +
                                   'Processo: ' +protocolo + '<br>' +
                                   'CPF: ' + resultMaskReplace + '<br>'+
                                   'Valor da Ação: '  +juros + 

                                   '<br> Proposta de conciliação: R$'  +valorDesc +
                                   '<br><br>Para Conciliação Online responda *EU QUERO*'   
        
                    messageFinished = document.getElementById("resposta").innerHTML = mensagem;
        
                  break;

                                    // Message for Option 4
                  case 'carta04':
                    mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +
             
                            //    Message 
                                   '*PROCESSO EXTRAJUDICIAL* <br><br>' +
                                   
                                   'Sr.(a) ' + nome + '  <br>' +
                                   'Ação Interna no valor de *' + juros +'* <br><br>' +
                                   '*Atualmente se encontra com uma ação interna, EM ANDAMENTO, protocolada em nosso escritório*. <br>' +
                                   'Você pode consultar em:  https://advocaciamaximos.com/#consultar <br>'+
                                   'Está para ser agendada a *VISITA DO OFICIAL DE JUSTIÇA COM PEDIDO PRÉVIO DE INTIMAÇÃO*<BR><BR>'+
                                   'Esta libera a conciliação amigável sem custo Advocatício, para abrir *DIGITE SIM*.'                 
        
                    messageFinished = document.getElementById("resposta").innerHTML = mensagem;
        
                  break;
        
                                    // Message for Option 5
                  case 'carta05':
                    mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +
             
                            //    Message 
                                   '*NOTIFICAÇÃO DE PEDIDO DE CONDENAÇÃO DE PAGAMENTO* <br><br>' +
                                   
                                   'Nome ' + nome + '  <br>' +
                                   'Protocolo: ' +protocolo + '<br><br>' +

                                   '*Ação Interna executada* aguardando posicionamento do requerido. <br>' +
                                   'Para consulta do seu Processo: https://advocaciamaximos.com/resultado#consultar. <br><br>' +
                                   '*Valor em Processo: R$' + juros + '<br>' +
                                   '*DIGITE 1* - Boleto quitação à vista *R$' + valorDesc + '*<br>' +
                                   '*DIGITE 2* - Cartão de crédito em *12 vezes sem juros* (Podendo ser de Terceiros) <br>' +
                                   '*DIGITE 3* - Nova proposta de pagamento. <br><br>' +
                                   'Digite uma opção e receba os valores.'

                    messageFinished = document.getElementById("resposta").innerHTML = mensagem;
        
                  break;
        
       
      }

      
    } 
      
  }));

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
