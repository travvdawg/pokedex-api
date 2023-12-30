const cardSets = document.getElementById('card-set');
const getPokemon = async () => {
	const url = 'https://api.pokemontcg.io/v2/sets';
	const res = await fetch(url);
	const data = await res.json();
	return data.data;
};

const allPkmnSets = async () => {
	const sets = await getPokemon();
	let htmlContent = '';
	const setInfoContainer = document.createElement('div');
	setInfoContainer.classList.add('set-info');

	for (const set of sets) {
		console.log(set.name);
		htmlContent += `
		<div class="card-set" id="card-set">
			<small class="set-info" id="set-info">${set.name}</small>
		</div>
		`;
	}

	setInfoContainer.innerHTML = htmlContent;
	cardSets.appendChild(setInfoContainer);
};

allPkmnSets();
