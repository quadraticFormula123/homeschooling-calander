const titleInput = document.querySelector(".enter-title")
const titleButton = document.querySelector(".title-button")
titleButton.addEventListener("click", showCalender)
function showCalender() {
    const calanderTitle = titleInput.value 
    console.log(calanderTitle)
    localStorage.setItem("calanderName", calanderTitle)
    window.location.href = "main-calendar.html"
}