import { Tweet } from 'react-twitter-widgets'
import MarkDownContent from 'components/markdown'
import YouTube from 'react-youtube';
import CodeBlock from 'components/CodeBlock'

export default function () {
    return (
        <>
            {/* <MarkDownContent title={meta.title} date={meta.date} slug={'../feature'}> */}

                ## 插入视频

            <div><YouTube videoId="2g811Eo7K8U" /></div>
            {/* ## 代码高亮和复制





Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.
$$
L = \frac{1}{2} \rho v^2 S C_L
$$

## 嵌入twitter */}

            <Tweet tweetId="1285964302441156610" />
            {/* </MarkDownContent> */}
        </>
    )
}

