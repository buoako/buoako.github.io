
(function () {
  let counter = 0;

  const originalHTML = document.body.innerHTML;
  let messageWrapper = document.getElementById('message');



  document.onclick = function (event) {
     event.preventDefault();
     document.body.innerHTML = originalHTML;
     messageWrapper = document.getElementById('message');
  }

  document.onkeydown = function (event) {
     if (event.keyCode === 32) {
        event.preventDefault();
     }

  }

  document.onkeyup = function (event) {
     const keyCodePressed = event.keyCode;
     const coordinates = helpers.generateCoordinates();
     messageWrapper.innerText = keyCodePressed + ':' + event.key;

     if (keyCodePressed === 65) {

        const degreesRotaion = Math.floor(Math.random() * 360);

        const a = document.createElement('img');
        a.className = 'a';
        a.src = `img/a.png`;
        a.style.left = `${coordinates.x}px`;
        a.style.top = `${coordinates.y}px`;
        a.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(a);

     }

     if (keyCodePressed === 66) {

        const degreesRotaion = Math.floor(Math.random() * 360);

        const b = document.createElement('img');
        b.className = 'b';
        b.src = `img/b.png`;
        b.style.left = `${coordinates.x}px`;
        b.style.top = `${coordinates.y}px`;
        b.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(b);

     }


     if (keyCodePressed === 67) {

        const degreesRotaion = Math.floor(Math.random() * 360);

        const c = document.createElement('img');
        c.className = 'c';
        c.src = `img/c.png`;
        c.style.left = `${coordinates.x}px`;
        c.style.top = `${coordinates.y}px`;
        c.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(c);

     }

     if (keyCodePressed === 68) {

        const degreesRotaion = Math.floor(Math.random() * 360);

        const d = document.createElement('img');
        d.className = 'd';
        d.src = `img/d.png`;
        d.style.left = `${coordinates.x}px`;
        d.style.top = `${coordinates.y}px`;
        d.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(d);

     }


     if (keyCodePressed === 69) {

        const degreesRotaion = Math.floor(Math.random() * 360);

        const e = document.createElement('img');
        e.className = 'e';
        e.src = `img/e.png`;
        e.style.left = `${coordinates.x}px`;
        e.style.top = `${coordinates.y}px`;
        e.style.transform = `rotate(${degreesRotaion}deg)`;
        document.body.appendChild(e);

     }






     if (keyCodePressed === 32) {
        helpers.removeClass('animated');
        document.body.style.backgroundColor = helpers.generateRandomColorString();
     }





     counter++;
     messageWrapper.style.zIndex = counter;

  }

  const getPhrase = function () {
     const exclamations = ['Wow!', 'Neat!', 'Incredible!', 'JavaScript rules!', 'Bravo!', 'Fantastic!', 'Creative Computing'];
     const index = Math.floor(Math.random() * exclamations.length);
     return exclamations[index];
  }

  setInterval(function () {
     messageWrapper.style.color = helpers.generateRandomColorString(false);
  }, 1000);

  // This object contains helper functions
  const helpers = {

     removeClass: (cssClass) => {
        if (document.body.classList.contains(cssClass)) {
           document.body.classList.remove(cssClass);
        }
     },

     generateCoordinates: () => {
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);
        return { x, y };
     },

     // helpers.generateRandomColorString()
     generateRandomColorString: (alpha = true) => {
        // random RBG values
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        // fully opaque if `false` is passed to function
        let a = 1;
        if (alpha) {
           a = Math.random();
        }

        return `rgba(${r},${g},${b},${a})`;
     }

  }




}()); 