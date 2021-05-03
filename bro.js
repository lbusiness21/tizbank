function myFunction() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var d = new Date();
    var n = month[d.getMonth()];
    var y = d.getFullYear();
    var m = d.getDate();
    var j = d.getDate() ;
    var k = d.getDate();
    var l = d.getDate();
    var p = d.getDate();
    document.getElementById("demo").innerHTML = n +' '  + m + ' '+ y;
    document.getElementById("demo3").innerHTML = "Added 1 New Citizen's Bank Log " + n + ' ' + m;
    document.getElementById("demo4").innerHTML = "Added 13 New Wells Fargo Logs " + n + ' ' + m;
    document.getElementById("demo5").innerHTML = "Sold Huntington Bank Log Balance: $23,612";
    document.getElementById("demo6").innerHTML = "Sold BBVA Bank Log Balance: $20,375";
    document.getElementById("demo7").innerHTML = "Sold Chime Bank Log Balance: $34,961";
    document.getElementById("demo8").innerHTML = "Sold Barclays Bank Log Balance: $15,207";
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');
    const logoutBtn2 = document.getElementById('logoutBtn');

    auth.onAuthStateChanged(user => {
        if(!user){
            window.location.assign('index');
        }
        if(user.email) {
            document.getElementById("demo2").innerHTML = "User email: " + " " + user.email;
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