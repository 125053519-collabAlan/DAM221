export const guardarItem = async (clave, valor) => {
  localStorage.setItem(clave, JSON.stringify(valor));
};

export const obtenerItem = async (clave) => {
  const texto = localStorage.getItem(clave);
  if (texto === null) return null;
  try {
    return JSON.parse(texto);
  } catch (error) {
    return null;
  }
};

export const eliminarItem = async (clave) => {
  localStorage.removeItem(clave);
};