import React from 'react'
import {useAppDispatch} from '../../redux-hooks'
import {TodoItem} from '../../../components/TodoItem'
import {Todo} from '../../../types/todo'
import {removeTodo, toggleTodo} from './todoSlice'
import {selectAllTodos} from './todoSelectors'
import { useSelector } from 'react-redux'

export const TodoList = () => {
	const list = useSelector(selectAllTodos)
	const dispatch = useAppDispatch()

	const handleCompleted = (id: Todo['id']) => {
		dispatch(toggleTodo(id))
	}

	const handleDelete = (id: Todo['id']) => {
		dispatch(removeTodo(id))
	}

	return (
		<>
			{
				list.map(todo => (<TodoItem key={todo.id} {...todo} toggleComplete={handleCompleted} handleDelete={handleDelete}/>))
			}
		</>
	)
}

