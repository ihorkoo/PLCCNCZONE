// const iconMenu = document.querySelector('.menu__icon');
// if(iconMenu){
//     const mainMenu = document.querySelector('.main_menu');
//     iconMenu.addEventListener("click", function(e){
//         document.body.classList.toggle('_lock');
//         iconMenu.classList.toggle('_active');
//         mainMenu.classList.toggle('_active');
//     });
// }
const iconMenu1 = document.querySelector('#burger');
if(iconMenu1){
    const mainMenu = document.querySelector('.main_menu');
    iconMenu1.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu1.classList.toggle('_active');
        mainMenu.classList.toggle('_active');
    });
}
const iconMenu2 = document.querySelector('#burger_top');
if(iconMenu2){
    const mainMenu = document.querySelector('.main_menu');
    iconMenu2.addEventListener("click", function(e){
        document.body.classList.toggle('_lock');
        iconMenu2.classList.toggle('_active');
        mainMenu.classList.toggle('_active');
    });
}