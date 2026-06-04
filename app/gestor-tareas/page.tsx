"use client";

import { useState } from "react";

type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
};

export default function Page() {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [tareas, setTareas] = useState<Tarea[]>([]);

  function nuevaTarea() {
    if (titulo.trim() === "" || descripcion.trim() === "") {
      return;
    }

    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: titulo.trim(),
      descripcion: descripcion.trim(),
    };

    setTareas([...tareas, nuevaTarea]);
    setTitulo("");
    setDescripcion("");
  }

  function eliminarTarea(id: number) {
    setTareas(tareas.filter((tarea) => tarea.id != id));
  }

  return (
    <div>
      <header className="h-[12vh] border text-center content-center">
        <h1 className="text-5xl font-semibold">Gestor de Tareas React</h1>
      </header>
      <main className="h-[88vh] flex justify-center gap-10">
        <div className="border h-1/2 w-1/3 flex flex-col justify-between items-center">
          <div className="h-1/2 flex flex-col">
            <input
              className="border"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título de la tarea"
            ></input>
            <textarea
              className="border resize-none"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripción de la tarea"
            ></textarea>
          </div>
          <button
            className="w-50 border hover:bg-gray-200"
            onClick={nuevaTarea}
          >
            Añadir
          </button>
        </div>
        <div className="border h-full w-1/3">
          {tareas.length === 0 ? (
            <p>No hay tareas</p>
          ) : (
            tareas.map((tarea) => (
              <article className="w-full border flex justify-between" key={tarea.id}>
                <div>
                  <h2>Tarea: {tarea.titulo}</h2>
                  <p>Descripción: {tarea.descripcion}</p>
                </div>
                <button className="border" 
                onClick={() => eliminarTarea(tarea.id)}>Borrar</button>
              </article>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
