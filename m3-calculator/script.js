const form = document.getElementById("form"),
    textarea = document.getElementById("textarea"),
    reset = document.getElementById("reset"),
    result = document.getElementById("result"),
    mean = document.getElementById("mean"),
    median = document.getElementById("median"),
    mode = document.getElementById("mode");

textarea.addEventListener("input", function () {
    if (this.value) {
        reset.removeAttribute("disabled");
    } else {
        reset.setAttribute("disabled", true);
    }
});
