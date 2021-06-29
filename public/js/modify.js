const displayNameHolder = document.getElementById('displayNameHolder');
const jinaHolder = document.getElementById('jinaHolder');
const photoHolder = document.getElementById('photoHolder');


const auth = firebase.auth();

const janeHolder = document.getElementById('janeHolder');
const imagineHolder = document.getElementById('imagineHolder');


const displayNameField = document.getElementById('displayName');
const photoField = document.getElementById('photo');
const editButton = document.getElementById('edit');

const userHolder = document.getElementById('userHolder');
const emailNotif = document.getElementById('yourEmail');


const editInformation = () => {
    const newNameAndPhoto = {
        newDisplayName: displayNameField.value,
        newPhotoURL: photoField.value
    };
    // Holds all the information about the current signed in user
    const user = auth.currentUser;
    changeNameAndPhoto(user, newNameAndPhoto);    
}

const changeNameAndPhoto = (user, newNameAndPhoto) => {
    const {newDisplayName, newPhotoURL} = newNameAndPhoto;
    // Changes displayName and photoURL properties
    if(newDisplayName && newPhotoURL)
        user.updateProfile({
            displayName: newDisplayName,
            photoURL: newPhotoURL
        })
        .then(() => {
            console.log('Profile Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
    // Changes the displayName only
    else if(newDisplayName)
        user.updateProfile({
            displayName: newDisplayName
        })
        .then(() => {
            console.log('Display Name Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
    //Changes photoURL only
    else if(newPhotoURL)
        user.updateProfile({
            photoURL: newPhotoURL
        })
        .then(() => {
            console.log('PhotoURL Updated Successfully !');
        })
        .catch(error => {
            console.error(error);
        })
}
editButton.addEventListener('click', editInformation);


auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName)
        displayNameHolder.innerText = user.displayName;
        jinaHolder.innerText = user.displayName;
        janeHolder.innerText = user.displayName;
    if(user.photoURL)
        photoHolder.setAttribute('src', user.photoURL);
        imagineHolder.setAttribute('src', user.photoURL);
    if(user.uid)
        userHolder.innerText = user.uid;
    if(user.email)
        emailNotif.innerText = user.email;
})
