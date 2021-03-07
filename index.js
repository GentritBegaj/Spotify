function loginButtonPressed() {
  let loginButtonHome = document.querySelector("#login");

  let signUpHome = document.querySelector("#sign-up");

  let buttonsWrapper = document.querySelector(".sign-up--buttons--wrapper");

  let users = [
    {
      username: "John",
      email: "johndoe@gmail.com",
      password: "Doe",
    },
    {
      username: "Billy",
      email: "billyray@gmail.com",
      password: "Ray",
    },
  ];
  let usernameInput = document.querySelector("#usernameInput");

  let passwordInput = document.querySelector("#passwordInput");
  for (let i = 0; i < users.length; i++) {
    if (
      usernameInput.value == users[i].username &&
      passwordInput.value == users[i].password
    ) {
      console.log("press");
      console.log(loginButtonHome);
      console.log(signUpHome);
      window.location = "homepage.html";
      signUpHome.style.display = "none";
      loginButtonHome.style.display = "none";
      // buttonsWrapper.style.display = "none";
      return;
    } else {
      window.location = "loginpage.html";
      return;
    }
  }
}
