// 365 1

// let elem = document.querySelector("#elem");
// console.log(elem.getAttribute('value'));

// 365 2

// let elem = document.querySelector("#elem");
// console.log(elem.getAttribute('class'));

//366 1

// let elem = document.getElementById("elem");
// elem.setAttribute("value", "text");

//366 2

// let elem = document.getElementById("elem");
// elem.setAttribute("class", "valid");

// 367 1 

// let elem = document.getElementById("elem");
// elem.removeAttribute("value");

// 368 1 

// let elem = document.getElementById("elem");
// if (elem.hasAttribute("value")) {
//   console.log("Атрибут value присутствует");
// } else {
//   console.log("Атрибут value отсутствует");
// } 

// 369 1

// let elem = document.getElementById("elem");
// elem.textContent += elem.dataset.text;

// 369 2

// let divs = document.querySelectorAll("div[data-num]");
// divs.forEach((div, index) => {
//   div.addEventListener("click", () => {
//     console.log(`Див ${index + 1} был нажат`);
//   });
// });


// 369 3

// let button = document.querySelector("#button");
// let clicks = 0;
// button.addEventListener("click", () => {
//   clicks++;
//   console.log(`Кнопка была нажата ${clicks} раз`);
// });


// 369 4

// let input = document.querySelector("#elem");
// input.addEventListener("blur", () => {
//   let length = input.value.length;
//   let min = parseInt(input.dataset.min);
//   let max = parseInt(input.dataset.max);
//   if (length < min || length > max) {
//     console.log(`Количество символов должно быть в диапазоне от ${min} до ${max}`);
//   }
// });


// 369 5

// let input = document.querySelector("#elem");
// input.addEventListener("blur", () => {
//   let length = input.value.

// 370 1

// let elem = document.getElementById("elem");
// let price = parseInt(elem.dataset.productPrice);
// let amount = parseInt(elem.dataset.productAmount);
// let totalPrice = price * amount;
// elem.textContent += ` (Цена: ${totalPrice} руб.)`;

// 371 1

// let elem = document.querySelector('#elem');
// let num = parseInt(elem.getAttribute('data-num'));
// console.log(num); // выведет 1000

// 372 1

// let elem = document.querySelector('#elem');
// let classes = elem.classList.length;
// console.log(classes); // выведет 3


// 372 2

// let elem = document.querySelector('#elem');
// let classes = elem.classList;

// for (let i = 0; i < classes.length; i++) {
//   console.log(classes[i]); // выведет "www", "ggg", "zzz"
// }

// 373 1

// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');

// 375 1

// let elem = document.querySelector('#elem');
// if (elem.classList.contains('ggg')) {
//   console.log('Класс ggg присутствует у элемента');
// } else {
//   console.log('Класс ggg не присутствует у элемента');
// }

// 376 1

// let elem = document.querySelector('#elem');
// if (elem.classList.contains('www')) {
//   elem.classList.remove('www');
// } else {
//   elem.classList.add('www');
// }

