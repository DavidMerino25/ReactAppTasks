const API = 'http://10.0.0.7:3000/tasks'
export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const saveTask = async (newTask) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { Accept: "aplication/json", "Content-Type": 'application/json' },
        body: JSON.stringify(newTask)
    })
    return await res.json()
}
export const deleteTask = async (id) => {
     await fetch(`${API}/${id}`, {
        method: 'DELETE'
    })
}