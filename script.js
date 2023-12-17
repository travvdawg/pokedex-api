const poke_container = document.getElementById('poke-container');
const logo = document.getElementById('logo');
const pokedexButton = document.getElementById('pokedex-btn');
const cardsButton = document.getElementById('cards-btn');
const generationsButton = document.getElementById('gen-all');
const hero = document.getElementById('hero');
const generations = document.getElementById('generation-menu');
const id = document.getElementById('id');
const pkmnName = document.getElementById('name');
const sortSelect = document.getElementById('sort');
const search = document.getElementById('search');

const colors = {
	fire: '#ff5454',
	grass: '#2c9132',
	electric: '#fff34f',
	water: '#5cc5f7',
	ground: '#9c744c',
	rock: '#d5d5d4',
	fairy: '#f266ca',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#9563d6',
	flying: '#f5f5f5',
	fighting: '#e6e0d4',
	normal: '#ffffff',
	ghost: 'rgb(74,58,90)',
};

const loadInitialPokemon = () => {
	pokedexButton.addEventListener('click', () => {
		pokedexButton.style.display = 'none';
		cardsButton.style.display = 'none';
		generationsButton.style.display = 'block';
		document.querySelector('.generation-menu').style.display = 'block';
		fetchPokemons(1, 151);
		hero.style.height = '0vh';
	});
};

loadInitialPokemon();

const main_types = Object.keys(colors);

let pkmnCards = [];

search.addEventListener('input', (e) => {
	const value = e.target.value;
	pkmnCards.forEach((pokemon) => {
		const isVisible = pokemon.name.toLowerCase().startsWith(value);
		pokemon.element.style.display = isVisible ? 'flex' : 'none';
	});
});

const fetchPokemons = async (start, end) => {
	for (let i = start; i <= end; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

	const poke_types = pokemon.types.map((type) => type.type.name);
	const type = main_types.find((type) => poke_types.indexOf(type) > -1);
	const color = colors[type];

	pokemonEl.style.backgroundColor = color;

	const pokemonInnerHTML = `
    <div class="img-container">
		<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="img unavailable"/>
	</div>
	<div class="info">
		<span class="number">#${pokemon.id}</span>
		<h3 class="name">${name}</h3>
		<small class="type">Type: <span>${type}</span></small>
	</div>
    `;

	pokemonEl.innerHTML = pokemonInnerHTML;

	poke_container.appendChild(pokemonEl);
	const cardData = { name: name, element: pokemonEl };
	pkmnCards.push(cardData);
	return cardData;
};

sortSelect.addEventListener('change', () => {
	const sortBy = sortSelect.value;
	sortPokemon(sortBy);
});

const sortPokemon = (sortBy) => {
	const pokemonCards = Array.from(poke_container.children);
	if (sortBy === 'id') {
		// Sort by ID
		pokemonCards.sort((a, b) => {
			const idA = parseInt(a.querySelector('.number').textContent.slice(1));
			const idB = parseInt(b.querySelector('.number').textContent.slice(1));
			return idA - idB;
		});
	} else if (sortBy === 'name') {
		// Sort by Name
		pokemonCards.sort((a, b) => {
			const nameA = a.querySelector('.name').textContent.toLowerCase();
			const nameB = b.querySelector('.name').textContent.toLowerCase();
			return nameA.localeCompare(nameB);
		});
	}

	// Remove existing cards and append sorted cards
	poke_container.innerHTML = '';
	pokemonCards.forEach((card) => {
		poke_container.appendChild(card);
	});
};

const gen1Buttons = document.getElementsByClassName('gen1');
for (let i = 0; i < gen1Buttons.length; i++) {
	gen1Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(1, 151);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen2Buttons = document.getElementsByClassName('gen2');
for (let i = 0; i < gen2Buttons.length; i++) {
	gen2Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(152, 251);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen3Buttons = document.getElementsByClassName('gen3');
for (let i = 0; i < gen3Buttons.length; i++) {
	gen3Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(252, 386);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen4Buttons = document.getElementsByClassName('gen4');
for (let i = 0; i < gen4Buttons.length; i++) {
	gen4Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(387, 494);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen5Buttons = document.getElementsByClassName('gen5');
for (let i = 0; i < gen5Buttons.length; i++) {
	gen5Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(495, 649);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen6Buttons = document.getElementsByClassName('gen6');
for (let i = 0; i < gen6Buttons.length; i++) {
	gen6Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(650, 721);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen7Buttons = document.getElementsByClassName('gen7');
for (let i = 0; i < gen7Buttons.length; i++) {
	gen7Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(722, 809);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen8Buttons = document.getElementsByClassName('gen8');
for (let i = 0; i < gen8Buttons.length; i++) {
	gen8Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(810, 905);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const gen9Buttons = document.getElementsByClassName('gen9');
for (let i = 0; i < gen9Buttons.length; i++) {
	gen9Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		generations.style.display = 'none';
		fetchPokemons(906, 1017);
		setTimeout(() => {
			generations.style.display = 'block';
			sortSelect.value = 'id';
			sortSelect.dispatchEvent(new Event('change'));
		});
	});
}

const returnHome = () => {
	logo.addEventListener('click', () => {
		window.location.reload();
	});
};

returnHome();

fetchPokemons();
