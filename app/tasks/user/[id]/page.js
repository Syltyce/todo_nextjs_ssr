import TaskList from "@/components/TaskList";

TaskList

export async function generateMetadata({ params }) {
    const userId = await GetUserTasks(params.id);
  
    return {
      title: `Tâches du user : ${params.id}`,
      description: `Voici la liste des tâches du user numéro ${params.id}`,
    };
  }

// Récupère la liste des tâches associées à un utilisateur selon son ID 
async function GetUserTasks(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?userId=${id}`,
    {
        cache: "force-cache",
    }
  );
  const tasks = await res.json();
  return tasks;
}

// Affiche la liste des tâches de l'utilisateur en question 
export default async function UserTasksPage({ params }) {
  const userId = params.id;
  const tasks = await GetUserTasks(params.id);
  console.log(userId);
  return (
    <div>
      <h1>Liste des tâches pour l'user {userId} </h1>
      
      <TaskList tasks={tasks} />
      
    </div>
  );
}
