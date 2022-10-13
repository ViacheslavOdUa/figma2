const subMenu = document.querySelector('.sub_menu');
const burger = document.querySelector('.burger');
let num = 1;
const a = function(e){
    num+=1;
    console.log(num);
    if(num % 2 == 0){
    subMenu.classList.add('moveLeft');
    }else{
    subMenu.classList.remove('moveLeft');
    };
    return num;
};


burger.addEventListener("click", a);












