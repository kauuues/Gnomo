var imgGnomo = document.getElementById('gnomo');
var botoes = document.getElementById('botoes');

botoes.addEventListener('change', novaImagem => {
    if (novaImagem.target.matches('input[type = "radio"]')) {
        imgGnomo.style.opacity = 0;
        imgGnomo.src = novaImagem.target.value;
        imgGnomo.style.opacity = 100;
    };
});