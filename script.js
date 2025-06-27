/** onclick sem o login */
function sem_login() {
    alert('É necessário login para acessar esta aba');
}

/** validação do login */
function logar() {
    var login = "Helinu";
    var pass = 'bananal';

    if (login === document.getElementById('usuario').value && pass === document.getElementById('senha').value) {
        alert('Seja bem vindo novamente!');
        window.location.href = "inicio.html";
    }
    else {
        alert('Senha e/ou usuario incorreto!');
    }
}


// menu e link ativo
var menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItem.forEach((item)=>
    item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}


// ientificador de click
menuItem.forEach((item)=>
    item.addEventListener('click', selectLink)
)

// expansão do menu

var btnExp = document.querySelector('#btn-exp')
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})


//galeria 

let scrollContainer = document.querySelector('.galeria');
let backBtn = document.getElementById('icone-esquerda');
let nextBtn = document.getElementById('icone-direita');

scrollContainer.addEventListener("whell", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

nextBtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click",() => {
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 900;
});

var btnNextPage = document.querySelector('.btn-login')
var transicao = document.querySelector('.div_transicao')

btnNextPage.addEventListener("click", function() {
    transicao.classList.toggle('active');
    setTimeout(3000);
});