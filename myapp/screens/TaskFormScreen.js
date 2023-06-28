import { View, Text, TextInput, StyleSheet, Image} from 'react-native'
import React from 'react'
import Layout from '../components/Layout'
const TaskFormScreen = () => {
  return (
    <Layout>
      <TextInput
        style={styles.inputTitle }
        placeholder="Write a Title" />
      <TextInput 
      style={styles.input}
      placeholder="Write a description" />
      <Image source={require('../assets/icontask.png')} style={{width: 400, height: 400, alignSelf: 'center'}} />
    </Layout>
  )
}
const styles = StyleSheet.create({
  inputTitle: {
    width: '90%',
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 15,
    borderColor: 'black',
    height: 45,
    color: '#7371fc',
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#7371fc', 
    shadowOpacity: 1, 
    shadowRadius: 1.5, 
    shadowOffset: { width: 0, height: 2 },
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 15,
    borderColor: 'black',
    height: 45,
    color: '#7371fc',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#7371fc', 
    shadowOpacity: 1, 
    shadowRadius: 1.5, 
    shadowOffset: { width: 0, height: 2 },
  
    
  }
})

export default TaskFormScreen