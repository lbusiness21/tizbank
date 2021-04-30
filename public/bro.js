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
    var j = d.getDate() - 1;
    var k = d.getDate() - 2;
    var l = d.getDate() - 3;
    var p = d.getDate() - 4;
    document.getElementById("demo").innerHTML = n +' '  + m + ' '+ y;
    document.getElementById("demo3").innerHTML = "Added 3 New Huntington Logs, " + n +' '  + j;
    document.getElementById("demo4").innerHTML = "Added 1 New Citi Bank Log, " + n +' '  + k;
    document.getElementById("demo5").innerHTML = "Sold Huntington Bank Log Balance: $17,315 " + n +' '  + l;
    document.getElementById("demo6").innerHTML = "Sold BBVA Bank Log Balance: $20,375 " + n +' '  + l;
    document.getElementById("demo7").innerHTML = "Sold Huntington Bank Log Balance: $34,961 " + n +' '  + p;
    document.getElementById("demo8").innerHTML = "Sold NFCU Bank Log Balance: $27,902 " + n +' '  + p;
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');
    const logoutBtn2 = document.getElementById('logoutBtn');

    auth.onAuthStateChanged(user => {
        if(!user){
            window.location.assign('index');
        }
        if(user.email) {
            document.getElementById("demo2").innerHTML = "Recent Login by: " + " " + user.email;
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