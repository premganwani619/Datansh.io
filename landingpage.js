function populateUserGrid(users) {
    const userGrid = document.getElementById('user-grid');
  
    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.className = 'user';
  
      const userImage = document.createElement('img');
      userImage.src = user.avatar;
      userImage.alt = user.first_name + ' ' + user.last_name;
  
      const userName = document.createElement('h3');
      userName.textContent = user.first_name + ' ' + user.last_name;
  
      const userId = document.createElement('p');
      userId.textContent = 'ID: ' + user.id;
  
      const userEmail = document.createElement('p');
      userEmail.textContent = 'Email: ' + user.email;
  
      userDiv.appendChild(userImage);
      userDiv.appendChild(userName);
      userDiv.appendChild(userId);
      userDiv.appendChild(userEmail);
  
      userGrid.appendChild(userDiv);
    });
  }
  