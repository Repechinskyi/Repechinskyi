$(".btn_menu").click(function () {
  $("body").toggleClass("open_menu");
});

/**
 * Video preload
 */
setTimeout(() => {
  let dataSrc = $(".top_video iframe").data("src");

  $(".top_video iframe").attr("src", dataSrc);
}, 7000);

/**
 * Pop-up
 */
$(".btn_popup").click(function (e) {
  e.preventDefault();

  var popup_id = $(this).attr("href");
  $(popup_id).addClass("open-popup");
  $(".team_wrap").addClass("open-popup");
});
$(".close_popup").click(function () {
  $(".popup_wrap, .team_wrap").removeClass("open-popup");
});

$(document).scroll(function () {
  $(".text_scroll").css("left", Math.max(200 - 0.12 * window.scrollY) + "vw");
  $(".text_scroll_team").css(
    "left",
    Math.max(200 - 0.12 * window.scrollY + 300) + "vw"
  );
});

/**
 * Sliders
 */
$(window).on("load", function () {
  var swiperImage = new Swiper(".swiperImages", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    centeredSlides: false,
    breakpoints: {
      767: {
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1300,
      },
    },
  });

  var swiperCase = new Swiper(".swiperCase", {
    spaceBetween: 50,
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    },
  });

  var swiperAdvice = new Swiper(".swiperAdvice", {
    slidesPerView: "auto",
    spaceBetween: 20,
    loopedSlides: 1,
    loop: true,
    breakpoints: {
      767: {
        spaceBetween: 140,
        loopedSlides: 2,
      },
    },
  });

  $(".swiperImages .swiper-slide").click(function () {
    swiperImage.slideNext();
  });
  $(".swiperAdvice .swiper-slide").click(function () {
    swiperAdvice.slideNext();
  });
});

/**
 * Animate text
 */
$(document).ready(function () {

  $(".animate_titile, .animate_text").lettering("words");

  let animateTitle = document.querySelectorAll(".animate_titile");
  let animateText = document.querySelectorAll(".animate_text");

  animateTitle.forEach((element) => {
    let i = 0;
    let span = $(element).find("span");
    console.log(span);

    span.each((span, el) => {
      i++;
      el.style.animationDelay = `${i * 0.1}s`;
      console.log(span, el);
    });
  });
  animateText.forEach((element) => {
    let i = 0;
    let span = $(element).find("span");
    console.log(span);
    span.each((span, el) => {
      i++;
      el.style.transitionDelay = `${i * 0.01}s`;
      console.log(span, el);
    });
  });

  $(".animate_titile, .animate_text, .row_tech, .zone").on(
    "inview",
    function (event, isInView) {
      if (isInView) {
        $(this).addClass("animate");
      }
    }
  );


  if ($(window).width() > 991) {
    $(".scroll_wrap").jScrollPane();
  }
  if ($(window).width() < 991) {
    $(".hover_section .item_hover")
      .append(`<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24.5655" height="2.05227" transform="matrix(0.702721 -0.711466 0.670553 0.741861 0 17.4775)" fill="#2B2B2B"/>
    <rect width="24.5655" height="2.05227" transform="matrix(-0.702721 -0.711466 -0.670553 0.741861 19 17.4775)" fill="#2B2B2B"/>
    </svg>
    `);
    $(".item_hover h3").click(function () {
      $(this).parent().addClass("open");
    });

    $(".item_hover svg").click(function () {
      $(".item_hover").removeClass("open");
    });
  }
  $(".videos .col_list li").click(function () {
    let frame = $(this).data("frame");
    $(".videos .col_list li").removeClass("active");
    $(this).addClass("active");
    $(".col_video").html(frame);
  });

  /**
   * Menu anchor
   */
  $(".menu_wrap").on("click", "a", function (event) {
    event.preventDefault();

    var id = $(this).attr("href");
    var top = $(id).offset().top;

    if ($(window).width() > 1600) {
      if (id == "#access") {
        $("body,html").animate({ scrollTop: top + 1000 }, 1000);
      } else if (id == "#contact") {
        $("body,html").animate({ scrollTop: top + 100 }, 1000);
      } else {
        $("body,html").animate({ scrollTop: top - 100 }, 1000);
      }
    } else if ($(window).width() > 1200) {
      if (id == "#access") {
        $("body,html").animate({ scrollTop: top + 800 }, 1000);
      } else if (id == "#contact") {
        $("body,html").animate({ scrollTop: top + 150 }, 1000);
      } else {
        $("body,html").animate({ scrollTop: top - 10 }, 1000);
      }
    } else if ($(window).width() > 767) {
      if (id == "#access") {
        $("body,html").animate({ scrollTop: top + 250 }, 1000);
      } else if (id == "#contact") {
        $("body,html").animate({ scrollTop: top + 150 }, 1000);
      } else {
        $("body,html").animate({ scrollTop: top - 150 }, 1000);
      }
    } else {
      if (id == "#access") {
        $("body,html").animate({ scrollTop: top + 150 }, 1000);
      } else if (id == "#processing") {
        $("body,html").animate({ scrollTop: top }, 1000);
      } else {
        $("body,html").animate({ scrollTop: top - 100 }, 1000);
      }
    }

    $("body").removeClass("open_menu");
  });
});
