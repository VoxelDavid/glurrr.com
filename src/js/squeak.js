$('document').ready(function() {
  var buttonHook = $('.js-squeak-button');
  var audioHook = $('.js-squeak-audio');

  var audio = audioHook.get(0);

  function squeak() {
    audio.play();
  }

  buttonHook.click(squeak);
});
