import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../../app.json'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
       borderBottomColor: colors.gray01,
       borderBottomWidth: 1,
       paddingHorizontal: width * 0.05,
       paddingVertical: height * 0.02,
       height: height * 0.1,
       justifyContent: 'center',
    },
    title: {
       fontFamily: 'biennale',
       fontSize: 12,
       fontWeight: '600'
    },
    subtitle: {
        fontFamily: 'biennale-bold',
        fontSize: 16,
        fontWeight: '700',
        color: colors.primary02
    }
})

export default styles