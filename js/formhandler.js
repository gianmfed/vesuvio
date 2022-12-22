function handleFormSubmit(event) {
    console.log("in fuction")
    // Prevent the default form submission action
    event.preventDefault();
  
    // Get the form data
    const formData = new FormData(event.target);
  
    // Send the form data to the server via AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formsubmit.co/gianmfed@gmail.com');
    xhr.send(formData);
  
    // Handle the server response
    xhr.onload = function() {
      if (xhr.status === 200) {
        // The form was submitted successfully
        // Update the page or display a success message
        // ...
        console.log("form submitted")
      } else {
        // There was an error submitting the form
        // Display an error message or update the page
        // ...
        console.log("error")
      }
    }
  }
  