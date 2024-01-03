const cardSets = document.getElementById('card-set');
const cardSetsBtn = document.getElementById('sets');
const deckListBtn = document.getElementById('deck-lists');
const tournamentsBtn = document.getElementById('tournaments');
const myDecksBtn = document.getElementById('my-decks');

const getPokemon = async () => {
	const url = 'https://api.pokemontcg.io/v2/sets';
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
	return data.data;
};

const handleSetItemClick = (e, sets, setInfoContainer) => {
	if (e.target.classList.contains('set-item')) {
		const arrayNumber = Array.from(setInfoContainer.children).indexOf(e.target);
		const setId = sets[arrayNumber].id;
		console.log(`setId: ${setId}`);

		const showAllCards = () => {
			for (i = 0; i <= data.data.total; i++) {
				console.log(showAllCards);
			}

			const cardsFromSets = async () => {
				const url = `https://api.pokemontcg.io/v2/cards/${setId}-${showAllCards}`;
				const res = await fetch(url);
				const data = await res.json();
				console.log(data);
			};

			cardsFromSets();
		};
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
