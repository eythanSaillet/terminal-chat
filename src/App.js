import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import NameInput from './components/NameInput'
import Loader from './components/Loader'
import Chat from './components/Chat'

function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<NameInput />
				</Route>
				<Route exact path="/loader">
					<Loader />
				</Route>
				<Route exact path="/chat">
					<Chat />
				</Route>
			</Switch>
		</Router>
	)
}

export default App
