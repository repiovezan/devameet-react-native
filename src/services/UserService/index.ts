import { store } from "../../store"
import * as DevaMeetApiService from '../DevaMeetApiService'
import { Creators as AuthAction } from '../../store/reducers/authData'
import { Creators as UserAction } from '../../store/reducers/userData'
import { IUpdateUser } from "../../models/User"

const updateCurrentUser = async (token?: string) => {
    if (token) {
        store.dispatch(AuthAction.setToken(token))
    }
    const { data } = await DevaMeetApiService.get('/user')

    store.dispatch(UserAction.setUser(data))
}

const update = async (body: IUpdateUser) => {
    await DevaMeetApiService.put('/user', body)
    await updateCurrentUser()
}

export { updateCurrentUser, update }