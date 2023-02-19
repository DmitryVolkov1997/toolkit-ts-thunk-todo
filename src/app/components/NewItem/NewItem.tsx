import {Button, Input, TextField} from '@mui/material'
import styles from './NewItem.module.scss'
import {Todo} from '../../types/todo'
import {FormEvent, useRef} from 'react'

interface NewItemProps {
	onSubmit: (title: Todo['title']) => void
}

export const NewItem = ({onSubmit}: NewItemProps) => {
	const inputRef = useRef<HTMLFormElement | null>(null)

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (inputRef.current) {
			const value = inputRef.current.input.value

			if (value.trim().length) {
				onSubmit(value)
				inputRef.current.input.value = ''
			}
		}
	}

	return (
		<form className={styles.form} ref={inputRef} onSubmit={handleSubmit}>
			<TextField
				id="outlined-multiline-flexible"
				label="Название задачи"
				name="input"
			/>
			<Button type="submit" variant="contained">Добавить</Button>
		</form>
	)
}


