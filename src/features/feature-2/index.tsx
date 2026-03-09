import React, { useState } from 'react';
// removed local import

const Feature2: React.FC = () => {
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

  const handlePriorityChange = (event React.ChangeEvent<HTMLSelectElement>) => {
    setTask({ ...task, priority: event.target.value });
  };

  return (
    <div className="card">
      <h2>Definir Prioridade</h2>
      <form onSubmit={handleTaskSubmit}>
        <input
          type="text"
          name="title"
          value={task.title}
          onChangehandleTaskChange}
          placeholder="Título"
          className="input"
        />
        <select
          name="priority"
          value={task.priority}
          onChange={handlePriorityChange}
          className="input"
        >
          <option value="">Prioridade</option>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
        <button type="submit" className="button">
          Definir Prioridade
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title} - {task.priority}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature2;