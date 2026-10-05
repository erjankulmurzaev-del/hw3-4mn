// const jsonString1 = `[
//   {
//     "id": 1,
//     "name": "Эржан",
//     "age": 25,
//     "address": { "city": "ОШ", "street": "Курманжан-Датка" },
//     "hobbies": ["Футбол,Волейбол", "IT програмирование"]
//   }
// ]`;

// const appContainer = document.getElementById('app');

// function renderUsers(usersArray) {
//   let html = '<h2>Задание 1: Пользователи</h2>';
//   for (let i = 0; i < usersArray.length; i++) {
//     let user = usersArray[i];
//     let hobbiesHtml = '';
//     for (let j = 0; j < user.hobbies.length; j++) {
//       hobbiesHtml += `<li>${user.hobbies[j]}</li>`;
//     }
//     html += `
//       <div>
//         <h3>${user.name}</h3>
//         <p>Город: ${user.address.city}</p>
//         <ul>${hobbiesHtml}</ul>
//       </div>
//     `;
//   }
//   appContainer.innerHTML = html;
// }

// try {
//   const parsedUsers = JSON.parse(jsonString1);
//   renderUsers(parsedUsers);
// } catch (error) {
//   console.log(`Ошибка: ${error.message}`);
// }





// const users = [
//   {
//     name: "Иван",
//     email: "ivan@example.com",
//     orders: [
//       {
//         id: 101,
//         items: [
//           { name: "Ноутбук", price: 80000 },
//           { name: "Мышь", price: 3000 }
//         ]
//       },
//       {
//         id: 102,
//         items: [
//           { name: "Клавиатура", price: 5000 }
//         ]
//       }
//     ]
//   }
// ];

// function renderUsersWithOrders(users) {
//   return users.map(user => `
//     <div class="user-card">
//       <h2>${user.name}</h2>
//       <p>${user.email}</p>

//       <div class="orders">
//         ${user.orders.map(order => {
//           const total = order.items.reduce(
//             (sum, item) => sum + item.price,
//             0
//           );

//           return `
//             <div class="order">
//               <h3>Заказ №${order.id}</h3>

//               <ul class="items">
//                 ${order.items.map(item => `
//                   <li>
//                     <span>${item.name}</span>
//                     <span>${item.price} ₽</span>
//                   </li>
//                 `).join("")}
//               </ul>

//               <strong>Сумма заказа: ${total} ₽</strong>
//             </div>
//           `;
//         }).join("")}
//       </div>
//     </div>
//   `).join("");
// }


// async function loadUsers() {
//   const container = document.querySelector("#users");

//   try {
//     const response = await fetch("./users.json");

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }

//     const text = await response.text();

//     const users = JSON.parse(text);

//     container.innerHTML = renderUsersWithOrders(users);
//   } catch (error) {
//     console.error("Ошибка при загрузке пользователей:", error);

//     container.innerHTML = `
//       <p class="error">Не удалось загрузить пользователей</p>
//     `;
//   }
// }

// loadUsers();

// [
//   {
//     "name": "Жекворобей",
//     "email": "jeck@example.com",
//     "orders": [
//       {
//         "id": 101,
//         "items": [
//           { "name": "Ноутбук", "price": 80000 },
//           { "name": "Мышь", "price": 3000 },
//         ]
//       }
//     ]
//   }
// ]
