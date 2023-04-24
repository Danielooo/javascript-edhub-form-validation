

const usernameInput = document.getElementById('username');
const usernameMessage = document.getElementById('username-message');

const passwordInput = document.getElementById('password');
const passwordMessage = document.getElementById('password-message');

usernameInput.addEventListener('keyup', validateUser);

passwordInput.addEventListener('keyup', validatePassword);

// TODO schrijf functie die input checkt op '@' teken, returned melding
// TODO schrijf code die onder het input veld de melding weergeeft
function validateUser(e) {
  if (e.target.value.includes('@')) {
    usernameMessage.innerHTML = `
      De gebruikersnaam mag geen '@' bevatten
    `
  }

  if (!e.target.value.includes('@')) {
    usernameMessage.innerHTML = ``;
  }
}

function validatePassword(e) {
  if (e.target.value.length < 6) {
    passwordMessage.innerHTML = `
      Wachtwoord moet minimaal 6 tekens bevatten
    `;
  }

  if (e.target.value === '') {
    passwordMessage.innerHTML = ``;
  }
}




