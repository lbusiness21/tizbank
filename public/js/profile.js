const displayNameHolder = document.getElementById('displayNameHolder');
const invoiceHolder2 = document.getElementById('invoiceHolder2');
const logoutHolder = document.getElementById('logoutHolder');
const invoiceHolder = document.getElementById('invoiceHolder');

const photoHolder = document.getElementById('photoHolder');

const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName) {
        displayNameHolder.innerText = user.displayName + " 💸✅";
        invoiceHolder2.innerText = "Invoice to: " + user.email;
        logoutHolder.innerText = "Logout: " + user.displayName;
        invoiceHolder.innerText = "Invoice to: " + user.email;
    }
    if(user.photoURL) {
        photoHolder.setAttribute('src', user.photoURL);
    }
})
