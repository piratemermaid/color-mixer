$(document).foundation()

// 1. Clicking on a circle changes the class to selected.
// 2. Clicking on 1 circle changes the big circle to that color.
// 3. Clicking on 2-3 circles changes the big circle to the combination of those colors.
// 4. Clicking a selected circle removes the selected class and that color from the combination.



$('.circle-yellow').click(function() {
  $('.circle-yellow').toggleClass('selected');
  if ( $('.circle-yellow').is('.selected') ) {
    $('#big-circle').removeClass('empty');
    $('#big-circle').addClass('yellow');
    if( $('.circle-red').is('.selected') && !$('.circle-blue').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('orange');
    }
    else if( $('.circle-blue').is('.selected') && !$('.circle-red').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('green');
    }
    else if( $('.circle-blue').is('.selected') && $('.circle-red').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('brown');
    }
  }
  else {
    $('#big-circle').removeClass('yellow');
  }
});

$('.circle-blue').click(function() {
  $('.circle-blue').toggleClass('selected');
  if ( $('.circle-blue').is('.selected') ) {
    $('#big-circle').removeClass('empty');
    $('#big-circle').addClass('blue');
    if( $('.circle-yellow').is('.selected') && !$('.circle-red').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('green');
    }
    else if( $('.circle-red').is('.selected') && !$('.circle-yellow').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('purple');
    }
    else if( $('.circle-red').is('.selected') && $('.circle-yellow').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('brown');
    }
  }
  else {
    $('#big-circle').removeClass('blue');
    if ( !$('#big-circle').is('yellow') && !$('#big-circle').is('red') ) {
        $('#big-circle').addClass('empty');
    }
  }
});

$('.circle-red').click(function() {
  $('.circle-red').toggleClass('selected');
  if ( $('.circle-red').is('.selected') ) {
    $('#big-circle').removeClass('empty');
    $('#big-circle').addClass('red');
    if( $('.circle-yellow').is('.selected') && !$('.circle-blue').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('orange');
    }
    else if( $('.circle-blue').is('.selected') && !$('.circle-yellow').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('purple');
    }
    else if( $('.circle-blue').is('.selected') && $('.circle-yellow').is('.selected') ) {
      $('#big-circle').removeClass();
      $('#big-circle').addClass('brown');
    }
  }
  else {
    $('#big-circle').removeClass('red');
    if ( !$('#big-circle').is('yellow') && !$('#big-circle').is('blue') ) {
        $('#big-circle').addClass('empty');
    }
  }
});




function checkSelected(color) {
  return color.is('.selected');
}

function comboClass(color1, color2, newColor) {
  $('#big-circle').removeClass(color1);
  $('#big-circle').removeClass(color2);
  $('#big-circle').addClass(newColor);
  console.log(newColor);
}
