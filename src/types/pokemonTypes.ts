export interface PokemonResult {
	name: string;
	url: string;
}

export interface PokemonListing {
	count: number;
	next: string | null;
	previous: string | null;
	results: PokemonResult[];
}

export interface PokemonDetailData {
	id: number;
	name: string;
	height: number;
	weight: number;
	types: PokemonDetailDataTypes[];
	sprites: PokemonDetailDataSprites;
}

export interface PokemonDetailDataTypes {
	slot: number;
	type: { name: string; url: string };
}

export interface PokemonDetailDataSprites {
	front_default: string;
}

export interface PokemonsDataProps {
	pokemonName: string;
}

export interface PokemonsListProps {
	onPokemonSelected: (pokemonName: string) => void;
}