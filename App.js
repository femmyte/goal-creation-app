import { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from 'react-native'
import GoalList from './components/GoalList'
import GoalInput from './components/GoalInput'
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

  const [contents, setContents] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)
  const handleAdd = ([goal, setGoal]) => {
    let newContent = { goal, formattedTime, id: seconds }
    setContents((prevState) => [...prevState, newContent])
    setGoal('')
  }
  const handleDelete = (id) => {
    const newContent = contents.filter((content) => {
      if (id != content.id) {
        return content
      }
    })
    setContents(newContent)
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => setIsShowModal(true)} title='Add Goal' />
      {/* <Text style={styles.head}>ENTER YOUR GOAL HERE!</Text> */}
      <GoalInput visible={isShowModal} onAddGoal={handleAdd} />
      {contents.length < 1 ? (
        <Text style={styles.info}>You don't have any goal yet</Text>
      ) : (
        <FlatList
          data={contents}
          renderItem={(itemData) => (
            <GoalList
              goal={itemData.item.goal}
              time={itemData.item.formattedTime}
              id={itemData.item.id}
              onDelete={handleDelete}
            />
          )}
        />
      )}
      {/* <ScrollView>
        {contents &&
          contents.map((content) => {
            return (
              <View style={styles.listItem} key={content.seconds}>
                <Text>{content.goal}</Text>
                <Text>{content.formattedTime}</Text>
              </View>
            )
          })}
      </ScrollView> */}
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
  info: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
