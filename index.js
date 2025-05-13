document.getElementById('trigger').addEventListener('click', function () {
    fetch('/trigger-dataverse-data', {
        method: 'POST'
    }).then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Dataverse data triggered successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to trigger Dataverse data.');
        });
});