import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, View, Dimensions, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

interface DownScreenTypes{
    life: number,
    newGame: boolean,
    randomColor: string,
}

const Player = (props: DownScreenTypes) => {
    const [life, setLife] = useState<number>(props.life)

    useEffect(()=>{
        setLife(props.life)
    }, [props.newGame])

    return(
        <View style={[styles.background, {backgroundColor: props.randomColor}]}>
                <IconButton
                    icon="chevron-left"
                    onPress={() => setLife(life - 1)}
                    style={styles.oneLifeDownButton}
                    hitSlop={{top:150, bottom:150}}
                /> 
                <TouchableOpacity
                    onPress={() => setLife(life - 5)}
                    style={styles.lifeButtons}
                >
                    <Text style={styles.ButtonText}>-5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setLife(life - 1)}
                    style={styles.lifeButtons}
                >
                    <Text style={styles.ButtonText}>-1</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    {life}
                </Text>
                <TouchableOpacity
                    onPress={() => setLife(life + 1)}
                    style={styles.lifeButtons}
                >
                    <Text style={styles.ButtonText}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setLife(life + 5)}
                    style={styles.lifeButtons}
                >
                    <Text style={styles.ButtonText}>+5</Text>
                </TouchableOpacity>
                <IconButton
                    icon="chevron-right"
                    onPress={() => setLife(life + 1)}
                    style={styles.oneLifeUpButton}
                    hitSlop={{top:150, bottom:150}}
                />
        </View>

    )
}

export default Player;

const styles = StyleSheet.create({
    text: {
        fontSize:64
    },
    background:{
        flex:1,
        backgroundColor:'transparent',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row'
    },
    oneLifeDownButton: {
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    oneLifeUpButton: {
        backgroundColor:'transparent',
        alignSelf:'center'
    },
    lifeButtons: {
        backgroundColor:'#778a7b',
        alignSelf:'flex-end',
        marginBottom:10,
        borderRadius:30,
        width:'12%',
        height:'14%',
        justifyContent:'center'
    },
    ButtonText: {
        alignSelf:'center',
        color:'white',
        fontSize: 20
    },
});