const typingEffect = document.querySelector('.typing-effect');
const text = "Let's Transform Your Ideas Into Digital Experiences.";
let index = 0;
let isDeleting = false;

function typeEffect() {
  if (isDeleting) {
    typingEffect.textContent = text.substring(0, index--);
  } else {
    typingEffect.textContent = text.substring(0, index++);
  }

  const speed = isDeleting ? 100 : 150;

  if (!isDeleting && index === text.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const tabs = document.querySelectorAll('.port-container .nav a');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs
    tabs.forEach(t => t.classList.remove('active'));
    // Add 'active' class to the clicked tab
    tab.classList.add('active');
  });
});

document.querySelectorAll('footer a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Get modal elements
const zoomModal = document.getElementById('zoom-modal');
const zoomedImage = document.getElementById('zoomed-image');
const closeButton = zoomModal.querySelector('.close');

// Attach event listeners to all images
document.querySelectorAll('.details-photo').forEach((photo) => {
    photo.addEventListener('click', function () {
        zoomedImage.src = this.src; // Set the modal image source
        zoomModal.style.display = 'flex'; // Show the modal
    });
});

// Close the modal on close button click
closeButton.addEventListener('click', function () {
    zoomModal.style.display = 'none';
});

// Close the modal when clicking outside the image
zoomModal.addEventListener('click', function (event) {
    if (event.target === zoomModal) {
        zoomModal.style.display = 'none';
    }
});

function sendEmail(event) { 
  event.preventDefault(); 

  var params = {
      from_name: document.getElementById("fullName").value,
      from_email: document.getElementById("email_id").value, 
      message: document.getElementById("message").value,
      phone: document.getElementById("phone").value
  };

  emailjs.init('DdZYYwrC6yIo1Ea42');
  emailjs.send('service_wynb3v6', 'template_ap0m0z7', params)
      .then(function(res) {
          alert("Success! " + res.status);
      })
      .catch(function(err) {
          alert("Failed..." + err);
      });
}

function toggleMenu() {
  const navLeft = document.querySelector('.nav-left');
  navLeft.classList.toggle('active');
}
