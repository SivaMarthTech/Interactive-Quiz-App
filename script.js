//login
function submitLogin() {
    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Regular expression for validating email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    // Check if name and email are filled and email is valid
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
    } else if (!emailRegex.test(email)) {
        alert("Please enter a valid Gmail address (e.g., name@gmail.com).");
    } else {
        // Redirect to select-quiz.html after successful login
        window.location.href = "select-quiz.html";
    }
}

// Function to handle quiz selection and UI toggle
var cta = document.querySelector(".cta");
var check = 0;

cta.addEventListener("click", function(e) {
    var text = e.target.nextElementSibling;
    var loginText = e.target.parentElement;
    text.classList.toggle('show-hide');
    loginText.classList.toggle('expand');
    if (check == 0) {
        cta.innerHTML = "<i class=\"fas fa-chevron-up\"></i>";
        check++;
    } else {
        cta.innerHTML = "<i class=\"fas fa-chevron-down\"></i>";
        check = 0;
    }
});

// Function to start the quiz
function startQuiz(quiz) {
    // Redirect to the quiz page based on the selected quiz
    window.location.href = quiz + '-quiz.html';
}

