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
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // flex: 1,
          }}
        >
          <Button
            title='CANCEL'
            color='red'
            style={styles.button}
            onPress={onCancel}
          />
          <Button
            title='Add'
            style={styles.button}
            onPress={onAddGoal.bind(this, [goal, setGoal])}
          />
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
  },
  button: {
    padding: 10,
    marginRight: 10,
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    // height:
  },
})
export default GoalInput
