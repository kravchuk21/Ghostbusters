$(document).ready(function () {
  const mButtons = $(".mobile-buttons");
  const mMenu = $(".m-menu");
  const tab = $(".tab");
  mButtons.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
    $(".swiper-container").toggleClass("active");
    $(".m-menu-button").toggleClass("active");
  });
  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });
  let mySwiper = new Swiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    grabCursor: true,
    breakpoints: {
      991: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
