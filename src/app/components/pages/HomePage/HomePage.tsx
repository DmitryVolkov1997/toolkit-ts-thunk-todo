import React, {useEffect} from 'react'
import styles from './HomePage.module.scss'
import {NewTodo} from '../../../store/features/Todo/NewTodo'
import axios from 'axios'
import {API_BASE_URL} from '../../../configs/constant'
import {useAppDispatch} from '../../../store/redux-hooks'
import {setTodos} from '../../../store/features/Todo/todoSlice'
import {TodoList} from '../../../store/features/Todo/TodoList'
import {Paper} from '@mui/material'
import {AsyncTodoList} from '../../../store/features/AsyncTodo/AsyncTodoList'
import {NewAsyncTodo} from '../../../store/features/AsyncTodo/NewAsyncTodo'

interface HomePageProps {
}

export const HomePage = ({}: HomePageProps) => {
	const dispatch = useAppDispatch()
	const getTodos = async () => {
		const {data} = await axios.get(`${API_BASE_URL}/todos`)

		dispatch(setTodos(data))
	}

	useEffect(() => {
		getTodos().catch(e => e.message && console.log(e.message))
	}, [])

	return (
		<div className={styles.homePage}>
			<div className="container">
				<div className={styles.row}>
					<Paper className={styles.paper} elevation={3}>
						{/*<NewTodo/>*/}
						{/*<TodoList/>*/}
						<NewAsyncTodo/>
						<AsyncTodoList/>
					</Paper>
				</div>
			</div>
		</div>
	)
}


