const getUser = async (e) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    document.getElementById("success-text").innerHTML =
      user.user.email + " " + user.accessToken;
  } catch (error) {
    console.log(error);
  }
};

setTimeout(() => {
  getUser();
}, 300);
