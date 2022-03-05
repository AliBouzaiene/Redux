import './App.css';
import CreateTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {

  return (
    <div className="App">
      <CreateTask />      
      <ListTask />
    </div>
  );
}

export default App;
