import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"
import { useState } from "react"
import { getStorageTasks, updateStorageTasks } from "./utils/localstorageUtils"

const App = () => {
    const [tasks, setTasks] = useState(getStorageTasks())   
    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)

    const addTask = (title, priority) => {
        
        const newTask = {
            id: Date.now(),
            title,
            completed: false,
            priority
        }
        
        setTasks([...tasks, newTask])
        updateStorageTasks([...tasks, newTask])
    }

    const updateTask = (id, newTitle, newPriority) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, title: newTitle, priority: newPriority }
            }
            return task
        })
        setTasks(updatedTasks)
        updateStorageTasks(updatedTasks)
    }

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, completed: !task.completed }
            }
            return task
        })
        setTasks(updatedTasks)
        updateStorageTasks(updatedTasks)
    }

    const removeTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id)
        setTasks(updatedTasks)
        updateStorageTasks(updatedTasks)
    }

    const sortTasks = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            return a.priority - b.priority
        })
        setTasks(sortedTasks)
        updateStorageTasks(sortedTasks)
    }

    return (
        <div style={{fontFamily: 'Arial', maxWidth: '800px', margin: 'auto', padding: '20px'}}>
          <h1 style={{textAlign: 'center'}}>Todo App</h1>
          <TaskForm addTask={addTask} />
          <TaskControls showOnlyIncomplete={showOnlyIncomplete} setShowOnlyIncomplete={setShowOnlyIncomplete} sortTasks={sortTasks} />
          <TaskList updateTask={updateTask} removeTask={removeTask} toggleTaskCompletion={toggleTaskCompletion} showOnlyIncomplete={showOnlyIncomplete} tasks={tasks} />
        </div>
    )
}

export default App