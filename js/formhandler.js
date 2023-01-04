document.getElementById('contactForm').addEventListener('submit', function(event) {
  // Prevent the default form submission action
  event.preventDefault()
  // Get the form data
  const formData = new FormData(event.target);
  var message = formData.get('message');
  console.log(message)  

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
        const button = document.getElementById('submitButton');
        console.log(button)
        button.innerHTML = 'Thankyou!';
        button.style.backgroundColor = 'green'
        button.style.borderColor = 'Chartreuse'
        ###########################################################
        button.classList.remove('btn');
        button.classList.add('btn-primary');
        console.log(xhr.response);
        console.log("form submitted")
      } else {
        // There was an error submitting the form
        // Display an error message or update the page
        console.log("error")
      }
    }
  }
);