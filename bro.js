function myFunction() {
    var month = new Array();
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    var d = new Date();
    var n = month[d.getMonth()];
    var y = d.getFullYear();
    var m = d.getDate();
    document.getElementById("demo").innerHTML = n +' '  + m + ' '+ y;
    document.getElementById("demo3").innerHTML = "Added 2 Barclays Bank Log, May 31";
    document.getElementById("demo4").innerHTML = "Added 3 Scotia Bank Logs, May 31";
    document.getElementById("demo5").innerHTML = "Sold Citi Bank Log Balance: $48,210, May 31";
    document.getElementById("demo6").innerHTML = "Sold Woodforest Bank Log Balance: $12,820, May 31";
    document.getElementById("demo7").innerHTML = "Sold Chime Bank Log Balance: $39,853, May 30";
    document.getElementById("demo8").innerHTML = "Sold NFCU Bank Log Balance: $26,952, May 30";
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');
    const logoutBtn2 = document.getElementById('logoutBtn');

    auth.onAuthStateChanged(user => {
        if(!user){
            window.location.assign('index');
        }
        if(user.email) {
            document.getElementById("demo2").innerHTML = "Check your email's spam folder, after purchasing a bank log";
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
}