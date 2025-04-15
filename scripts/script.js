// Menu function
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-icon");
    const navigationMenu = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        navigationMenu.classList.toggle("active");
    });
});

// Greeting
window.onload = function() {
    var greeting = 'Hello';
    var message = ', welcome to my portfolio';
    var welcome = greeting + name + message;

    var greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = welcome;
    }
};

// Video controls function
document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("experience-video");
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");
    const fullscreenButton = document.getElementById("fullscreen-btn");

    playButton.addEventListener("click", () => videoElement.play());
    pauseButton.addEventListener("click", () => videoElement.pause());

    fullscreenButton.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            videoElement.requestFullscreen?.() || videoElement.webkitRequestFullscreen?.() || videoElement.mozRequestFullScreen?.();
        } else {
            document.exitFullscreen?.() || document.webkitExitFullscreen?.() || document.mozCancelFullScreen?.();
        }
    });

    videoElement.addEventListener("play", () => {
        playButton.style.opacity = "0.6";
        pauseButton.style.opacity = "1";
    });

    videoElement.addEventListener("pause", () => {
        playButton.style.opacity = "1";
        pauseButton.style.opacity = "0.6";
    });

    const updateFullscreenText = () => {
        fullscreenButton.textContent = document.fullscreenElement ? "Exit Fullscreen" : "Fullscreen";
    };

    document.addEventListener("fullscreenchange", updateFullscreenText);
    document.addEventListener("webkitfullscreenchange", updateFullscreenText);
    document.addEventListener("mozfullscreenchange", updateFullscreenText);
});

// Service request popup function
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("service-popup");
    const closeButton = document.getElementById("close-popup");
    const serviceButtons = document.querySelectorAll(".service-request-btn");
    const serviceForm = document.getElementById("service-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    serviceButtons.forEach(button => {
        button.addEventListener("click", () => {
            popup.style.display = "flex";
        });
    });

    const closePopup = () => {
        popup.style.display = "none";
        resetForm();
    };

    closeButton.addEventListener("click", closePopup);
    window.addEventListener("click", event => {
        if (event.target === popup) closePopup();
    });

    serviceForm.addEventListener("submit", event => {
        event.preventDefault();
        thankYouMessage.style.display = "block";
        serviceForm.style.display = "none";
        setTimeout(closePopup, 3000);
    });

    const resetForm = () => {
        serviceForm.style.display = "block";
        thankYouMessage.style.display = "none";
        serviceForm.reset();
    };
});

// Contact form submit functions
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const thankYouPopup = document.getElementById("contact-thank-you-popup");
    const closeThankYouButton = document.getElementById("close-contact-thank-you");

    if (contactForm && thankYouPopup && closeThankYouButton) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            thankYouPopup.style.display = "flex";
            contactForm.reset();
            setTimeout(() => thankYouPopup.style.display = "none", 3000);
        });

        closeThankYouButton.addEventListener("click", () => {
            thankYouPopup.style.display = "none";
        });

        window.addEventListener("click", event => {
            if (event.target === thankYouPopup) {
                thankYouPopup.style.display = "none";
            }
        });
    }
});
