let form = document.getElementById("form");
let questionState = document.getElementById("questionState");
let thankYouState = document.getElementById("thankYouState");
let youSelected = document.getElementById("youSelected");

let rating = "";
let radioButtons = form.elements["rating"];

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
          rating = radioButtons[i].value;
          break;
        }
      }

    questionState.classList.add("hide");
    thankYouState.classList.remove("hide");
    youSelected.innerHTML = `You selected ${rating} out of 5`;
});
