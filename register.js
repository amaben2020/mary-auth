let emailText = "";
let password = "";
document
  .getElementById("email")
  .addEventListener("change", (e) => (emailText = e.target.value));

document
  .getElementById("password")
  .addEventListener("change", (e) => (password = e.target.value));

document.getElementById("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = await fetch("http://localhost:3000/users", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify({ email: emailText, password: password }),
  });
  const response = await data.json();

  if (response) {
    localStorage.setItem("user", JSON.stringify(response));
    window.location.replace("http://127.0.0.1:5502/mary-auth/success.html");
  }
});
