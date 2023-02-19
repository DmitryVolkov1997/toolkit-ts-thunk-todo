import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Todo} from '../../../types/todo'

const initialState: Todo[] = []

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		setTodos(state, action: PayloadAction<Todo[]>) {
			return action.payload
		},

		addTodo(state, action: PayloadAction<Todo['title']>) {
			const newTodo = {
				userId: new Date().getTime(),
				id: new Date().getTime(),
				title: action.payload,
				completed: false
			}

			return [newTodo, ...state]
		},

		toggleTodo(state, action: PayloadAction<Todo['id']>) {
			const todo = state.find(todo => todo.id === action.payload)

			if (todo) {
				todo.completed = !todo.completed
			}
		},

		removeTodo(state, action: PayloadAction<Todo['id']>) {
			return state.filter(todo => todo.id !== action.payload)
		}
	}
})

export const {setTodos, addTodo, toggleTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer