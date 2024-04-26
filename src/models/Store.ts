import { IUserOnMeet } from "../services/WebSocketService";
import { IAuth } from "./Auth";
import { IMessage } from "./Message";
import { IUser } from "./User";

interface IStoreAuth extends IAuth {}
interface IStoreMessage extends IMessage {}

export interface IStore {
    auth: IStoreAuth
    message: IStoreMessage,
    user: IUser,
}