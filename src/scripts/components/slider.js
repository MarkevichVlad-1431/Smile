let header = document.querySelector('body > header');
let slider = document.querySelector('.slider');

slider.onclick = function (event) {
  let target = event.target;

  if (target.tagName != 'BUTTON') return;

  let a = target.id;

  switch (a) {
    case '0':
      header.style.backgroundImage = "url('./src/assets/img/bg_header.jpg')";
      break;
    case '1':
      header.style.backgroundImage = "url('./src/assets/img/bg_header_2.png')";
      break;
    case '2':
      header.style.backgroundImage = "url('./src/assets/img/bg_header_3.png')";
      break;
    case '3':
      header.style.backgroundImage = "url('./src/assets/img/bg_header_4.jpg')";
      break;
    case '4':
      header.style.backgroundImage = "url('./src/assets/img/bg_header_5.jpg')";
      break;
  }



}
