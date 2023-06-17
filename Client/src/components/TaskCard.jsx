import {
  useNavigate,
  useNavigation,
  useNavigationType,
} from "react-router-dom";

export function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate(`/tasks/${task.id}`);
      }}
    >
      <h1 className="font-bold uppercase">{task.nombre}</h1>
      <h1 className="text-slate-400">{task.description}</h1>
    </div>
  );
}
