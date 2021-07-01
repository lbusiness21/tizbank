function myFunction() {
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');

    auth.onAuthStateChanged(user => {
        if(!user){
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
    fetch('https://api.ipify.org/?format=json')
    .then(results => results.json())
    .then(data => {
        console.log(data.ip);
        document.getElementById('yourIp').innerHTML = `
            Your IP: <span style="color: red">${data.ip} </span>
            <i class="fas fa-map-marker-alt"></i>
        `;
    });
}