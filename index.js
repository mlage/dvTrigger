document.getElementById('trigger').addEventListener('click', function () {
    const result =  parsedUrl = new URL(window.location.href).searchParams.get("fileid");
    document.getElementById('content').innerHTML = `${result}`;
});