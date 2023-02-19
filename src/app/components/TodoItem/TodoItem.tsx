import styles from './TodoItem.module.scss'
import {Todo} from '../../types/todo'
import {Checkbox, FormControlLabel, IconButton} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

interface TodoItemProps extends Omit<Todo, 'userId'> {
	toggleComplete: (id: Todo['id']) => void
	handleDelete: (id: Todo['id']) => void
}

export const TodoItem = ({id, title, completed, toggleComplete, handleDelete}: TodoItemProps) => {
	return (
		<div className={styles.todoItem}>
			<FormControlLabel
				className={styles.label}
				label={title}
				control={
					<Checkbox checked={completed} onChange={() => toggleComplete(id)}/>
				}
			/>
			<IconButton aria-label="delete" color="error" onClick={() => handleDelete(id)}>
				<DeleteIcon/>
			</IconButton>
		</div>
	)
}


