import React from 'react'
import {NewItem} from '../../../components/NewItem'
import {Todo} from '../../../types/todo'
import {createTodo} from './todoAsyncActions'
import {useAppDispatch} from '../../redux-hooks'

export const NewAsyncTodo = () => {
	const dispatch = useAppDispatch()

	const handleAddTodo = (title: Todo['title']) => {
		dispatch(createTodo(title))
	}

	return (
		<NewItem onSubmit={handleAddTodo}/>
	)
}

