import TaskItem from "./TaskItem"
import EditTaskForm from "./EditTaskForm"

const TaskList = ({ tasks, showOnlyIncomplete }) => {
    return (
        <div>
            <ul style={{listStyle: 'none', padding: 0}}>
                {tasks.filter(task => !task.completed || !showOnlyIncomplete).map(task => (
                    <li key={task.id}
                        style={{marginBottom: '10px', border: '1px solid #ddd', borderRadius: '5px', padding: '10px'}}
                    >
                        <TaskItem key={task.id} task={task} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList