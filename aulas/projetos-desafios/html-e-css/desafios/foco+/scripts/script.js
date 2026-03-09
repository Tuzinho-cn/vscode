let header = document.getElementById("header");
let recursos = document.getElementById("recursos"); 
let precos = document.getElementById("precos");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.classList.add("scrolled");
    }else{
        header.classList.remove("scrolled");
    }

    if(window.scrollY > 400){
        document.getElementById("top-btn").style.display = "block";
    }else{
        document.getElementById("top-btn").style.display = "none";
    }
});

function goArea(value)
{
    document.getElementById(value).scrollIntoView({behavior: "smooth"});
};

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: null,
    y: null,
    radius: 120
};

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

window.addEventListener("resize", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 100 + 4;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if(distance < mouse.radius){
            this.x -= dx / 10;
            this.y -= dy / 10;
        }

        if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw(){
        ctx.fillStyle = "rgba(255, 255, 255, 0.01)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.shadowBlur = 15;
        ctx.shadowColor = "white";
        ctx.fill();
    }
}

let particlesArray = [];

function init(){
    particlesArray = [];
    for(let i = 0; i < 5; i++){
        particlesArray.push(new Particle());
    }
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
    }

    requestAnimationFrame(animate);
}

init();
animate();

let burguer = document.getElementById('burguer');
let itens = document.getElementById("itens");

      function clickMenu() {
         if (itens.style.display == 'block') {
            itens.style.display = 'none'
         } else {
            itens.style.display = 'block'
            burguer.style.display = 'block'
         }
      }

      function mudouTamanho() {
         if (window.innerWidth >= 768) {
            itens.style.display = 'block'
         } else {
            itens.style.display = 'none'
         }
      }