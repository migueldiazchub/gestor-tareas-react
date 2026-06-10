import { crearTarea } from "./actions";

export function TareaForm(){
    return (
        <form action={crearTarea} className="h-1/2 w-1/3 pb-5 border rounded-sm flex flex-col justify-between items-center bg-gray-500">
          <h2 className="w-full h-20 text-3xl rounded-t-sm text-center content-center bg-gray-700">
            <strong>Formulario</strong>
          </h2>
          <div className="w-2/3 h-1/3 flex flex-col justify-between">
            <input
              className="pl-2 border rounded-md bg-gray-200 text-gray-800 placeholder:text-gray-400"
              name="titulo"
              placeholder="Título de la tarea"
            ></input>
            <textarea
              className="h-2/3 pl-2 border rounded-md resize-none bg-gray-200 text-gray-800 placeholder:text-gray-400"
              name="descripcion"
              placeholder="Descripción de la tarea"
            ></textarea>
          </div>
          <button
            className="w-50 h-1/6 rounded-sm bg-gray-600 text-gray-100 hover:bg-gray-400 hover:text-gray-800"
            type="submit">
            Añadir
          </button>
        </form>
    )
}