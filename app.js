document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Display the data
    document.getElementById("displayName").textContent = `Name: ${name}`;
    document.getElementById("displayEmail").textContent = `Email: ${email}`;
    document.getElementById(
      "displayPassword"
    ).textContent = `Password: ${password}`;

    // Show the display data section
    document.getElementById("displayData").style.display = "block";

    // Clear form fields
    document.getElementById("registrationForm").reset();
  });
