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
    document.getElementById("demo3").innerHTML = "Added 2 Chime Bank Logs, June 2";
    document.getElementById("demo4").innerHTML = "Added 5 Citi Bank Logs, June 2";
    document.getElementById("demo5").innerHTML = "Sold Chime Bank Log Balance: $26,193, June 2";
    document.getElementById("demo6").innerHTML = "Sold Barclays Bank Log Balance: $47,382, June 2";
    document.getElementById("demo7").innerHTML = "Sold Chase Bank Log Balance: $23,741, June 1";
    document.getElementById("demo8").innerHTML = "Sold Huntington Bank Log Balance: $36,194, June 1";
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');
    const logoutBtn2 = document.getElementById('logoutBtn');

    auth.onAuthStateChanged(user => {
        if(!user){
            window.location.assign('index');
        }
        if(user.email) {
            document.getElementById("demo2").innerHTML = "Check" + " "  + user.email + " spam folder, after purchasing a bank log";
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