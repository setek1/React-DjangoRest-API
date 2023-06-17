import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import { TaskCard } from "./TaskCard";

export function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }
    loadTasks();
  }, []);
  return (
    <div className="grid  gap-3">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

{
  /* <table>
    //   <thead>
    //     <tr>
    //       <th>Sala</th>
    //       <th>Descripcion</th>
    //       <th>Estado</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {tasks.map((task) => (
    //       <tr key={task.id}>
    //         <td>{task.nombre}</td>
    //         <td>{task.description}</td>
    //         <td>{task.done}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table> */
}
