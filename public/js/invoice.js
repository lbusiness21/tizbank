window.addEventListener('load', () => {
    const price = localStorage.getItem('price');
    const balance = localStorage.getItem('balance').toLocaleString();
    const bank = localStorage.getItem('bank');
    const image = localStorage.getItem('image');
    const type = localStorage.getItem('type');
    const type1 = localStorage.getItem('type1');
    const type2 = localStorage.getItem('type2');
    const type3 = localStorage.getItem('type3');
    const type4 = localStorage.getItem('type4');
    const type5 = localStorage.getItem('type5');
    const type6 = localStorage.getItem('type6');
    const thecss = localStorage.getItem('thecss');

    document.getElementById('log_price').innerHTML = "<strong>Send</strong>: $" + price;
    document.getElementById('log_balance').innerHTML = "<strong>Balance</strong>: $" + balance;
    document.getElementById('the-bitcoin-bank1').innerHTML = bank + ' ' + "Invoice";
    document.getElementById('log_bank').innerHTML = bank;
    document.getElementById('log_type').innerHTML = type;
    document.getElementById('log_website').innerHTML = type1;
    document.getElementById('log_details').innerHTML = type2;
    document.getElementById('log_extra').innerHTML = type3;
    document.getElementById('log_extra1').innerHTML = type4;
    document.getElementById('log_extra2').innerHTML = type5;
    document.getElementById('log_extra3').innerHTML = type6;
    document.getElementById('log_image').src = image;

    document.getElementById('log_image1').href = image;
    document.getElementById('log_image2').href = image;
    document.getElementById('log_image3').href = image;
    document.getElementById('log_image4').href = image;

    document.getElementById('thecss').href = thecss;

    let ws = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@kline_1h');
    let stockPriceElement = document.getElementById('log_bitcoin');

    ws.onmessage = (event) => {
        // console.log(event.data);
        let stockObject = JSON.parse(event.data);
        stockPriceElement.innerText = (price / (parseFloat(stockObject.k.c))).toFixed(5);
    }
});
fetch('https://api.ipify.org/?format=json')
.then(results => results.json())
.then(data => {
    console.log(data.ip);
    document.getElementById('clentIp').innerHTML = `
        Your IP address is: <strong style="font-weight: 600; color: red">${data.ip}</strong>
    `
});
document.getElementById('copy-text').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('text-to-copy').select();
    var copied;
    try{
        copied = document.execCommand('copy');
    } 
    catch (ex){
        copied = false;  
    }
    if(copied){
        document.getElementById('copy-text-span').innerHTML = `
            Copied 
            <i class="fas fa-check" style="margin-left: 2px;"></i>
        `;
        document.getElementById('copy-text').style.background = 'gold';        
    }
});
document.getElementById('text-to-copy').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('text-to-copy').select();
    var copied;
    try{
        copied = document.execCommand('copy');
    } 
    catch (ex){
        copied = false;  
    }
    if(copied){
        document.getElementById('copy-text-span').innerHTML = `
            Copied 
            <i class="fas fa-check" style="margin-left: 2px;"></i>
        `;
        document.getElementById('copy-text').style.background = 'gold';        
    }
});