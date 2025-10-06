/*=========Navbar Scroll===========*/
document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("header");
    window.addEventListener("scroll", function() {
      if (window.scrollY > 50) { // Adjust the value to your preference
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
    });
});


/*========== scroll sections active link in navbar ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};


/*========== Typing animation in home page ==========*/
var typed = new Typed(".text", {
    strings: ["Software Developer", "Web Developer", "Frontend Developer",],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


/*========== Go top icon in left bottom ==========*/
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

/*========== Scroll Reveal script ==========*/
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.reveal');
    function checkScroll() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight * 0.75) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});



  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 50;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);





document.addEventListener('DOMContentLoaded', function() {
  const certificates = document.querySelectorAll('.reveal');  // Select all certificate cards

  // Function to check if element is in the viewport
  function checkScroll() {
      certificates.forEach((certificate) => {
          const rect = certificate.getBoundingClientRect();  // Get the position of the card
          const windowHeight = window.innerHeight;  // Get height of the viewport

          // If the element is in the viewport (you can adjust this value as needed)
          if (rect.top < windowHeight * 0.75) {  // If top of element is within 75% of the viewport
              certificate.classList.add('show');  // Add 'show' class to trigger the fade-in effect
          }
      });
  }

  // Run once on page load to check if elements are already visible
  checkScroll();

  // Run on scroll event to check which elements should be revealed
  window.addEventListener('scroll', checkScroll);
});



function showCertificate(id) {
    const certificates = {
        python: "img/guvi.jpeg",
        interview: "img/tcsion1.jpeg",
        career: "img/tcsion2.jpeg",
        sql: "img/sql.jpeg",
        internship: "img/intern.jpeg",
        Accenture: "img/simulation.jpeg",
        ibm: "img/ibm.jpeg",
        inplant: "img/inplant.jpeg",
        corporate: "img/corporate.jpeg",
        colab: "img/colab.jpeg",
        Microsoft: "img/mern.jpeg",
        AI: "img/workshop.jpeg"
        
    };

    const modal = document.getElementById("certificateModal");
    const modalImg = document.getElementById("certificateImg");

    modal.style.display = "flex";
    modalImg.src = certificates[id];
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

const form = document.querySelector('.contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then((response) => {
    if (response.ok) {
      successMessage.style.display = 'block';
      successMessage.classList.add('show');
      successMessage.innerText = 'Message sent successfully!';
      form.reset();

      // Optionally hide the message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
        successMessage.style.display = 'none';
      }, 5000);
    } else {
      return response.json().then(data => {
        throw new Error(data.message || 'Form submission failed.');
      });
    }
  })
  .catch((error) => {
    console.error(error);
    successMessage.style.display = 'block';
    successMessage.classList.add('show');
    successMessage.innerText = 'Something went wrong. Please try again later.';
    successMessage.style.color = 'red';
  });

});


