import React, { useState } from 'react';
// removed local import

const Feature1: React.FC = () => {
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

  return (
    <div className="card">
      <h2>Criar Tarefa</h2>
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
          type="text"
          name="description"
          value={task.description}
          onChange={handleTaskChange}
          placeholder="Descrição"
          className="input"
        />
        <select
          name="priority"
          value={task.priority}
          onChange={handleTaskChange}
          className="input"
        >
          <option value="">Prioridade</option>
          <option value="alta">Alta</option>
          <option value="média">Média</option>
          <option value="baixa">Baixa</option>
        </select>
        <button type="submit" className="button">
          Criar Tarefa
        </button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature1;