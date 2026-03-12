console.log("script.js loaded");
let header = document.getElementById("header");
let recursos = document.getElementById("recursos");
let precos = document.getElementById("precos");
let bookTitleEl = document.getElementById("book-title");
let bookPriceEl = document.getElementById("book-price");
let bookTitleMlEl = document.getElementById("book-title-ml");
let bookPriceMlEl = document.getElementById("book-price-ml");
let bookTitleOtherEl = document.getElementById("book-title-other");
let bookPriceOtherEl = document.getElementById("book-price-other");

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

      const heroImages = [
         "images/capa-o-diario-de-carson-phillips.jpg",
         "images/capa-minha-vida-fora-de-serie.jpg",
         "images/capa-manual-de-persuasão-do-fbi.jpg"
      ];

      const themes = [
         {
            bg: "linear-gradient(-45deg, #ffffff, #909090, #000000, #000000, #686868)",
            btn: "#ffffff",
            btnText: "#000000",
            btnShadow: "0 5px 20px rgba(142, 119, 43, 0.45)",
            cardBorder: "1px solid rgba(255, 255, 255, 0.4)",
            cardShadow: "0 15px 40px rgba(255, 255, 255, 0.25)",
            linkBorder: "rgba(255, 255, 255, 0.413)",
            linkBorderHover: "rgba(255, 255, 255, 0.623)",
            linkColor: "#979797",
            linkColorHover: "#ffffff",
            headerBg: "rgb(0, 0, 0)",
            footerBg: "#000000"
         },
         {
            bg: "linear-gradient(-45deg, #00135d, #0d0f16, #111521, #060d27, #000631)",
            btn: "#3a1a4c",
            btnText: "#f7e9ff",
            btnShadow: "0 5px 20px rgba(58, 26, 76, 0.45)",
            cardBorder: "1px solid rgba(247, 233, 255, 0.2)",
            cardShadow: "0 15px 40px rgba(146, 80, 226, 0.25)",
            linkBorder: "rgba(255, 255, 255, 0.35)",
            linkBorderHover: "rgba(255, 255, 255, 0.75)",
            linkColor: "#d8c8f1",
            linkColorHover: "#ffffff",
            headerBg: "#170a1f",
            footerBg: "#12081b"
         },
         {
            bg: "linear-gradient(-45deg, #1e0606, #160d0d, #150909, #150000, #381d1d)",
            btn: "#E3D88A",
            btnText: "#280000",
            btnShadow: "0 5px 20px rgba(95, 42, 42, 0.45)",
            cardBorder: "1px solid rgba(226, 246, 236, 0.2)",
            cardShadow: "0 15px 40px rgba(218, 28, 28, 0.25)",
            linkBorder: "rgba(255, 255, 255, 0.35)",
            linkBorderHover: "rgba(255, 255, 255, 0.75)",
            linkColor: "#e8e4cc",
            linkColorHover: "#ffffff",
            headerBg: "#1a0000",
            footerBg: "#260404"
         }
      ];

      let heroImageIndex = 0;
      const heroImg = document.getElementById("hero-img");
      const heroDots = document.getElementById("hero-dots");
      const buyBookButton = document.getElementById("buyBook");
      const buyBookMLButton = document.getElementById("buyBookML");
      const buyBookOtherButton = document.getElementById("buyBookOther");
      let heroObjectURLs = [];

      const buyLinks = [
         "https://www.amazon.com.br/Di%C3%A1rio-Carson-Phillips-Chris-Colfer/dp/8582400241",
         "https://www.amazon.com.br/Minha-vida-fora-s%C3%A9rie-temporada/dp/8580620058/ref=sr_1_1?adgrpid=175395112967&dib=eyJ2IjoiMSJ9.JO3vudui5T7vYt1rGTbpOUPR1onO-_3iRWwHqd9Grc2hu8l7ncRaLSHjLFqkAE_HfR-sxmvJcb7arzgz-g8_KgSCCLV-aEr8ZvsOJF9eM-lyuUW25dvieIOsVy9GWKHgz8r67R2VIgw1jNDM011vfw.qwHxW-VNpFbzbtwCXHRHWd2kt0j4LuOHgXX0wawDg6M&dib_tag=se&hvadid=724480769257&hvdev=c&hvlocphy=1001583&hvnetw=g&hvqmt=e&hvrand=13408378164526861528&hvtargid=kwd-890257283959&hydadcr=5703_13215226&keywords=minha+vida+fora+de+serie+amazon&mcid=72ea91e10b033062a976cf36bb1db527&qid=1773271683&sr=8-1",
         "https://www.amazon.com.br/s?k=manual+persuas%C3%A3o+fbi&adgrpid=130377715910&hvadid=541957425499&hvdev=c&hvlocphy=1001583&hvnetw=g&hvqmt=b&hvrand=17697403363969035445&hvtargid=kwd-333144617226&hydadcr=5735_11235964&mcid=91f0f12b3af33217a2c5158d86e155ee&tag=hydrbrgk-20&ref=pd_sl_3htsulzdjn_b"
      ];

      const mercadoLivreLinks = [
         "https://www.example.com.br",
         "https://www.example.com.br",
         "https://www.example.com.br"
      ];

      const otherLinks = [
         "https://www.example.com.br",
         "https://www.example.com.br",
         "https://www.example.com.br"
      ];

      const bookTitles = [
         "O Diário de Carson Phillips",
         "Minha Vida Fora de Série",
         "Manual de Persuasão do FBI"
      ];

      const bookPrices = [
         "R$ 49,90",
         "R$ 57,90",
         "R$ 64,90"
      ];

      function updateBookInfo(index) {
         if (!bookTitleEl || !bookPriceEl) return;
         bookTitleEl.textContent = bookTitles[index] || "Título do livro";
         bookPriceEl.textContent = bookPrices[index] || "R$ 0,00";

         if (bookTitleMlEl && bookPriceMlEl) {
            bookTitleMlEl.textContent = bookTitles[index] || "Título do livro";
            bookPriceMlEl.textContent = bookPrices[index] || "R$ 0,00";
         }

         if (bookTitleOtherEl && bookPriceOtherEl) {
            bookTitleOtherEl.textContent = bookTitles[index] || "Título do livro";
            bookPriceOtherEl.textContent = bookPrices[index] || "R$ 0,00";
         }
      }

      function updateBuyLinkML(index) {
         if (!buyBookMLButton) return;
         const link = mercadoLivreLinks[index] || "#";

         // Se não houver link, escondemos o botão do Mercado Livre
         buyBookMLButton.style.display = link === "#" ? "none" : "block";
         if (link === "#") return;

         buyBookMLButton.style.cursor = "pointer";
         buyBookMLButton.title = "Comprar no Mercado Livre";

         buyBookMLButton.onclick = () => {
            window.open(link, "_blank");
         };
      }

      function updateBuyLinkOther(index) {
         if (!buyBookOtherButton) return;
         const link = otherLinks[index] || "#";

         // Se não houver link, escondemos o card
         buyBookOtherButton.style.display = link === "#" ? "none" : "block";
         if (link === "#") return;

         buyBookOtherButton.style.cursor = "pointer";
         buyBookOtherButton.title = "Mais opções";

         buyBookOtherButton.onclick = () => {
            window.open(link, "_blank");
         };
      }

      function updateBuyLink(index) {
         if (!buyBookButton) return;
         const link = buyLinks[index] || "#";

         // Atualiza o cursor para indicar que é clicável
         buyBookButton.style.cursor = link === "#" ? "default" : "pointer";
         buyBookButton.title = link === "#" ? "" : "Comprar este livro";

         buyBookButton.onclick = () => {
            if (link === "#") return;
            window.open(link, "_blank");
         };
      }

      function revokeCurrentObjectURLs() {
         heroObjectURLs.forEach(url => URL.revokeObjectURL(url));
         heroObjectURLs = [];
      }

      let autoCycleTimer = null;
      const AUTO_CYCLE_MS = 5000;

      function setActiveDot(index) {
         if (!heroDots) return;
         const dots = heroDots.querySelectorAll(".hero-dot");
         dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
         });
      }

      function restartAutoCycle() {
         if (autoCycleTimer) clearInterval(autoCycleTimer);
         autoCycleTimer = setInterval(cycleHeroImage, AUTO_CYCLE_MS);
      }

      function createDots() {
         if (!heroDots) return;
         heroDots.innerHTML = "";
         heroImages.forEach((_, idx) => {
            const dot = document.createElement("span");
            dot.className = "hero-dot";
            dot.dataset.index = idx;
            dot.addEventListener("click", () => {
               goToImage(idx, true);
            });
            heroDots.appendChild(dot);
         });
      }

      function applyTheme(index) {
         const theme = themes[index] || themes[0];
         document.documentElement.style.setProperty("--bg-gradient", theme.bg);

         document.documentElement.style.setProperty("--btn-bg", theme.btn);
         document.documentElement.style.setProperty("--btn-text", theme.btnText || "#ffffff");
         document.documentElement.style.setProperty("--btn-shadow", theme.btnShadow || "0 5px 15px rgb(52, 21, 11)");

         document.documentElement.style.setProperty("--title-color", theme.titleColor || "transparent");
         document.documentElement.style.setProperty("--title-gradient", theme.titleGradient || "linear-gradient(45deg, #ffffff, #ffffff, #ffffff, #ffffff)");

         document.documentElement.style.setProperty("--link-border", theme.linkBorder);
         document.documentElement.style.setProperty("--link-border-hover", theme.linkBorderHover);
         document.documentElement.style.setProperty("--link-color", theme.linkColor);
         document.documentElement.style.setProperty("--link-color-hover", theme.linkColorHover);

         document.documentElement.style.setProperty("--card-border", theme.cardBorder || "1px solid rgba(255,255,255,0.08)");
         document.documentElement.style.setProperty("--card-shadow", theme.cardShadow || "0 15px 40px rgba(0,0,0,0.4)");
         
         document.documentElement.style.setProperty("--header-bg", theme.headerBg);
         document.documentElement.style.setProperty("--footer-bg", theme.footerBg || "#290900");
      }

      function updateHeroImage(index) {
         if (!heroImg) return;

         heroImageIndex = index % heroImages.length;
         heroImg.src = heroImages[heroImageIndex];
         setActiveDot(heroImageIndex);
         applyTheme(heroImageIndex);
         updateBuyLink(heroImageIndex);
         updateBuyLinkML(heroImageIndex);
         updateBuyLinkOther(heroImageIndex);
         updateBookInfo(heroImageIndex);
      }

      function goToImage(index, resetTimer = false) {
         const normalized = (index + heroImages.length) % heroImages.length;
         updateHeroImage(normalized);
         if (resetTimer) restartAutoCycle();
      }

      function cycleHeroImage() {
         goToImage(heroImageIndex + 1);
      }

      function prevHeroImage() {
         goToImage(heroImageIndex - 1, true);
      }

      function handleImageFiles(files) {
         if (!files || files.length === 0) return;

         // Limpa URLs antigos antes de criar novos
         revokeCurrentObjectURLs();

         const urls = Array.from(files).map(file => URL.createObjectURL(file));
         heroObjectURLs = [...urls];
         heroImages.length = 0;
         heroImages.push(...urls);

         // Se os links não estiverem definidos, mantém todos como "#" para não quebrar.
         buyLinks.length = 0;
         buyLinks.push(...urls.map(() => "#"));

         createDots();
         goToImage(0, true);
      }

      // Armazenando referências para navegação por clique (esquerda/direita)
      const heroNavLeft = document.getElementById("hero-nav-left");
      const heroNavRight = document.getElementById("hero-nav-right");
      if (heroNavLeft) heroNavLeft.addEventListener("click", () => goToImage(heroImageIndex - 1, true));
      if (heroNavRight) heroNavRight.addEventListener("click", () => goToImage(heroImageIndex + 1, true));

      // Inicialização
      createDots();
      updateHeroImage(0);

      // Muda a cada 5 segundos (5000ms)
      restartAutoCycle();

      // Sempre que o usuário interagir com um botão ou link, reinicia o timer
      document.addEventListener("click", (event) => {
         const target = event.target;
         if (target.closest("button") || target.closest("a")) {
            restartAutoCycle();
         }
      });