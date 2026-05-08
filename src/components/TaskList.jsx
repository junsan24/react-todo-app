import TaskItem from "./TaskItem"
import EditTaskForm from "./EditTaskForm"

const TaskList = ({ tasks, showOnlyIncomplete, toggleTaskCompletion, removeTask }) => {
    return (
        <div>
            <ul style={{listStyle: 'none', padding: 0}}>
                {tasks.filter(task => !task.completed || !showOnlyIncomplete).map(task => (
                    <li key={task.id}
                        style={{marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', padding: '10px'}}
                    >
                        <TaskItem removeTask={removeTask} key={task.id} task={task} toggleTaskCompletion={toggleTaskCompletion} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList