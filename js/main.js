var $svg = $('svg');
var $lines = $('.lines');
var $engage = $('.engage');
var $btn = $('.btn');

$('svg').on('click', function (e) {
  $('.lines').toggleClass('is-pressed');
