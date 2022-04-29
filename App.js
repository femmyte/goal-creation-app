import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Button, Text, TextInput, View } from 'react-native'

export default function App() {
  let date = new Date()
  var hours = date.getHours()
  var ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12
  var minutes = '0' + date.getMinutes()
  var seconds = '0' + date.getSeconds()
  // Will display time in 10:30:23 format
  // hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
  var formattedTime = hours + ':' + minutes.substr(-2) + ampm
  console.log(formattedTime)

  const [goal, setGoal] = useState('')
  const [contents, setContents] = useState([])
  // const date = new Date().getTime().toLocaleString()
  const handleChange = (enteredText) => {
    // e.preventDefault()
    setGoal(enteredText)
  }
  const handleAdd = () => {
    let newContent = { goal, formattedTime }
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
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10,
                }}
              >
                <Text>{content.goal}</Text>
                <Text>{content.formattedTime}</Text>
              </View>
            )
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
