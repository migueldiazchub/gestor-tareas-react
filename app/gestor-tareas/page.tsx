import { obtenerTareas } from "@/lib/tareas-prisma"
import { TareaForm } from "./TareaForm"
import { BotonBorrar } from "./BotonBorrar";
import { borrarTarea } from "./actions";


export default async function Page() {
  const tareas = await obtenerTareas();

  return (
    <div className="text-gray-100">
      <header className="h-[15vh] text-center content-center bg-gray-900">
        <h1 className="text-5xl font-semibold">Gestor de Tareas React</h1>
      </header>
      <main className="h-[85vh] pt-[5vh] flex justify-center gap-10 bg-gray-600">
        <TareaForm />
        <div className="border h-4/5 w-1/3 rounded-sm overflow-auto bg-gray-500">
          <h2 className="w-full h-20 rounded-t-sm text-3xl text-center content-center bg-gray-700">
            <strong>Tareas</strong>
          </h2>
          {tareas.length === 0 ? (
            <p className="text-center text-xl">No hay tareas</p>
          ) : (
            <div className="flex flex-col p-2 gap-2">
              {tareas.map((tarea) => (
                <article
                  className="w-full border rounded-sm flex justify-between bg-gray-200 text-gray-800"
                  key={tarea.id}
                >
                  <div className="w-full">
                    <h2 className="pl-1">
                      <strong>Tarea:</strong> {tarea.titulo}
                    </h2>
                    <p className="pl-1">
                      <strong>Descripción:</strong> {tarea.descripcion}
                    </p>
                  </div>
                  <BotonBorrar id={tarea.id} />
                </article>
              ))}
            </div>
            
          )}
        </div>
      </main>
    </div>
  );
}
