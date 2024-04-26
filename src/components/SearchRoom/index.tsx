import { Text, View } from "react-native"
import { ISearchRoom } from "./types"
import MeetingHeader from "../Home/Header"
import Input from "../Input"
import Button from "../Button"
import { useState } from "react"
import styles from "./styles"

const SearchRoom = (props: ISearchRoom) => {
    const [link, setLink] = useState<string>('')

    return (
        <View>
            <MeetingHeader title="Reunião"/>
            <View style={styles.container}>
                <Input 
                    placeholder="Informe o link da reunião para entrar"
                    onChange={setLink}
                    value={link}
                    icon={require('../../assets/images/link.png')}
                />
                <Button 
                    placeholder="Entrar"
                    onPress={() => props.onSearch(link)}
                    loading={props.loading}
                    style={styles.button}
                    disabled={!link}
                />
            </View>
        </View>
    )
}

export default SearchRoom