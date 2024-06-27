import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const modeContext = createContext('');

export default function ModeContext({children}) {

    const [darkMode, setdarkMode] = useState(false);

  return (
    <modeContext.Provider value={{darkMode ,setdarkMode}}>
        {children}
    </modeContext.Provider>
  )
}
