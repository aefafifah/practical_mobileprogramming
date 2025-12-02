import React, { createContext, useState, useContext } from 'react'; 
const NotesContext = createContext(); 
export const NotesProvider = ({ children }) => { 
  const [userNotes, setUserNotes] = useState([ 
    { noteId: 1, title: 'Note 1', content: 'Lorem ipsum...', status: 'Active', 
category: 'Work' }, 
    { noteId: 2, title: 'Note 2', content: 'Lorem ipsum...', status: 
'Inactive', category: 'Personal' }, 
    { noteId: 3, title: 'Note 3', content: 'Lorem ipsum...', status: 'Active', 
category: 'Work' }, 
    { noteId: 4, title: 'Note 4', content: 'Lorem ipsum...', status: 'Active', 
category: 'Study' }, 
  ]); 
  const [categories, setCategories] = useState(['Work', 'Personal', 'Study', 
'Others']); 
  const addNote = (note) => { 
    const newNote = { 
      ...note, 
      noteId: userNotes.length > 0 ? Math.max(...userNotes.map(n => n.noteId)) 
+ 1 : 1, 
    }; 
    setUserNotes([newNote, ...userNotes]); 
  }; 
  const updateNote = (noteId, updatedNote) => { 
    setUserNotes(userNotes.map(note => 
      note.noteId === noteId ? { ...note, ...updatedNote } : note 
    )); 
  }; 
  const deleteNote = (noteId) => { 
    setUserNotes(userNotes.filter(note => note.noteId !== noteId)); 
  }; 
  const addCategory = (newCategory) => { 
    if (!categories.includes(newCategory)) { 
      setCategories([...categories, newCategory]); 
    } 
  }; 
  return ( 
    <NotesContext.Provider value={{ 
      userNotes, 
      categories, 
      addNote, 
      updateNote, 
      deleteNote, 
      addCategory 
    }}> 
      {children} 
    </NotesContext.Provider> 
  ); 
}; 
export const useNotes = () => { 
  const context = useContext(NotesContext); 
  if (!context) { 
    throw new Error('useNotes must be used within NotesProvider'); 
  } 
  return context; 
}; 