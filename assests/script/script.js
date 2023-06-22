const btnMobile = document.getElementById('btn-mobile'); 
const nav = document.getElementById('nav');
function toggleMenu()
{
  nav.classList.toggle('active');//toogle = remova caso tenha a class, add se n tiver
}

btnMobile.addEventListener('click', toggleMenu);
//qunado clicar no li tirar a class active
const li = document.getElementById('menu');
li.addEventListener('click', sairmenu);

function sairmenu() // para quando houver um click fora do menu ele recue
{
    nav.classList.remove('active');
}
const btn = document.querySelector('.div-btn');// chamdno o elemento do hmtl
const darkmode = document.querySelector(':root');//chamdno o elemento do hmtl
btn.onclick = function()// quando houver um click no btn adicionara se tiver e removera se tiver a class active
{
    this.classList.toggle('active')
    darkmode.classList.toggle('active')    
}