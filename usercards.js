async function getUserData(){
  const response = await fetch("https://611f244e9771bf001785c6f8.mockapi.io/users");
  const userData = await response.json();
  document.querySelector(".main-section").innerHTML = ``;
  const paintElements = userData.forEach((element)=>
                 createUserCards(element));
  return paintElements;
}

getUserData();


function createUserCards({createdAt,name,avatar,id}){
  const cardContainer = document.createElement("div");
  cardContainer.setAttribute("class","cardContainer");
  
  
  cardContainer.innerHTML = `
  <div class="main-container">
  <img src = "${avatar}">
  <div class = "UserDetails">
  <p><span class="fields">Name: </span>${name}</p>
  <p><span class="fields">CreatedAt: </span>${new Date(createdAt).toDateString()}</p>
  </div>
  <button class="btn" onclick="deleteUser(${id})">Remove</button>
  </div>`;
  
  document.querySelector(".main-section").append(cardContainer);
}


async function deleteUser(id){
  const response = await fetch(`https://611f244e9771bf001785c6f8.mockapi.io/users/${id}`, {method: "DELETE"});
  const userData = await response.json();
  console.log(userData);
  getUserData();
}

async function addUser(){
   const response = await fetch("https://611f244e9771bf001785c6f8.mockapi.io/users", {method: "POST",
 
    headers:{
      "Content-Type":"application/json"
    },                                                                                  
                                                                                 body:JSON.stringify({
                                                                   name:document.getElementById("name").value,
                                                           avatar:document.getElementById("img").value,
createdAt:new Date()})                                                            
                                                                                     });
 
    getUserData();
  
}

