

import './App.css';

import Task from './components/Task';


function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today">
        wash dishes 
        </Task>
      <Task title="Laundry" deadline="Tomorrow">
        Fold laundry and put away
    </Task>
      <Task title="Tidy" deadline="Today">
        Tidy bedroom
        </Task>
    </div>
  );
}

export default App;
