import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
 
const height = Dimensions.get('window').height;
const width = (Dimensions.get('window').width) / 2.5
const HomeScreen = ({navigation}) => {
  const Button = (players) => (
    <TouchableOpacity
    style={styles.button}
    onPress={() => navigation.navigate('Counter', {players: players})}
    >
      <Text style={styles.buttonText}> {players} </Text>
    </TouchableOpacity>
  )
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#FF9AA2','#FFB7B2','#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA','transparent']}
      style={styles.background}
      />
      <Text style={styles.text}>How Many Players?</Text>
      {Button(1)}
      {Button(2)}
      {Button(3)}
      {Button(4)}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ce93d8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: height,
  },
  text: {
    color:'grey',
    backgroundColor:'transparent',
    fontSize:42,
    paddingBottom:8,
    marginBottom:24
  },
  button: {
    backgroundColor:'#E1F7EF',
    borderRadius:10,
    marginTop:16,
    width:width,
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderColor: '#6D8C81',
    borderWidth:1,
  },
  buttonText: {
    color: '#743A2E',
    fontSize:24
  }
});