import { Link } from "react-router-dom";
import "./NotFound.css"

function NotFound() {
    return (
			<div className="notFound">
            <h1>404 Not Found</h1>
            <Link to="/">Back to To Do List</Link>
			</div>
		);
}

export default NotFound;