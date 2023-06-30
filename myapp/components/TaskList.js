import { FlatList, RefreshControl } from 'react-native'
import React, { useState, useEffect } from 'react'
import TaskItem from './TaskItem'
import { getTasks } from "../api";
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TaskList = () => {
    const [tasks, setTasks] = useState([])
    const [refresing, setRefresing] = useState(false)

    const loadTasks = async () => {
        const data = await getTasks();
        console.log("loaded");
        setTasks(data)
    }
    useEffect(() => {
        loadTasks()
    }, []);

    const renderItem = ({ item }) => {
        return <TaskItem task={item} />
    }
    const onRefresh = React.useCallback(async () => {
        setRefresing(true)
        await loadTasks()
        setRefresing(false)
    })


    return (
        <FlatList
            style={{ width: '100%', backgroundColor: '#fff', padding: 10, borderRadius: 8, marginTop: 10, marginBottom: 10}}
            data={tasks}
            keyExtractor={(item) => item.id + ''}
            renderItem={renderItem}
            refreshControl={
                <RefreshControl
                    refreshing={refresing}
                    colors={["#9Bd35A"]}
                    onRefresh={onRefresh}
                />
            }
        />
    )
}

export default TaskList