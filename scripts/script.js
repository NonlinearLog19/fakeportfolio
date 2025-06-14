// Menu function
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector("#menu-icon");
    const navigationMenu = document.querySelector(".nav-links");

    menuButton.addEventListener("click", () => {
        navigationMenu.classList.toggle("active");
    });
});

// Greeting
function loadGreeting() {
    var greeting = 'Hello';
    var message = ', welcome to my portfolio';
    var welcome = greeting + message;

    var greetingElement = document.getElementById('greeting');
    if (greetingElement) {
        greetingElement.textContent = welcome;
    }
}

// Map initialization
var venueMap;
function initMap() {
    var pinLocation = new google.maps.LatLng(48.4212, -122.3341); // Mount Vernon, WA, 98273

    var mapOptions = {
        zoom: 15,
        center: pinLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },
        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overviewMapControl: false,
        styles: [
            {
                stylers: [
                    { hue: "#ff5200" }, // Match site's orange gradient
                    { saturation: -20 }
                ]
            }, {
                featureType: "road",
                elementType: "geometry",
                stylers: [
                    { lightness: 100 },
                    { visibility: "simplified" }
                ]
            }, {
                featureType: "transit",
                elementType: "geometry",
                stylers: [
                    { hue: "#ff6600" },
                    { saturation: +80 }
                ]
            }, {
                featureType: "transit",
                elementType: "labels",
                stylers: [
                    { hue: "#ff0066" },
                    { saturation: +80 }
                ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "poi.park",
                elementType: "labels",
                stylers: [
                    { visibility: "on" }
                ]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [
                    { hue: "#c4f4f4" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ]
    };

    venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

    var marker = new google.maps.Marker({
        position: pinLocation,
        map: venueMap,
        title: "Daniel Snezhko - Mount Vernon, WA"
    });
}

function loadMapScript() {
    var script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyC7fhkL3qtYnlspvmP90kzxhZ2UBIZLPsI&callback=initMap';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
}

// Combined onload function
window.onload = function() {
    loadGreeting();
    if (document.getElementById('map')) {
        loadMapScript();
    }
};

// Video controls function
document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("experience-video");
    const playButton = document.getElementById("play-btn");
    const pauseButton = document.getElementById("pause-btn");
    const fullscreenButton = document.getElementById("fullscreen-btn");

    if (videoElement && playButton && pauseButton && fullscreenButton) {
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
    }
});

// Service request popup function
document.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("service-popup");
    const closeButton = document.getElementById("close-popup");
    const serviceButtons = document.querySelectorAll(".service-request-btn");
    const serviceForm = document.getElementById("service-form");
    const thankYouMessage = document.getElementById("thank-you-message");

    if (popup && closeButton && serviceButtons && serviceForm && thankYouMessage) {
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
    }
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

document.addEventListener("DOMContentLoaded", () => {
    const inquiryForm = document.getElementById("inquiry-form");
    const inquiryOutput = document.getElementById("inquiry-output");

    if (inquiryForm && inquiryOutput) {
        inquiryForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("client-name").value;
            const email = document.getElementById("client-email").value;
            const selectedServices = document.querySelectorAll('input[name="services"]:checked');

            let servicesList = '';
            for (let i = 0; i < selectedServices.length; i++) {
                servicesList += '- ' + selectedServices[i].value + '<br>';
            }

            inquiryOutput.innerHTML = `
                <p>Thank you, <strong>${name}</strong>!</p>
                <p>We've received your inquiry for the following services:</p>
                <p>${servicesList || 'No services selected.'}</p>
                <p>We will contact you at: <strong>${email}</strong></p>
            `;
        });
    }
});

