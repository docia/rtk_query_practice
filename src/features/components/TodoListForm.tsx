import React from "react";
import { TodoListFormProps } from "../../types/todoTypes";

const TodoForm: React.FC<TodoListFormProps> = ({
	todo,
	handleSubmit,
	setTodo,
}) => {
	return (
		<form onSubmit={handleSubmit}>
			<section className="title">
				<h1>To Do List</h1>
				<div className="inputBlock">
					<input
						type="text"
						placeholder="Write here..."
						className="input"
						value={todo}
						onChange={(el) => setTodo(el.target.value)}
					></input>
					<button className="addButton">Add</button>
				</div>
			</section>
		</form>
	);
};
export default TodoForm;
