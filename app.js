document
  .getElementById("enrollmentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const imageLink = document.getElementById("imageLink").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const skills = Array.from(
      document.querySelectorAll('input[name="skills"]:checked')
    )
      .map((skill) => skill.value)
      .join(", ");

    // Create student entry
    const studentEntry = document.createElement("div");
    studentEntry.classList.add("student");

    studentEntry.innerHTML = `
        <img src="${imageLink}" alt="Student Image">
        <div class="student-info">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Website:</strong> <a href="${website}" target="_blank">${website}</a></p>
            <p><strong>Skills:</strong> ${skills}</p>
        </div>
    `;

    // Append to enrolled students section
    document.getElementById("enrolledStudents").appendChild(studentEntry);

    // Clear form fields
    document.getElementById("enrollmentForm").reset();
  });
