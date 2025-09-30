
function submitInquiry() {
    var serviceCode = document.getElementById('service_code').value;
    var idNumber = document.getElementById('id_number').value;

    if (serviceCode && idNumber) {
        fetch('query.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'service_code=' + encodeURIComponent(serviceCode) + '&id_number=' + encodeURIComponent(idNumber)
        })
        .then(response => response.text())
        .then(data => {
            document.getElementById('result').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('error-message').style.display = 'block';
            document.getElementById('error-message').innerText = 'Ø®Ø·Ø£ ÙÙŠ Ø§Ù„Ø§Ø³ØªØ¹Ù„Ø§Ù…: ' + error;
        });
    } else {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('error-message').innerText = 'Ù„Ø§ØªÙˆØ¬Ø¯ Ù†ØªØ§Ø¦Ø¬.';
    }
}
