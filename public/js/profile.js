const displayNameHolder = document.getElementById('displayNameHolder');
const jinaHolder = document.getElementById('jinaHolder');
const photoHolder = document.getElementById('photoHolder');
const bitcoinHolder = document.getElementById('bitcoinHolder');


const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.phoneNumber)
        displayNameHolder.innerText = user.phoneNumber;
        jinaHolder.innerText = user.phoneNumber;
        bitcoinHolder.innerText = "Invoice to: " + " " + user.phoneNumber;
})
