import React, { useState, useEffect } from 'react';
// removed local import
// removed local import
// removed local import

const App: React.FC = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="app">
      <h1>Gestor de Tarefas</h1>
      
      
      
    </div>
  );
};

export default App;