const displayNameField = document.getElementById('displayName');
const photoField = document.getElementById('photo');
const editButton = document.getElementById('edit');

const logoutButton3 = document.getElementById('logoutButton3');

const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');

const jinaHolder = document.getElementById('jinaHolder');
const janeHolder = document.getElementById('janeHolder');
const imgHolder = document.getElementById('imgHolder');
const imagineHolder = document.getElementById('imagineHolder');

const uidHolder = document.getElementById('uidHolder');
const emailHolder = document.getElementById('emailHolder');

const auth = firebase.auth();

const logoutBtn = document.getElementById('logoutButton');
const logoutBtn2 = document.getElementById('logoutBtn');

var card = 'card.jpg'

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName) {
        displayNameHolder.innerText = user.displayName;
        jinaHolder.innerText = user.displayName;
        janeHolder.innerText = user.displayName;
    }
    if(user.photoURL) {
        photoHolder.setAttribute('src', user.photoURL);
        imgHolder.setAttribute('src', user.photoURL);
        imagineHolder.setAttribute('src', user.photoURL);
    }
    if(!user.photoURL){
        photoHolder.setAttribute('src', card);
        imgHolder.setAttribute('src', card);
        imagineHolder.setAttribute('src', card);
    }
    if(user.uid) {
        uidHolder.innerText = "User ID: " + user.uid;
    }
    if(user.email) {
        emailHolder.innerText = user.email;
    }
    if(!user) {
        window.location.assign('index');
    }
})

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


logoutBtn.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign('index');
    }).catch(error => {
        console.error(error)
    })
  });
  
logoutBtn2.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign('index');
    }).catch(error => {
        console.error(error)
    })
});

logoutButton3.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(() => {
        window.location.assign('index');
    }).catch(error => {
        console.error(error)
    })
});