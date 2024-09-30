import GoBack from "../../components/GoBack";
import "./DragAndDrop.css";

function DragAndDrop() {
	return (
		<div className="container">
			<GoBack />
			<main>
				<h1 className="dragTitle">Drag and Drop Page</h1>
				<div className="gridContainer">
					<div className="item">Item 1</div>
					<div className="item">Item 2</div>
					<div className="item">Item 3</div>
					<div className="tableItem">Table</div>
				</div>
			</main>
		</div>
	);
}

export default DragAndDrop;
