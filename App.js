import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { createDndContext } from 'react-native-easy-dnd';
const { Provider, Draggable, Droppable } = createDndContext();
import PipiDrag from './PipiDrag';
import PipiDrop from './PipiDrop';

export default function App() {
  return (
    <Provider>
      <PipiDrop Droppable={Droppable}/>
      <PipiDrag Draggable={Draggable}/>
    </Provider>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
