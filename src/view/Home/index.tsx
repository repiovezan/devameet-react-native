import { Text, View } from "react-native"
import Header from "../../components/Container/Header"
import Footer from "../../components/Container/Footer"
import Container from "../../components/Container"
import MeetingHeader from "../../components/Home/Header"
import List from "../../components/Home/List"

const Home = () => {
    return (
       <Container currentTab="Home">
        <View>
            <MeetingHeader title="Minhas reuniões" />
            <List />
        </View>
       </Container>
    )
}

export default Home