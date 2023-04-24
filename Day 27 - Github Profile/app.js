// Set the URL for the GitHub API
const API_URL = 'http://api.github.com/users/';

// Get references to HTML elements
const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Function that retrieves user data from the API
async function getUser(username) {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    // If user is not found, create an error card
    if (err.response.status == 404) {
      createErrorCard('No User found');
    }
  }
}

// Function that creates a card with user information
function createUserCard(user) {
  main.innerHTML = `
    <div class="card">
      <div class="load-anim"><img class="avatar" src="${user.avatar_url}" alt="${user.name}" /></div>
      <div class="user-info">
        <h2 class="load-anim load-anim-text">${user.name}</h2>
        <p class="load-anim load-anim-text">${user.bio}</p>
        <ul>
          <li class="load-anim load-anim-text">${user.followers} <strong>Followers</strong></li>
          <li class="load-anim load-anim-text">${user.following} <strong>Following</strong></li>
          <li class="load-anim load-anim-text">${user.public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>`;
}

// Function that creates an error card
function createErrorCard(message) {
  main.innerHTML = `
    <div class="card">
        <h1>${message}</h1>
    </div>
  `;
}

// Function that retrieves repository data from the API
async function getRepos(username) {
  try {
    const { data } = await axios(API_URL + username + '/repos?sort=created');
    addReposToCard(data);
  } catch (err) {
    createErrorCard('Problem fetching repos');
  }
}

// Function that adds a user's repositories to their card
function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');

  repos.slice(0, 5).forEach((repo) => {
    const repoLink = document.createElement('a');
    repoLink.classList.add('repo', 'load-anim', 'load-anim-text');
    repoLink.href = repo.html_url;
    repoLink.target = '_blank';
    repoLink.innerHTML = repo.name;

    reposEl.appendChild(repoLink);
  });
}

// Event listener for when the form is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const user = search.value;

  // If a username was entered, retrieve user data and clear the search field
  if (user) {
    getUser(user);
    search.value = '';
  }
});
