window.onload = function () {

  inView('section')
    .on('enter', el => {
      el.className = 'active';
    })
    .on('exit', el => {
      el.className = '';
    })

};
/*counting*/

var count = anime({
  targets: '#count input',
  value: 1000,
  round: 1,
  easing: 'easeInOutExpo'
});