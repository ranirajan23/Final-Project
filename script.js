document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Here, you can implement code to send the contact information to the server, like using AJAX or Fetch API.
    // For now, let's simulate a response from the server.
    const responseMessage = "Thank you, " + name + "! Your message has been received.";

    document.getElementById("responseMessage").textContent = responseMessage;
    document.getElementById("contactForm").reset();
   

    

});
