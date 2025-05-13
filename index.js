document.getElementById('trigger').addEventListener('click', function () {
    const result = new URL(window.location.href).searchParams.get("fileid");

    if (result === null) {
        document.getElementById('content').innerHTML = 'No fileid found in the URL.';
        return;
    }

    document.getElementById('content').innerHTML = `${result}`;
});