// Gallery filter function
document.addEventListener("DOMContentLoaded", () => {
    const imgs = document.querySelectorAll('.projects-grid img');
    const search = document.getElementById('filter-search');
    const cache = [];

    // For images and their alt text
    imgs.forEach(img => {
        cache.push({
            element: img.parentElement,
            text: img.alt.trim().toLowerCase()
        });
    });

    function filter() {
        const query = this.value.trim().toLowerCase();
        cache.forEach(item => {
            const index = query ? item.text.indexOf(query) : 0;
            item.element.style.display = index === -1 ? 'none' : '';
        });
    }

    if (search && 'oninput' in search) {
        search.addEventListener('input', filter);
    } else if (search) {
        search.addEventListener('keyup', filter);
    }
});

// About form validation
(function () {
    document.forms['about-form'].noValidate = true;

    $('#about-form').on('submit', function (e) {
        var elements = this.elements;
        var valid = {};
        var isValid;
        var isFormValid;

        // Generic validation
        for (var i = 0, l = elements.length; i < l; i++) {
            if (elements[i].type !== 'submit') {
                isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
                if (!isValid) {
                    showErrorMessage(elements[i]);
                } else {
                    removeErrorMessage(elements[i]);
                }
                valid[elements[i].id] = isValid;
            }
        }

        // Custom validation
        if (!validateName()) {
            showErrorMessage(document.getElementById('name'));
            valid.name = false;
        } else {
            removeErrorMessage(document.getElementById('name'));
        }

        if (!validateHobbies()) {
            showErrorMessage(document.getElementById('hobbies'));
            valid.hobbies = false;
        } else {
            removeErrorMessage(document.getElementById('hobbies'));
        }

        // Check form validity
        for (var field in valid) {
            if (!valid[field]) {
                isFormValid = false;
                break;
            }
            isFormValid = true;
        }

        if (!isFormValid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            $('#about-form').hide();
            $('#thank-you-message').show();
            setTimeout(function() {
                $('#about-form-container').hide();
            }, 3000);
        }
    });

    // Generic validation
    function validateRequired(el) {
        if (isRequired(el)) {
            var valid = !isEmpty(el);
            if (!valid) {
                setErrorMessage(el, 'This field is required');
            }
            return valid;
        }
        return true;
    }

    function isRequired(el) {
        return ((typeof el.required === 'boolean') && el.required) || (typeof el.required === 'string');
    }

    function isEmpty(el) {
        return !el.value || el.value === el.placeholder;
    }

    function validateTypes(el) {
        if (!el.value && !isRequired(el)) return true;
        var type = $(el).data('type') || el.getAttribute('type');
        if (typeof validateType[type] === 'function') {
            return validateType[type](el);
        }
        return true;
    }

    // Custom validation
    function validateName() {
        var name = document.getElementById('name');
        var valid = name.value.length >= 2;
        if (!valid) {
            setErrorMessage(name, 'Name must be at least 2 characters long');
        }
        return valid;
    }

    function validateHobbies() {
        var hobbies = document.getElementById('hobbies');
        var valid = hobbies.value.length >= 10 && hobbies.value.length <= 200;
        if (!valid) {
            setErrorMessage(hobbies, 'Please enter between 10 and 200 characters');
        }
        return valid;
    }

    // Error message
    function setErrorMessage(el, message) {
        $(el).data('errorMessage', message);
    }

    function getErrorMessage(el) {
        return $(el).data('errorMessage') || el.title;
    }

    function showErrorMessage(el) {
        var $el = $(el);
        var errorContainer = $el.siblings('.error.message');
        if (!errorContainer.length) {
            errorContainer = $('<span class="error message"></span>').insertAfter($el);
        }
        errorContainer.text(getErrorMessage(el));
    }

    function removeErrorMessage(el) {
        var errorContainer = $(el).siblings('.error.message');
        errorContainer.remove();
    }

    // Type validation
    var validateType = {
        text: function (el) {
            var valid = /^[a-zA-Z\s]+$/.test(el.value);
            if (!valid && el.value) {
                setErrorMessage(el, 'Please enter only letters and spaces');
            }
            return valid || !el.value;
        }
    };
})();
