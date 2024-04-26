import { Dimensions, StyleSheet } from 'react-native'
import { colors } from '../../../../app.json'
const { height, width } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    button: {
        justifyContent:"center",
        alignItems: 'center',
        height: height * 0.04,
        width: width * 0.23,
        backgroundColor: colors.primary02,
        borderRadius: 5,
        padding: 25,
        shadowColor: colors.backWithOpacity,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        margin: 2
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default styles