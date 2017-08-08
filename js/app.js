$(document).foundation()

// 1. Clicking on a circle changes the class to selected.
// 2. Clicking on 1 circle changes the big circle to that color.
// 3. Clicking on 2-3 circles changes the big circle to the combination of those colors.
// 4. Clicking a selected circle removes the selected class and that color from the combination.



$('.circle-yellow').click(function() {
  $('.circle-yellow').toggleClass('selected');
  if ( $('.circle-yellow').is('.selected') ) {
    $('#big-circle').addClass('yellow');
    if( $('.circle-red').is('.selected') && !$('.circle-blue').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('orange');
    }
    else if( $('.circle-blue').is('.selected') && !$('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('green');
    }
    else if( $('.circle-blue').is('.selected') && $('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('brown');
    }
  }
  else {
    if ( $('.circle-blue').is('.selected') && $('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('purple');
    }
    else if ( $('.circle-blue').is('.selected') && !$('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('blue');
    }
    else if ( !$('.circle-blue').is('.selected') && $('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('red');
    }
    else {
      $('#big-circle').removeClass('yellow');
    }
  }
});

$('.circle-blue').click(function() {
  $('.circle-blue').toggleClass('selected');
  if ( $('.circle-blue').is('.selected') ) {
    $('#big-circle').addClass('blue');
    if( $('.circle-yellow').is('.selected') && !$('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('green');
    }
    else if( $('.circle-red').is('.selected') && !$('.circle-yellow').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('purple');
    }
    else if( $('.circle-red').is('.selected') && $('.circle-yellow').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('brown');
    }
  }
  else {
    if ( $('.circle-yellow').is('.selected') && $('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('orange');
    }
    else if ( $('.circle-yellow').is('.selected') && !$('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('yellow');
    }
    else if ( !$('.circle-yellow').is('.selected') && $('.circle-red').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('red');
    }
    else {
      $('#big-circle').removeClass('blue');
    }
  }
});

$('.circle-red').click(function() {
  $('.circle-red').toggleClass('selected');
  if ( $('.circle-red').is('.selected') ) {
    $('#big-circle').addClass('red');
    if( $('.circle-yellow').is('.selected') && !$('.circle-blue').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('orange');
    }
    else if( $('.circle-blue').is('.selected') && !$('.circle-yellow').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('purple');
    }
    else if( $('.circle-blue').is('.selected') && $('.circle-yellow').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('brown');
    }
  }
  else {
    if ( $('.circle-yellow').is('.selected') && $('.circle-blue').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('green');
    }
    else if ( $('.circle-blue').is('.selected') && !$('.circle-yellow').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('blue');
    }
    else if ( !$('.circle-blue').is('.selected') && $('.circle-yellow').is('.selected') ) {
      clearColors();
      $('#big-circle').addClass('yellow');
    }
    else {
      $('#big-circle').removeClass('red');
    }
  }
});




// function checkSelected(color) {
//   if ((color).is('.selected')) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

function clearColors() {
  $('#big-circle').removeClass('red');
  $('#big-circle').removeClass('blue');
  $('#big-circle').removeClass('yellow');
  $('#big-circle').removeClass('green');
  $('#big-circle').removeClass('purple');
  $('#big-circle').removeClass('orange');
  $('#big-circle').removeClass('brown');
}
