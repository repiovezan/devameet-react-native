import { Text, View, TouchableOpacity, Image } from "react-native"
import styles from "./styles"

const Controls = (props: {onChange: (command: string) => void}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => props.onChange('UP')} style={styles.button}>
                <Image source={require('../../../assets/images/top.png')}/>
            </TouchableOpacity>
            <View style={styles.row}>
                <TouchableOpacity style={styles.button} onPress={() => props.onChange('LEFT')}>
                    <Image source={require('../../../assets/images/left.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => props.onChange('DOWN')}>
                    <Image source={require('../../../assets/images/down.png')}/>
                </TouchableOpacity >

                <TouchableOpacity style={styles.button} onPress={() => props.onChange('RIGHT')}>
                    <Image source={require('../../../assets/images/right.png')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Controls