import { Link } from "react-router-dom";
import "./HomePage.css"

function HomePage() {
	return (
		<div className="pages">
			<h1>Home Page</h1>
			<Link to="/todolist">To Do List</Link>
			<Link to="/pokemons">Pokemons</Link>
			<Link to="/dragandrop">Drag and Drop</Link>
		</div>
	);
}

export default HomePage;
