import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { PokemonListing, PokemonDetailData } from "../../types/pokemonTypes";

export const pokemonApi = createApi({
	reducerPath: "pokemonApi",
	tagTypes: ["Pokemons"],
	baseQuery: fetchBaseQuery({
		baseUrl: "https://pokeapi.co/api/v2/",
	}),
	endpoints: (builder) => ({
		pokemonsList: builder.query<PokemonListing, void>({
			// query: (name) => "pokemon?limit=9/",
			query() {
				return {
					url: "pokemon",
					params: {
						limit: 9,
					},
				};
			},
		}),
		pokemonsData: builder.query<PokemonDetailData, string>({
			query: (name) => `pokemon/${name}/`,
		}),
	}),
});

export const { usePokemonsListQuery, usePokemonsDataQuery } = pokemonApi;
