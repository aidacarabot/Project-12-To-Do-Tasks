import { useState } from 'react';

const useListNameEdit = (initialName, listId, dispatch) => {
  const [newListName, setNewListName] = useState(initialName);
  const [editingListName, setEditingListName] = useState(false);

  const editListName = () => {
    if (newListName.trim()) {
      dispatch({ type: 'EDIT_LIST_NAME', id: listId, name: newListName });
      setEditingListName(false);
    }
  };

  return { newListName, setNewListName, editingListName, setEditingListName, editListName };
};

export default useListNameEdit;