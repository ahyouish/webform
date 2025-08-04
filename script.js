document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  const errorEl = document.getElementById("error");
  errorEl.textContent = "";

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const gender = document.getElementById("gender").value;
  const terms = document.getElementById("terms").checked;

  if (!name || !email || !password || !dob || !gender || !terms) {
    errorEl.textContent = "Please fill out all required fields correctly.";
    return;
  }

  if (password.length < 6) {
    errorEl.textContent = "Password must be at least 6 characters.";
    return;
  }

  alert("Form submitted successfully!");
  // You can optionally send the data to a backend here
});
