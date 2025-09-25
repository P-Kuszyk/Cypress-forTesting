const btnDelete = document.querySelector(".btnDelete")
const btnSave = document.querySelector(".btnSave")
const textArea = document.querySelector(".textA")
const btnColor = document.querySelector(".btnColor")
const formDiv = document.querySelector(".listAllDiv")

btnDelete.addEventListener("click", () => {
    textArea.value = "";
    localStorage.clear();
})

btnSave.addEventListener("click", () => {
    localStorage.setItem("Text", textArea.value);
    console.log("Zapisano.")
})

textArea.value = localStorage.getItem("Text")

btnColor.addEventListener("click", () => {
    changeBackground()
    changeBackgroundInForm()
    changeBackgroundForm()

});

//#region - FUNCTIONS

function changeBackground() {
    //const backgroundColor = getComputedStyle(document.body).backgroundColor;
    //console.log(backgroundColor)
    /* W JS najlepiej robic wszystko na kolorach rgb, a nie hex! */
    /* #019529 = rgb(1, 149, 41)   */
    /* #d3d3d3 = rgb(211, 211, 211)*/

    if (document.body.style.backgroundColor != "rgb(1, 149, 41)") {
        document.body.style.backgroundColor = "rgb(1, 149, 41)"
            //console.log(backgroundColor)

    } else {
        document.body.style.backgroundColor = "rgb(211, 211, 211)"
    }
}

function changeBackgroundInForm(){
    if (textArea.style.backgroundColor != "rgb(0, 128, 0)") {
        textArea.style.backgroundColor = "rgb(0, 128, 0)"
        textArea.style.borderColor = "azure"
        textArea.style.color = "azure"
    } else {
        textArea.style.backgroundColor = "azure"
        textArea.style.borderColor = "black"
        textArea.style.color = "black"
    }
}

function changeBackgroundForm() {
    if (formDiv.style.backgroundColor != "rgb(0, 128, 0)") {
        formDiv.style.backgroundColor = "rgb(0, 128, 0)"
        formDiv.style.borderColor = "azure"
        formDiv.style.color = "azure"
    } else {
        formDiv.style.backgroundColor = "azure"
        formDiv.style.borderColor = "black"
        formDiv.style.color = "black"
    }
}
//#endregion