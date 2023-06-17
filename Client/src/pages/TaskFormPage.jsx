import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { createTask, deleteTask, updateTask, getTasks } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success("Sala Actualizada con Exito", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createTask(data);
      toast.success("Sala Creada con Exito", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/tasks");
  });

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const res = await getTasks(params.id);
        setValue("nombre", res.data.nombre);
        setValue("description", res.data.description);
      }
    }
    loadTask();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Ingresa el nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.nombre && <span>Este campo es requerdido</span>}
        <textarea
          rows="3"
          placeholder="Descripcion"
          {...register("description", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        {errors.description && <span>Este campo es requerdido</span>}
        <button className="bg-indigo-500 p-3 rounded-lg block w-full mt-3">
          Guardar
        </button>
      </form>
      {params.id && (
        <div className="flex justify-end">
          <button
            className="bg-red-500 p-3 rounded-lg w-48 mt-3"
            onClick={async () => {
              const accepted = window.confirm(
                "Estas seguro que desea eliminar"
              );
              if (accepted) {
                await deleteTask(params.id);
                toast.success("Tarea Eliminada con Exito", {
                  position: "bottom-right",
                  style: {
                    background: "#101010",
                    color: "#fff",
                  },
                });
                navigate("/tasks");
              }
            }}
          >
            Borrar
          </button>
        </div>
      )}
    </div>
  );
}
