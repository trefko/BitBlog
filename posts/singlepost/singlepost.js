const container = document.querySelector(".container");

function showInfo(data) {
  let bigDiv = document.createElement("div");
  let leftDiv = document.createElement("div");
  let rightDiv = document.createElement("div");
  let divTitle = document.createElement("div");

  let title = document.createElement("h2");
  title.classList = "TITLE";
  let description = document.createElement("p");
  description.classList = "desc";
  let text = document.createElement("p");
  text.classList = "txt";
  let author = document.createElement("p");
  author.classList = "ath";

  title.innerHTML = data.title;
  description.innerHTML = data.description;
  text.innerHTML = data.text;
  author.innerHTML = data.createdBy;

  divTitle.append(title);
  leftDiv.append(description, text);
  rightDiv.append(author);
  bigDiv.append(title, leftDiv, rightDiv);
  container.append(bigDiv);
}

window.addEventListener("load", () => {
  let data = JSON.parse(window.localStorage.getItem("show"));

  showInfo(data);
});
