const buttno = document.querySelector(".btn");
buttno.addEventListener("click", () => {
  const author = document.querySelector(".author");
  const title = document.querySelector(".title");
  const description = document.querySelector(".desc");
  const text = document.querySelector(".postTxt");

  fetch("https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/post", {
    method: "POST",
    body: JSON.stringify({
      createdAt: new Date().getTime(),
      createdBy: author.value,
      title: title.value,
      description: description.value,
      text: text.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));

  author.value = "";
  title.value = "";
  description.value = "";
  text.value = "";
});
