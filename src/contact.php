<?php include_once('layout/partials/header.php') ?>

<!-- Основной контент -->
<main id="contact">
  <section id="contact" class="section">
    <div class="container">
      <div class="callback">
        <div class="section__header">
          <h2 class="page__title section__title">Мы на связи</h2>
          <p class="section__text">
            Мы всегда рады новым партнерам и интересным задачам
            <br>
            Поделитесь, пожалуйста, вашим запросом – мы подберем для вашей задачи оптимальный пакет услуг.
          </p>
        </div>
        <!-- /.section__header -->

        <div class="row">
          <div class="col-12 col-md-6 col-xxl-5 mb-5 mb-sm-4 mb-md-0">
            <form action="" class="callback__form form">
              <div class="input mb-3">
                <input autocomplete="off" type="text" name="user_name" class="input__field">
                <label class="input__label">Фамилия, имя, отчество</label>
                <img data-tippy-content="" class="input__warning" src="" alt="">
              </div>
              <!-- /.input -->

              <div class="input mb-3">
                <input autocomplete="off" type="email" name="user_email" class="input__field">
                <label class="input__label">Email</label>
                <img data-tippy-content="" class="input__warning" src="" alt="">
              </div>
              <!-- /.input -->

              <div class="input mb-3">
                <input autocomplete="off" type="tel" name="user_phone" class="input__field" required>
                <label class="input__label">Телефон</label>
                <img data-tippy-content="" class="input__warning" src="" alt="">
              </div>
              <!-- /.input -->

              <div class="input mb-3">
                <input autocomplete="off" type="text" name="user_company" class="input__field">
                <label class="input__label">Компания</label>
                <img data-tippy-content="" class="input__warning" src="" alt="">
              </div>
              <!-- /.input -->

              <div class="input input--box">
                <textarea autocomplete="off" type="text" name="user_company" class="input__field"></textarea>
                <label class="input__label">Поделитесь вашим запросом</label>
                <img data-tippy-content="" class="input__warning" src="" alt="">
              </div>
              <!-- /.input -->

              <div class="form__action mt-3">
                <button data-sending="Отправка" type="submit" class="button button-primary">Отправить</button>
                <div class="form__privacy">
                  Нажимая кнопку отправить вы соглашаетесь
                  <br>
                  с <a class="link" href="">политикой обработки данных</a>
                </div>
                <!-- /.form__privacy -->
              </div>
              <!-- /.form__action -->
            </form>
            <!-- /.callback__form form -->
          </div>
          <!-- /.col-5 -->

          <div class="col-12 col-md-6 col-xxl-6 offset-xxl-1">
            <div class="callback__info">
              <div class="callback__map lazy">
                <iframe class="lazy__item" data-src="https://yandex.ru/map-widget/v1/?um=constructor%3A668a80595052ad79ecf555a5894c8f9cf6389fd3cadf9441bfb1cad9e4b94776&amp;source=constructor" width="100%" height="450" frameborder="0"></iframe>
                <img src="img/misc/preloader.svg" alt="" class="preloader">
              </div>
              <!-- /.callback__map lazy -->

              <div class="callback__wrapper">
                <div class="callback__contact">
                  <div class="callback__label">Телефон</div>
                  <a href="tel:+74951420151" class="callback__link link font-namu font-namu--1990">8 495 142 01 51</a>
                </div>
                <!-- /.callback__contact -->

                <div class="callback__contact">
                  <div class="callback__label">Адрес</div>
                  <a href="https://yandex.ru/maps/-/CCUJZ8CrLB" target="_blank" class="callback__link link font-namu font-namu--1990">
                    115172, г. Москва, наб.
                    <br>
                    Гончарная, д.1 стр.4, этаж 2
                  </a>
                </div>
                <!-- /.callback__contact -->

                <div class="callback__contact">
                  <div class="callback__label">E-mail</div>
                  <a href="mailto:info@gzodchie.ru" class="callback__link link font-namu font-namu--1990">info@gzodchie.ru</a>
                </div>
                <!-- /.callback__contact -->

                <div class="callback__contact">
                  <div class="callback__label">Пресс-служба</div>
                  <a href="tel:+79600389308" class="callback__link link font-namu font-namu--1990">8 960 038 93 08</a>
                </div>
                <!-- /.callback__contact -->
              </div>
              <!-- /.callback__wrapper -->
            </div>
            <!-- /.callback__info -->
          </div>
          <!-- /.col-6 offset-1 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.callback -->
    </div>
    <!-- /.container -->
  </section>
</main>

<?php include_once('layout/partials/footer.php') ?>