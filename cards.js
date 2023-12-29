const getPokemon = async () => {
	const url = 'https://api.pokemontcg.io/v2/sets';
	const res = await fetch(url);
	const data = await res.json();
	console.log(data);
};

getPokemon();

getPokemon.where({ q: 'legalities.standard:legal' }).then((result) => {
	console.log(result.data[0].name);
});

getPokemon.where({ pageSize: 10, page: 2 }).then((result) => {
	console.log(result.data[0].name);
});
