const linksSocialMedia = {
  github: "caroldelira",
  youtube: "maykbrito",
  facebook: "caroldelira",
  instagram: "deliracarol",
  twitter: "caroldelira",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      userName.textContent = data.name;
      bio.textContent = data.bio;
      userLink.href = data.html_url;
      userPhoto.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();

//ARROW FUNCTIONS
/*function nomedafuncao(argumentos){
codigo
}

função anônima:

argumento => {

}
retira o nome da função e coloca apenas os argumentos
*/
