import { useDispatch } from 'react-redux'
import { TOGGLE_DARKTHEME } from '../lib/actions'

const Toggle = () => {
    const dispatch = useDispatch()
    return (
        <button className='w-1/6' onClick={() => dispatch({ type: TOGGLE_DARKTHEME })} >
            toggle
        </button>
    );
}



export default Toggle