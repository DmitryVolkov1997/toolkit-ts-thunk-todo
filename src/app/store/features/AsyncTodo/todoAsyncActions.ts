import {createAsyncThunk} from '@reduxjs/toolkit'
import {API_BASE_URL} from '../../../configs/constant'
import {Todo} from '../../../types/todo'
import {TodoSlice} from './asyncTodoSlice'

export const fetchAllTodos = createAsyncThunk<Todo[], undefined, { state: { asyncTodo: TodoSlice } }>(
	'todos/fetchTodos',
	async () => {
		const res = await fetch(`${API_BASE_URL}/todos?_limit=10`)

		return (await res.json()) as Todo[]
	},
	{
		condition: (_, {getState}) => {
			const {status} = getState().asyncTodo

			if (status === 'loading') {
				return false
			}
		}
	}
)

export const createTodo = createAsyncThunk<Todo, string>(
	'todo/createTodo',
	async (text) => {
		const newTodo: Required<Omit<Todo, 'id'>> = {
			userId: 1,
			title: text,
			completed: false
		}

		const res = await fetch(`${API_BASE_URL}/todos`, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
			body: JSON.stringify(newTodo)
		})

		return (await res.json()) as Todo
	}
)

export const removeTodo = createAsyncThunk<Todo['id'], Todo['id'], { rejectValue: string }>(
	'todo/removeTodo',
	async (id: Todo['id'], {rejectWithValue}) => {
		const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
			method: 'DELETE',
		})

		if (!res.ok) {
			return rejectWithValue('Impossible to delete todo with id' + id)
		}

		return id
	}
)

export const toggleTodo = createAsyncThunk<Todo, Todo['id'],
	{ state: { asyncTodo: TodoSlice }, rejectValue: string }>(
	'todo/toggleTodo',
	async (id: Todo['id'], {getState, rejectWithValue}) => {
		const todo = getState().asyncTodo.list.find(todo => todo.id === id)

		if (todo) {
			const res = await fetch(`${API_BASE_URL}/todos/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
				body: JSON.stringify({
					completed: !todo.completed,
				}),
			})

			if (!res.ok) {
				return rejectWithValue('Impossible to update todo with id' + id)
			}

			return await res.json()
		}

		return rejectWithValue('No such todo with id' + id)
	}
)