score = 0

document.addEventListener("wheel", (event) => {
    // console.log(event)
    score = score + event.deltaY
    // console.log(score)
    document.getElementById("score").innerHTML = `Score: ${Math.round(score)}`
})