const cardSets = document.getElementById('card-set');
const cardSetsBtn = document.getElementById('sets');
const deckListBtn = document.getElementById('deck-lists');
const tournamentsBtn = document.getElementById('tournaments');
const myDecksBtn = document.getElementById('my-decks');
const setInfo = document.getElementById('set-info');

const getPokemon = async () => {
	const url = 'https://api.pokemontcg.io/v2/sets';
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data.data;
};

const handleSetItemClick = async (e, sets, setInfoContainer) => {
	if (e.target.classList.contains('set-item')) {
		const arrayNumber = Array.from(setInfoContainer.children).indexOf(e.target);
		const setId = sets[arrayNumber].id;
		console.log(`setId: ${setId}`);

		const cardsFromSets = async () => {
			const totalCards = sets[arrayNumber].total;
			const setId = sets[arrayNumber].id;
			const cardSets = document.getElementById('cards-from-set');

			for (let i = 1; i <= totalCards; i++) {
				const url = `https://api.pokemontcg.io/v2/cards/${setId}-${i}`;
				const res = await fetch(url);
				const data = await res.json();

				const pokemonCardEl = document.createElement('div');
				pokemonCardEl.classList.add('pkmn-card');
				const pokemonInnerHTML = `
                    <img src="${data.data.images.large}" alt="Pokemon Card"/>
                `;
				pokemonCardEl.innerHTML = pokemonInnerHTML;
				cardSets.appendChild(pokemonCardEl);
			}
		};
		await cardsFromSets();
	}
};

const allPkmnSets = async () => {
	const sets = await getPokemon();
	let htmlContent = '';
	const setInfoContainer = document.createElement('div');
	setInfoContainer.classList.add('set-info');

	for (const set of sets) {
		htmlContent += `
            <small class="set-item" data-set-id="${set.id}">
                ${set.name}<img src="${set.images.logo}" alt="${set.name} image">
            </small>
        `;
	}

	setInfoContainer.innerHTML = htmlContent;
	cardSets.appendChild(setInfoContainer);

	setInfoContainer.addEventListener('click', (event) => {
		handleSetItemClick(event, sets, setInfoContainer);
		setInfoContainer.innerHTML = '';
	});
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
