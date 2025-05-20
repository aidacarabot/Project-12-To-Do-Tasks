const useHandleEnter = (onEnter) => {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onEnter(); // Ejecuta la función pasada como argumento
    }
  };

  return { handleKeyPress };
};

export default useHandleEnter;