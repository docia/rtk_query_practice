import "./TodoList.css";
import { useState } from "react";
import {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} from "../../api/todoApi";
import TodoListForm from "../../components/TodoListForm";
import TodoListContent from "../../components/TodoListContent";
import GoBack from "../../components/GoBack";

function TodoList() {
	const [todo, setTodo] = useState("");
	const {
		data: todos,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetTodosQuery();
	const [addTodo] = useAddTodoMutation();
	const [updateTodo] = useUpdateTodoMutation();
	const [deleteTodo] = useDeleteTodoMutation();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo({ userId: 1, title: todo, completed: false });
		setTodo("");
	};

	return (
		<div className="container">
			<GoBack />
			<main className="todoListContainer">
				<div>
					<TodoListForm
						todo={todo}
						handleSubmit={handleSubmit}
						setTodo={setTodo}
					/>
				</div>
				<div>
					<TodoListContent
						todos={todos}
						isSuccess={isSuccess}
						isLoading={isLoading}
						isError={isError}
						error={error}
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}
					/>
				</div>
			</main>
		</div>
	);
}

export default TodoList;
