function myFunction() {
    var month = new Array();
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
    fetch('https://api.ipify.org/?format=json')
        .then(results => results.json())
        .then(data => {
            console.log(data.ip);
            document.getElementById('demoip').innerHTML ='Your IP address is: ' + data.ip;
            document.getElementById('yourIp').innerHTML = `Your IP address is: <strong style="font-weight: 600; color: red">${data.ip}</strong>`;
            document.getElementById('clientIp').innerHTML = `
                Your IP address is: <strong style="font-weight: 600; color: red">${data.ip}</strong>
            `;
        });

    document.getElementById("demo").innerHTML = m + 'th ' +  n+  ' '  + y;

    document.getElementById("demo4").innerHTML = "Added 1 Barclays Bank Log, July 14";
    
    
    document.getElementById("demo5").innerHTML = "Sold RBC Bank Log Balance, $17,359, July 13";
    document.getElementById("demo6").innerHTML =  "Sold Huntington Bank Log Balance, $21,048, July 12";
    document.getElementById("demo7").innerHTML = "Sold Chime Bank Log Balance, $16,935, July 12";
    document.getElementById("demo8").innerHTML = "Sold BBVA Bank Log Balance, $31,580 July 11";

    
    const auth = firebase.auth();
    const logoutBtn = document.getElementById('logoutButton');
    const logoutBtn2 = document.getElementById('logoutBtn');
    const displayNameHolder = document.getElementById('displayNameHolder');
    const jinaHolder = document.getElementById('jinaHolder');
    const invoiceHolder = document.getElementById('invoiceHolder');
    const photoHolder = document.getElementById('photoHolder');
    const imgHolder = document.getElementById('imgHolder');



    auth.onAuthStateChanged(user => {
        if(!user){
            window.location.assign('index');
        }
        if(user.displayName) {
            displayNameHolder.innerText = user.displayName;
            jinaHolder.innerText = user.displayName;
        }
        if(user.photoURL){
            photoHolder.setAttribute('src', user.photoURL);
            imgHolder.setAttribute('src', user.photoURL);
        }
        if(user.email){
            document.getElementById("demo2").innerHTML = "Check" + " "  + user.email + " email inbox after purchasing a bank log";
            document.getElementById("giveaway").innerHTML = "Buy 4 Bank Logs using" + " "  + user.email + " " + "account, and get 1 FREE bank log";
            invoiceHolder.innerText = "Invoice to: " + user.email;
        }

    });




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

    


  var uploader = document.getElementById('uploader');
  var fileButton = document.getElementById('fileButton');

  fileButton.addEventListener('change', function(e) {
        let file = e.target.files[0];
        const types = ['image/png', 'image/jpeg', 'image/jpg'];

        if (file && types.includes(file.type)) {
            var storageRef = firebase.storage().ref(file.name);
            var collectionRef = firebase.firestore().collection('images');
            var timestamp = firebase.firestore.FieldValue.serverTimestamp;
            var task = storageRef.put(file);
            task.on('state_changed',
                function progress(snapshot) {
                    var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    uploader.style.width = `${percentage}%`;
                    uploader.innerText = `${percentage.toFixed(0)}% Complete`
                },
                function error(err) {
                    console.log(err);
                },
                async function complete() {
                    const url = await storageRef.getDownloadURL();
                    const createdAt = timestamp();
                    await collectionRef.add({url, createdAt });
                }
            );
      } else {
          alert('Select an image file type')
      }
  });
  

    var picha = firebase.firestore().collection('images')
        .orderBy('createdAt', 'asc')
        .onSnapshot(snap => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({...doc.data(), id: doc.id});
            });
            document.getElementById('joemusic').src = documents[documents.length -1].url;
        });

}
