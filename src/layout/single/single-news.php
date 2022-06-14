<?php include_once(dirname(__DIR__) . '/partials/header.php') ?>

<!-- Основной контент -->
<main id="single-news">
  <section id="single-news" class="section">
    <div class="container">
      <div class="single-news">
        <a href="" class="single-news__action link link--bold link--blue">
          <svg class="svg me-2" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.7071 5.79289C15.0976 6.18342 15.0976 6.81658 14.7071 7.20711L9.41421 12.5L14.7071 17.7929C15.0976 18.1834 15.0976 18.8166 14.7071 19.2071C14.3166 19.5976 13.6834 19.5976 13.2929 19.2071L7.29289 13.2071C6.90237 12.8166 6.90237 12.1834 7.29289 11.7929L13.2929 5.79289C13.6834 5.40237 14.3166 5.40237 14.7071 5.79289Z" fill="#2478DB" />
          </svg>

          Назад
        </a>
        <!-- /.single-news__action -->

        <span class="single-news__info font-namu font-namu--1990">Конкурс — 21 декабря</span>
        <h1 class="single-news__title section__title page__title">
          «Городские зодчие» приняли участие в конкурсе МгиИП
        </h1>

        <picture class="single-news__picture lazy">
          <img data-src="/img/layout/single/news/picture.jpg" alt="" class="single-news__image image image--cover lazy__item">
          <img src="/img/misc/preloader.svg" alt="" class="preloader">
        </picture>
        <!-- /.single-news__picture -->

        <div id="editor" class="single-news__content">
          <p>Turpis curabitur morbi elementum justo bibendum egestas pulvinar cursus. Congue feugiat laoreet tristique pretium, ultrices purus malesuada venenatis. Ultrices pharetra, tempor at nulla egestas amet in semper. In lectus feugiat lorem dolor, egestas nascetur risus et et. Cras massa ut ut non rhoncus quis sit. Et accumsan imperdiet lectus ultrices vulputate vestibulum. Pharetra varius lacus, aliquet morbi justo, gravida tellus pellentesque suspendisse. Consectetur euismod vestibulum volutpat id. Magna aliquam nunc sagittis, proin lectus scelerisque etiam lobortis. A in vitae vitae id pellentesque fermentum aliquam eget tortor. Massa tristique pharetra urna magnis senectus sit netus vel odio. Urna nisl tempor aliquam, arcu integer sed tincidunt. Malesuada nisl sed egestas sed.</p>

          <h2>
            Какой-то подзаголовок
            <br>
            в две строки
          </h2>

          <h3>Птицей стать</h3>

          <ul>
            <li>Один</li>
            <li>Два</li>
            <li>Три</li>
          </ul>
        </div>
        <!-- /.single-news__content -->
      </div>
      <!-- /.single-news -->
    </div>
    <!-- /.container -->
  </section>
</main>

<?php include_once(dirname(__DIR__) . '/partials/footer.php') ?>