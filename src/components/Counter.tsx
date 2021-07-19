import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import UpPlayer from './Players/UpPlayer';
import DownPlayer from './Players/DownPlayer';
import * as ScreenOrientation from 'expo-screen-orientation';

const Counter = ({route}) => {
    const [life, setLife] = useState<number>(route.params.players > 2 ? 40 : 20);
    const [newGame, setNewGame] = useState<boolean>(false)

    useEffect(()=> {
        if(route.params.players < 3) {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP)
        }else {
            ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE) 
        }
    }, [])

    const upPlayer = () => (
        route.params.players < 3 ?
            <UpPlayer life={life} newGame={newGame}/>
        :
            <View style={styles.playerContainer}>
                <UpPlayer life={life} newGame={newGame}/>
                <UpPlayer life={life} newGame={newGame}/>
            </View>
    )

    const downPlayer = () => (
        route.params.players < 3 ?
            <DownPlayer life={life} newGame={newGame} />
        :
            <View style={styles.playerContainer}>
                <DownPlayer life={life} newGame={newGame} />
                <DownPlayer life={life} newGame={newGame} />
            </View>
    )

    const onClickReset = () => {
        const playerPool = route.params.players > 2 ? 40 : 20
        setLife(playerPool);
        setNewGame(!newGame)
    }

    return(
        <View style={styles.container}>
            {upPlayer()}
            <IconButton icon="restore" size={30} color={Colors.white} style={styles.reset_button} onPress={onClickReset}/>
            {downPlayer()}
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'black'
    },
    reset_button: {
        alignSelf: 'center',
    },
    playerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex:1
    }
})