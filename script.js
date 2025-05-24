




// ----------------------------------about
/// Animate About Section on scroll using Intersection Observer
const aboutSection = document.querySelector('.about-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
}, { threshold: 0.3 });

observer.observe(aboutSection);



// --------------------------------------projects

const projectCards = document.querySelectorAll('.project-card');

const observerProjects = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observerProjects.unobserve(entry.target);
    }
  });
}, {threshold: 0.3});

projectCards.forEach(card => observerProjects.observe(card));



// contact us
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbxPYJrW361xp57ixqK81GmeYUUoBWofWDJUXTlEDEbJw_zqa4auZdguCP0aIN7l_mkdkg/exec", {
    method: "POST",
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(response => {
    if (response.result === "success") {
      document.getElementById("form-response").textContent = "Thank you for contacting us! We will reach out to you very soon.";
      form.reset();
    } else {
      document.getElementById("form-response").textContent = "Something went wrong. Please try again.";
    }
  })
  .catch(error => {
    document.getElementById("form-response").textContent = "Network error. Try again later.";
  });
});
