// The score is kept in script state so every wheel event can build on the last scroll amount.
let score = 0;

document.addEventListener("wheel", (event) => {
    /*
        Wheel delta is used directly so small trackpad gestures and larger mouse-wheel jumps
        both affect the score and rotation by the same amount the browser reports.
    */
    score = score + event.deltaY;

    // Rounding keeps the displayed score readable while preserving the exact value for rotation.
    document.getElementById("score").innerHTML = `Score: ${Math.round(score)}`;

    // The square rotates by the accumulated score, matching the original scroll-to-spin behavior.
    document.getElementById("square").style.transform = "rotate(" + score + "deg)";
});
