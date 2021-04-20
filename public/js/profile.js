const displayNameHolder = document.getElementById('displayNameHolder');
const photoHolder = document.getElementById('photoHolder');

const jinaHolder = document.getElementById('jinaHolder');
const imgHolder = document.getElementById('imgHolder')

const emailHolder = document.getElementById('emailHolder');
const addressHolder = document.getElementById('addressHolder');

const auth = firebase.auth();

const logoutBtn = document.getElementById('logoutButton');
const logoutBtn2 = document.getElementById('logoutBtn');

auth.onAuthStateChanged(user => {
    console.log(user);
    if(user.displayName) {
        displayNameHolder.innerText = user.displayName;
        jinaHolder.innerText = user.displayName;
    }
    if(user.photoURL) {
        photoHolder.setAttribute('src', user.photoURL);
        imgHolder.setAttribute('src', user.photoURL);
    }
    if(user.email) {
        emailHolder.innerText = "Invoice to: " + user.email;
        addressHolder.innerText = user.email;
    }
    if(!user) {
        window.location.assign('index');
    }
})


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