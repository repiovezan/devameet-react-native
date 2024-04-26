import { Image, Text, TouchableOpacity, View } from "react-native"
import { IMeet } from "../../../../models/Meet"
import styles from "./styles"
import { RootStackParamsList } from "../../../../routes/rootStackParams"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import Clipboard from "@react-native-clipboard/clipboard"
import handleMessage from "../../../../utils/message"
import { useCallback } from "react"
import Copy from "../../../Copy"

const Item = (props: {item: IMeet, delete: () => void}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamsList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    const copy = () => {
        Clipboard.setString(props.item.link)
        handleMessage({
            isOpen: true,
            title: 'Aviso',
            messages: ['Link copiado!']
        })
    }

    return (
        <View style={styles.container}>
            <View style={[styles.color, {backgroundColor: props.item.color}]}></View>
            <Text style={styles.title}>{props.item.name}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Meet", {meet: props.item})} >
                <Image style={styles.door} source={require('../../../../assets/images/door.png')} />
            </TouchableOpacity>
            <Copy link={props.item.link}/>
            <TouchableOpacity onPress={() => props.delete()}>
                <Image style={styles.trash} source={require('../../../../assets/images/trash.png')} />
            </TouchableOpacity>
        </View>
    )
}

export default Item