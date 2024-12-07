import Link from "next/link";

// Ce composant prend en entrée un tableau de tâches (tasks) et les affiche
export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link href={`/tasks/task/${task.id}`}>
            {task.completed ? <strong>[✔]</strong> : <strong>[ ]</strong>}{" "}
            {task.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
