import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
const GoalList = ({ goal, time, id }) => {
  return (
    <View style={styles.listItem} key={id}>
      <Text>{goal}</Text>
      <Text>{time}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    backgroundColor: 'rgba(200, 200, 200, 0.7)',
    padding: 10,
  },
})
export default GoalList
