import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import Player from './Player';
import * as ScreenOrientation from 'expo-screen-orientation';

const height = (Dimensions.get('window').height)/1.05

const Counter = ({route}) => {
    const [life, setLife] = useState<number>(route.params.players > 2 ? 40 : 20);
    const [newGame, setNewGame] = useState<boolean>(false)
    let usedColors = []
    const randomColor = () => {
        const colors = ['#FF9AA2','#FFB7B2','#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff', '#CAB3C1']
        let rand = Math.floor(Math.random() * colors.length)
    
        if(!usedColors.includes(colors[rand])){
            usedColors.push(colors[rand]);
            return colors[rand]
        } else {
            return randomColor()
        }
        
    }


    const upPlayer = () => (
        route.params.players < 3 ?
            <View style={ [styles.playerContainer, {transform: [{rotate: '180deg'}]}]}>
                <Player life={life} newGame={newGame} randomColor={randomColor()}/>
            </View>
        :
            <View style={[styles.multiplayerContainer, {transform: [{rotate: '180deg'}]}]}>
                <Player life={life} newGame={newGame} randomColor={randomColor()}/>
                <Player life={life} newGame={newGame} randomColor={randomColor()}/>
            </View>
    )

    const downPlayer = () => (
        route.params.players < 4 ?
            <View style={styles.playerContainer}>
                <Player life={life} newGame={newGame} randomColor={randomColor()}/>
            </View>
        :
            <View style={styles.multiplayerContainer}>
                <Player life={life} newGame={newGame} randomColor={randomColor()}/>
                <Player life={life} newGame={newGame} randomColor={randomColor()}/>
            </View>
    )

    const onClickReset = () => {
        const playerPool = route.params.players > 2 ? 40 : 20
        setLife(playerPool);
        setNewGame(!newGame)
    }

    return(
        <View style={styles.container}>
            {route.params.players !== 1 && upPlayer()}
            <IconButton icon="restore" size={30} color={Colors.white} style={styles.reset_button} onPress={onClickReset}/>
            {downPlayer()}
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexGrow:1,
        marginTop:'auto',
        backgroundColor: 'black'
    },
    reset_button: {
        alignSelf: 'center',
    },
    multiplayerContainer: {
        display: 'flex',
        flexDirection: 'row',
        flex:.5
    },
    playerContainer: {
        display:'flex',
        flex:1
    }
})