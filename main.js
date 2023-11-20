document.querySelectorAll('.palavras_d p, .palavras_e p').forEach(function (element) {
    element.addEventListener('click', function () {
        let palavraClicada = element.innerText;
        alert('Palavra clicada: ' + palavraClicada);
    });
});
