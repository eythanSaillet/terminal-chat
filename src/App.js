import React, { useState, useEffect } from 'react'
import './App.css'

function NameInput() {
	const [name, setName] = useState('')
	const [fullBlockIsVisible, setFullBlockIsVisible] = useState(true)
	let fullBlockFlash
	const acceptedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

	function onKeyPress(_event) {
		if (_event.code === 'Backspace') {
			setName((name) => name.substr(0, name.length - 1))
		} else if (acceptedCharacters.includes(_event.key)) {
			setName((name) => name + _event.key)
		}
	}

	useEffect(() => {
		if (window) {
			window.addEventListener('keydown', onKeyPress)

			fullBlockFlash = setInterval(() => {
				setFullBlockIsVisible((fullBlockIsVisible) => !fullBlockIsVisible)
			}, 750)
		}
		return () => {
			window.removeEventListener('keydown', onKeyPress)
			clearInterval(fullBlockFlash)
		}
	}, [])

	return (
		<div className="nameInputContainer">
			<p className="nameInputLabel">Choose a name</p>
			<p className="nameInput">{name}</p>
			<div className={'fullBlockCharacter ' + (fullBlockIsVisible ? '' : 'invisible')}></div>
		</div>
	)
}

function App() {
	return <NameInput />
}

export default App
