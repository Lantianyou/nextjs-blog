import Highlight, { defaultProps } from 'prism-react-renderer'
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";


const CodeBlock = ({ children, className }) => {
    const language = className.replace(/language-/, '')
    const themeContext = useContext(ThemeContext);
    const codeTheme = themeContext['theme'] === 'dark' ? nightOwl : nightOwlLight

    return (
        <Highlight {...defaultProps} code={children} theme={codeTheme} language={language}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={{ ...style, padding: '20px' }}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token, key })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    )
}

export default CodeBlock