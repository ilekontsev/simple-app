//обьявление
let select = document.querySelector(".form-select");
let btn = document.querySelector(".btn");
let input = document.querySelector(".form-control");
let check = document.querySelector(".gg")
//показывает в input текст selecta
select.onchange = function () {
  let str = select.options[select.selectedIndex].text;
  input.value = str;
  console.log(input.getAttribute("value"));
};

//меняет текст option+проверка на пустую строку
input.onfocus = function () {
  input.classList.remove("is-invalid");
  btn.classList.remove("btn2");
};
btn.onclick = function () {
  if (input.value.trim().length === 0) {
    input.classList.add("is-invalid");
    btn.classList.add("btn2")
    
    
  } else if (input.value.trim().length === 1) {
    input.value = "";
  } else {
    select.options[select.selectedIndex].text = input.value;
  }
};
