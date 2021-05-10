const displayNameHolder = document.getElementById('displayNameHolder');
const jinaHolder = document.getElementById('jinaHolder');
const photoHolder = document.getElementById('photoHolder');

const emailHolder = document.getElementById('emailHolder');
const invoiceHolder = document.getElementById('invoiceHolder');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName)
        displayNameHolder.innerText = user.displayName;
        jinaHolder.innerText = user.displayName;
    if(user.photoURL)
        photoHolder.setAttribute('src', user.photoURL);
    if(user.email)
        emailHolder.innerText = user.email;
        invoiceHolder.innerText = "Invoice will be sent to: " + " " + user.email ;
})
