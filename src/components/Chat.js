import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const LogP = styled.p`
	color: var(--yellow);
	padding: 15px 15px 0 15px;
	line-height: 1.3em;
`

function Log(props) {
	if (props.type === 'join') {
		return (
			<LogP>
				User [{props.id}] joined the chat under the name of &lt;{props.name}&gt; at {props.time}
			</LogP>
		)
	} else if (props.type === 'quit') {
		return (
			<LogP>
				&lt;{props.name}&gt; quit the chat at {props.time}
			</LogP>
		)
	}
}

const MessageContainer = styled.div`
	padding: 15px 15px 0 15px;
	.infos {
		padding-bottom: 7px;
		color: var(--blue);
		.name {
			padding-right: 13px;
		}
	}
	.text {
		line-height: 1.3em;
	}
`
function Message(props) {
	return (
		<MessageContainer>
			<div className="infos">
				<span className="name">&lt;{props.name}&gt;</span>
				<span className="time">{props.time}</span>
			</div>
			<div className="text">{props.text}</div>
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
	.messages {
		width: 100%;
		height: calc(90% - 1px);
		padding-bottom: 50px;
		overflow: scroll;
	}
	.line {
		width: 90%;
		height: 1px;
		background: var(--green);
	}
	.textInput {
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
			<div className="messages">
				<Log name="Pixilteur" time="19:20:01" id="1763189369186316" type="join"></Log>
				<Message name="Pixilteur" time="19:20:10" text="Oueshhhs les khey ca va la vie +:) l'autre jour j'arrive je prend mes jambe a mon coup et bam la police me tue quel batard."></Message>
				<Log name="Camion" time="19:20:12" type="quit"></Log>
				<Message name="Camion" time="19:20:15" text="Coucuou les chinasse bim bam"></Message>
				<Message name="Camion" time="19:20:15" text="J'adore ca mec dytu veu  due  ebien bebuejnnjz z jjjnvenir dans mon groupe d eparole"></Message>
				<Message name="Ks,xkqs" time="19:20:15" text="Qjsnkjqnj jkq qjkns kjqs jqs kjqs kq skjq skjq skj"></Message>
				<Message name="kksssss" time="19:20:15" text="Coucuoubam"></Message>
				<Log name="Camion" time="19:20:12" type="quit"></Log>
				<Log name="Pixilteur" time="19:20:01" id="1763189369186316" type="join"></Log>
				<Message name="Pixilteur" time="19:20:10" text="Oueshhhs les khey ca va la vie +:) l'autre jour j'arrive je prend mes jambe a mon coup et bam la police me tue quel batard."></Message>
				<Log name="Camion" time="19:20:12" type="quit"></Log>
				<Message name="Camion" time="19:20:15" text="Coucuou les chinasse bim bam"></Message>
				<Message name="Camion" time="19:20:15" text="J'adore ca mec dytu veu  due  ebien bebuejnnjz z jjjnvenir dans mon groupe d eparole"></Message>
				<Message name="Ks,xkqs" time="19:20:15" text="Qjsnkjqnj jkq qjkns kjqs jqs kjqs kq skjq skjq skj"></Message>
				<Message name="kksssss" time="19:20:15" text="Coucuoubam"></Message>
				<Log name="Camion" time="19:20:12" type="quit"></Log>
			</div>
			<div className="line"></div>
			<input type="text" className="textInput" placeholder="Write a message..."></input>
		</ChatContainer>
	)
}

export default Chat
