import './App.module.scss'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './app/components/pages/HomePage'

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<HomePage/>}/>
			</Routes>
		</div>
	)
}

export default App
