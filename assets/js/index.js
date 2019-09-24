const style = [
  'background: #d60161',
  'color: #fff',
  'padding: 10px 20px',
  'line-height: 35px',
].join(';');

console.log('%c Hello, friend! ♥️', style);

// 404 browser window buttons
const $ = element => document.querySelector(element);

if ($('#js-browser__close')) {
  $('#js-browser__close').addEventListener('click', () => {
    location.href = './';
  });
}

if ($('#js-browser__minimize')) {
  $('#js-browser__minimize').addEventListener('click', () => {
    if ($('#js-browser').classList.contains('browser--is-full-screen')) {
      $('#js-browser').classList.remove('browser--is-full-screen');
    }
    $('#js-browser').classList.toggle('browser--is-minimized');
  });
}

if ($('#js-browser__maximize')) {
  $('#js-browser__maximize').addEventListener('click', () => {
    if ($('#js-browser').classList.contains('browser--is-minimized')) {
      $('#js-browser').classList.remove('browser--is-minimized');
    }
    $('#js-browser').classList.toggle('browser--is-full-screen');
  });
}
