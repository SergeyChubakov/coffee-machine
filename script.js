/*"use strict"

function(name, price, element) {
  
  let balanceInput = document.queryeSelector("input[placeholder='Баланс']");
  
  if ( +balanceInput.value < price ) {
    changeDisplayText("Недостаточно средств");
    balanceInput.style.border = "2px solid red";
  } else {
    balanceInput.value -= price;
    balanceInput.style.border = "";
    cookCoffee(name, element);
  }
}

function cookCoffee(name, buttonElement) {
  changeDisplayText("Ваш", + name + "готовится");
  let progressBar = document.querySelector(".progress-bar");
  let buttonImg = document.querySelector("img");
  let cupSrc = buttonImg.getAttribute('src');
  let cupImg + document.querySelector(".coffee-cup img");
  
  cupimg.setAttribute()
  console.log(cupSrc);
  
  let i = 0;
  let interval = setInterval(function() {
    i++;
    progressBar.style.width = i + "%";
    if (i == 100) {
      clearInterval(interval);
      changeDisplayText("Ваш" + name + " готов!");
    }
  },100);
}

function changeDisplayText(text) {
  let displayText = document.querySelector('.display-text');
  displayText.inner = text;
}*/
 // window.document.documentElement.body
 // Поиск элементов
 //---------------------------Устаревшие методы--------------------------
/*let coffeMachine = document.getElementById("coffee"); //Поиск по ID
console.log(coffeMachine);
let images = document.getElementsByTagName("img");
console.log(images); //Поиск по тегу
let coffeeItems = document.getElementsByClassName("coffee-item");
console.log(coffeeItems); //Поиск по классу
let firstImage = coffeeItems[0].getElementsByTagName("img");
console.log(firstImage[0]);*/
//--------------------------------------------------------------------
//---------------------------Современные Методы----------------------
/*let coffeeMachine = document.querySelector("#coffee")
console.log(coffeeMachine);
let image = document.querySelector("img");
console.log(image);
let coffeeItems = document.querySelectorAll(".coffee-item");
console.log(coffeeItems);
let itemImages = document.querySelectorALL(".coffee-item img")
console.log(itemImages);
let cupImages = document.querySelectorALL(".coffee-item img, .coffee-cup img");
console.log(cupImages);*/
//------------------------------------------------------
//----------------------Работа с элементами--------------------------
//Изменение CSS свойств
/*let coffeeMachine = document.querySelector(".coffee-machine");
coffeeMachine.style.border = "10px solid darkblue";
coffeeMachine.style.borderRadius = "25px";
coffeeMachine.style.position = "absolute";
coffeeMachine.style.top = "15px";
coffeeMachine.style.left = "150px";
let coffeeMachineTop = coffeeMachine.style.top;
console.log( parseInt(coffeeMachineTop) );*/
//Изменение атрибутов
/*let balance = document.querySelector("input[type='text']");
let balanceType = balance.getAttribute("type");
console.log(balanceType);
balance.setAttribute("type", "date");

console.log( balance.hasAttribute("placeholder") );
balance.removeAttribute("aria-label");
balance.value = 500; // == balance.setAttribute('value', 500);
console.log(balance.value);// ==balance.getAttribute('value');*/

//Изменение классов

/*let changeButton = document.querySelector(".btn");
console.log(changeButton.classList);
changeButton.classList.remove("btn-primary");
changeButton.classList.add("btn-success");
changeButton.class.toggle("ml-5"); //Вкл./ Выкл.*/

//Изменение содержимого элементов
/*let displayText = document.querySelector(".display-text");
console.log( displayText.innerHTML );
console.log( displayText.innerText );
//displayText.innerHTML = "<b>Готовим кофе</b>";
displayText.innerText = "<b>Готовим кофе</b>";*/

//События и слушатели событий

//Мышь - click moserover mouseup mosedown mosemove
//Для