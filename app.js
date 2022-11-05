var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector("#input-txt")
function click(){
    console.log("Clicked!")
    console.log(inputText.value)
}
translateButton.addEventListener("click",click)
   