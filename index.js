var typed = new Typed(".text", {
    strings: ["Frontend Developer", "AI Engineer","Data Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function validateContactForm(event) {
    event.preventDefault(); // Form ko temporarily rokta hai

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all required fields!");
        return false; // Form submit nahi hoga
    } else {
        alert(" Details Successfully Submitted!");
        setTimeout(() => {
            document.getElementById("contact-form").submit(); // Corrected form ID
        }, 100); // 100ms delay taaki alert show ho
    }
}