const jinaHolder = document.getElementById('jinaHolder');
const bitcoinHolder = document.getElementById('bitcoinHolder');
const photoHolder = document.getElementById('photoHolder');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName)
        jinaHolder.innerText = user.displayName;
    if(user.photoURL)
        photoHolder.setAttribute('src', user.photoURL);
    if(user.email)
    bitcoinHolder.innerText = "Invoice to: " + " " + user.email;
});



