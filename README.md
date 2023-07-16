# Todo-List-App
# To-Do List Web Application

This project is a web application that allows users to manage their to-do lists. Users can add, complete, and remove tasks using a simple and visually appealing interface.

## HTML Structure

The HTML file contains the basic structure of the web page. It includes the following elements:

- Container div: Wraps the content of the page.
- Heading: Displays the title of the application.
- Card element: Represents the main area of the application.
- Input field: Allows users to enter new tasks.
- "Add" button: Triggers the addition of a new task to the list.
- Unordered list (ul): Displays the list of tasks.

## CSS Styling

The CSS file (style.css) provides custom styling for various elements in the project. Here are some key styling features:

- Gradient background: The body has a gradient background color.
- Card styling: The container and card elements have background gradients and box shadows for a visually appealing design.
- Input and button styling: The input field and buttons have custom styles, including border-radius, box-shadow, and hover effects.
- List item styling: The to-do list items (li) have a flexible layout with check and trash icons.
- Completed items: Completed tasks have a different style, including a strikethrough effect and a green check icon.

## JavaScript Functionality

The JavaScript file (script.js) provides the dynamic functionality of the To-Do List. It includes the following features:

- Loading from local storage: Previously saved to-do items are retrieved from local storage when the page is loaded.
- Adding tasks: Users can add new tasks to the list by clicking the "Add" button or pressing the Enter key.
- Creating list items: For each to-do item, a new list item (li) is dynamically created and appended to the unordered list (ul).
- Task completion: Users can toggle the completed state of a task by clicking the check icon.
- Task removal: Users can remove a task from the list by clicking the trash icon.
- Local storage update: Any changes made to the to-do list are automatically saved in the local storage.

## Local Storage

The application utilizes local storage to store the to-do list items. Here's how it works:

- Storing data: Whenever a new task is added, modified, or removed, the local storage is updated accordingly.
- Retrieving data: On page load, the stored to-do items are retrieved from local storage and displayed on the list.

