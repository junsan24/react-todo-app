import TaskForm from "./components/TaskForm"
import TaskControls from "./components/TaskControls"
import TaskList from "./components/TaskList"

const App = () => {
    return (
        <div>
          <h1 style={{textAlign: 'center'}}>Todo App</h1>
          <TaskForm />
          <TaskControls />
          <TaskList />
        </div>
    )
}

export default App