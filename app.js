// Init Github API
const github = new Github;

// Init UI
const ui = new UI;

// Search inut
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if(userText !== '') {
    // MAke HTTP Callback
    github.getUser(userText)
    .then(data => {
      if(data.profile.message === 'Not Found') {
        // Show Alert
        ui.showAlert('User Not Found', 'alert alert-danger');
      } else {
        // Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    })
  } else {
    // Clear Profile
    ui.clearProfile();
  }
})