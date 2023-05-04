var btn = document.getElementsByClassName('.botao-fechar-cookies');
var div = document.getElementsByClassName('.aviso-cookies');

btn.addEventListener('click', function(){

    if(div.style.display === 'block') {
        div.style.display = 'none';
    }

    

});