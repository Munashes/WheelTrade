export function revealElementEffect() {
	const obs = new IntersectionObserver(
  		(e) => {
    		e.forEach((x) => x.target.classList.toggle("show", x.isIntersecting));
  		},
  	{ threshold: 0.15 }
	);
	document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
}

export function floatingTyresEffect() {
	const t = document.querySelector(".tyres-container");
	for (let i = 0; i < 15; i++) {
		let d = document.createElement("div");
		d.className = "tyre";
		let s = 20 + Math.random() * 40;
		d.style.width = d.style.height = s + "px";
		d.style.top = Math.random() * 100 + "%";
		d.style.left = Math.random() * 100 + "%";
		d.style.animationDuration =
		3 + Math.random() * 5 + "s," + (6 + Math.random() * 6) + "s";
		t.appendChild(d);
	}
}