import { Trash, Pencil } from 'lucide-react'

const TaskItem = ({ task, toggleTaskCompletion }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
            <input 
                type="checkbox" 
                checked={task.completed} 
                readOnly 
                style={{marginRight: '10px'}} 
                onClick={() => toggleTaskCompletion(task.id)}
            />
            <span style={{textDecoration: task.completed ? 'line-through' : 'none', display: 'flex', alignItems: 'center'}}>
                {task.title}
                 <span style={{marginLeft: '10px', fontSize: '12px', fontWeight: 'bold', color: 'gray', border: '1px solid gray', padding: '4px 8px', borderRadius: '50%', backgroundColor: '#6f42c1', color: 'white'}}>
                    {task.priority}
                </span>
            </span>
            <button style={{marginLeft: 'auto', backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer'}}>
                <Pencil size={16} />
            </button>
            <button style={{marginLeft: '5px', backgroundColor: '#dc3545', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer'}}>
                <Trash size={16} />
            </button>
        </div>
    )
}

export default TaskItem