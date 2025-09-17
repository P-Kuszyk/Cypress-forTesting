const btnDelete = document.querySelector(".btnDelete")
const btnSave = document.querySelector(".btnSave")
const textArea = document.querySelector(".textA")

btnDelete.addEventListener("click", () => {
    textArea.value = "";
    localStorage.clear();
})

btnSave.addEventListener("click", () => {
    localStorage.setItem("Text", textArea.value);
    console.log("Zapisano.")
})

textArea.value = localStorage.getItem("Text")