import firebase from 'lib/firebase'
import 'firebase/firestore'
// import 'firebase/storage'

export default function () {
    const posts = [{
        slug: 'American-bankrupcy',
        title: '养老金：美国政府200万亿美元债务',
        cover: { image: '', description: '' },
        date: new Date('2020-07-09'),
        author: { name: '兰天游', picture: '' },
        excerpt: ''
    },
    {
        slug: 'get-big-fast',
        title: '迁移到云',
        cover: { image: 'cloud.jpg', description: '' },
        date: new Date('2020-07-09'),
        author: { name: '兰天游', picture: '' },
        excerpt: ''
    },
    {
        slug: 'great-stagnation',
        title: '大停滞',
        cover: { image: 'supersonic.jpg', description: '超音速飞机' },
        date: new Date('2020-07-09'),
        author: { name: '兰天游', picture: 'profile.jpg' },
        excerpt: ''
    },
    {
        slug: 'move-to-cloud',
        title: '迁移到云',
        cover: { image: 'cloud.jpg', description: '' },
        date: new Date('2020-07-09'),
        author: { name: '兰天游', picture: '' },
        excerpt: ''
    },
    {
        slug: 'secret-society',
        title: '秘密社会',
        cover: { image: 'kennedy.jpeg', description: '' },
        date: new Date('2020-07-15'),
        author: { name: '兰天游', picture: 'profile.jpg' },
        excerpt: ''
    },
    {
        slug: 'secular-stagnation',
        title: '长期停滞',
        cover: { image: 'stock.jpg', description: '' },
        date: new Date('2020-07-18'),
        author: { name: '兰天游', picture: 'profile.jpg' },
        excerpt: ''
    },
    {
        slug: 'software-is-eating-the-world',
        title: '为什么软件正在吞噬整个世界',
        cover: { image: 'software.jpg', description: '' },
        date: new Date('2020-07-09'),
        author: { name: '兰天游', picture: '' },
        excerpt: ''
    },
    {
        slug: 'time-to-build',
        title: '此刻，创造之时',
        cover: { image: 'skyscraper.jpg', description: '' },
        date: new Date('2020-07-09'),
        author: { name: '兰天游', picture: '' },
        excerpt:
            '尽管有诸多先前预警，西方文明的每个机构都对新冠肺炎大流行病毫无防备。这样机构效率的重大挫败将在这个十年被常常提起，但是现在来问为什么，和我们需要为此做些什么还不迟。'
    }]


    const firestore = firebase.firestore()
    posts.forEach(async (post) => {
        const docRef = await firestore.collection('posts').doc(post.slug).set(post)
    })
    const getPosts = async () => {
        // const docRef = await firestore.collection('posts').add({ title: 'secret' })
        const snapshots = await firestore.collection('posts').get()
        snapshots.docs.map(async doc => {
            console.log(doc.data())
        })
    }
    getPosts()

    return <div>new </div>
}