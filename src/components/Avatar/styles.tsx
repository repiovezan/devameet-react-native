import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../app.json'
const {height, width} = Dimensions.get('screen')


const styles = StyleSheet.create({
    container: {
        height: 95,
        alignItems: 'center',
        justifyContent: 'center'
    },
    edit: {
        position: 'relative',
        bottom: 40,
        left: 30
    },
    imageWithBorder: {
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: colors.primary02,
        borderStyle: 'solid',
        backgroundColor: colors.primary03
    }
})

export default styles