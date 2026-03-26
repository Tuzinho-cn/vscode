document.addEventListener("DOMContentLoaded", () => {
   const adminLogoutBtn = document.getElementById("admin-logout");

   if (adminLogoutBtn) {
      adminLogoutBtn.addEventListener("click", () => {
         localStorage.removeItem("bookPlusAdmin_v1");
         window.location.href = "index.html";
      });
   }

   // proteção da página
   if (localStorage.getItem("bookPlusAdmin_v1") !== "true") {
      window.location.href = "index.html";
   }
});

const ADMIN_KEY = "bookPlusAdmin_v1";

// BLOQUEIA acesso direto
if (localStorage.getItem(ADMIN_KEY) !== "true") {
    alert("Acesso negado.");
    window.location.href = "index.html";
}

// BOTÃO SAIR
const logoutBtn = document.getElementById("admin-logout");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.setItem(ADMIN_KEY, "false");
        window.location.href = "index.html";
    });
}

const backBtn = document.getElementById("back-to-index");

if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html";
    });
}

// FORMULÁRIO
const adminForm = document.getElementById("admin-add-book-form");

if (adminForm) {
    adminForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const title = document.getElementById("admin-book-title").value.trim();
        const author = document.getElementById("admin-book-author").value.trim();
        const price = document.getElementById("admin-book-price").value.trim();
        const image = document.getElementById("admin-book-image").value.trim();
        const description = document.getElementById("admin-book-description").value.trim();
        const amazonLink = document.getElementById("admin-book-amazon").value.trim();
        const recommended = document.getElementById("admin-book-recommended").checked;

        if (!title || !author || !price || !image || !description) {
            alert("Preencha todos os campos!");
            return;
        }

        const BOOKS_KEY = "bookPlusBooks_v1";

        let books = JSON.parse(localStorage.getItem(BOOKS_KEY)) || [];

        books.push({
            id: Date.now(),
            title,
            author,
            price,
            description,
            image,
            buyLinks: {
                amazon: amazonLink || "#",
                mercado: "#",
                other: "#"
            },
            recommended
        });

        localStorage.setItem(BOOKS_KEY, JSON.stringify(books));

        alert("Livro adicionado!");
        adminForm.reset();
    });
}