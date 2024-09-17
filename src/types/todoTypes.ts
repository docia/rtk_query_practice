import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export interface Todo {
	id: number;
	userId: number;
	title: "string";
	completed: boolean;
}

export interface TodoListFormProps {
	todo: string;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	setTodo: (value: string) => void;
}

export interface TodoListContentProps {
	todos: Todo[] | undefined;
	isLoading: boolean;
	isSuccess: boolean;
	isError: boolean;
	error: FetchBaseQueryError | SerializedError | undefined;
	updateTodo: (todo: Todo) => void;
	deleteTodo: (todo: { id: number }) => void;
}
