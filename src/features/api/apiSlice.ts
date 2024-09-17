import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Todo } from "../../types/todoTypes";

export const apiSlice = createApi({
	reducerPath: "api",
	tagTypes: ["Todos"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3500" }),
	endpoints: (builder) => ({
		getTodos: builder.query<Todo[], void>({
			query: () => "/todos",
			transformResponse: (res: Todo[]) => res.sort((a, b) => b.id - a.id),
			providesTags: ["Todos"],
		}),
		addTodo: builder.mutation({
			query: (todo) => ({
				url: "/todos",
				method: "POST",
				body: todo,
			}),
			invalidatesTags: ["Todos"],
		}),
		updateTodo: builder.mutation({
			query: (todo) => ({
				url: `/todos/${todo.id}`,
				method: "PATCH",
				body: todo,
			}),
			invalidatesTags: ["Todos"],
		}),
		deleteTodo: builder.mutation({
			query: ({ id }) => ({
				url: `/todos/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Todos"],
		}),
	}),
});

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useUpdateTodoMutation,
	useDeleteTodoMutation,
} = apiSlice;
