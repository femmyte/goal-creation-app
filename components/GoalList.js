import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
const GoalList = ({ goal, time, id, onDelete }) => {
  const [deleteGoal, setDeleteGoal] = useState(false)
  return (
    <TouchableOpacity onPress={onDelete.bind(this, id)}>
      <View style={styles.listItem} key={id}>
        <Text>{goal}</Text>
        <Text>{time}</Text>
        {/* <Text>hello</Text> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'rgba(200, 200, 200, 0.7)',
    padding: 10,
    borderRadius: 8,
  },
  btn: {
    backgroundColor: 'transparent',
  },
})
export default GoalList
