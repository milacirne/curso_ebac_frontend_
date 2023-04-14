$(document).ready(function () {
    const avatar = document.getElementById('avatar');
    const name = document.getElementById('name');
    const username = document.getElementById('username');
    const repositories = document.getElementById('repositories');
    const followers = document.getElementById('followers');
    const following = document.getElementById('following');
    const link = document.getElementById('link');
    const endpoint = 'https://api.github.com/users/milacirne';

    fetch(endpoint)
        .then(function(answer) {
            return answer.json();
        })
        .then(function(json) {
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
})