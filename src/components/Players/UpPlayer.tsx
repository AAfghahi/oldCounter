import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, View, Dimensions, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';

const height = (Dimensions.get('window').height)/3;

interface UpScreenTypes{
    life: number,
    newGame: boolean,
}

const UpScreen = (props: UpScreenTypes) => {
    const [life, setLife] = useState<number>(props.life)
    
    useEffect(()=>{
        setLife(props.life)
    }, [props.newGame])

    return(
        <View style={styles.background}>
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
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>-5</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setLife(life - 1)}
                    style={styles.lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>-1</Text>
                </TouchableOpacity>
                <Text style={[styles.text, {transform: [{rotate: '180deg'}]}]}>
                    {life}
                </Text>
                <TouchableOpacity
                    onPress={() => setLife(life + 1)}
                    style={styles.lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>+1</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setLife(life + 5)}
                    style={styles.lifeButtons}
                >
                    <Text style={[styles.ButtonText, {transform: [{rotate: '180deg'}]}]}>+5</Text>
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

export default UpScreen;

const styles = StyleSheet.create({
    text: {
        fontSize:64
    },
    background:{
        flex:1,
        backgroundColor:'#75E6DA',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection:'row',
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
        backgroundColor:'#00B7AF',
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
});