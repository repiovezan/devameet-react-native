import { IButton } from "./types";
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../app.json'
import styles from './styles'

const Button = (props: IButton) => {
    return (
        <TouchableOpacity
            onPress={props.onPress}
            disabled={props.disabled}
            style={[styles.button, props.style, props.disabled? styles.buttonDisabled : null]}>
            {props.loading ?
                <ActivityIndicator size={30} color={colors.white}/>
                :
                <Text style={styles.text}>{props.placeholder}</Text>
            }
        </TouchableOpacity>
    )
}

export default Button