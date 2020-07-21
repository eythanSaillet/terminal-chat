import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
	background: blue;
`
function Message() {
	return (
		<MessageContainer>
			<div className="infos">
				<span className="name"></span>
				<span className="time"></span>
			</div>
			<div className="text"></div>
		</MessageContainer>
	)
}

const ChatContainer = styled.div`
	width: 500px;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: var(--green) solid 1px;
	.messageContainer {
		width: 100%;
		height: calc(90% - 1px);
	}
	.line {
		width: 90%;
		height: 1px;
		background: var(--green);
	}
	.text {
		width: 90%;
		height: 10%;
		color: white;
		font-size: 1em;
		font-family: 'Andale Mono';
		background: var(--backGroundColor);
		padding: 0;
		border: 0;
		&:focus {
			outline: none;
		}
		&::placeholder {
			color: white;
		}
	}
`

function Chat() {
	return (
		<ChatContainer>
			<div className="messageContainer"></div>
			<div className="line"></div>
			<input type="text" className="text" placeholder="Write a message..."></input>
		</ChatContainer>
	)
}

export default Chat
