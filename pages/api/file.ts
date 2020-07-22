import { NextApiRequest, NextApiResponse } from 'next'
import firebase from 'lib/firebase'
import 'firebase/storage'

const getFile = async (fileName = 'resume.pdf') => {
  const storage = firebase.storage()
  const storageRef = storage.ref()
  const fileRef = storageRef.child(fileName)

  fileRef.getDownloadURL().then(function (url) {
  }).catch(function (error) {

    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;

      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;

      case 'storage/canceled':
        // User canceled the upload
        break;
      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  })

}

export default (req: NextApiRequest, res: NextApiResponse) => {
  const fileName = req.query
  getFile()
  res.status(200).json({ text: getFile() })
}