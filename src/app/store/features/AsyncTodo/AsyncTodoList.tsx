import React, {useEffect} from 'react'
import {useAppDispatch} from '../../redux-hooks'
import {TodoItem} from '../../../components/TodoItem'
import {Todo} from '../../../types/todo'
import {useSelector} from 'react-redux'
import {selectAsyncTodos} from './asyncTodoSelector'
import {fetchAllTodos, removeTodo, toggleTodo} from './todoAsyncActions'

export const AsyncTodoList = () => {
	const {list} = useSelector(selectAsyncTodos)
	const dispatch = useAppDispatch()

	const handleCompleted = (id: Todo['id']) => {
		dispatch(toggleTodo(id))
	}

	const handleDelete = (id: Todo['id']) => {
		dispatch(removeTodo(id))
	}

	useEffect(() => {
		dispatch(fetchAllTodos())
	}, [])

	return (
		<>
			{
				list.map(todo => (
					<TodoItem key={todo.id} {...todo} toggleComplete={handleCompleted} handleDelete={handleDelete}/>))
			}
		</>
	)
}

