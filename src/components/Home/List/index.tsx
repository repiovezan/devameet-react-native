import { useCallback, useEffect, useState } from "react"
import { FlatList, Image, RefreshControl, Text, View } from "react-native"
import { IMeet } from "../../../models/Meet"
import styles from "./styles"
import * as MeetService from '../../../services/MeetService'
import handleMessage from "../../../utils/message"
import Item from "./Item"

const List = () => {
    const [meetings, setMeetings] = useState<IMeet[]>([])
    const [refreshing, setRefreshing] = useState<boolean>(false)

    useEffect(() => {
        getMeetings()
    },[])

    
    const deleteMeet = useCallback(async (item: IMeet) => {
        handleMessage({
            isOpen: true,
            title: 'Deletar reunião',
            messages: ['Deseja deletar a reunião?', 'Essa ação não poderá ser desfeita'],
            isCancelable: true,
            action: () => confirmDeleteMeet(item.id)
        })
    }, [])

    const confirmDeleteMeet = async (id: string) => {
        try{
           await MeetService.deleteMeet(id)
           getMeetings()
           handleMessage({
            isOpen: true,
            title: 'Sucesso!',
            messages: ['Reunião deletada com sucesso.'],
        })
        }catch(error: any){
            console.log('error', error)
            handleMessage({
                isOpen: true,
                title: 'Erro',
                messages: ['Erro ao deletar a reunião, tente novamente', typeof error.response.data.message == "string"? error.response.data.message : error.response.data.message[0]]
            })
        }
    }

    
    const renderItem = (item: IMeet) => (<Item item={item} delete={() => deleteMeet(item)}/>)

    const getMeetings = async () => {
        try{
          setRefreshing(true)  
          const meetingList = await MeetService.getMettings()
          setMeetings(meetingList)
        }catch(error: any){
            console.log('error', error)
            handleMessage({
                isOpen: true,
                title: 'Erro',
                messages: ['Erro ao buscar lista de reuniões, tente novamente', typeof error.response.data.message == "string"? error.response.data.message : error.response.data.message[0]]
            })
        }finally{
          setRefreshing(false)  
        }
    }

    return (
        <View>
            {
                meetings.length ?
                    <FlatList
                        data={meetings}
                        renderItem={(data: { item: IMeet }) => renderItem(data.item)}
                        keyExtractor={item => item.id}
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={getMeetings} />
                        }
                    />
                    :
                    <View style={styles.containerEmpty}>
                        <Image source={require('../../../assets/images/empty.png')}/>
                        <Text>Voce ainda não possui reunioes criadas</Text>
                    </View>
            }


        </View>
    )
}

export default List