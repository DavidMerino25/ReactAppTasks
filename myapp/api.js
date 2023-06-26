const API = 'http://10.0.0.7:3000/tasks'
export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
 
    }
