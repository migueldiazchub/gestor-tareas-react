import { borrarTarea } from "./actions";

export function BotonBorrar({id} : {id: number}){
    return (
        <form action={borrarTarea} className="w-20 h-1/2 mt-1 mr-1">
            <input type="hidden" name="id" value={id}/>
            <button type="submit"
            className="w-full h-full rounded-sm bg-gray-600 text-gray-100 hover:bg-gray-400 hover:text-gray-800"
            >
            Borrar
            </button>
        </form>
    );
}