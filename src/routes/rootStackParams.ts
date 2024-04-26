import { IMeet } from "../models/Meet"

export type RootStackParamsList = {
    Login: undefined,
    Register: undefined,
    Home: undefined,
    EditProfile: undefined,
    Meet: {meet: IMeet } | undefined
}