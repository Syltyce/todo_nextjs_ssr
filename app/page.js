import TaskList from "@/components/TaskList";

// Affichage des métadonnées 
export const metadata = {
  title: "Liste de tâches",
  description: "Voici la liste de tâches à réaliser",
};

// Récupère la liste des tâches 
async function getTasks() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);

  const tasks = await res.json();
  return tasks;
}

// Appelle getTasks pour récupérer la liste des tâches 
export default async function Tasks() {
  const tasks = await getTasks();

  return (
    <div>
      <h1> Liste des tâches </h1>
      <TaskList tasks={tasks} />
    </div>
  );
}
