import { createContext } from 'react'
const ThemeContext = createContext({
  activeTheme: 'neutral',
  setActiveTheme: () => {},
  darkMode: false,
  setDarkMode: () => {},
})
export default ThemeContext
