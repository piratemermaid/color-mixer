$(document).foundation()

// 1. Clicking on a circle changes the class to selected.
// 2. Clicking on 1 circle changes the big circle to that color.
// 3. Clicking on 2-3 circles changes the big circle to the combination of those colors.
// 4. Clicking a selected circle removes the selected class and that color from the combination.

console.log('App started');

$('.circle-yellow').click(function() {
  $('.circle-yellow').toggleClass('selected');
  if ( $('.circle-yellow').is('.selected') ) {
    $('.big-circle').removeClass('empty');
    $('.big-circle').addClass('yellow');
  }
  else {
    $('.big-circle').removeClass('yellow');
    $('.big-circle').addClass('empty');
  }
});

$('.circle-blue').click(function() {
  $('.circle-blue').toggleClass('selected');
  if ( $('.circle-blue').is('.selected') ) {
    $('.big-circle').removeClass('empty');
    $('.big-circle').addClass('blue');
  }
  else {
    $('.big-circle').removeClass('blue');
    $('.big-circle').addClass('empty');
  }
});

$('.circle-red').click(function() {
  $('.circle-red').toggleClass('selected');
  if ( $('.circle-red').is('.selected') ) {
    $('.big-circle').removeClass('empty');
    $('.big-circle').addClass('red');
  }
  else {
    $('.big-circle').removeClass('red');
    $('.big-circle').addClass('empty');
  }
});

