//Este es para hacer la animacion de aparecer la x por las rayas y visebersa
$(document).ready(function(){
    $(document).on('click', '.cta', function(){
        $(this).toggleClass('active')
    })
});
//Este es para mostrar el menu al darle clic al icono menu
document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu(){
    document.getElementById("move-content").classList.toggle('move-container-all');
    document.getElementById("show-menu").classList.toggle('show-lateral');
}

//Este es para cambiar el icono del modo de la luna a sol y viseversa
$(document).ready(function(){
    $(document).on('click', '#modo', function(){
        $(this).toggleClass('sun')
    })
});

