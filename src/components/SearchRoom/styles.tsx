import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../app.json'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: height * 0.05
    },
    button: {
        marginTop: height * 0.05,
        width: width * 0.8
    }
})

export default styles