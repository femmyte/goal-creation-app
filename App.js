import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
} from 'react-native'

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

  const [goal, setGoal] = useState('')
  const [contents, setContents] = useState([])
  // const date = new Date().getTime().toLocaleString()
  const handleChange = (enteredText) => {
    // e.preventDefault()
    setGoal(enteredText)
  }
  const handleAdd = () => {
    let newContent = { goal, formattedTime, seconds }
    setContents((prevState) => [...prevState, newContent])
    setGoal('')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.head}>ENTER YOUR GOAL HERE!</Text>
      <View style={styles.screen}>
        <TextInput
          placeholder='Enter Your Goal'
          style={styles.input}
          value={goal}
          onChangeText={handleChange}
        />
        <Button title='Add' onPress={handleAdd} />
      </View>
      <ScrollView>
        {contents &&
          contents.map((content) => {
            return (
              <View style={styles.listItem} key={content.seconds}>
                <Text>{content.goal}</Text>
                <Text>{content.formattedTime}</Text>
              </View>
            )
          })}
      </ScrollView>
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
  head: {
    textAlign: 'center',
    marginVertical: 30,
    fontSize: 20,
    fontWeight: 'bold',
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
    marginVertical: 10,
  },
  button: {
    padding: 10,
    color: 'red',
    backgroundColor: 'green',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'rgba(200, 200, 200, 0.7)',
    padding: 10,
  },
})
