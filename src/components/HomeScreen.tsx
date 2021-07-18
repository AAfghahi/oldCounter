import React from 'react';
import { Button, StyleSheet, Text, View, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
 
const height = Dimensions.get('window').height;
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LinearGradient
      colors={['#22c1c3','#fdbb2d','#7332c1', 'transparent']}
      style={styles.background}
      />
      <Text style={styles.text}>How Many Players</Text>
      <Button
        title="2"
        onPress={() => navigation.navigate('Counter', {players: 2})}
        />
      <Button
      title="4"
      onPress={() => navigation.navigate('Counter', {players: 4})}
      />
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
    color:'white',
    backgroundColor:'transparent',
    fontSize:30,
    paddingBottom:8,
  }
});