/*
    objetivo 1 - Quando o usuario clicar no botão de mostar mais deve abrir os projetos que estão escondidos no Html
            passo 1 - Pegar o botão mostar mais no js pra poder verificar qunado o usuario clicar em cima dele
            passo

            passo 2 - identificar o clique no botão


            passo 3 - adicionar a classe "ativo" nos projetos escondidos 


    objetivo 2 - esconder o botão de mostrar mais 
           passo 1 - pegar o botão e esconder ele 
*/

//objetivo 1 - Quando o usuario clicar no botão de mostar mais deve abrir os projetos que estão escondidos no Html
/*passo 1 - Pegar o botão mostar mais no js pra poder verificar qunado o usuario clicar em cima dele*/

const botaoMostarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetodesativados = document.querySelectorAll('.projeto:not(.ativo');


botaoMostarprojetos.addEventListener('click', () => {
   // passo 3 - adicionar a classe "ativo" nos projetos escondidos 
   MostarMaisProjetos();

  // objetivo 2 - esconder o botão de mostrar mais 
  //  passo 1 - pegar o botão e esconder ele
  esconderbotao();
    
}); 

function MostarMaisProjetos() {
    projetodesativados.forEach(projetodesativado => {
        projetodesativado.classList.add('ativo');
    });
}



const botaoRemoverproj = document.querySelector('.btn-remover-projetos');

botaoRemoverproj.addEventListener('click', () => {
   projetodesativados.forEach(projetodesativado => {
         projetodesativado.classList.remove('ativo')
   });
});

