import cn from 'classnames'
import { useDispatch, connect } from 'react-redux'
import { Moon, Sun } from 'react-feather'
import { TOGGLE_DARKTHEME } from 'lib/actions'

const Toggle = ({ darkThemeEnabled }) => {
  const dispatch = useDispatch()

  return (
    <button aria-label='切换暗色模式' onClick={() => dispatch({ type: TOGGLE_DARKTHEME })} style={{ height: '30px' }} className={cn('my-auto', { 'bg-gray-100': !darkThemeEnabled })} >
      {darkThemeEnabled ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
}

const mapStateToProps = (state) => {
  const { darkThemeEnabled } = state.preferences
  return { darkThemeEnabled }
}

export default connect(mapStateToProps)(Toggle)