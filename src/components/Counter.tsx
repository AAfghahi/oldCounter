import React from 'react';
import { Text, View } from 'react-native';


const Counter = ({route}) => {
    return(
        <View>
            <Text>
                Well you got here and there are {route.params.players} players
            </Text>
        </View>
    )
}

export default Counter;