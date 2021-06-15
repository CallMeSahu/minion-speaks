var txtInput = document.querySelector("#txt-Input");
var btnConvert = document.querySelector("#btn-Convert");
var txtOutput = document.querySelector("#txt-Output");

btnConvert.addEventListener("click", function eventHandler(){
    txtOutput.innerText = "ajax " + txtInput.value; 
})