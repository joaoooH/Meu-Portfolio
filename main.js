// Declarar uma constante chamada textoSubtitulo e armazena o texto a ser digitado no subtítulo.
const textoSubtitulo = "Desenvolvedor back-end";
// Obtém o elemento HTML com o ID "subtitulo-digitando" e armazena na constante elementoSubtitulo.
const elementoSubtitulo = document.getElementById("subtitulo-digitando");
// Declara uma variável mutável (let) chamada indiceSubtitulo e inicializa com o valor 0.
// Essa variável controlará qual caractere do subtítulo está sendo exibido.
let indiceSubtitulo = 0;

// Declara uma constante chamada textoTitulo e armazena o texto a ser digitado no título.
const textoTitulo = "João Heberth";
// Obtém o elemento HTML com o ID "titulo-digitando" e armazena na constante elementoTitulo.
const elementoTitulo = document.getElementById("titulo-digitando");
// Declara uma variável mutável chamada indiceTitulo e inicializa com o valor 0.
// Essa variável controlará qual caractere do título está sendo exibido.
let indiceTitulo = 0;

// Declara uma constante chamada velocidadeDigitar e define a velocidade da digitação em milissegundos.
const velocidadeDigitar = 100; // 100 milissegundos = 0.1 segundo

// Define uma função chamada digitarSubtitulo que cria o efeito de digitação no subtítulo.
function digitarSubtitulo() {
    // Verifica se o índice atual é menor que o comprimento total do texto do subtítulo.
    if (indiceSubtitulo < textoSubtitulo.length) {
        // Adiciona o caractere atual do texto do subtítulo ao conteúdo do elemento do subtítulo.
        elementoSubtitulo.textContent += textoSubtitulo.charAt(indiceSubtitulo);
        // Incrementa o índice para passar para o próximo caractere na próxima chamada da função.
        indiceSubtitulo++;
        // Usa a função setTimeout para chamar digitarSubtitulo novamente após um certo atraso (velocidadeDigitar).
        // Isso cria o efeito de digitação gradual.
        setTimeout(digitarSubtitulo, velocidadeDigitar);
    }
    // Se o índice não for menor que o comprimento do texto, significa que todo o texto foi digitado, e a função para de se chamar.
}

// Define uma função chamada digitarTitulo que cria o efeito de digitação no título.
function digitarTitulo() {
    // Verifica se o índice atual é menor que o comprimento total do texto do título.
    if (indiceTitulo < textoTitulo.length) {
        // Adiciona o caractere atual do texto do título ao conteúdo do elemento do título.
        elementoTitulo.textContent += textoTitulo.charAt(indiceTitulo);
        // Incrementa o índice para passar para o próximo caractere na próxima chamada da função.
        indiceTitulo++;
        // Usa a função setTimeout para chamar digitarTitulo novamente após um certo atraso (velocidadeDigitar).
        // Isso cria o efeito de digitação gradual.
        setTimeout(digitarTitulo, velocidadeDigitar);
    }
    // Se o índice não for menor que o comprimento do texto, significa que todo o texto foi digitado, e a função para de se chamar.
}

// Define uma função anônima que será executada quando a página HTML terminar de carregar (evento onload do window).
window.onload = function() {
    // Chama a função digitarTitulo para iniciar o efeito de digitação no título.
    digitarTitulo();
    // Usa a função setTimeout para chamar a função digitarSubtitulo após um certo atraso.
    // O atraso é calculado para que o subtítulo comece a digitar depois que o título terminar (aproximadamente).
    // Multiplicamos o comprimento do texto do título pela velocidade de digitação para obter o tempo estimado
    // que leva para o título ser digitado, e adicionamos um pequeno atraso extra de 500 milissegundos.
    setTimeout(digitarSubtitulo, textoTitulo.length * velocidadeDigitar + 500);
};
