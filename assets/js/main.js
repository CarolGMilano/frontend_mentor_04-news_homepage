let fecharMenu = document.querySelector('.nav__icone');
let abrirMenu = document.querySelector('.cabecalho__iconeMenu');

let cabecalho = document.querySelector('.cabecalho');
let corpo = document.querySelector('.corpo');
let nav = document.querySelector('.hamburguer__nav');

let body = document.querySelector('.body');

abrirMenu.addEventListener('click', function(){
    cabecalho.classList.add('blur');
    corpo.classList.add('blur');
    nav.classList.remove('esconder');
    nav.classList.add('aparecer');
    body.classList.add('hidden')
});

fecharMenu.addEventListener('click', function(){
    cabecalho.classList.remove('blur');
    corpo.classList.remove('blur');
    nav.classList.add('esconder');
    nav.classList.remove('aparecer');
    body.classList.remove('hidden')
});