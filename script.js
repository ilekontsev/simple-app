//обьявление 
let select = document.querySelector(".select");
let text = document.querySelector(".text")
let str = select.options[select.selectedIndex].text;
let btn = document.querySelector(".save")
let form = document.querySelector(".form")


//показывает в input текст selecta
select.onchange = function (){
    let str = select.options[select.selectedIndex].text;
    console.log(str)
    text.setAttribute("value", str)
}

text.onfocus = function(){
    form.style.border = "0"
}

//меняет текст option+проверка на пустую строку

btn.onclick = function(){
    if(text.value.replace(/^\s+|\s+$/g, '') === ""){
        form.style.cssText = "border: 2px solid red; border-radius: 5px"
    }
    else if(text.value.length == 1 ){
        text.value = ""
    }
    else{
    select.options[select.selectedIndex].text = text.value
    }
}
