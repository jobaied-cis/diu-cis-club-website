let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 4000); // Change slide every 4 seconds
}
//index,html end
//about.html end
//events.html start
// ===== EVENT FADE SLIDE ON SCROLL =====
const animatedCards = document.querySelectorAll(".fade-slide");

function animateOnScroll() {
    animatedCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add("animate");
        }
    });
}

window.addEventListener("scroll", animateOnScroll);
window.addEventListener("load", animateOnScroll);

//events.html end
//start members.js file
// ===== FADE SLIDE ANIMATION FOR JOIN PAGE =====
const joinCards = document.querySelectorAll(".fade-slide");

function animateJoin() {
    joinCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add("animate");
        }
    });
}
window.addEventListener("scroll", animateJoin);
window.addEventListener("load", animateJoin);


// ===== FORM SUBMISSION (FAKE SUCCESS MESSAGE) =====
const memberForm = document.getElementById("memberForm");
const successMessage = document.getElementById("successMessage");

if (memberForm) {
    memberForm.addEventListener("submit", function(e) {
        e.preventDefault();
        successMessage.style.display = "block";

        // clear form
        memberForm.reset();
        
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 4000);
    });
}
//members.js end
//strat resource.js part
// ===== RESOURCES PAGE ANIMATION =====
const resCards = document.querySelectorAll(".fade-slide");

function animateResources() {
    resCards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add("animate");
        }
    });
}

window.addEventListener("scroll", animateResources);
window.addEventListener("load", animateResources);
// ===== end resource.js part =====
// ===== GALARY.css part =====
// ===== GALLERY LIGHTBOX =====
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

if (closeLightbox) {
    closeLightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Fade Animation
function animateGallery() {
    document.querySelectorAll(".fade-slide").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("animate");
        }
    });
}
window.addEventListener("scroll", animateGallery);
window.addEventListener("load", animateGallery);
// ===== end GALARY.css part =====
