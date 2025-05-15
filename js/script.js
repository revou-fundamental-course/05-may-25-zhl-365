// Automation of Banner Slides
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function showSlides(){
    for (let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    } 
    
    slideIndex++;
    if (slideIndex > slides.length){slideIndex = 1;}
    
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);// Change image every 3 seconds
}

window.onload = showSlides;

// Form Validation
function validateForm(){
    // Validate Name Input
    const nameInput = document.getElementById("name-input");
    const emailInput = document.getElementById("email");
    const concernSelect = document.getElementById("concern");

    if (nameInput.value.trim() === ''){
        alert('Please enter your name.');
        return;
    }

    // Validate E-Mail Input
    if (emailInput.value.trim() === ''){
        alert('Please enter your email.');
        return;
    }

    // Validate E-Mail Format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())){
        alert('Please enter a valid email address.');
        return;
    }

    alert('Your submission has been completed!')
}