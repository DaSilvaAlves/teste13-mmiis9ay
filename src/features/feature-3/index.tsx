import React, { useState } from 'react';
// removed local import

const Feature3: React.FC = () => {
  const [task, setTask] = useState<Task>({
    id: 0,
    title: '',
    description: '',
    priority: '',
    completed: false,
  });

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, [event.target.name]: event.target.value });
  };

  const handleTaskSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask({
      id: 0,
      title: '',
      description: '',
      priority: '',
      completed: false,
    });
  };

  const handleCompletedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask({ ...task, completed: event.target.checked });
  };

  return (
    <div className="card">
      <h2>Marcar como Concluída</h2>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChange={handleTaskChange}
          placeholder="Título"
          className="input"
        />
        <input
          type="checkbox"
          name="completed"
          checked={task.completed}
          onChange={handleCompletedChange}
          className="input"
        />
        <button type="submit" className="button">
          Marcar como Concluída
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.completed ? 'Concluída' : 'Não Concluída'}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature3;