// Skill Bar
$(document).ready(function() {
  $('.skillbar').each(function() {
    $(this).find('.skillbar-bar').animate({
      width: $(this).attr('data-percent')
    }, 6000);
  });
});

// NavBar
$(document).ready(function() {
  $('.menu-toggle').click(function() {
    $('nav').toggleClass('active');
  });

  $('ul li').click(function() {
    $(this).siblings().removeClass('active');
    $(this).toggleClass('active');
  });
});
