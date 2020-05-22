import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Style

const NameInputContainer = styled.div`
	width: 300px;
	height: 100px;
	border: 2px solid var(--green);
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	.nameInputLabel {
		position: absolute;
		top: -23px;
		left: 20px;
		background-color: var(--backGroundColor);
		padding: 15px;
		color: var(--green);
	}

	.nameInput {
		font-size: 25px;
	}

	.fullBlockCharacter {
		height: 23px;
		width: 12px;
		margin: 1px;
		background-color: white;
		transform: translateY(-3px);
	}
`

const FullBlockCharacter = styled.div`
	opacity: ${(props) => (props.invisibility ? 0 : 1)};
`

// Component

function NameInput() {
	const [name, setName] = useState('')
	const [fullBlockIsVisible, setFullBlockIsVisible] = useState(true)
	let fullBlockFlashID
	const acceptedCharacters = 'abcdefghijklmnopqrstuvwxyz'

	function onKeyPress(_event) {
		if (_event.code === 'Backspace') {
			setName((name) => name.substr(0, name.length - 1))
		} else if (acceptedCharacters.indexOf(_event.key.toLowerCase()) !== -1) {
			setName((name) => {
				let newName = name + _event.key
				return newName.slice(0, 16)
			})
		}
	}

	useEffect(() => {
		if (window) {
			window.addEventListener('keydown', onKeyPress)

			fullBlockFlashID = setInterval(() => {
				setFullBlockIsVisible((fullBlockIsVisible) => !fullBlockIsVisible)
			}, 750)
		}
		return () => {
			window.removeEventListener('keydown', onKeyPress)
			clearInterval(fullBlockFlashID)
		}
	})

	return (
		<NameInputContainer>
			<p className="nameInputLabel">Choose a name</p>
			<p className="nameInput">{name}</p>
			<FullBlockCharacter className="fullBlockCharacter" invisibility={fullBlockIsVisible}></FullBlockCharacter>
		</NameInputContainer>
	)
}

export default NameInput
