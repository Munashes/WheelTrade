import productsDB from "./productsDB.js"

const productModal = () => {
	document.addEventListener("click", (e) => {
	if (e.target.classList.contains("more")) {
	e.preventDefault();
	const p = productsDB.find((x) => x.id == e.target.dataset.id);
	
	modal.style.display = "flex";
	modal.innerHTML = `
	<div class="modal">
	<i class="close-btn bi-x"></i>
	<h2>${p.name}</h2>
	<img class="modal-img" src=${p.img} alt=${p.name} loading="lazy" width="100%" >
	<p>${p.desc}</p>
	<h3>$${p.price}</h3>
	${ p.related.length !== 0 ? "<p class='modal-related-text' >related</p>" : "" }
	<div class="related"></div>
	<h2>${p.use}</h2>
	<ul class="instruction-container"></ul>
	</div>`;
	
	modal.querySelector(".instruction-container").innerHTML +=
	p.instructions.map((e) => `<li>${e}</li>`).join("");
	
	const el = p.related.map((i) => productsDB.filter((e) => e.id === i));
	
	modal.querySelector(".related").innerHTML += el.map((e) =>
	e.map(
	(i) =>
	`<img class="related-img" data-product2-id=${i.id} src=${i.img} alt=${i.name}>`
	)
	);
	}
	
	if (e.target.classList.contains("close-btn")) {
	modal.style.display = "none";
	}
	
	});
	
}

export default productModal;