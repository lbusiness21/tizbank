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
    document.getElementById("demo3").innerHTML = "Added 3 New Suntrust Bank Logs, May 21";
    document.getElementById("demo4").innerHTML = "Added 1 New Huntington Bank Log, May 21";
    document.getElementById("demo5").innerHTML = "Sold Woodforest Bank Log Balance: $36,481, May 20";
    document.getElementById("demo6").innerHTML = "Sold Chase Bank Log Balance: $46,295, May 20";
    document.getElementById("demo7").innerHTML = "Sold BB&T Bank Log Balance: $28,317, May 19";
    document.getElementById("demo8").innerHTML = "Sold Huntington Bank Log, Balance: $18,205, May 19";
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');
    const logoutBtn2 = document.getElementById('logoutBtn');

    auth.onAuthStateChanged(user => {
        if(!user){
            window.location.assign('index');
        }
        if(user.email) {
            document.getElementById("demo2").innerHTML = "User logged in: " + " " + user.email;
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