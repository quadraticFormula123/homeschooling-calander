const calenderName = localStorage.getItem("calanderName") //gets item from local storage called calendar name
document.querySelector("h1").textContent = calenderName //sets textContent of h1 to calenderName
const cells = document.querySelectorAll(".cell")
const reset = document.getElementById("reset")
reset.addEventListener("click", resetCalander);
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

cells.forEach(getSavedItems)

function getSavedItems(cell, index) {
    const savedContent = localStorage.getItem("cell-" + index)
    if (savedContent) {
        cell.textContent = savedContent
        cell.style.color="#000"
    }
}

function resetCalander() {
    cells.forEach(reset2)
}

function reset2(cell, index) {
    cell.textContent = ""
}