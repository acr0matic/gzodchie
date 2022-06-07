<?php include_once('layout/partials/header.php') ?>

<!-- Основной контент -->
<main id="news">
  <section id="news" class="section">
    <div class="container">
      <div class="section__header">
        <h1 class="page__title section__title">Новости</h1>
      </div>
      <!-- /.section__header -->

      <div class="news">
        <div class="row">
          <div class="col-6 mb-4">
            <?php include('layout/template/news-card.php') ?>
          </div>
          <!-- /.col-6 -->

          <div class="col-6 mb-4">
            <?php include('layout/template/news-card.php') ?>
          </div>
          <!-- /.col-6 -->

          <div class="col-6">
            <?php include('layout/template/news-card.php') ?>
          </div>
          <!-- /.col-6 -->

          <div class="col-6">
            <?php include('layout/template/news-card.php') ?>
          </div>
          <!-- /.col-6 -->
        </div>
        <!-- /.row -->

        <div class="news__pagination">
          <a class="link current" href="">1</a>
          <a class="link" href="">2</a>
          <a class="link" href="">3</a>
          <span>...</span>
          <a class="link" href="">23</a>
        </div>
        <!-- /.news__pagination -->
      </div>
      <!-- /.news -->
    </div>
    <!-- /.container -->
  </section>
</main>

<?php include_once('layout/partials/footer.php') ?>