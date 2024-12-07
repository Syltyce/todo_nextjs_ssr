// Affichage des métadonnées 
export async function generateMetadata({ params }) {
    const task = await getTask(params.id);
  
    return {
      title: `Tâches n° : ${params.id}`,
      description: `Voici les détails de la tâche suivante : ${task.title}`
    };
  }

// Récupère le détail d'une tâche selon son ID 
async function getTask(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`,
    {
        cache: "force-cache",
    }
  );

  const Task = await res.json();
  return Task;
}

// Affiche le détail de la tâche en question 
export default async function Task({ params }) {
  const task = await getTask(params.id);

  return (
    <div>
    <h1> Détails de la tâche </h1>
    <h2> Nom de la tâche : {task.title} / <strong> ID : </strong> {task.id} </h2> 
    </div>

  );
}
