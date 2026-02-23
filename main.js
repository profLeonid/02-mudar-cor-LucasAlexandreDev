    // faz o sistema ser mais rigoroso com o código,
    // corrigindo sintaxes erradas que antes eram aceitas, mas agora não são mais
    'use strict';   

    // Seleção dos elementos por ID
    const botaoTrocaCor = document.getElementById('botao-trocar-cor')
    const corVerde = document.getElementById('botao-verde')
    const corVermelho = document.getElementById('botao-vermelho')
    const corAleatoria = document.getElementById('botao-aleatorio-cor')
    const corRestart = document.getElementById('botao-restart-cor')
    const corTextoAtual = document.getElementById('cor-atual')

    // função pra validar e aplicar as cores do input 
    function trocarCorFundo(){
        
      // value -> serve para pegar o valor atual de um elemento
      const corUsuario = document.getElementById('cor-usuario').value
   
      // Validação do campo vazio 
      if (corUsuario == '') {
        alert('Erro: O campo da cor não pode ficar vazio!!!')
            
      // validação somente das cores primárias em pt-br
      }else if (corUsuario == 'vermelho'){
        document.documentElement.style.setProperty('--color-bg', 'red')

      }else if(corUsuario == 'amarelo'){
        document.documentElement.style.setProperty('--color-bg', 'yellow')

      }else if(corUsuario == 'azul'){
        document.documentElement.style.setProperty('--color-bg', 'blue' )
      
      // Se não for uma das cores em pt-br acima, testa se é uma cor válida em inglês ou código hexadecimal
      // Verificando se o navegador reconhece o valor digitado como uma cor 'CSS' válida
      } else if (CSS.supports('color', corUsuario)) {
        document.documentElement.style.setProperty('--color-bg', corUsuario)

      }else{
        alert('Erro: Cor inválida. Digite uma cor primária ou uma cor em inglês!!!')
      }
    }

    // Cada função muda a variável do css '--color-bg' para o nome da sua respectiva cor 
    function trocarCorVerde(){
      document.documentElement.style.setProperty('--color-bg', 'green')
    }

    function trocarCorVermelho(){
      document.documentElement.style.setProperty('--color-bg', 'red')
    }

    function trocarCorAleatoria() {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)

      const corFinal = `rgb(${r}, ${g}, ${b})`
      document.documentElement.style.setProperty('--color-bg', corFinal)
    }

    function trocarCorRestart(){
      document.documentElement.style.setProperty('--color-bg', 'white')
    }
    // Serve para escutar eventos e verificar o 'click' nessa instância  
    botaoTrocaCor.addEventListener('click', trocarCorFundo)
    corVerde.addEventListener('click', trocarCorVerde)
    corVermelho.addEventListener('click', trocarCorVermelho)
    corAleatoria.addEventListener('click', trocarCorAleatoria)
    corRestart.addEventListener('click', trocarCorRestart)
    