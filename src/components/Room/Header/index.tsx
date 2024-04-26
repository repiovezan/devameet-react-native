import { Text, View } from "react-native"
import styles from "./styles"
import { IRoom } from "../../../models/Room"
import Copy from "../../Copy"

const RoomHeader = (props: { room: IRoom }) => {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Reunião</Text>
                <Text style={styles.link}>{props.room.link}</Text>
                <Copy
                    style={styles.copy}
                    link={props.room.link}
                    icon={require('../../../assets/images/greenCopy.png')} />
            </View>

            <Text style={styles.subtitle}>{props.room.name}</Text>
        </View>
    )
}

export default RoomHeader