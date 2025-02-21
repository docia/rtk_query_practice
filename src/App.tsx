import TodoList from "./features/pages/TodoListPage/TodoList";
import Pokemons from "./features/pages/PokemonsPage/Pokemons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./features/pages/NotFoundPage/NotFound";
import HomePage from "./features/pages/HomePage/HomePage";
import DragAndDrop from "./features/pages/DragAndDropPage/DragAndDrop";
import Counter from "./features/pages/CounterPage/Counter";
import ZipImport from "./features/pages/ZIP/Zip";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
		errorElement: <NotFound />,
	},
	{
		path: "/pokemons",
		element: <Pokemons />,
		errorElement: <NotFound />,
	},
	{
		path: "/todolist",
		element: <TodoList />,
		errorElement: <NotFound />,
	},
	{
		path: "/dragandrop",
		element: <DragAndDrop />,
		errorElement: <NotFound />,
	},
	{
		path: "/counter",
		element: <Counter />,
		errorElement: <NotFound />,
	},
	{
		path: "/zip",
		element: <ZipImport />,
		errorElement: <NotFound />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
