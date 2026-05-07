import { Plus } from 'lucide-react'
import { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [newTask, setNewTask] = useState('')
    const [priority, setPriority] = useState(1)

    const handleSubmit = () => {
        
        if(newTask.trim()) {
            addTask(newTask, priority)
        }

        setNewTask('')
        setPriority(1)
    }

    return (
        <div>
            <div style={{display: "flex", gap: "0.5rem"}}>
                <input value={newTask} onChange={(e) => setNewTask(e.target.value)} type="text" placeholder="Enter task..." style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd'}} />
                <input value={priority} onChange={(e) => setPriority(Number(e.target.value))} type="number" placeholder="Priority (1-10)" style={{width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ddd'}} />
            </div>
            <div onClick={handleSubmit} style={{textAlign: 'center', cursor: 'pointer', borderRadius: '10px', backgroundColor: '#077BFF', display: 'block', width: '50px', margin: '5px auto', color: 'white'}}>
                <Plus />
            </div>
        </div>
    )
}        

export default TaskForm