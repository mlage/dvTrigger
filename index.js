document.getElementById('trigger').addEventListener('click', function () {
    const result = new URL(window.location.href).searchParams.get("fileid");

    if (result === null) {
        document.getElementById('content').innerHTML = 'No fileid found in the URL.';
        return;
    }

    document.getElementById('content').innerHTML = `${result}`;
});

// Object to store selected parameters
const selectedParams = {
    startDate: '',
    endDate: '',
    country: '',
    dataverseKey: ''
};

// Callback functions to update selectedParams
document.getElementById('start-date').addEventListener('change', function (e) {
    selectedParams.startDate = e.target.value;
});

document.getElementById('end-date').addEventListener('change', function (e) {
    selectedParams.endDate = e.target.value;
});

document.getElementById('country').addEventListener('input', function (e) {
    selectedParams.country = e.target.value;
});

document.getElementById('dataverse-key').addEventListener('input', function (e) {
    selectedParams.dataverseKey = e.target.value;
});

// Example: Use selectedParams when the trigger button is clicked
document.getElementById('trigger').addEventListener('click', function () {
    console.log('Selected Parameters:', selectedParams);
    const result = new URL(window.location.href).searchParams.get("fileid");

    if (result === null) {
        document.getElementById('content').innerHTML = 'No fileid found in the URL.';
        return;
    }

    selectedParams.fileid = result;

    document.getElementById('content').innerHTML = `${selectedParams}`;
});