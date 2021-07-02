const jinaHolder = document.getElementById('jinaHolder');
const bitcoinHolder = document.getElementById('bitcoinHolder');


const auth = firebase.auth();

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.phoneNumber)
        jinaHolder.innerText = user.phoneNumber;
        bitcoinHolder.innerText = "Invoice to: " + " " + user.phoneNumber;
})
