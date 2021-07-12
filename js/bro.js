function myFunction() {
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