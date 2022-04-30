import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'
const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [goal, setGoal] = useState('')
  const handleChange = (enteredText) => {
    setGoal(enteredText)
  }

  return (
    <Modal visible={visible} animationType='slide' style={styles.modal}>
      <View style={styles.screen}>
        <TextInput
          placeholder='Enter Your Goal'
          style={styles.input}
          value={goal}
          onChangeText={handleChange}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button
              title='Add'
              onPress={onAddGoal.bind(this, [goal, setGoal])}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  screen: {
    // flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginVertical: 10,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '60%',
    marginTop: 10,
  },
  button: {
    width: '40%',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // height:
  },
})
export default GoalInput
