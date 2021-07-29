import './App.css';
import Header from './Header'
import AddTask from './AddTask'
import TaskList from './TaskList'
import {Provider} from './Context'
import DeleteAll from './DeleteAll'

function App() {
  return (
    <Provider>
    <div className="app-container">
      <Header></Header>
      <AddTask></AddTask>
      <DeleteAll></DeleteAll>
      <TaskList></TaskList>
    </div>
    </Provider>
  );
}

export default App;
