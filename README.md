# Simple User Authentication and User Data Display

This project implements a simple user authentication system with signup, login, logout, and forgot password functionalities. User authentication is managed using local storage of the browser. After logging in, users are redirected to a page where data of random users is displayed. The page includes dynamic pagination allowing users to choose the number of users per page.

## Features
- User signup: Users can create a new account by providing necessary details.
- User login: Existing users can log in using their credentials.
- Logout: Users can log out of their accounts, clearing their session data.
- Forgot password: Users can request a password reset if they forget their password.
- Display random user data: After logging in, users are redirected to a page where data of random users is displayed.
- Dynamic pagination: Users can choose the number of users displayed per page, enhancing user experience.

## Technologies Used
- HTML, CSS, JavaScript for frontend development.
- Local storage for managing user session data.
- Backend server (not specified in this README) for handling authentication requests and serving user data.

## Implementation Details

### Signup
1. Users navigate to the signup page.
2. They provide necessary details such as username, email, and password.
3. Upon successful validation, the user data is stored in local storage, and they are redirected to the login page.

### Login
1. Users navigate to the login page.
2. They enter their credentials (username/email and password).
3. The system checks if the provided credentials match any existing user data in local storage.
4. If the credentials are valid, the user is authenticated and redirected to the user data display page.
5. Otherwise, an error message is displayed.

### Logout
1. Users click on the logout button.
2. The system clears the user session data from local storage.
3. Users are redirected to the login page.

### Forgot Password
1. Users click on the "Forgot Password" link on the login page.
2. They provide their email address.
3. If the email address matches an existing user, a password reset link is sent to that email address.
4. Users can then reset their password using the provided link.

### Display Random User Data
1. After successful login, users are redirected to a page where data of random users is displayed.
2. Users can select the number of users they want to see per page using the pagination feature.

## Installation and Setup
- Clone the repository to your local machine.
- Open the project in your preferred code editor.
- Run the project using a local server environment.

## Demo
[Link to Demo](https://premganwani619.github.io/Datansh/) 


## Picture
<img width="958" alt="Screenshot 2024-03-16 013739" src="https://github.com/premganwani619/Datansh/assets/83330321/015822e3-8dc5-4463-b767-c8ad83ebd46e">


