/* Меню */
$('.menu__button').click(function (e) {
  e.preventDefault();
  $('.navbar').toggleClass('show');
});

/* Прокрутка страницы */
$('.navbar__link').on('click', function (e) {
  e.preventDefault();

  let $this = $(this);
  let sectionId = $this.attr('href');
  let offset = $(sectionId).offset().top - $('.header').innerHeight() - 10;

  $('.navbar').toggleClass('show');

  window.scrollTo({ top: offset, behavior: 'smooth' });
});

// Слайдер
var swiper = new Swiper('.mini-slider', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
});
var swiper2 = new Swiper('.slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: swiper,
  },
});

/* Модальное окно */
function closeModal(e) {
  e.preventDefault();

  $('.modal__container').css('transform', 'rotateX(-90deg)');
  setTimeout(() => {
    $('.modal').removeClass('show');
  }, 300);
}

$('[data-modal]').on('click', function (e) {
  e.preventDefault();

  $('.modal').addClass('show');
  setTimeout(() => {
    $('.modal__container').css('transform', 'rotateX(0)');
  }, 100);
});

$('.modal').on('click', closeModal);
$('.modal__button').on('click', closeModal);

$('.modal__container').on('click', function (e) {
  e.stopPropagation();
});

// Валидация формы
$('[type="tel"]').mask('+7(999) 999-9999');

$('.feedback-form').on('submit', function (e) {
  e.preventDefault();
  let $this = $(this);
  if ($this.find("[type = 'text']").length <= 3) {
    $this.find("[type = 'text']").addClass('warning');
  }
});
