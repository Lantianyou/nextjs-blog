---
title: 博客功能
cover:
  image: ""
  description: ""
date: "2020-07-09"
author:
  name: "兰天游"
  picture: ""
excerpt: ""
---

## 功能

### 代码高亮

```javascript
export const getBlogsSlug = () => {
    const fileNames = fs.readdirSync(blogsDirectory)
    return fileNames
        .filter(fileName => fileName.includes('.md'))
        .map(fileName => fileName.replace('.md', ''))
}

const getBlogMetadata = (slug): BlogMetadata => {
    const fileDir = path.join(blogsDirectory, slug + '.md')
    const markdownWithMetaData = fs.readFileSync(fileDir, 'utf-8').toString()
    const { data } = matter(markdownWithMetaData)

    let meta = {
        slug,
        ...data,
    }

    return meta as BlogMetadata
}
```

### 嵌入 YouTube 视频

[Stan Druckmiller 美国养老金债务危机](https://www.youtube.com/watch?v=fbgIiAnpcPc)
<Youtube videoId="fbgIiAnpcPc"/>

### 嵌入 Twitter

<Tweet tweetId='1285964302441156610'>

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

Lift($L$) can be determined by Lift Coefficient ($C_L$) like the following equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

[Henry George](https://www.wikiwand.com/en/Henry_George_theorem#/:~:text=The%20Henry%20George%20theorem,%20named,of%20the%20last%20marginal%20investment)定律
