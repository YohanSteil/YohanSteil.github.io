document.addEventListener("DOMContentLoaded", function () {
  // Gestion du formulaire de contact
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche l'envoi par défaut du formulaire

      // Récupère les données du formulaire
      const formData = new FormData(this);

      // Envoie les données via fetch (AJAX)
      fetch("https://formspree.io/f/mvoeegok", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("Message envoyé !");
            this.reset(); // Réinitialise les champs du formulaire
          } else {
            alert("Erreur lors de l'envoi du message.");
          }
        })
        .catch((error) => {
          console.error("Erreur:", error);
          alert("Erreur lors de l'envoi du message.");
        });
    });

  // Gestion du menu burger var btnBurger = document.getElementById("burgerMenu");
  var header = document.querySelector(".header");
  var checkbox = document.getElementById("check");
  var aPropos = document.querySelector(".aPropos");
  var connaissances = document.querySelector(".connaissances");
  var imageTop = document.querySelector(".imageTop");
  var projects = document.querySelector(".projects");
  var contact = document.querySelector(".contact");

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      header.classList.add("visible");
      aPropos.classList.add("opacity");
      connaissances.classList.add("opacity");
      imageTop.classList.add("opacity");
      projects.classList.add("opacity");
      contact.classList.add("opacity");
    } else {
      header.classList.remove("visible");
      aPropos.classList.remove("opacity");
      connaissances.classList.remove("opacity");
      imageTop.classList.remove("opacity");
      projects.classList.remove("opacity");
      contact.classList.remove("opacity");
    }
  });
});
