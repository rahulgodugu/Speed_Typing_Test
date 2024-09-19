let timerSeconds = document.getElementById("timerSeconds");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let spinner = document.getElementById("spinner");

let counter = 0
let interval = setInterval(function() {
    counter = counter + 1;
    timerSeconds.textContent = counter;
    timerSeconds.style.fontSize = "28px";
    timerSeconds.style.fontWeight = "600";
}, 1000);

function randomQuoteDisplay() {
    spinner.classList.remove("d-none");
    let quoteDisplayValue = quoteDisplay.value;
    let options = {
        method: "GET"
    };
    let url = "https://apis.ccbp.in/random-quote";
    fetch(url, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let {
                content
            } = jsonData;
            quoteDisplay.textContent = content;
            counter = 0;
            quoteInput.value = "";
            result.textContent = "";
            spinner.classList.add("d-none");
        });

}

resetBtn.onclick = function() {
    randomQuoteDisplay();
}

randomQuoteDisplay();

function resultCheck(content) {
    let quoteInputValue = quoteInput.value;
    if (quoteInputValue === content) {
        result.textContent = "You are typed in " + counter + " Seconds";
        clearInterval(interval);
    } else {
        result.textContent = "You are typed incorrect sentence.";
    }
}

submitBtn.onclick = function() {
    resultCheck();
}