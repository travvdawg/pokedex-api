const cardSets = document.getElementById('card-set');
const cardSetsBtn = document.getElementById('sets');
const deckListBtn = document.getElementById('deck-lists');
const tournamentsBtn = document.getElementById('tournaments');
const myDecksBtn = document.getElementById('my-decks');

const getPokemon = async () => {
	const url = 'https://api.pokemontcg.io/v2/sets';
	const res = await fetch(url);
	const data = await res.json();
	// console.log(data);
	return data.data;
};

const allPkmnSets = async () => {
	const sets = await getPokemon();
	let htmlContent = '';
	const setInfoContainer = document.createElement('div');
	setInfoContainer.classList.add('set-info');

	for (const set of sets) {
		htmlContent += `
			<small>${set.name}<img src="${set.images.logo}"></small>
		`;
	}

	setInfoContainer.innerHTML = htmlContent;
	cardSets.appendChild(setInfoContainer);
};

const getAllSets = () => {
	cardSetsBtn.addEventListener('click', () => {
		allPkmnSets();
		cardSetsBtn.style.display = 'none';
		deckListBtn.style.display = 'none';
		tournamentsBtn.style.display = 'none';
		myDecksBtn.style.display = 'none';
	});
};

getAllSets();
