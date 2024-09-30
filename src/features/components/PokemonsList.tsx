import { PokemonResult, PokemonsListProps } from "../../types/pokemonTypes";
import "../pages/PokemonsPage/Pokemons.css";
import { usePokemonsListQuery } from "../api/pokemonsApi"

function PokemonsList({ onPokemonSelected }: PokemonsListProps) {
	const { data, isLoading, isError, isSuccess } = usePokemonsListQuery();

	if (isLoading) return "Loading...";

	if (isError) return "Something went wrong.";

	if (isSuccess) {
		return (
			<div>
				<h2>Overview</h2>
				<ol>
					{data?.results.map((pokemon: PokemonResult) => {
						return (
							<li key={pokemon.name}>
								<button
									className="pokemonBtn"
									onClick={() => onPokemonSelected(pokemon.name)}
								>
									{pokemon.name}
								</button>
							</li>
						);
					})}
				</ol>
			</div>
		);
	}
}
export default PokemonsList;
