<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="les pizzas de lucio">
    <title>lucio armaretti</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Barlow:300,400,700|Italiana&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="asset/css/bootstrap.css">
    <link rel="stylesheet" href="asset/css/style.css">
    <link rel="stylesheet" href="asset/css/responsive.css">
  </head>
  <body>
    <nav id="navigation-mobile" class="fixed-top flexylign">
      <?php require 'asset/php/nav-mobile.php'; ?>
    </nav>
    <nav id="navigation" class="fixed-top flexylign">
      <?php require 'asset/php/nav.php'; ?>
    </nav>
    <header id="slider">
      <?php require 'asset/php/slider.php'; ?>
    </header>
    <section id="pizza">
      <?php require 'asset/php/pizza.php'; ?>
    </section>
    <section id="story">
      <?php require 'asset/php/story.php'; ?>
    </section>
    <section id="location">
      <?php require 'asset/php/location.php'; ?>
    </section>
    <footer id="footer">
      <?php require 'asset/php/footer.php'; ?>
    </footer>
    <script src="asset/js/jquery-3.4.1.js"></script>
    <script src="asset/js/bootstrap.js"></script>
    <script src="asset/js/scrollTo.js"></script>
    <script src="asset/js/burger.js"></script>
  </body>
</html>
