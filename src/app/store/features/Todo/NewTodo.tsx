import React from 'react'
import {NewItem} from '../../../components/NewItem'
import {useDispatch} from 'react-redux'
import {Todo} from '../../../types/todo'
import {addTodo} from './todoSlice'

export const NewTodo = () => {
	const dispatch = useDispatch()

	const handleAddTodo = (title:Todo['title']) => {
		dispatch(addTodo(title))
	}

	return (
		<NewItem onSubmit={handleAddTodo}/>
	)
}

