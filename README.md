# Regex

A small React tutorial project demonstrating form validation using regular expressions (Regex). This app includes a registration form with real-time validation for username, email, and password and saves the registered user to `localStorage`.

---

## 🚀 Features

- Form validation using regular expressions:
  - Username: must start with a letter and be 4–24 chars (letters, numbers, `_` and `-` allowed)
  - Email: simple validation ensuring characters before/after `@` and a domain after `.`
  - Password: 8–24 chars, mixed case, at least one number and one special character from `!#@%$`
- Real-time UI feedback with icons and helper messages
- Uses `localStorage` to save a single registered user under the `userRe` key

---

## 🗂 Project Structure

```
public/
  index.html
src/
  App.js        // app entry, renders <Register />
  Register.js   // registration form with regex validation
  index.js      // bootstraps the app and Router
  index.css
package.json
README.md
```

---

## ⚙️ Built With

- React
- Bootstrap (CSS & JS)
- react-router-dom
- Font Awesome (icons)

---

## 🧭 Getting Started

### Prerequisites

- Node.js (>= 14) and npm

### Install

1. Clone the repo:

```bash
git clone https://github.com/theAnshul01/Regex.git
cd Regex
```

2. Install dependencies:

```bash
npm install
```

3. Run the app locally:

```bash
npm start
```

Open http://localhost:3000 in your browser.

---

## 🧪 Usage

- Visit the app and fill out the **Register** form.
- The Submit button is enabled only when all fields pass validation.
- On successful registration the user object is stored in `localStorage` under the key `userRe`.

Example stored object:

```json
{
  "username": "exampleUser",
  "email": "user@example.com",
  "password": "EncryptedOrPlainTextHere"
}
```

> Note: This tutorial stores the raw value for demonstration purposes — do not store plaintext passwords in production.

---

## 🔧 Regex (validation) used

- `USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/`
- `PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#@%$]).{8,24}$/`
- `EMAIL_REGEX = /^([a-zA-Z0-9])([a-zA-Z0-9.])*@([a-zA-Z])+\.([a-zA-Z]){2,}$/`

---

## 🤝 Contributing

Contributions are welcome — open an issue or submit a pull request.

---

## 📝 License

This project is provided as-is for tutorial purposes. You can apply an MIT license or another license per repository owner preference.

---

