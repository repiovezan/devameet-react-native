import { Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { IRoom } from "../../models/Room"
import styles from "./styles"
import RoomHeader from "./Header"
import { objectsPaths, objectsPosition } from "../../utils/assets"
import { useState, useEffect, useRef } from "react"
import Controls from "./Controls"
import { IMove, IUserOnMeet, createPeerConnectionContext } from "../../services/WebSocketService"
import { store } from "../../store"
import { avatars } from "../../utils/assets"
import {
    mediaDevices
} from 'react-native-webrtc';
import InCallManager from 'react-native-incall-manager'

const { height, width } = Dimensions.get('screen')

const Room = (props: { room: IRoom }) => {
    const [enabledRoom, setEnabledRoom] = useState<boolean>(false)
    const [isMute, setIsMute] = useState<boolean>(false)
    const [me, setMe] = useState<IUserOnMeet>()
    const [ws, setWs] = useState<any>()
    const [localStream, setLocalStream] = useState<any>(null)
    const [usersStream, setUsersStream] = useState<any[]>([])

    const users = useRef<IUserOnMeet[]>([])
    const userRef = useRef<IUserOnMeet>()
    const newUsersStreams = useRef<any[]>([])

    const cellSize = Math.min(width, height) / 8

    useEffect(() => {
        if (!localStream) {
            (async () => {
                let mediaConstraints = {
                    audio: true,
                    video: {
                        frameRate: 30,
                        facingMode: 'user'
                    }
                };

                const mediaStream = await mediaDevices.getUserMedia(mediaConstraints)
                let videoTrack = await mediaStream.getVideoTracks()[0];
                videoTrack.enabled = false;

                setLocalStream(mediaStream)  
            })()
        }

        return () => {
            InCallManager.stop()
        }
    }, [])

    const join = () => {
        InCallManager.start()
        InCallManager.setKeepScreenOn(true)
        InCallManager.setForceSpeakerphoneOn(true)

        const wsServices = createPeerConnectionContext()
        setWs(wsServices)
        const userId = store.getState().user.id
        wsServices.joinRoom({ userId, link: props.room.link })
        wsServices.onCallMade()
        wsServices.onUpdateUserList((userList: IUserOnMeet[]) => {
            if (userList) {
                users.current = userList
                const me = userList.find(user => user.user === store.getState().user.id)
                setMe(me)
                setIsMute(me?.muted!!)

                const usersWithOutMe = userList.filter(user => user.user !== me!!.user)

                usersWithOutMe.forEach(async user => {
                    userRef.current = user
                    newUsersStreams.current = usersStream

                    wsServices.addPeerConnection(user.clientId, localStream, async (_stream: any) => {
                        newUsersStreams.current.push({ ...userRef.current, stream: _stream })
                    })

                    let audioTrack = await newUsersStreams.current.find((userStream: any) => userStream.clientId == userRef!!.current!!.clientId)?.stream.getAudioTracks()[0]
                    if (audioTrack) {
                        audioTrack.enabled = !userRef.current.muted
                    }
                })
                setUsersStream(newUsersStreams.current)
            }
        })

        wsServices.onRemoveUser((clientId: string) => {
            const newUsersConnecteed = users.current.filter(user => user.clientId !== clientId)
            const newUsersStreamConnecteed = usersStream.filter(user => user.clientId !== clientId)
            users.current = newUsersConnecteed
            setLocalStream(newUsersStreamConnecteed)

            wsServices.removePeerConnection(clientId)
        })

        wsServices.onAddUser((clientId: string) => {
            wsServices.callUser(clientId)
        })

        wsServices.onAnswerMade((clientId: string) => {
            wsServices.callUser(clientId)
        })

        setEnabledRoom(true)
    }

    const toggleMute = () => {
        ws.updateUserMute(!isMute)
        setIsMute(!isMute)
    }

    const onChangeControls = (command: string) => {
        let data: IMove = {}

        switch (command) {
            case 'UP':
                data.x = me!!.x
                data.orientation = 'back'
                if (me?.orientation == 'back') {
                    data.y = me.y > 1 ? me.y - 1 : 1
                } else {
                    data.y = me!!.y
                }
                break
            case 'DOWN':
                data.x = me!!.x
                data.orientation = 'front'
                if (me?.orientation == 'front') {
                    data.y = me.y < 7 ? me.y + 1 : 7
                } else {
                    data.y = me!!.y
                }
                break
            case 'LEFT':
                data.y = me!!.y
                data.orientation = 'left'
                if (me?.orientation == 'left') {
                    data.x = me.x > 0 ? me.x - 1 : 0
                } else {
                    data.x = me!!.x
                }
                break
            case 'RIGHT':
                data.y = me!!.y
                data.orientation = 'right'
                if (me?.orientation == 'right') {
                    data.x = me.x < 7 ? me.x + 1 : 7
                } else {
                    data.x = me!!.x
                }
                break
        }

        ws.updateUserMovement(data)
    }

    const renderRoom = () => {
        return (
            <View style={styles.roomContainer}>
                <View style={styles.row}>
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((x) => (
                        <View key={x} style={{ width: cellSize, height: cellSize }}>
                            {[0, 1, 2, 3, 4, 5, 6, 7].map((y) => (
                                <View key={y} style={{ width: cellSize, height: cellSize }}>
                                    {
                                        props.room!!.objects!!.filter(img => img.x === x && img.y === y).map(object => (
                                            <Image
                                                style={{
                                                    position: 'absolute',
                                                    transform: objectsPosition[object.name].scale,
                                                    left: objectsPosition[object.name].left,
                                                    top: objectsPosition[object.name].top,
                                                    zIndex: object.zIndex
                                                }}
                                                key={object._id}
                                                source={objectsPaths[object.orientation ? `${object.name}_${object.orientation}` : object.name]} />
                                        ))
                                    }
                                    {
                                        users.current?.filter(user => user.x === x && user.y === y)?.map(user => (
                                            <View key={user._id}>
                                                <View style={styles.avatarNameContainer}>
                                                    <Text style={styles.avatarNameText}>{user.name}</Text>
                                                </View>
                                                <Image
                                                    style={{
                                                        position: 'absolute',
                                                        transform: objectsPosition['avatar'].scale,
                                                        left: objectsPosition['avatar'].left,
                                                        top: objectsPosition['avatar'].top,
                                                        zIndex: 9999
                                                    }}
                                                    source={avatars[`${user.avatar}_${user.orientation}`]} />
                                            </View>
                                        ))
                                    }
                                </View>
                            ))}
                        </View>
                    ))}
                </View>
                {!enabledRoom ?
                    <View style={styles.toEnterContainer}>
                        <View style={styles.centerContainer}>
                            <Image style={styles.door} source={require('../../assets/images/doorMeet.png')} />
                            <TouchableOpacity onPress={() => join()} style={styles.enterButton}>
                                <Text style={styles.enterText}>Entrar na sala</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={styles.muteContainer}>
                        <TouchableOpacity onPress={() => toggleMute()}>
                            <Image style={styles.mute} source={isMute ? require('../../assets/images/muteOn.png') : require('../../assets/images/muteOff.png')} />
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }

    return (
        <ImageBackground
            style={styles.bg}
            source={require('../../assets/images/background.png')}
            resizeMode="cover">
            {props.room.objects.length ?
                <>
                    <RoomHeader room={props.room} />
                    {renderRoom()}
                    {enabledRoom &&
                        <Controls onChange={onChangeControls} />
                    }
                </>
                :
                <View style={styles.centerContainerNotFound}>
                    <View style={styles.notFoundContainer}>
                        <Image source={require('../../assets/images/empty.png')} />
                        <Text style={styles.textNotFound}>Reunião não encontrada :/</Text>
                    </View>
                </View>
            }

        </ImageBackground>
    )
}

export default Room