function myFunction() {
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');

    auth.onAuthStateChanged(user => {
        if(!user){
            // window.location.assign('index');
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
}