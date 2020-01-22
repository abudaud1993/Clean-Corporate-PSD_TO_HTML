(function($) {




 // data - background - img
 $("[data-background]").each(function () {
  $(this).css(
    "background-image",
    "url(" + $(this).attr("data-background") + ")"
  );
});

var $daud = $(".isotop_slider").isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: ".grid-item",
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: ".grid-item"
  }
});

// filter items on button click
$(".filter_item").on("click", "button", function() {
  var filterValue = $(this).attr("data-filter");
  $daud.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$(".filter_item").each(function(i, buttonGroup) {
  var $buttonGroup = $(buttonGroup);
  $buttonGroup.on("click", "button", function() {
    $buttonGroup.find(".active").removeClass("active");
    $(this).addClass("active");
  });
});

$('.tm_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: false,
  autoplaySpeed: 2000,
});
$('.logo_slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// $('#mobile-menu').meanmenu({
//     meanMenuContainer: ".mobile-menu",
//     meanScreenWidth: "768",
//   });

 



})(jQuery);
