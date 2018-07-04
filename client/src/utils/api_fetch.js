const apiFetch = fetchUrl =>
  fetch(fetchUrl).then(response => {
    if (!response.ok) {
      // Check status code
      console.log(
        'Looks like there was a problem. Status Code: ' + response.status
      );
      // Return nothing
      return;
    } else {
      // Return response.json()
      return response.json();
    }
  });

export default apiFetch;
