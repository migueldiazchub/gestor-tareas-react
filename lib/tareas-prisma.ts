import prisma from "@/lib/prisma"

export async function obtenerTareas() {
  return prisma.tareas.findMany({
    orderBy: {
      id: "desc",
    },
  })
}

export async function insertarTarea(titulo: string, descripcion: string) {
  await prisma.tareas.create({
    data: {
      titulo,
      descripcion,
    },
  })
}