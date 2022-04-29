import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default function App() {
  const [goal, setGoal] = useState('')
  const [contents, setContents] = useState([])
  const handleChange = (enteredText) => {
    // e.preventDefault()
    setGoal(enteredText)
  }
  const handleAdd = () => {
    let newContent = { goal }
    setContents((prevState) => [...prevState, newContent])
    setGoal('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <TextInput
          placeholder='Enter Your Goal'
          style={styles.input}
          value={goal}
          onChangeText={handleChange}
        />
        <Button title='Add' onPress={handleAdd} />
      </View>
      <View>
        {contents &&
          contents.map((content) => {
            return <Text>{content.goal}</Text>
          })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 50,
  },
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    // marginBottom: 1,
    width: '80%',
  },
  button: {
    padding: 10,
    color: 'red',
    backgroundColor: 'green',
  },
})
