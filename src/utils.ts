export enum Transmissions {
	NewMessages = "NewMessages",
	SendNewMessage = "SendNewMessage"
}


export interface Message {
	message: string
	userId: string
}
export type NewMessages = Message[]
