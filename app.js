var translateButton = document.querySelector("#translate-btn");
var inputText = document.querySelector("#input-txt");
var outputDiv = document.querySelector("#output-div");
var url = "https://api.funtranslations.com/translate/minion.json"

function translation(text){
    return url + "?" + "text=" + text
}
function errorHandler(error){
    console.log("There is an error", error);
    alert("There is something wrong with the server.Please try again after some time")
}
function click(){
    // console.log("Clicked!")
    // console.log(inputText.value)
    // outputDiv.innerText = inputText.value

    var input = inputText.value;

    fetch(translation(input))
        .then(response=>response.json())
        .then(json => {
            var finalText = json.contents.translated;
            outputDiv.innerText = finalText;
            })
        .catch(errorHandler)
};
translateButton.addEventListener("click",click)
   