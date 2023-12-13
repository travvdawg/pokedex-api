const poke_container = document.getElementById('poke-container');
const logo = document.getElementsByClassName('logo');
// const gen1 = document.getElementsByClassName('gen1');
// const gen2 = document.getElementsByClassName('gen2');
// const pokemon_count = 50;
const colors = {
	fire: '#fddfdf',
	grass: '#defde0',
	electric: '#fcf7de',
	water: '#def3fd',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	posion: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#f5f5f5',
	fighting: '#e6e0d4',
	normal: '#f5f5f5',
	ghost: 'rgb(74,58,90)',
};

const main_types = Object.keys(colors);

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
};

document.getElementById('gen-all').addEventListener('click', function () {
	fetchInitialPokemons();
});

const fetchInitialPokemons = () => {
	poke_container.innerHTML = '';
	fetchPokemons(1, 151);
};

const gen1Buttons = document.getElementsByClassName('gen1');
for (let i = 0; i < gen1Buttons.length; i++) {
	gen1Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(1, 151);
	});
}

const gen2Buttons = document.getElementsByClassName('gen2');
for (let i = 0; i < gen2Buttons.length; i++) {
	gen2Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(152, 251);
	});
}

const gen3Buttons = document.getElementsByClassName('gen3');
for (let i = 0; i < gen3Buttons.length; i++) {
	gen3Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(252, 386);
	});
}

const gen4Buttons = document.getElementsByClassName('gen4');
for (let i = 0; i < gen4Buttons.length; i++) {
	gen4Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(387, 494);
	});
}

const gen5Buttons = document.getElementsByClassName('gen5');
for (let i = 0; i < gen5Buttons.length; i++) {
	gen5Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(495, 649);
	});
}

const gen6Buttons = document.getElementsByClassName('gen6');
for (let i = 0; i < gen6Buttons.length; i++) {
	gen6Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(650, 721);
	});
}

const gen7Buttons = document.getElementsByClassName('gen7');
for (let i = 0; i < gen7Buttons.length; i++) {
	gen7Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(722, 809);
	});
}

const gen8Buttons = document.getElementsByClassName('gen8');
for (let i = 0; i < gen8Buttons.length; i++) {
	gen8Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(810, 905);
	});
}

const gen9Buttons = document.getElementsByClassName('gen9');
for (let i = 0; i < gen9Buttons.length; i++) {
	gen9Buttons[i].addEventListener('click', function () {
		poke_container.innerHTML = '';
		fetchPokemons(906, 1017);
	});
}

// Automatically fetch the first 50 Pokémon when the page loads
window.addEventListener('load', fetchInitialPokemons);

document.querySelector('.logo').addEventListener('click', () => {
	fetchInitialPokemons();
});

fetchPokemons();
