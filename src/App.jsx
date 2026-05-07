import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"
import { useState } from "react"

const App = () => {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Buy Groceries', completed: false, priority: '4' },
        { id: 2, title: 'Have a walk', completed: true, priority: '2' },
        { id: 3, title: 'Read a book', completed: false, priority: '1' }
    ])

    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)

    const sortTasks = () => {
        const sortedTasks = [...tasks].sort((a, b) => {
            return a.priority - b.priority
        })
        setTasks(sortedTasks)
    }


    return (
        <div style={{fontFamily: 'Arial', maxWidth: '800px', margin: 'auto', padding: '20px'}}>
          <h1 style={{textAlign: 'center'}}>Todo App</h1>
          <TaskForm />
          <TaskControls showOnlyIncomplete={showOnlyIncomplete} setShowOnlyIncomplete={setShowOnlyIncomplete} sortTasks={sortTasks} />
          <TaskList showOnlyIncomplete={showOnlyIncomplete} tasks={tasks} />
        </div>
    )
}

export default App