const btn = document.getElementById('main-btn');
const list = document.querySelector('.users-list__items');

btn.addEventListener('click', getUsers)

async function getUsers() {
     list.innerHTML = '';
     
     const data = await fetch('http://localhost:3000/users').then(res => res.json());
     
     list.insertAdjacentHTML('afterbegin' , data.map(user => {
         return `<li>
         <h2>User id :${user.id}</h2>
         <p>Name :${user.first_name}</p>
         <p>Lastname : ${user.last_name}</p>
         <p>Email :${user.email}</p>
         <img src="${user.photo}" alt="">
     </li>`
     }).join(''));

}