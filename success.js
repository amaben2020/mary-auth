const getUser = async (e) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    document.getElementById("success-text").innerHTML = `
      <h2> ${user.user.email}</h2>

      <p>  ${user.accessToken.split(".")[0]}.</p> 
      <p>  ${user.accessToken.split(".")[1]}.</p> 
      <p>  ${user.accessToken.split(".")[2]}.</p> 
      `;
  } catch (error) {
    console.log(error);
  }
};

setTimeout(() => {
  getUser();
}, 300);
