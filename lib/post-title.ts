const posts = [
    {
        id: 'time-to-build',
        title: '此刻，创造之时',
        date: '2020-07-09'
    },
    {
        title: '为什么软件正在吞噬整个世界',
        id: 'software-is-eating-the-world',
        date: '2020-07-13'
    },
    {
        title: '大停滞',
        id: 'great-stagnation',
        date: '2020-07-14'
    },
    {
        title: '快速垄断',
        id: 'get-big-fast',
        date: '2020-07-20'
    }
]

posts.sort((a, b) => {
    if (a.date < b.date) {
        return 1
    } else {
        return -1
    }
})

export default posts