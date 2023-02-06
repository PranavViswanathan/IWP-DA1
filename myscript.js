let bg = document.getElementById('skylogo');
let builds = document.getElementById("buildings");
let text = document.getElementById('text');
let btn = document.getElementById("btn");

window.addEventListener('scroll', function(){
    let value=window.scrollY;
    console.log(value);
    bg.style.left = value*0.15 + 'px';
    builds.style.top = value*0 + 'px';
    text.style.marginRight = value * 0.5 + "px";
    btn.style.marginTop = value * 0.5 + "px";
})
