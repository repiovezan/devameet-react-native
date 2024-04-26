import { IUserOnMeet } from "../services/WebSocketService";
import { IMessage } from "./Message";

export interface IActionProps {
    setToken?: (token: string) => void,
    setMessage?: (message: IMessage) => void,
}