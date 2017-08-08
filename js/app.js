$(document).foundation()

// 1. Clicking on a circle changes the class to selected.
// 2. Clicking on 1 circle changes the big circle to that color.
// 3. Clicking on 2-3 circles changes the big circle to the combination of those colors.
// 4. Clicking a selected circle removes the selected class and that color from the combination.

console.log('App started');

$('.circle-yellow').click(function() {
  $('.circle-yellow').toggleClass('selected');
  $('.big-circle').removeClass('empty');
  $('.big-circle').addClass('yellow');
});

$('.circle-blue').click(function() {
  $('.circle-blue').toggleClass('selected');
  $('.big-circle').removeClass('empty');
  $('.big-circle').addClass('blue');
});

$('.circle-red').click(function() {
  $('.circle-red').toggleClass('selected');
  $('.big-circle').removeClass('empty');
  $('.big-circle').addClass('red');
});

