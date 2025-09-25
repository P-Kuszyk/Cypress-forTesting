const btnDelete = document.querySelector(".btnDelete")
const btnSave = document.querySelector(".btnSave")
const textArea = document.querySelector(".textA")
const btnColor = document.querySelector(".btnColor")

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

    //const backgroundColor = getComputedStyle(document.body).backgroundColor;
    //console.log(backgroundColor)
    /* W JS najlepiej robic wszystko na kolorach rgb, a nie hex! */
    /* #019529 = rgb(1, 149, 41)   */
    /* #d3d3d3 = rgb(211, 211, 211)*/

    if (document.body.style.backgroundColor !== "rgb(1, 149, 41)") {
        document.body.style.backgroundColor = "rgb(1, 149, 41)"
            //console.log(backgroundColor)

    } else {
        document.body.style.backgroundColor = "rgb(211, 211, 211)"
    }
});
