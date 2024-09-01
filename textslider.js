var sliderIndex = 0;
var sliderItems = [
    "Urban Style",
    "Rap urbano.",
    "Dembow.",
    "Bachata.",
    "Most Popular",
    "New Talents",
    "Open to Collaborations",
    "Contact our developers",
    "Buy our Merchandise",
    "Easy Friendly access",
    "to the hottest merch",
    "Visit our Store",

];
var textSlider = document.querySelector("#dynamicSlider");
var dynamicTextElement = document.querySelector("#dynamicText");

function slideText() {
    if (sliderIndex >= sliderItems.length) {
        sliderIndex = 0;
    }

    dynamicTextElement.innerHTML = "";
    dynamicTextElement.classList.remove("holder-fade");
    void dynamicTextElement.offsetWidth;
    dynamicTextElement.classList.add("holder-fade");

    for (i = 0; i < sliderItems[sliderIndex].length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.innerHTML = sliderItems[sliderIndex][i];
        if (letterDiv.innerHTML == " ") {
            letterDiv.innerHTML = " ";
        }
        letterDiv.classList.add("hidden");
        letterDiv.classList.add("text-animation");
        letterDiv.style.animationDelay = i / 10 + "s";
        dynamicTextElement.appendChild(letterDiv);
    }

    sliderIndex++;
}

slideText();
setInterval(slideText, 4000);
