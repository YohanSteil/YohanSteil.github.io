// const imageSneakers = document.querySelectorAll('.projects__projet__img') ;
// const connaissanceslink = document.querySelector('.linksheader[href="#knowledge"]') ;

// imageSneakers.forEach(image => {
//     image.addEventListener('click', () => {
//         image.classList.toggle('enlarged')
//     });
// })

// connaissanceslink.addEventListener('click', function(event) {
// event.preventDefault() ;

// window.scrollTo({
//     behavior : 'smooth'
// })
//  })

const image = document.querySelectorAll(".image");

image.addEventListener("mouseenter", () => {});

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

var btnMenu = document.getElementsByClassName("btn-menu");
var body = document.body;
for (var i = 0; i < btnMenu.length; i++) {
  btnMenu[i].addEventListener("click", function () {
    body.classList.toggle("menu-open");
  });
}
