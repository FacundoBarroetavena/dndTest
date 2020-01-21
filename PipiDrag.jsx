import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function PipiDrag({Draggable}) {
    return (
        <View style={styles.container}>
    
          <Draggable
            onDragStart={() => {
              console.log("draggin")
            }}
            onDragEnd={() => {
              console.log("not draggin")
            }}
            payload={"hola"}>
    
            {({ viewProps }) => {
              return (
                <Animated.View {...viewProps}>
                  <Text>Open up App.js to start working on your app!</Text>
                </Animated.View>
              )
            }}
          </Draggable>
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });