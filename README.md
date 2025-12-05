# React Todo List App

A modern **Todo List application** built with **React** that includes form validation, editing, filtering, and persistent data using **MockAPI**. It is designed to be simple, responsive, and user-friendly.

---
![Todo List Demo](public/Todo-App.gif)
---
## Features

* **Add Todos**: Create new todos with **validation** powered by **react-hook-form** and **Yup**.
* **Edit & Delete Todos**: Easily update or remove existing todos.
* **Filters**:

  * Filter todos by **priority** (low, medium, high, none).
  * Filter todos by **completion status** (active, completed, all).
* **Persistent Data**: Todos are stored on **MockAPI**, allowing persistence across sessions.
* **Loading Spinner**: Displays a **spinner** while fetching or updating data from the API.
* **Clean UI**: Responsive and intuitive interface using modular CSS.

---

## Technologies Used

* React
* react-hook-form
* Yup (for form validation)
* Axios (for API calls)
* MockAPI (for backend persistence)
* CSS Modules (for styling)

---

## Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file at the root and add your MockAPI base URL:

```
VITE_MOCKAPI_BASE_URL=https://<your-mockapi-url>
```

4. Start the development server:

```bash
npm run dev
```

---

## Usage

* Add a new todo using the **form** at the top.
* Edit or delete todos directly from the **list**.
* Use the **filters** section to sort todos by priority or completion status.
* Observe a **loading spinner** whenever the app is fetching data from the API.

---

## Folder Structure

```
src/
 ├─ components/
 │   ├─ TodoForm/
 │   ├─ TodoFormFields/
 │   ├─ TodoList/
 │   ├─ TodoListItem/
 │   └─ TodoFilters/
 ├─ constants/
 ├─ schemas/
 ├─ App.jsx
 └─ main.jsx
```

---

## Future Improvements

* Add **dark mode** support.
* Add **due date notifications** or reminders.
* Add **drag-and-drop** reordering for todos.
* Integrate **authentication** for multiple users.

---

## License

This project is open-source and available under the **MIT License**.
