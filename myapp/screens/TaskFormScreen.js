import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { saveTask } from '../api'
const TaskFormScreen = ({navigation}) => {
  const [task, setTask] = useState({
    title: '',
    description: ''
  })

  const handleChange = (name, value) => setTask({ ...task, [name]: value })
  const handleSubmit = () => {
    saveTask(task)
    navigation.navigate('HomeScreen')
  }

  return (
    <Layout>
      <TextInput
        style={styles.inputTitle}
        placeholder="Write a Title"
        placeholderTextColor={'#e5d9f2'}
        onChangeText={(text) => handleChange('title', text)}

      />
      <TextInput
        style={styles.input}
        placeholder="Write a description"
        placeholderTextColor={'#e5d9f2'}
        onChangeText={(text) => handleChange('description', text)} />


      <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit} >
        <Text style={styles.buttonSave_Text}>Save Task</Text>
      </TouchableOpacity>

      <Image source={require('../assets/icontask.png')} style={{ width: 400, height: 400, alignSelf: 'center' }} />
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
    height: 50,
    color: '#7371fc',
    fontWeight: 'bold',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#7371fc',
    shadowOpacity: 1,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 2 },
    textAlign: 'center'
  },
  input: {
    width: '90%',
    backgroundColor: '#fff',
    fontSize: 16,
    marginBottom: 15,
    borderColor: 'black',
    height: 50,
    color: '#7371fc',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#7371fc',
    shadowOpacity: 1,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 2 },
    textAlign: 'center'
  },
  buttonSave: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#7371fc',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    elevation: 5,
    shadowColor: '#7371fc',
    shadowOpacity: 1,
    shadowRadius: 1.5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonSave_Text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  }
})

export default TaskFormScreen