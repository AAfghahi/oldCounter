import React, { useState, useEffect } from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';
import UpPlayer from './Players/UpPlayer';
import DownPlayer from './Players/DownPlayer';


const height = (Dimensions.get('window').height)/2.15;
const width = Dimensions.get('window').width
const Counter = ({route}) => {
    const [life, setLife] = useState<number>(route.params.players > 2 ? 40 : 20);
    const [newGame, setNewGame] = useState<boolean>(false)

    const onClickReset = () => {
        const playerPool = route.params.players > 2 ? 40 : 20
        setLife(playerPool);
        setNewGame(!newGame)
    }

    return(
        <View style={styles.container}>
            <UpPlayer life={life} newGame={newGame}/>
            <IconButton icon="restore" size={30} color={Colors.white} style={styles.reset_button} onPress={onClickReset}/>
            <DownPlayer life={life} newGame={newGame} />
        </View>
    )
}

export default Counter;

const styles = StyleSheet.create({
    p1Background:{
        height:height,
        backgroundColor:'lightblue',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
    },
    p2Background:{
        height:height,
        backgroundColor:'pink',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    container:{
        backgroundColor: 'black'
    },
    text: {
        fontSize:56
    },
    reset_button: {
        alignSelf: 'center',
    },
    oneLifeDownButton: {
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    oneLifeUpButton: {
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    p1lifeButtons: {
        backgroundColor:'#7DA7B4',
        alignSelf:'flex-start',
        marginTop:24,
        borderRadius:30,
        width:60,
        height:60,
        justifyContent:'center'
    },
    ButtonText: {
        alignSelf:'center',
        color:'white',
        fontSize: 20
    },
    p2lifeButtons: {
        backgroundColor:'#CB8F9A',
        alignSelf:'flex-end',
        borderRadius:30,
        marginBottom:20,
        width:60,
        height:60,
        justifyContent:'center',
    },

})