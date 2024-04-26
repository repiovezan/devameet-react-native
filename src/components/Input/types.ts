import { ImageSourcePropType } from "react-native";

export interface IInput {
    onChange: (value: string) => void,
    placeholder: string,
    secureTextEntry?: boolean, 
    value: string,
    icon?: ImageSourcePropType,
    style?: any,
}