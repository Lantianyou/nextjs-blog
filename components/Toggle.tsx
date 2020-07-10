import { func, string } from 'prop-types';
import { ReactComponent as MoonIcon } from '../public/icons/night.svg';
import { ReactComponent as SunIcon } from '../public/icons/sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light'
    return (
        <button onClick={toggleTheme}>
            <SunIcon />
            <MoonIcon />
        </button>
    )
}

Toggle.prototype = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle