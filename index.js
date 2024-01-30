function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching data:', error.message);
        throw error;
      });
  }

  function renderUsers(users) {
    const userList = document.getElementById('users');
    userList.innerHTML = '';

    users.forEach(user => {
      const listItem = document.createElement('li');
      const userName = document.createElement('h2');
      const userEmail = document.createElement('p');

      userName.textContent = user.name;
      userEmail.textContent = `Email: ${user.email}`;

      listItem.appendChild(userName);
      listItem.appendChild(userEmail);

      userList.appendChild(listItem);
    });
  }

  function handleButtonClick() {
    getUsers()
      .then(users => {
        renderUsers(users);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

//   const btn = document.getElementById('fetchButton');
//   btn.addEventListener('click', () => { handleButtonClick(); })

  document.getElementById('fetchButton').addEventListener('click', handleButtonClick)
// 
// In JavaScript, when you pass a function as an argument to another function (in this case, when you provide handleButtonClick as the second argument to addEventListener), you have the option to pass the function directly without using braces
// document.getElementById('fetchButton').addEventListener('click', () => {
//     handleButtonClick();
//   });
  