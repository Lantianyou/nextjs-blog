import { useContext, useState } from "react";
// import { ThemeContext } from 'styled-components';
import CopyToClipboard from "react-copy-to-clipboard";
// import { Fade } from 'react-reveal'
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import nightOwl from "prism-react-renderer/themes/nightOwl";
import nightOwlLight from "prism-react-renderer/themes/nightOwlLight";
import Message from "components/message";
import ThemeContext from "components/theme/theme-context";

const CodeBlock = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  const language = className.replace(/lang-/, "") as Language;
  const [darkThemeEnabled] = useContext(ThemeContext);
  const codeTheme = darkThemeEnabled ? nightOwlLight : nightOwl;
  const text = children.toString();
  const [copied, setCopied] = useState(false);

  const copy = (
    <div className="text-center py-4">
      <CopyToClipboard text={text} onCopy={() => setCopied(true)}>
        <button aria-label="复制代码块">复制</button>
      </CopyToClipboard>
    </div>
  );

  return (
    <div>
      {copied ? (
        // <Fade top distance='10px'>
        <Message message="已复制" newMessage={false} />
      ) : (
        copy
      )}
      <Highlight
        {...defaultProps}
        code={children}
        theme={codeTheme}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style, padding: "20px" }}>
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
    </div>
  );
};

export default CodeBlock;
