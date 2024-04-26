import { IActionProps } from "./ActionProps"
import { IStore } from "./Store"

export interface IRoom {
    link: string,
    name: string,
    color: string,
    objects: IObject[]
}

export interface IObject {
    _id: string,
    meet: string,
    name: string,
    orientation: string,
    x: number,
    y: number,
    zIndex: number
}