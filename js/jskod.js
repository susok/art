// NAVIGACIJA
// Dohvaćanje referenci na oba elementa
var sandwich = document.getElementById("sandwich");
var navMenu = document.getElementById("nav-menu");
var sandwichMenu = document.getElementById("sandwich-menu");

// Dodavanje događaja "click" na prvi element
sandwich.addEventListener("click", function (event) {

    event.preventDefault();
    // Provjeravanje trenutnog stanja prikaza drugog elementa
    if (navMenu.style.display === "block") {
        // Ako je trenutno prikazan "none", promijeni ga na "block"
        navMenu.style.display = "none";
        sandwichMenu.classList.remove("open");
    } else {
        // Inače, promijeni ga na "none"
        navMenu.style.display = "block";
        sandwichMenu.classList.add("open");
    }
});

function provjeriVelicinuEkrana() {
    if (window.matchMedia("(min-width: 768px)").matches) {
        navMenu.style.display = "flex";
    } else {
        navMenu.style.display = "none";
        sandwichMenu.classList.remove("open");
    }
}

window.addEventListener("resize", provjeriVelicinuEkrana);
// Poziv funkcije provjeriVelicinuEkrana prilikom prvog učitavanja stranice
provjeriVelicinuEkrana();


// KONTAKT FORMA
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Poruka je poslata, javit će mo vam se što prije.";
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);



// SLIDES
window.addEventListener('load', startSlider);

function startSlider() {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;
  var slideInterval = setInterval(nextSlide, 15000);

  function showSlide() {
    slides[currentSlide].classList.add('active');
  }

  function hideSlide() {
    slides[currentSlide].classList.remove('active');
  }

  function nextSlide() {
    hideSlide();

    currentSlide = (currentSlide + 1) % slides.length;
    showSlide();
  }
}

// SLIDES putanja-do-kontakt-forme
function redirectToContactForm() {
  window.location.href = "#kontakt";
}


//TRESKAJUCA VIBER IKONA ZA KONTAKT
window.addEventListener("load", function() {
  var viberIcon = document.getElementById("viber-icon");
  viberIcon.classList.add("shake-animation");
});
