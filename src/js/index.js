import { revealElementEffect, floatingTyresEffect } from "./effects.js"
import productsDB from "./productsDB.js"
import displayCardData from "./productCard.js"
import productModal from "./productModal.js"

const sidebar = document.querySelector("#sidebar");


document.querySelector(".menu-btn").addEventListener("click", openSidebar )
document.querySelector(".close-btn").addEventListener("click", closeSidebar )

function openSidebar() {
	sidebar.classList.add("open");
}
window.openSidebar = openSidebar

function closeSidebar() {
  sidebar.classList.remove("open");
}
function navClick() {
  closeSidebar();
}

document
  .querySelectorAll(".sidebar-links")
  .forEach((link) => link.addEventListener("click", navClick));

 /* Display data */
 displayCardData(productsDB)
  
  /* Search */
  const searchbar = document.querySelector(".product-searchbar")
  
  searchbar.addEventListener("input", (e) => {  
  	const filteredProduct = productsDB.filter(p => p.name.toLowerCase().includes(e.target.value.toLowerCase()) )  
  	displayCardData(filteredProduct)  
  	revealElementEffect()
  })

/* MODAL */
productModal()

/* TYRES */
floatingTyresEffect()

/* REVEAL */
revealElementEffect()

/* EMAILJS */
emailjs.init("YOUR_PUBLIC_KEY");
contactForm.onsubmit = (e) => {
  e.preventDefault();
  emailjs
    .sendForm("SERVICE_ID", "TEMPLATE_ID", contact - form)
    .then(() => alert("Sent"));
  contact - form.reset();
};