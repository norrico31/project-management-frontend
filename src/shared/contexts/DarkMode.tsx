import { useState, useContext, createContext, ReactNode } from 'react'

const ThemeCtx = createContext<{
    theme: boolean;
    toggleTheme: () => void

}>({
    theme: false,
    toggleTheme: () => null,
})

export const useThemeCtx = () => useContext(ThemeCtx)

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setDark] = useState(() => {
        const darkModeFromStorage = localStorage.getItem('theme')
        return darkModeFromStorage != null ? JSON.parse(darkModeFromStorage) : false
    })
    function toggleTheme() {
        const toggleTheme = !theme
        setDark(toggleTheme)
        localStorage.setItem('theme', JSON.stringify(toggleTheme))
    }
    return <ThemeCtx.Provider value={{ theme, toggleTheme }}>{children}</ThemeCtx.Provider>
}