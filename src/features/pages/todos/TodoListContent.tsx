import React from "react";
import { useGetTodosQuery } from "../../api/apiSlice";
import { TodoListContentProps } from "../../../types/todoTypes";


const TodoListContent: React.FC<TodoListContentProps> = ({
	updateTodo,
	deleteTodo,
}) => {
	const {
		data: todos,
		isLoading,
		isSuccess,
		error,
	} = useGetTodosQuery();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		// Check if error is `FetchBaseQueryError`
		if ("status" in error) {
			// Handle errors related to the HTTP request
			const errMsg =
				"error" in error ? error.error : JSON.stringify(error.data);

			return (
				<div>
					<div>An error has occurred:</div>
					<div>{errMsg}</div>
				</div>
			);
		}

		// Handle more general errors (SerializedError)
		return <div>{error.message}</div>;
	}

	if (isSuccess && todos) {
		return (
			<div>
				{todos.map((todo) => (
					<article key={todo.id} className="todo">
						<div className="todo">
							<input
								className="checkbox"
								type="checkbox"
								checked={todo.completed}
								id={todo.id.toString()}
								onChange={() =>
									updateTodo({ ...todo, completed: !todo.completed })
								}
							/>
							<label htmlFor={todo.id.toString()}>{todo.title}</label>
						</div>
						<button onClick={() => deleteTodo({ id: todo.id })}>X</button>
					</article>
				))}
			</div>
		);
	}
};

export default TodoListContent;
