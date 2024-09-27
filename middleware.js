document.getElementById('submitBtn').addEventListener('click', function() {
    // Get the value from the input field
    const inputUrl = document.getElementById('urlInput').value;
  
    // Assuming the backend API expects the URL in a POST request
    const apiUrl = 'http://127.0.0.1:8000';
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: inputUrl,  // Send the input URL as part of the body
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);  // Handle the response from the backend
    })
    .catch(error => {
      console.error('Error:', error);  // Handle any errors
    });
  });
  