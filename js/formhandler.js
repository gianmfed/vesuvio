document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Validate the form data here
  // Call event.preventDefault() if the form is not valid
  console.log("in function")
  // Prevent the default form submission action
  event.preventDefault()
  // Get the form data
  const formData = new FormData(event.target);
  var name = formData.get('message');
  console.log(name)
//});
  

  // Send the form data to the server via AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formsubmit.co/gianmfed@gmail.com');
  xhr.send(formData);
  console.log(xhr.response);
  // Handle the server response
  xhr.onload = function() {
    if (xhr.status === 200) {
        // The form was submitted successfully
        // Update the page or display a success message
        // ...
        console.log(xhr.response);
        console.log("form submitted")
      } else {
        // There was an error submitting the form
        // Display an error message or update the page
        // ...
        console.log("error")
      }
    }
  }
);