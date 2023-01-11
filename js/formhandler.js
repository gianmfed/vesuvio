document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the default form submission action
  event.preventDefault()
  // Get the form data
  const formData = new FormData(event.target);
  var message = formData.get('message');
  // console.log(message)  
  ////////////////////////////
  // const buttontest = document.getElementById('submitButton');
  // buttontest.classList.remove('d-none');
  // // buttontest.innerHTML = 'Sending';
  ////////////////////////////

  // Send the form data to the server via AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formsubmit.co/d1f5b81bd3827b70a6b3f109b150aabc');
  xhr.send(formData);
  // Handle the server response
  xhr.onload = function() {
    if (xhr.status === 200) {
        // The form was submitted successfully
        // Update the page or display a success message

        const response = xhr.response;
        console.log(response)
        const pattern = /Unable to submit form/i;
        if (pattern.test(response)) {
          const button = document.getElementById('submitButton');

          button.innerHTML = 'Something went wrong! Retry';

          button.classList.remove('btn-primary');
          button.classList.add('btn-danger');
        } else {
          const button = document.getElementById('submitButton');

          button.innerHTML = 'Thankyou!';

          button.classList.remove('btn-primary');
          button.classList.add('btn-success');
        }
      } else {
        // There was an error submitting the form
        // Display an error message or update the page
        const button = document.getElementById('submitButton');

        button.innerHTML = 'Something went wrong! Retry';

        button.classList.remove('btn-primary');
        button.classList.add('btn-danger');
      }
    }
  }
);