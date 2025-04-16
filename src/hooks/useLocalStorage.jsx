import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  // Leer del localStorage si existe, de lo contrario usar el valor inicial
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;  // Parsear si existe, sino usar el valor por defecto
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;  // Si ocurre un error, usamos el valor inicial
    }
  });

  // Guardar en localStorage cuando el valor cambie
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));  // Guardamos el valor como string
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [key, storedValue]);  // Solo lo hacemos cuando el valor o la clave cambien

  return [storedValue, setStoredValue];  // Devolvemos el valor almacenado y la función para actualizarlo
};

export default useLocalStorage;