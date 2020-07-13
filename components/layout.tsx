import { ThemeProvider } from 'styled-components'
import Meta from "./meta"
import { lightTheme, darkTheme } from "../styles/theme"
import { GlobalStyles } from '../styles/global'
import { useDarkMode } from "../lib/useDarkMode"
import Toggle from "./Toggle"
export const siteTitle = '兰天游 Day dreamer'

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, toggleTheme] = useDarkMode()
    const themeMode = theme === 'light' ? lightTheme : darkTheme
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <Meta />
            <Toggle theme={theme} toggleTheme={toggleTheme} />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
        </ThemeProvider>
    )
}