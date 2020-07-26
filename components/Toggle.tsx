import {Moon, Sun} from 'react-feather'
import { useDispatch, connect } from 'react-redux'
import { TOGGLE_DARKTHEME } from 'lib/actions'

const Toggle = ({ darkThemeEnabled }) => {
  const dispatch = useDispatch()

  return (
    <button aria-label="Toggle theme" onClick={() => dispatch({ type: TOGGLE_DARKTHEME })} className='w-8'>
      <style jsx>{`
            --bottom-color: #999;
            --right-color: #ddd;
            --top-color: #ccc;
            button {
              background: var(--top-color);
              box-shadow:
                1px 0   0 var(--right-color),
                1px 1px 0 var(--bottom-color),
                2px 1px 0 var(--right-color),
                2px 2px 0 var(--bottom-color),
                3px 2px 0 var(--right-color),
                3px 3px 0 var(--bottom-color),
                4px 3px 0 var(--right-color),
                4px 4px 0 var(--bottom-color),
                5px 4px 0 var(--right-color),
                5px 5px 0 var(--bottom-color),
                6px 5px 0 var(--right-color),
                6px 6px 0 var(--bottom-color),
                7px 6px 0 var(--right-color),
                7px 7px 0 var(--bottom-color),
                8px 7px 0 var(--right-color),
                8px 8px 0 var(--bottom-color);
              transition: 
                box-shadow 0.2s,
                transform 0.15s;
              }
              button:hover {
                outline: 0;
                box-shadow:
                  1px 0   0 var(--right-color),
                  1px 1px 0 var(--bottom-color),
                  2px 1px 0 var(--right-color),
                  2px 2px 0 var(--bottom-color),
                  3px 2px 0 var(--right-color),
                  3px 3px 0 var(--bottom-color),
                  4px 3px 0 var(--right-color),
                  4px 4px 0 var(--bottom-color);
                  transform: translate(3px, 3px);
                }
            `}</style>
      {darkThemeEnabled ? <Sun size={30} /> : <Moon size={30} />}
    </button>
  );
}

const mapStateToProps = (state) => {
  const { darkThemeEnabled } = state.preferences
  return { darkThemeEnabled }
}

export default connect(mapStateToProps)(Toggle)