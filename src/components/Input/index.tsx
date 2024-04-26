import { Image, TextInput, View } from "react-native"
import { IInput } from "./types"
import styles from "./styles"

const Input = (props: IInput) => {
    return (
        <View style={[styles.container, props.style]}>
            {props.icon &&
                <Image source={props.icon} style={styles.icon} />
            }
            <TextInput
                onChangeText={props.onChange}
                placeholder={props.placeholder}
                autoCapitalize="none"
                secureTextEntry={props.secureTextEntry}
                value={props.value}
                style={styles.input}
            >
            </TextInput>
        </View>
    )
}

export default Input