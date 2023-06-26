import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({ tasks }) => {
    const renderItem = ({ item }) => {
        return<TaskItem task={item} />
    }
    return (
        <FlatList
            style={{ width: '100%', backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 10, marginBottom: 10, elevation: 5, shadowColor: '#7371fc', shadowOpacity: 0.2, shadowRadius: 1.5, shadowOffset: { width: 0, height: 2 } }}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
        />
    )
}

export default TaskList