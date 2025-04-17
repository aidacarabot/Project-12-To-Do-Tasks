# To-Do List App

This is a simple and interactive To-Do List application built with **React** and **React Router**. The app allows users to manage tasks by categorizing them into **Home** and **Completed** views. Users can add, mark as completed, and delete tasks, with smooth visual transitions.

## Features

- Add new tasks
- Mark tasks as completed or incomplete
- Filter tasks between **Home** and **Completed** views
- Use **React Router** for navigation between views
- Tasks temporarily stay visible for 3 seconds when toggling their status (marking as completed or incomplete)
- Fully responsive and styled using **CSS Variables**

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **React Router**: For routing between views
- **CSS Variables**: For consistent theming and easy style management
- **State Management**: `useState`, `useEffect` hooks for state management

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/todo-list-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd todo-list-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## How It Works

- The app is divided into two main views: **Home** and **Completed**.
  - **Home** shows tasks that are not yet completed.
  - **Completed** shows tasks that are marked as completed.
- You can navigate between **Home** and **Completed** using the **Navbar**.
- When you toggle a task's completion status, it temporarily stays visible for 3 seconds before it either disappears from **Home** and moves to **Completed**, or vice versa.
- The app is designed to be simple and user-friendly, with smooth transitions when interacting with tasks.

## Screenshots

![Home View](https://via.placeholder.com/600x400?text=Home+View)
*The Home view with tasks that are not completed.*

![Completed View](https://via.placeholder.com/600x400?text=Completed+View)
*The Completed view showing completed tasks.*

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make improvements, and submit pull requests. All contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).

## Contact

For questions or feedback, you can contact me at:
- Email: your-email@example.com
- GitHub: [your-username](https://github.com/your-username)
