import { Check } from 'lucide-react'
import { useState } from 'react'

const EditTaskForm = ({ task, updateTask, setEditingTaskId }) => {
    const [editedTitle, setEditedTitle] = useState(task.title)
    const [editedPriority, setEditedPriority] = useState(task.priority)

    const editTask = () => {
        
        if(editedTitle.trim() !== '') {
            updateTask(task.id, editedTitle, editedPriority)
        }

        setEditingTaskId(null)
    }
    
    return (
        <div>
            <input type="text" value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} style={{marginRight: '10px', padding: '5px', flex: 1}} />
            <input type="text" value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)} style={{marginRight: '10px', padding: '5px', width: '80px'}} />
            <button onClick={editTask} style={{backgroundColor: 'green', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px', cursor: 'pointer'}}>
                <Check size={16} />
            </button>
        </div>
    )
}

export default EditTaskForm