/*!
Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)

Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
// Scripts
window.addEventListener('DOMContentLoaded',event=>{
    // Navbar shrink function
    var navbarShrink=function(){
        const navbarCollapsible=document.body.querySelector('#mainNav');
        if(!navbarCollapsible){
            return;
        }
        // Para cuando la ventana baja
        if(window.scrollY===0){
            navbarCollapsible.classList.remove('navbar-shrink')
        }else{
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
    // Shrink the navbar 
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav=document.body.querySelector('#mainNav, #mainNavEn');
    if (mainNav){
        new bootstrap.ScrollSpy(document.body,{
            target: '#mainNav, mainNavEn',
            offset: 74,
        });
    };
    // Collapse responsive navbar when toggler is visible
    const navbarToggler=document.body.querySelector('.navbar-toggler');
    const responsiveNavItems=[].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem){
        responsiveNavItem.addEventListener('click',()=>{
            if(window.getComputedStyle(navbarToggler).display !== 'none'){
                navbarToggler.click();
            }
        });
    });
});
// Esto es para cambiar entre la páginda de idiomas.
var ChangeLangugeEn=document.getElementById('changeLanguajeEn');
ChangeLangugeEn.addEventListener("click",clicked);
function clicked(){
    let id=ChangeLangugeEn.clicked;
    if(location.href="en/index.html"){
        location.href="../index.html";
    }
}
var ChangeLangugeEs=document.getElementById('changeLanguajeEs');
ChangeLangugeEs.addEventListener("click",clickedTwo);
function clickedTwo(){
    alert("estoy dentro de una alerta en el id selector changeLanguajeEs")
//     let id=ChangeLangugeEs.clickedTwo;
//     if(location.href="../index.html"){
//         location.href="en/index.html"
//     }
}