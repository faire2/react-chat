import { useState } from "react"
import { Socket } from "socket.io-client"
import { Message, Transmissions } from "./utils"

interface Props {
	socket: Socket
}

export default function Chatroom({socket}: Props) {
	const [newMessage, setNewMessage] = useState('')

	const message: Message = {
		message: newMessage,
		userId: socket.id
	}

	return (
		<>
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
