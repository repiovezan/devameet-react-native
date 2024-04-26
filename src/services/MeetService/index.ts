import { IMeet } from "../../models/Meet";
import * as DevaMeetApiService from '../DevaMeetApiService'

const getMettings = async (): Promise<IMeet[]> => {
    const meetings = await DevaMeetApiService.get('/meet')
    return meetings.data
}

const deleteMeet = async (id: string) => {
    await DevaMeetApiService._delete(`/meet/${id}`)
}

export {getMettings, deleteMeet}