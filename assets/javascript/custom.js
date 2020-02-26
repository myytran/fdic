$( document ).ready(function() {
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.usa-nav__secondary').fadeOut();
    $('#search').fadeIn();
  } else {
    $('.usa-nav__secondary').fadeIn();
    $('#search').fadeOut();
  }
});
