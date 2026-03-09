interface Task {
  id: number;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
}

interface TaskList {
  tasks: Task[];
}

interface Error {
  message: string;
}