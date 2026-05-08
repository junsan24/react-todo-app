import TaskItem from "./TaskItem"
import EditTaskForm from "./EditTaskForm"
import { useState } from "react"

const TaskList = ({ tasks, showOnlyIncomplete, toggleTaskCompletion, removeTask, updateTask }) => {
    const [editingTaskId, setEditingTaskId] = useState(null)

    return (
        <div>
            <ul style={{listStyle: 'none', padding: 0}}>
                {tasks.filter(task => !task.completed || !showOnlyIncomplete).map(task => (
                    <li key={task.id}
                        style={{marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', padding: '10px'}}
                    >   
                        {editingTaskId === task.id ? (
                            <EditTaskForm task={task} updateTask={updateTask} setEditingTaskId={setEditingTaskId} />
                        ) : (
                            <TaskItem setEditingTaskId={setEditingTaskId} removeTask={removeTask} key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList