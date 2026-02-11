 const displayCardData = (db) => {
	cards.innerHTML = db
		.map(
			(p) => `
				<div class="card reveal">
					<img src=${p.img} alt=${p.name} loading="lazy" >
					<div class="content">
						<h3>${p.name}</h3>
						<p>${p.desc}</p>
						<div class="card-footer">
							<h4 class="price">price $${p.price}</h4>
							<a href="#" data-id=${p.id} class="more">More</a>
						</div>
					</div>
				</div>`
			)
		.join("");
	
}

export default displayCardData;