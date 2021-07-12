const signInWithGoogleButton = document.getElementById('signInWithGoogle');
const displayNameHolder = document.getElementById('displayNameHolder');
const jinaHolder = document.getElementById('jinaHolder');
// const bitcoinHolder = document.getElementById('bitcoinHolder');
const photoHolder = document.getElementById('photoHolder');
const logoutBtn = document.getElementById('logoutButton');
const auth = firebase.auth();

const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider)
  .then(() => {
    window.location.assign('chime');
  })
  .catch(error => {
    console.error(error);
  })
}
signInWithGoogleButton.addEventListener('click', signInWithGoogle);

auth.onAuthStateChanged(user => {
  if(user)
    window.location.assign('chime');
  console.log(user);
  if(user.displayName)
      jinaHolder.innerText = user.displayName;
      displayNameHolder.innerText = user.displayName;
  if(user.photoURL)
      photoHolder.setAttribute('src', user.photoURL);
  // if(user.email)
  //     bitcoinHolder.innerText = "Invoice to: " + " " + user.email;
});

logoutBtn.addEventListener('click', e => {
  e.preventDefault();
  auth.signOut().then(() => {
      window.location.assign('');
  }).catch(error => {
      console.error(error)
  })
});


