// Simulate server response for demonstration purposes
const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');

if (error) {
    document.getElementById('errorMsg').style.display = 'block';
}

// Actual error handling should be implemented server-side
// For example, by redirecting with a query parameter in case of error

