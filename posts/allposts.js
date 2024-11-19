const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post";
const container = document.querySelector(".container");

function getPosts() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      showPosts(data);
    });
}

function showPosts(data) {
  console.log(data);
  const newDataArray = data;

  newDataArray.forEach((e) => {
    const bigDiv = document.createElement("div");
    const showDivLeft = document.createElement("div");
    const showDivRight = document.createElement("div");
    const divTitle = document.createElement("h1");
    const divDescription = document.createElement("div");
    const divAuthor = document.createElement("div");

    bigDiv.classList = "bigDiv";
    showDivLeft.classList = "divLeft";
    showDivRight.classList = "divRight";
    divTitle.innerHTML = e.title;
    divDescription.innerHTML = e.description;
    divAuthor.innerHTML = e.createdBy;

    showDivLeft.append(divTitle, divDescription);
    showDivRight.append(divAuthor);
    bigDiv.append(showDivLeft, showDivRight);
    container.append(bigDiv);

    bigDiv.addEventListener("click", () => {
      localStorage.setItem("show", JSON.stringify(e));
      location.href = "./singlepost/singlepost.html";
    });
  });
}

window.addEventListener("load", getPosts);
