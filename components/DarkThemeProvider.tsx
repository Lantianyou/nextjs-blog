import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from "../styles/theme"
import { useSelector } from 'react-redux'

const DarkThemeProvider = ({ children }) => {
    const darkThemeEnabled = useSelector((state) => state.preferences.darkThemeEnabled)
    return (<ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
        {children}
    </ThemeProvider>)
}

export default DarkThemeProvider