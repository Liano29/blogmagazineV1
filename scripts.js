//c'est le code javascript pour pouvoir permettre le changement de mode.
let bodydark = localStorage.getItem("bodydark");
const header_btnswitch = document.getElementById("header_btnswitch");
const enablebodydark = () => {
  document.body.classList.add("bodydark");
  localStorage.setItem("bodydark", "active");
};

const disablebodydark = () => {
  document.body.classList.remove("bodydark");
  localStorage.setItem("bodydark", "null");
};

if (bodydark === "active") enablebodydark();
header_btnswitch.addEventListener("click", () => {
  bodydark = localStorage.getItem("bodydark");
  bodydark !== "active" ? enablebodydark() : disablebodydark();
});
//c'est le code pour le menu burger
const menuHamburger = document.getElementById("header_burger");
const navLinks = document.getElementById("boite");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("menu-mobile");
});
//c'est le code pour recuperer les infos du formulaire sur emailjs
const SERVICE_ID = "service_4ebuk8c";
const TEMPLATE_ID = "template_glmefxd";
const PUBLIC_KEY = "J4LF2fobdgOu5MvW5";

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY)
    .then(() => {
      document.getElementById("status").innerText =
        "✅ Message envoyé avec succès !";
    })
    .catch((error) => {
      document.getElementById("status").innerText =
        "❌ Erreur lors de l'envoi.";
      console.error("Erreur :", error);
    });
});
