import Moon from 'components/icons/moon'
import Sun from 'components/icons/sun'
import { useDispatch, connect } from 'react-redux'
import { TOGGLE_DARKTHEME } from '../lib/actions'

const Toggle = ({ darkThemeEnabled }) => {
    const dispatch = useDispatch()

    return (
        <button aria-label="Toggle theme" onClick={() => dispatch({ type: TOGGLE_DARKTHEME })} className='w-8'>
            {darkThemeEnabled ? <Sun size={30} /> : <Moon size={30} />}
        </button>
    );
}

const mapStateToProps = (state) => {
    const { darkThemeEnabled } = state.preferences
    return { darkThemeEnabled }
}

export default connect(mapStateToProps)(Toggle)