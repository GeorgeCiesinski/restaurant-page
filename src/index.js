import "./main.scss";

// Temporary code to test assets

const content = document.getElementById("content");

const newBut = document.createElement("button");
newBut.textContent = "Click me";
newBut.addEventListener("click", function() {
    cosnole.log("F");
});

content.appendChild(newBut);