import {Dimensions, StyleSheet} from 'react-native'
import {colors} from '../../../../../app.json'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      paddingVertical: height * 0.02,
      paddingHorizontal: height * 0.02,
      flexDirection: 'row',
      width: width,
      borderBottomColor: colors.gray01,
      borderBottomWidth: 1
    },
    title: {
        fontFamily: 'biennale',
        fontSize: 12,
        lineHeight: 22,
        fontWeight: '700',
        marginHorizontal: width * 0.02,
        width: width * 0.65
    },
    color: {
        padding: width * 0.012,
        height: height * 0.05,
        borderRadius: 100
    },
    door: {
        width: width * 0.05,
        height: height * 0.025
    },
    copy: {
        width: width * 0.05,
        height: height * 0.028,
        marginHorizontal: width * 0.02
    },
    trash: {
        width: width * 0.05,
        height: height * 0.025
    },
})

export default styles