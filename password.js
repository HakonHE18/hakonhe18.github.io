document.getElementById("resumeLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("passwordModal").style.display = "block";
});

document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("passwordModal").style.display = "none";
});

document.getElementById("submitPassword").addEventListener("click", function() {
    var password = document.getElementById("passwordInput").value;
    if (password === "234") { // Change password here <-----------
        window.location.href = "cv/cv.pdf";
    } else {
        alert("Incorrect password. Please try again.");
    }
});
document.getElementById("resumeLink").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("passwordModal").style.display = "block";
    document.getElementById("passwordInput").value = ""; 
});

