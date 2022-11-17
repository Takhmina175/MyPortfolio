$(document).ready(function () {
  $(".btn-html-css").click(function () {
    $(".cardHtml").css({ border: "2px solid blue" });
    $(".card-bootstrap").hide();
    $(".card-js").hide();
  });

  $(".about-me").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top,
      },
      1000
    );
  });

  $(".projects-all").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".projects").offset().top,
      },
      1000
    );
  });

  $(".blogs-to-read").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".blogs").offset().top,
      },
      1000
    );
  });

  $(".readMore, .bi-arrow-right-short")
    .mouseenter(function (event) {
      $(this).animate({ width: "12rem" });
    })
    .mouseleave(function (event) {
      $(this).animate({ width: "10rem" });
    });


  $(".contacts").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".contact-me").offset().top,
      },
      1000
    );
  });

  $(".btn-scrollTop").click(function () {
    $("html").scrollTop(0);
  });
});
