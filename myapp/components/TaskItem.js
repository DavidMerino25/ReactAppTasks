import { View, Text , StyleSheet} from 'react-native'
import React from 'react'



const TaskItem = ({task}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{task.title}</Text>
      <Text style={styles.itemDescription}>{task.description}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#7371fc',
        padding: 20,
        borderRadius: 8,
        marginVertical: 8,

    },
    itemTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    itemDescription: {
        fontSize: 16,
        color: '#e5d9f2'
    }

})

export default TaskItem