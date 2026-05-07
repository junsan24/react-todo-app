import { ArrowDownWideNarrow } from "lucide-react"

const TaskControls = ({ showOnlyIncomplete, setShowOnlyIncomplete, sortTasks }) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', marginBottom: '5px', fontWeight: 'bold', justifyContent: 'flex-end'}}>
            <input
                type="checkbox"
                checked={showOnlyIncomplete}
                onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
            />
            <span style={{marginLeft: '5px'}}>Show Only Incomplete</span>
            <button onClick={sortTasks} style={{marginLeft: '5px', background: 'none', border: 'none', padding: '5px 5px', cursor: 'pointer'}}>
                <ArrowDownWideNarrow />
            </button>
        </div>
    )
}

export default TaskControls