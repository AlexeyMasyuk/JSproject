window.onload = function () {
    var person = prompt("Please enter your name");
    if (person === "") {
        alert("Empty field, please enter your name");
        location.reload();
    } else if (person) {
        localStorage.setItem("person",person);
        window.location.href = "main.html";

    } else {
        alert("Enter your name and hit OK to move forward");
        location.reload();
    }
}