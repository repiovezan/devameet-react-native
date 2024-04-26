import { SafeAreaView, View } from "react-native"
import Header from "./Header"
import Footer from "./Footer"
import styles from "./styles"
import { IContainer } from "./types"

const Container = (props: IContainer) => {
    return (
        <SafeAreaView style={styles.container}>
            <Header currentTab={props.currentTab} submit={props.submit}/>
            <View style={styles.content}>
                {props.children}
            </View>
            <Footer currentTab={props.currentTab} />
        </SafeAreaView>
    )
}

export default Container