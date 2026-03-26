<?php
// Conexão com o banco de dados MySQL
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "bookplus";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}

// Buscar livros
$sql_books = "SELECT id, titulo, preco, imagem, favorito FROM livros";
$result_books = $conn->query($sql_books);

// Buscar depoimentos
$sql_depoimentos = "SELECT nome, mensagem, foto FROM depoimentos";
$result_depoimentos = $conn->query($sql_depoimentos);
?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Book+</title>
   <link rel="stylesheet" href="styles/style.css">
   <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon">
   <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
<body onresize="mudouTamanho()">
   <canvas id="particles"></canvas> 
   <header id="header" class="flex-container">
      <div class="logo">
         <img src="images/book.png" alt="icone-foca" id="icon">
         Book+
      </div>
      <div id="menu">
         <i id="burguer" class="material-icons" onclick="clickMenu()">menu</i>
         <button id="admin-toggle" class="link"><i class="material-icons">people</i></button>
         <nav id="itens">
            <ul class="flex-container">
               <li><button class="link" onclick="goArea('hero')">Início</button></li>
               <li><button class="link" onclick="goArea('recursos')">Assuntos</button></li>
               <li><button class="link" onclick="goArea('depoimentos')">Avaliações</button></li>
               <li><button class="link" onclick="goArea('precos')">Preços</button></li>
               <li><button class="link" onclick="goArea('livros')">Livros</button></li>
            </ul>
         </nav>
      </div>
   </header>

   <section id="hero" class="flex-container hero">
      <div class="hero-text">
         <h1>Compre um livro!</h1>
         <p>"A leitura é o caminho mais curto para o conhecimento" - Aristóteles</p>
         <button class="btn">Ler Agora!</button>
      </div>
      <div class="hero-img-wrapper">
         <img id="hero-img" src="images/capa-carson-phillips.jpg" alt="Imagem-Carson-Phillips">
         <div id="hero-nav-left" class="hero-nav hero-nav-left"></div>
         <div id="hero-nav-right" class="hero-nav hero-nav-right"></div>
         <div id="hero-dots" class="hero-dots"></div>
      </div>
   </section>

   <section id="recursos">
      <h2 class="section-title">Recursos</h2>
      <div class="cards">
         <div class="card"><h3>Conforto</h3><p>Recomendações semanais de livros e promoções.</p></div>
         <div class="card"><h3>Usabilidade</h3><p>Com menos de 3 cliques você compra.</p></div>
         <div class="card"><h3>Confiável</h3><p>Pagamento só cai para o vendedor após entrega.</p></div>
      </div>
   </section>

   <section id="depoimentos">
      <h2 class="section-title">Avaliações</h2>
      <div class="cards">
         <?php while($dep = $result_depoimentos->fetch_assoc()): ?>
            <div class="card testimonial">
               <img src="<?= $dep['foto'] ?>" alt="foto">
               <p>"<?= $dep['mensagem'] ?>"</p>
               <p><strong><?= $dep['nome'] ?></strong></p>
            </div>
         <?php endwhile; ?>
      </div>
   </section>

   <section id="precos">
      <h2 class="section-title">Preços</h2>
      <div class="cards">
         <?php while($book = $result_books->fetch_assoc()): ?>
            <div class="card">
               <div class="card-header">
                  <span class="material-icons card-icon">shopping_cart</span>
                  <span class="card-title"><?= $book['titulo'] ?></span>
               </div>
               <p class="card-price">R$ <?= number_format($book['preco'], 2, ',', '.') ?></p>
            </div>
         <?php endwhile; ?>
      </div>
   </section>

   <section id="livros">
      <h2 class="section-title">Livros</h2>
      <p class="section-desc">Favoritos aparecem aqui.</p>
      <div class="tabs" role="tablist">
         <button class="tab-btn active" data-view="favorites">Favoritos</button>
         <button class="tab-btn" data-view="all">Todos os livros</button>
      </div>
      <div id="books-list" class="books-list">
         <?php 
         $result_books->data_seek(0); // reset pointer
         while($book = $result_books->fetch_assoc()): ?>
            <div class="book-item <?= $book['favorito'] ? 'favorite' : '' ?>">
               <img src="<?= $book['imagem'] ?>" alt="<?= $book['titulo'] ?>">
               <p><?= $book['titulo'] ?></p>
               <p>R$ <?= number_format($book['preco'], 2, ',', '.') ?></p>
            </div>
         <?php endwhile; ?>
      </div>
   </section>

   <footer>
      <p>© 2026 Book+. Todos os direitos reservados.</p>
   </footer>

   <button id="top-btn" class="top-btn" onclick="goArea('hero')">↑</button>
   <script src="scripts/script.js"></script>
</body>
</html>
<?php $conn->close(); ?>
