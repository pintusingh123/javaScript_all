const parent = document.getElementById("parent");
const form = document.querySelector("form");
const uiResult = document.querySelector("#result");
function handlefun(e){
    e.preventDefault()
const boy = document.querySelector("#boy");
const girl = document.querySelector("#girl");


const l1 = boy.value.length;
const l2 = girl.value.length

const result = Math.pow(l1+l2,3)%101;
if(result >= 50){
    uiResult.textContent=  ` Congratulation👌💕 There is: ${result}% love between ${boy.value} And ${girl.value}`
}else{
    uiResult.textContent=  `There is: ${result}% love between ${boy.value} And ${girl.value} please🤣😢 change your partner you both are not perfect for each Other`
}
form.reset(); //using for resetin g form input values

}
form.addEventListener("submit", handlefun, false);
