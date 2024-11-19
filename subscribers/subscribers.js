const URL = "https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions";
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
function getSubs() {
    btn1.innerHTML='';
    btn2.innerHTML='';
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      showSubs(data);
    });
}

function showSubs(data) {
  const newSubsArray = data;

  newSubsArray.forEach((e) => {
    const div1 = document.createElement("div");
   const div2 = document.createElement('div');
    const div = document.createElement('div')
    div1.innerHTML = e.name+","+e.email;
    
    if (e.isSubscribed) {
        div2.innerHTML= '-';
        div.append(div1,div2)
      btn1.append(div);
    } else {
        div2.innerHTML= '+';
        div.append(div1,div2)
      btn2.append(div);
    }
    div2.style.cursor='pointer'
    div2.addEventListener('click',()=>{
        fetch(`https://673c4f8796b8dcd5f3f963e6.mockapi.io/api/v1/subscriptions/${e.id}`, {
            method: "PUT",
            body: JSON.stringify({
              isSubscribed: !e.isSubscribed
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
            .then((response) => response.json())
            .then((json) => console.log(json));

        setTimeout(getSubs(),1000)
    })

  });
}
window.addEventListener('load',()=>{
    getSubs();
})