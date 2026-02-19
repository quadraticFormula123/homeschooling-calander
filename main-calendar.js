const calenderName = localStorage.getItem("calanderName") //gets item from local storage called calendar name
document.querySelector("h1").textContent = calenderName //sets textContent of h1 to calenderName
const cells = document.querySelectorAll(".cell")
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", save)
cells.forEach(function(cell) {
    cell.addEventListener("click", askUser)
})

function askUser() {
    const subject = prompt("What is the subject for this cell?")
    if (subject) {
        this.textContent = subject;
        this.style.color = "#000"
    }
}

function save() {
    cells.forEach(function(cell, index) {
        localStorage.setItem("cell-" + index, cell.textContent);
    })
    alert("Schedule saved!")
}