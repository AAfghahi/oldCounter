import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Dimensions, StyleSheet } from 'react-native';
import { IconButton, Colors } from 'react-native-paper';


const height = (Dimensions.get('window').height)/2.15;
const width = Dimensions.get('window').width
const Counter = ({route}) => {
    const [pOneLife, setPOneLife] = useState<number>(20)
    const [pTwoLife, setPTwoLife] = useState<number>(20)

    const onClickReset = () => {
        setPOneLife(20);
        setPTwoLife(20);
    }

    const oneP1LifeDown = () => {
        setPOneLife(pOneLife - 1);
    }

    const fiveP1LifeDown = () => {
        setPOneLife(pOneLife - 5)
    }

    const oneP1LifeUp = () => {
        setPOneLife(pOneLife + 1);
    }

    const fiveP1LifeUp = () => {
        setPOneLife(pOneLife + 5)
    }
    const oneP2LifeDown = () => {
        setPTwoLife(pTwoLife - 1);
    }

    const fiveP2LifeDown = () => {
        setPOneLife(pTwoLife - 5)
    }
    const oneP2LifeUp = () => {
        setPTwoLife(pTwoLife + 1);
    }
    const fiveP2LifeUp = () => {
        setPOneLife(pTwoLife + 5)
    }

    const p1Screen = () => (
        <View style={styles.p1Background}>
                <IconButton
                    icon="chevron-left"
                    onPress={oneP1LifeDown}
                    style={styles.oneLifeDownButton}
                    hitSlop={{top:150, bottom:150}}
                /> 
                <TouchableOpacity
                    onPress={fiveP1LifeDown}
                    style={styles.p1lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>-5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={oneP1LifeDown}
                    style={styles.p1lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>-1</Text>
                </TouchableOpacity>
                <Text style={[styles.text, {transform: [{rotate: '180deg'}]}]}>
                    {pOneLife}
                </Text>
                <TouchableOpacity
                    onPress={oneP1LifeUp}
                    style={styles.p1lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={fiveP1LifeUp}
                    style={styles.p1lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>+5</Text>
                </TouchableOpacity>
                <IconButton
                    icon="chevron-right"
                    onPress={oneP1LifeUp}
                    style={styles.oneLifeUpButton}
                    hitSlop={{top:150, bottom:150}}
                />
        </View>
    )


    const p2Screen = () => (
        <View style={styles.p2Background}>
                <IconButton
                    icon="chevron-left"
                    onPress={oneP2LifeDown}
                    style={styles.oneLifeDownButton}
                    hitSlop={{top:150, bottom:150}}
                /> 
                <TouchableOpacity
                    onPress={fiveP2LifeDown}
                    style={styles.p2lifeButtons}
                >
                    <Text style={styles.ButtonText}>-5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={oneP2LifeDown}
                    style={styles.p2lifeButtons}
                >
                    <Text style={styles.ButtonText}>-1</Text>
                </TouchableOpacity>
                <Text style={styles.text}>
                    {pTwoLife}
                </Text>
                <TouchableOpacity
                    onPress={oneP2LifeUp}
                    style={styles.p2lifeButtons}
                >
                    <Text style={styles.ButtonText}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={fiveP2LifeUp}
                    style={styles.p2lifeButtons}
                >
                    <Text style={styles.ButtonText}>+5</Text>
                </TouchableOpacity>
                <IconButton
                    icon="chevron-right"
                    onPress={oneP2LifeUp}
                    style={styles.oneLifeUpButton}
                    hitSlop={{top:150, bottom:150}}
                />
            </View>
    )
    return(
        <View style={styles.container}>
            {p1Screen()}
            <IconButton icon="restore" size={30} color={Colors.white} style={styles.reset_button} onPress={onClickReset}/>
            {p2Screen()}
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