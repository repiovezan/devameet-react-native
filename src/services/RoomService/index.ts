import { IRoom } from "../../models/Room";
import * as DevaMeetApiService from '../DevaMeetApiService'

const getRoom = async (link: string): Promise<IRoom> => {
    const room = await DevaMeetApiService.get(`/room/${link}`)
    return room.data
}

export {getRoom}