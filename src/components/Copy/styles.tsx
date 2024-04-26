import {Dimensions, StyleSheet} from 'react-native'
const {height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    copy: {
        width: width * 0.05,
        height: height * 0.028,
        marginHorizontal: width * 0.02
    }
})

export default styles