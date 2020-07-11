import { func, string } from 'prop-types';

const Toggle = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
        <button onClick={toggleTheme} >
            toggle
        </button>
    );
}

Toggle.prototype = {
    theme: string.isRequired,
    toggleTheme: func.isRequired
}

export default Toggle