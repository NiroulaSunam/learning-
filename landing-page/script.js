let btn1 = document.querySelector("#btn1")

console.log(btn1)

btn1.onclick = () => {
    console.log("button was clicked")
    const header = document.querySelector("h1")
    header.textContent = "This button changed somewhere else header"
}