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

            // Variáveis que são chamadas no HTML 

        let tipo           = $('#tipo').val();
        let nome           = $('#nome').val();
        
        let valor          = $('#valor').val(); 
        let protocolo      = $('#protocolo').val();
        let telefone       = $('#telefone').val();
        let juros          = $('#juros').val ();
        let parcela        = ($('#parcela').val() == '') ? 1: $('#parcela').val();
        let valorParcela   = (valor/parcela).toFixed(2); ;
        let mensagem       = '';
        let cpfCliente     = $('#cpf').val();
        let replaceNumbers = '.XXX.XXX';
        let inicioReplace = cpfCliente.substring(0,3);
        let endReplace = cpfCliente.substring(11);
        let resultMaskReplace = inicioReplace + replaceNumbers + endReplace;
        let valueEmprise = document.getElementById("emprise").value;
        
        // Chamar o conteúdo através do INNER em nosso HTML
        document.getElementById("resposta").innerHTML = valueEmprise;
    
   
      switch(tipo) {

          // Message for Option 1 -> Contato ou Acordo Recente
          case 'carta01':
            mensagem =
            // Nr.Document & telephone client
               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +

                    //    Message 
                    '*AUDIÊNCIA PRESENCIAL SERÁ AGENDADA EM ARAÇATUBA-SP* <br><br>' +
                           
                           '*' + nome + '*' + ' Meu nome é Giovana do setor jurídico da máximos advocacia, <br>' +
                           'por negligência de sua parte em honrar com os pagamentos vinculado ao contrato <br>'
                            +protocolo + ' com a ' + valueEmprise +
                           ', foi encaminhado o protocolo a processo interno em seu  CPF ' + resultMaskReplace +
                           ' como: bloqueios da CNH, contas, 30% da renda familiar, entre outros.' +
                           'Consulte agora: https://advocaciamaximos.com/ <br><br>' +

                           '*Evite a visita do OFICIAL DE JUSTIÇA em sua residência e regularize sua pendência* <br><br>' +

                           'Valor atualizado da ação de *R$ ' + juros + '* por *R$ ' + valor + '* <br>' +
                           '1 - Pagamento através de PIX HOJE *R$ ' + valor + '* <br>' +
                           '2 - Pagamento através do Cartão de Crédito em até 12x de *R$ ' + valorParcela + '* (podendo ser de tereceiros) <br><br>' +

                           'fale com a Credora *0800 779 4000* <br><br>' +
                           'A não resposta será considerado recusa de negociação, dando continuidade a devida ação' +
                           'extrajudicial cabível, visando pagamento da dívida mencionada';
        
                           
            messageFinished = document.getElementById("resposta").innerHTML = mensagem;

          break;
       
          // Message for Option 2 -> Cliente sem Contato
          case 'carta02':
            mensagem =
                    // Nr.Document & telephone client
                       'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +
     
                        '*' +nome + '*' + ', meu nome é Isabela, falo da *Máximos Advocacia* - ' +
                        'Protocolo de atendimento: *' + protocolo + '* <br><br>' +
                        
                        'Nosso contato é referente à um pedido de *Ação Extrajudicial* que' +
                        ' foi solicitada em seu CPF *' + resultMaskReplace + '*. ' +
                        'Pela empresa *' +valueEmprise +  '*<br><br>' +

                        'Essa ação está sujeita a entrar em vigor em um *prazo de 24 horas úteis*, ' + 
                        'e dentro desse prazo o (ª) senhor (ª) estará amparado (ª) pela lei, portanto ' +
                        'vamos lhe passar as propostas de conciliação: <br><br>' +

                        'Débito atualizado *R$ ' + juros + '* - Valor autorizado para quitação *R$ ' + valor + '* <br>' +
                        '1 - *Cartão de Crédito* em até 12x de *R$ ' + valorParcela + '* SEM JUROS (podendo ser de terceiros) <br>' +
                        '2 - *Boleto Quitação* à vista ou *PIX* por* R$' + valor + '*<br><br>' +

                        'Caso não haja o retorno ainda *HOJE*, tomaremos as medidas judicialmente' +
                        'cabíveis. <br>' +
                        'Aguardamos retorno com urgência! <br><br>' +
                        'Fale com a credora: *0800 779 4000*';
              
            messageFinished = document.getElementById("resposta").innerHTML = mensagem;

          break;

         // Message for Option 3 -> Encerrou na Homologação/Finalização
         case 'carta03':
                    mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +
             
                            //    Message 
                          '*' + nome  + '* sou Lucas, do setor de Mediação Jurídica. <br>' +
                          'Protocolo de atendimento *' + protocolo + '*<br><br>' +

                          'Foi iniciado no CPF pela credora ' + valueEmprise +
                          ' solicitação para comparecimento no 1º Tabelião de Notas no estado de ' +
                          'São Paulo e poderá brevemente ser notificado em residência. <br><br>' +

                          'Faça uma Conciliação amigável em até 2 horas, *Evite uma medida extrajudicial* ao seu CPF *' + resultMaskReplace  + '*<br>' +
                          'Débito atualizado de ~R$' + juros + '~<br><br>' +

                          '*DIGITE 1* - *Quitação de TODAS as parcelas* por *R$ ' + valor + '*<br>' +
                          '*DIGITE 2* - Cartão de Crédito em até 12 vezes de *R$ ' + valorParcela + ' sem juros* <br><br>' +

                          'Fale com a instituição: 0800 779 4000 <br>' +
                          '*Qual melhor forma de pagamento HOJE?* <br><br>' +

                          'A instituição se resguarda no seu direito de tomar as medidas cabíveis em âmbito' +
                          'extraducial caso não seja realizado um acordo';



                    messageFinished = document.getElementById("resposta").innerHTML = mensagem;
        
                  break;
                  
         // Message for Option 4 -> Acordo Recente
         case 'carta04': 

                  mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +

                            '*AUDIÊNCIA PRESENCIAL SERÁ AGENDADA EM ARAÇATUBA-SP* <br><br>' +

                            'Olá *' + nome + '*. Sou atendente Luana do *Escritório Máximos* <br>' +
                            'PROTOCOLO DE ATENDIMENTO:' + protocolo + '<br><br>' +

                            'Após a recusa de inúmeras tentativas de uma conciliação amigável, foi solicitado a *execução* de uma ação em seu CPF *' + resultMaskReplace + '* <br><br>' +

                            '*Como você não reside no mesmo estado em que será realizada a audiência, conseguimos uma última oportunidade de pagamento antes da execução* <br><br>' +

                            'Valor das custas processuais *R$ ' + juros + '*<br><br>' +

                            'DIGITE 1 - *QUITAÇÃO NO PIX* por *R$ ' + valor + '* <br>' +
                            'DIGITE 2 - *CARTÃO DE CRÉDITO* em *12X R$ ' + valorParcela + '* (podendo ser de terceiros) <br><br>' +

                            'SAC: *0800 779 4000*';




                    messageFinished = document.getElementById("resposta").innerHTML = mensagem;
            
                    break;
                    
         //Message for Option 5 -> Carta Forte 01
         case 'carta05': 

                  mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +

                               '*' + nome + ' CPF' + resultMaskReplace + '* sou a Maria, representante jurídica da MÁXIMOS ADVOCACIA <br>' +
                               'Protocolo: ' + protocolo + '<br><br>' +

                               'Por falta de pagamento com a *' + valueEmprise + '*, segue em andamento seu processo <br><br>' +

                               '*Artigo 789 da Lei nº 13.105 de 16 de Março de 2015* <br>' +
                               'O devedor responde com todos os seus bens presentes e futuros para o cumprimento de suas obrigações, salvo as restrições em estabelecidas em lei. <br><br>' +
                               '*Reforçamos que essa é a última tentativa de acordo amigável, com a redução dos encargos* <br><br>' +
                               
                               '*Valor total R$ ' + juros + '* <br><br>' +
                               
                               '1 - Pagamento através de PIX HOJE *R$ ' + valor + '* <br>' +
                               '2 - Cartão de Crédito parcelado em até *12x de R$ ' + valorParcela + '* (Podendo ser cartão de terceiros) <br>' +
                               'Fale com a credora: 0800 779 4000 <br><br>' +
                               
                               '*Prazo para resolução até 2 horas, após a entrega dessa mensagem*';

                    messageFinished = document.getElementById("resposta").innerHTML = mensagem;

                    break;

         //Message for Option 6 -> Carta Forte 02
         case 'carta06': // Carta Forte 02

                 mensagem =
                            // Nr.Document & telephone client
                               'Nr: ' +protocolo + ' || Telefone: ' +telefone + '<br> <br>' +

                               '*DOCUMENTAÇÃO ENCAMINHADA AO TRIBUNAL DE PEQUENAS CAUSAS EM 24 HORAS* <br><br>' +
                               
                               'Devido a falta de pagamento por parte da(º) inadimplente ' + '*' + nome + '* a empresa processante *' + valueEmprise + '* ' +
                               'dará continuidade a ação solicitada nas próximas 24 horas. A paralisação da documentação de Nº *' + protocolo + '* ocorrerá mediante a negociação do Débito! <br> <br>' +
                              
                               'O não retorno dessa notificação será considerado recusa de acordo. Digite a opção escolhida <br><br>' +

                               '*1* - _Quero negociar e evitar transtornos_ <br>' +
                               '*2* - _Autorizo sequência ao processo em 2ª instância como recusa de acordo._ <br><br>' +
                               
                               '*Consulte sua ação interna:* <br> Site: https://advocaciamaximos.com <br> <br>' + 

                               '<br<br> *OBS: Caso não haja pagamento e houver determinação judicial pelo Art. 829. O executado será ' +
                               'citado para pagar a dívida total de *R$ 4.388,72* no prazo de 2 (dois) dias, contado da citação.*'

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
