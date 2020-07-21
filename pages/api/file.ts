import { NextApiRequest, NextApiResponse } from 'next'
import firebase from 'lib/firebase'
import 'firebase/firestore'

const getFile = async () => {
    const fireStore = firebase.firestore()
    const snapshots = await fireStore.collection('posts').get()
    snapshots.docs.forEach(doc => console.log(doc.id))
    return snapshots.docs.length
}

export default (req: NextApiRequest, res: NextApiResponse) => {
    const fileName = req.query
    // getFile()
    res.status(200).json({ text: getFile() })
}