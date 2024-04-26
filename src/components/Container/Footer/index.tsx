import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Image, TouchableOpacity, View } from "react-native"
import { RootStackParamsList } from "../../../routes/rootStackParams"
import { useNavigation } from "@react-navigation/native"
import styles from "./styles"
import { avatars } from "../../../utils/assets"
import { store } from "../../../store"
import { IStore } from "../../../models/Store"
import { defaultProps } from "../../../store/defaultProps"
import { IActionProps } from "../../../models/ActionProps"
import { defaultActions } from "../../../store/defaultActions"
import { connect } from "react-redux"
import { IFooter } from "./types"

const Footer = (props: IFooter) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamsList, 'Home'>
    const navigation = useNavigation<navigationTypes>()
    const { user } = props

    const menu = [
        {
            title: 'Home',
            onPress: () => navigation.navigate('Home'),
            icon: require('../../../assets/images/home.png'),
            iconActivated: require('../../../assets/images/homeActivated.png'),
            style: null
        },
        {
            title: 'Meet',
            onPress: () => navigation.navigate('Meet'),
            icon: require('../../../assets/images/meet.png'),
            iconActivated: require('../../../assets/images/meetActivated.png'),
            style: null
        },
        {
            title: 'EditProfile',
            onPress: () => navigation.navigate('EditProfile'),
            icon: avatars[`${user!!.avatar}_front`],
            iconActivated: avatars[`${user!!.avatar}_front`],
            style: styles.iconEditProfile
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                {menu.map((button, index) => (
                    <TouchableOpacity onPress={button.onPress} key={index}>
                        <Image
                            style={props.currentTab == 'EditProfile' ? [button.style, styles.active] : button.style}
                            source={button.title == props.currentTab ? button.iconActivated : button.icon}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const mapStateToProps = (state: any): IStore => defaultProps(state)
const mapDispatchToProps = (dispatch: any): IActionProps => defaultActions(dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Footer)