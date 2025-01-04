import GoBack from "../../components/GoBack";
import "./DragAndDrop.css";

function DragAndDrop() {
	return (
		<div className="container">
			<GoBack />
			<main>
				<title className="dragTitle">Drag and Drop Page</title>
				<div className="gridContainer">
					<div className="item">Item 1</div>
					<div className="item">Item 2</div>
					<div className="item">Item 3</div>
					<div className="tableItem">Table</div>
					<a href="https://www.example.com" title='An "interesting" reference'>
						A link to my example.
					</a>
				</div>
			</main>
		</div>
	);
}

export default DragAndDrop;
