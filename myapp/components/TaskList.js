import {FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem'
import { getTasks } from "../api";

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    const loadTasks = async () => {
        const data = await getTasks();
        setTasks(data)
    }
    useEffect(() => {
        loadTasks()
    }, []);

    const renderItem = ({ item }) => {
        return <TaskItem task={item} />
    }

    return (
        <FlatList
            style={{ width: '100%', backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 10, marginBottom: 10, elevation: 5, shadowColor: '#7371fc', shadowOpacity: 0.2, shadowRadius: 1.5, shadowOffset: { width: 0, height: 2 } }}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    onRefresh={()=> console.log("refreshing")}
                />
            }
        />
    )
}

export default TaskList