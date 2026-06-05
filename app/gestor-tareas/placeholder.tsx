"use client";

import { useState } from "react";

type Tarea = {
  id: number;
  titulo: string;
  descripcion: string;
};


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