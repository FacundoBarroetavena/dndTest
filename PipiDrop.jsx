import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

export default function PipiDrop({Droppable}) {
    return (
    
        <Droppable
            onEnter={() => {
                console.log('Draggable entered');
            }}
            onLeave={() => {
                console.log('Draggable left');
            }}
            onDrop={({ payload }) => {
                console.log('Draggable with the following payload was dropped', payload);
            }}
        >
            {({ active, viewProps }) => {
                return (
                    <Animated.View
                        {...viewProps}
                        style={[
                            {
                                width: 300,
                                height: 200,
                                backgroundColor: active
                                    ? "blue"
                                    : "green"
                            },
                            viewProps.style,
                        ]}
                    >
                        <Text style={{ fontWeight: "bold", color: "white" }}>Drop here</Text>
                    </Animated.View>
                );
            }}
        </Droppable>
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