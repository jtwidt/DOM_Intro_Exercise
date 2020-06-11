document.addEventListener('DOMContentLoaded', function () {
  let greeting = document.getElementById('greeting');
  greeting.innerHTML = 'Hello, World!';

  let liTags = document.getElementsByTagName('li');
  for (let i = 0; i < liTags.length; i++) {
    liTags[i].style.backgroundColor = 'yellow';
  }

  let newImage = document.createElement('img');
  newImage.src =
    'http://49.media.tumblr.com/tumblr_m6qt1rjPSz1rxjzkho1_500.gif';
  greeting.appendChild(newImage);

  let newList = document.createElement('ul');
  newList.classList.add('todo-items');
  document.body.appendChild(newList);

  let honeyDo = ['make coffee', 'eat donut', 'change diapers', 'drive to work'];
  honeyDo.forEach((item) => {
    let newItem = document.createElement('li');
    newItem.innerHTML = item;
    newList.appendChild(newItem);
  });

  let listItems = document.getElementsByTagName('li');
  let foodItems = ['milk', 'honey', 'water', 'wine', 'beer'];

  let imgDiv = document.getElementById('food');

  for (var j = 0; j < listItems.length; j++) {
    listItems[j].addEventListener('click', function () {
      this.classList.add('selected');
      for (var k = 0; k < listItems.length; k++) {
        if (listItems[k] !== this) {
          listItems[k].classList.remove('selected');
        }
      }
      if (foodItems.indexOf(this.innerHTML) > -1) {
        imgDiv.src = `./images/${this.innerHTML}.jpeg`;
      }
    });
  }
  let grayDiv = document.getElementById('ghosting');
  grayDiv.addEventListener('mouseover', function () {
    this.parentElement.removeChild(grayDiv);
  });

  let orangeDiv = document.getElementById('resize');
  orangeDiv.addEventListener('mouseenter', function () {
    this.style.width = '400px';
  });
  orangeDiv.addEventListener('mouseleave', function () {
    orangeDiv.style.width = '200px';
  });

  let btn = document.getElementById('reset');
  btn.addEventListener('click', function (event) {
    event.preventDefault();
    for (n = 0; n < listItems.length; n++) {
      listItems[n].classList.remove('selected');
      imgDiv.src = './images/panic.jpeg';
    }
  });

  let konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'b',
    'a',
  ];
  let keyString = [];
  document.addEventListener('keydown', function (event) {
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    if (numbers.indexOf(event.key) > -1) {
      alert('I HATE NUMBERZZZ!');
      keyString = [];
    } else {
      keyString.push(event.key);
      console.log(keyString);
    }
    if (arraysEqual(konamiCode, keyString)) {
      alert('YOU ARE AN EVENT HANDLER GURUUUUUUUUU!');
    }
  });

  function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length != b.length) return false;

    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
});
