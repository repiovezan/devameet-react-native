import { Image, ImageSourcePropType, TouchableOpacity } from "react-native"
import styles from "./styles"
import Clipboard from "@react-native-clipboard/clipboard"
import handleMessage from "../../utils/message"
import { ICopy } from "./types"

const Copy = (props: ICopy) => {
    const copy = () => {
        Clipboard.setString(props.link)
        handleMessage({
            isOpen: true,
            title: 'Aviso',
            messages: ['Link copiado!']
        })
    }

    return (
        <TouchableOpacity onPress={() => copy()}>
            <Image style={[styles.copy, props.style]} source={props.icon ? props.icon : require('../../assets/images/copy.png')} />
        </TouchableOpacity>
    )
}

export default Copy