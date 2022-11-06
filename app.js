var translateButton = document.querySelector("#translate-btn")
var inputText = document.querySelector("#input-txt")
var outputDiv = document.querySelector("#output-div")
function click(){
    console.log("Clicked!")
    console.log(inputText.value)
    outputDiv.innerText = inputText.value
}
translateButton.addEventListener("click",click)
   