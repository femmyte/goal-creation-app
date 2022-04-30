import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'
const GoalInput = ({ onAddGoal }) => {
  const [goal, setGoal] = useState('')
  const handleChange = (enteredText) => {
    setGoal(enteredText)
  }

  return (
    <View style={styles.screen}>
      <TextInput
        placeholder='Enter Your Goal'
        style={styles.input}
        value={goal}
        onChangeText={handleChange}
      />
      <Button title='Add' onPress={onAddGoal.bind(this, [goal, setGoal])} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginVertical: 10,
  },
  button: {
    padding: 10,
    color: 'red',
    backgroundColor: 'green',
  },
})
export default GoalInput
