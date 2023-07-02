import { View, Text , StyleSheet, TouchableOpacity, Image  } from 'react-native'
import React from 'react'



const TaskItem = ({task ,handleDelete}) => {
  return (
    <View style={styles.itemContainer}>

     <TouchableOpacity style={styles.itemContainer_Text} >
     <Text style={styles.itemTitle}>{task.title}</Text>
      <Text style={styles.itemDescription}>{task.description}</Text>
      </TouchableOpacity>
      <TouchableOpacity  onPress={() => handleDelete(task.id)}>
        <Image source={require('../assets/borrar.png')} style={{width: 35, height: 35}}/> 
       
       </TouchableOpacity>
       

    </View>
  )
}
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: '#7371fc',
        padding: 20,
        borderRadius: 8,
        marginVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    itemContainer_Text: {
        maxWidth: '85%'
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