"use server"

import { revalidatePath } from "next/cache"
import { insertarTarea } from "@/lib/tareas-prisma"
import { eliminarTarea } from "@/lib/tareas-prisma"

export async function crearTarea(formData: FormData) {
  const titulo = formData.get("titulo")
  const descripcion = formData.get("descripcion")

  if (typeof titulo !== "string" || typeof descripcion !== "string") {
    return
  }

  if (titulo.trim() === "" || descripcion.trim() === "") {
    return
  }

  await insertarTarea(titulo.trim(), descripcion.trim())

  revalidatePath("/gestor-tareas")
}

export async function borrarTarea(formData: FormData) {
  console.log("ocurre el evento")
    const id = formData.get("id")
    //Da error por algún motivo pero al probarlo funcionaba correctamente
    const idint = parseInt(id);
    console.log(typeof idint);

    if(typeof idint !== "number"){
      console.log("error de tipo");
      return;
    }

    await eliminarTarea(idint);

    revalidatePath("/gestor-tareas");
}