import TodoList from "./features/pages/todos/TodoList";
import Pokemons from "./features/pages/pokemons/Pokemons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./features/pages/notFound/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <TodoList />,
		errorElement: <NotFound />
	},
	{
		path: "/pokemons",
		element: <Pokemons />,
		errorElement: <NotFound />
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
