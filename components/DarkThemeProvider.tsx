import { useContext, ReactChild, ReactNode } from 'react'
import { ThemeContext } from 'pages/_app'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "styles/theme"

const DarkThemeProvider = ({ children }: { children: ReactNode }) => {

    const { darkThemeEnabled } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
            {children}
        </ThemeProvider>
    )
}

export default DarkThemeProvider