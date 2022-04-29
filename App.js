import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default function App() {
  const [text, setText] = useState('Click to see my name')
  return (
    <View style={styles.container}>
      <View>
        <TextInput />
        <Button title='Add' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fab',
  },
})
