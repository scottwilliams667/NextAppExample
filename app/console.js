console.log('test');

fetch('https://cognito-identity.us-east-2.amazonaws.com/', {
    method: 'POST',
    body: JSON.stringify({ "IdentityId": "us-east-2:e4e61199-433e-439d-b0eb-42ac751bdf18" })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))