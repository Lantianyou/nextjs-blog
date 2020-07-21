import firebase from 'lib/firebase'
import 'firebase/storage'

export default function () {
    const firestore = firebase.firestore()

    // const getFile = (fileName) => {
    //     const storage = firebase.storage()
    //     const ref = storage.refFromURL(`gs://blog-acc3e.appspot.com/${fileName}`)
    //     global.XMLHttpRequest = require("xhr2");
    //     const url = ref.getDownloadURL().then(function (url) {
    //         const xhr = new XMLHttpRequest();
    //         xhr.responseType = 'blob';
    //         xhr.onload = function (event) {
    //             const blob = xhr.response;
    //         };
    //         xhr.open('GET', url);
    //         xhr.send();
    //         console.log(url)

    //         // Or inserted into an <img> element:
    //     }).catch(function (error) {
    //         // Handle any errors
    //     });
    // }

    // getFile('resume.pdf')


    // console.log(firestore.collection('posts').get())
    return <div>new </div>
}