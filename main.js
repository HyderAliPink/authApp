import {
  getAuth,
  deleteUser,
  onAuthStateChanged,
  signOut,
} from "./fireBase.js";
const auth = getAuth();
const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
    window.location.href = "loader.html";
  }
});

const updatedProfile = document
  .getElementById("updatedProfile")
  .addEventListener("click", () => {
    window.location.href = "updateProfile.html";
  });

getAuth();

if (user !== null) {
  const displayName = user.displayName;
  const email = user.email;
  const photoURL = user.photoURL;
  const emailVerified = user.emailVerified;

  const uid = user.uid;
}
//-------------------------------------

const deleteCurrentUser = document.getElementById("delete-account");
const logoutBtn = document.getElementById("logout");
const loginBtn = document.getElementById("login");

let deletefn = () => {
  const user = auth.currentUser;
  console.log(user);

  deleteUser(user)
    .then(() => {
      console.log("user deleted");
    })
    .catch((error) => {
      console.log("failure", error);
    });
};
onAuthStateChanged(auth, (user) => {
  // console.log(user.displayName);
  // console.log(user.photoURL);

  const greetUser = document.getElementById("greetingText");
  const profilePhoto = document.getElementById("profileImage");
  if (greetUser === null) {
    greetUser.innerHTML = ` Sahab ${user.displayName}`;
  } else {
    greetUser.innerHTML = "user";
  }
  profilePhoto.src = `${user.photoURL}`;

  if (user) {
    // console.log("logged in");
    const uid = user.uid;
  } else {
    console.log("User is not logged");
    window.location.href = "loader.html";
  }
});

logoutBtn.addEventListener("click", () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      alert("Sign out successful");
      window.location.href = "login.html";
    })
    .catch((error) => alert("user not logged in"));
});

deleteCurrentUser.addEventListener("click", () => {
  deletefn();
  const auth = getAuth();
  signOut(auth).then(() => {
    // alert("Sign out successful");
    window.location.href = "loader.html";
  });
});

// let displayName = userGreet.displayName;
