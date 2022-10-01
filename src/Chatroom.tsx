import { useEffect } from "react"
import { useState } from "react"
import { Socket } from "socket.io-client"
import { Message, Transmissions } from "./utils"

interface Props {
	socket: Socket
}

export default function Chatroom({socket}: Props) {
	const [newMessage, setNewMessage] = useState('')
	const [messages, setMessages] = useState<Message[]>([])

	const message: Message = {
		text: newMessage,
		userId: socket.id
	}

	useEffect(() => {
		socket.on(Transmissions.NewMessages, (messages: Message[]) => {
			setMessages(messages)
		})
	}, [socket])

	return (
		<>
			<div>
				{messages.map((message) => (
					<div className={
						socket.id === message.userId ? "message own" : "message"
					}>
						<div className="user-id">{message.userId}</div>
						<div className="text">
							{message.text}
						</div>
					</div>
				))}
			</div>
			<input
				value={newMessage}
				placeholder="Type in a message..."
				onChange={(event) => setNewMessage(event.target.value)}
				onBlur={() => socket.emit(
					Transmissions.SendNewMessage, message)
				}
			/>
		</>
	)
}
