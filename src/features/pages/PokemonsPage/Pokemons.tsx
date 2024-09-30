import GoBack from "../../components/GoBack";
import PokemonsData from "../../components/PokemonsData";
import PokemonsList from "../../components/PokemonsList";
import { useState } from "react";
import "./Pokemons.css"

function Pokemons() {
	const [selectedPokemon, setSelectedPokemon] = useState<string | undefined>(
		undefined
	);

	return (
		<div className="container">
			<GoBack />
			<main className="pokemonsBlock">
				<div>
					<header>
						<h1>My Pokedex</h1>
					</header>
				</div>
				{selectedPokemon ? (
					<>
						<PokemonsData pokemonName={selectedPokemon} />
						<button
							onClick={() => setSelectedPokemon(undefined)}
							className="pokemonBtn"
						>
							Back
						</button>
					</>
				) : (
					<PokemonsList onPokemonSelected={setSelectedPokemon} />
				)}
			</main>
		</div>
	);
}

export default Pokemons;
