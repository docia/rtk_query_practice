import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../features/api/pokemonsApi";
import { todoApi } from "../features/api/todoApi";

console.log("pokemonApi:", pokemonApi);
console.log("todoApi:", todoApi);

export const store = configureStore({
	reducer: {
		[pokemonApi.reducerPath]: pokemonApi.reducer,
		[todoApi.reducerPath]: todoApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware()
			.concat(pokemonApi.middleware)
			.concat(todoApi.middleware),
});
