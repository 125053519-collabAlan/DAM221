/*Importacion y validaciones*/
import { guardarItem, obtenerItem } from '../storage/localStorage';

const CLAVE_USUARIOS = 'usuarios';

export const validarUsuario = (nombre, edad) => {
  const nombreTexto = String(nombre ?? '').trim();
  const edadTexto = String(edad ?? '').trim();

  if (!nombreTexto || !edadTexto) {
    return 'Todos los campos son obligatorios.';
  }
  if (!/^\d+$/.test(edadTexto)) {
    return 'La edad debe ser un número entero.';
  }
  const edadNumero = Number(edadTexto);
  if (edadNumero < 1 || edadNumero > 120) {
    return 'La edad debe estar entre 1 y 120.';
  }
  return null;
};

/*Consultar y agregar */
export const obtenerUsuarios = async () => {
  const usuarios = await obtenerItem(CLAVE_USUARIOS);
  return usuarios || [];
};

export const agregarUsuario = async (nombre, edad) => {
  const error = validarUsuario(nombre, edad);
  if (error) {
    throw new Error(error);
  }

  const usuarios = await obtenerUsuarios();
  const nuevo = {
    id: Date.now().toString(),
    nombre: String(nombre).trim(),
    edad: Number(String(edad).trim()),
  };

  await guardarItem(CLAVE_USUARIOS, [...usuarios, nuevo]);
  return nuevo;
};

/*Actualizar y eliminar */
export const actualizarUsuario = async (id, nombre, edad) => {
  const error = validarUsuario(nombre, edad);
  if (error) {
    throw new Error(error);
  }

  const usuarios = await obtenerUsuarios();
  const existe = usuarios.some((u) => u.id === String(id));
  if (!existe) {
    throw new Error('El usuario ya no existe.');
  }

  const actualizados = usuarios.map((u) =>
    u.id === String(id)
      ? { ...u, nombre: String(nombre).trim(), edad: Number(String(edad).trim()) }
      : u
  );
  await guardarItem(CLAVE_USUARIOS, actualizados);
};

export const eliminarUsuario = async (id) => {
  const usuarios = await obtenerUsuarios();
  const restantes = usuarios.filter((u) => u.id !== String(id));
  await guardarItem(CLAVE_USUARIOS, restantes);
};