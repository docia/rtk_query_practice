import { PokemonsDataProps } from "../../types/pokemonTypes";
import { usePokemonsDataQuery } from "../api/pokemonsApi";

function PokemonsData({ pokemonName }: PokemonsDataProps) {
	const { data, isLoading, isError, isSuccess } =
		usePokemonsDataQuery(pokemonName);

	if (isLoading) return "Loading...";

	if (isError) return "Something went wrong.";

	if (isSuccess) {
		return (
			<div>
				<h2>{pokemonName}</h2>
				<img src={data?.sprites.front_default} alt="pokemon" />
				<ol>
					<li>id: {data?.id}</li>
					<li>height: {data?.height}</li>
					<li>weight: {data?.weight}</li>
					<li>
						types:{" "}
						{data?.types.map((typeInfo) => typeInfo.type.name).join(" and ")}
					</li>
				</ol>
			</div>
		);
	}
}

export default PokemonsData;
