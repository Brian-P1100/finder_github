// Init Github API
const github = new Github;

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

      } else {
        // Show Profile
        
      }
    })
  } else {
    // Clear Profile
  }
})