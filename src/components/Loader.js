import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

// Style

const ParagraphLoader = styled.p`
	font-size: 25px;
`

// Component

function Loader() {
	const [dots, setDots] = useState('')

	useEffect(() => {
		let dotsDisplayID = setInterval(() => {
			setDots((dots) => {
				return dots === '' ? '.' : dots === '.' ? '..' : dots === '..' ? '...' : dots === '...' ? '' : null
			})
		}, 350)

		return () => {
			clearInterval(dotsDisplayID)
		}
	})

	return <ParagraphLoader>Connection{dots}</ParagraphLoader>
}

export default Loader
