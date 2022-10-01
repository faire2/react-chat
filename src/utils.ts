export enum Transmissions {
	NewMessages = "NewMessages",
	SendNewMessage = "SendNewMessage"
}


export interface Message {
	text: string
	userId: string
}
export type NewMessages = Message[]
