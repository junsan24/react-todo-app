export const getStorageTasks = () => {
    const storedTasks = localStorage.getItem('tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
}

export const updateStorageTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}