import { useContext, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeContext from 'components/theme-context'
import { lightTheme, darkTheme } from "styles/theme"

const DarkThemeProvider = ({ children }: { children: ReactNode }) => {

    const [darkThemeEnabled] = useContext(ThemeContext)

    return (
        <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    )
}

export default DarkThemeProvider