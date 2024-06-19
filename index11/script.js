
let glassIcon = document.getElementById('glass');
let forem = document.getElementById('user');
let IconUser = document.getElementById('iconUser');
let lognForm = document.getElementById('logn-form');
let times = document.getElementById('times');
let menuBar =document.getElementById('menu-bar');
let video = document.querySelectorAll('.video-btn');
let ul =document.getElementById('ul');
let click = document.getElementById('click');
let click1 = document.getElementById('click1');
let click2 = document.getElementById('click2');
let click3 = document.getElementById('click3');
let click4 = document.getElementById('click4');
let click5 = document.getElementById('click5');
let click6 = document.getElementById('click6');

glassIcon.onclick = function(){
    this.classList.toggle('fa-times');
    forem.classList.toggle('actef');
};
 IconUser.onclick = function(){
    lognForm.classList.add('form-cons');
};
times.onclick = function(){
    lognForm.classList.remove('form-cons');
};
menuBar.onclick = function(){
    this.classList.toggle('fa-times');
    this.classList.toggle('noneborder');
    ul.classList.toggle('lef');

};
click.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};
click1.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};
click2.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};
click3.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};
click4.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};
click5.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};
click6.onclick = function(){
    menuBar.classList.toggle('fa-times');
    menuBar.classList.toggle('noneborder');
    ul.classList.toggle('lef');
    
};

video.forEach(slide =>{
    slide.addEventListener("click" , function(){
        document.querySelector(".controls .blue").classList.remove("blue");
         slide.classList.add('blue')
         let src = slide.getAttribute("data-src")
         document.querySelector("#video-sledr").src = src;
         
    })
})