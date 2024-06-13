# Task manager board (Back End)

## Backend
The backend of this application is built with Express.js and Prisma, connecting to a PostgreSQL database. It exposes several RESTful API endpoints for CRUD operations on tasks (todos):

- GET / Retrieves all tasks.
- POST / Creates a new task.
- DELETE /:id Deletes a task by its ID.
- PATCH /:id Updates a task's details.
- PATCH /:id/status Updates a task's status.

### Error Handling
The backend handles errors gracefully, returning appropriate HTTP status codes (e.g., 500 for internal server errors) and error messages to the client.

### Server 
The server is hosted on the Render platform. 
When you first start the server, it may take time to activate it, which typically **takes up to 50 seconds.** This time is necessary to initialize the environment and start the server processes.


**Link to frontend part** - https://github.com/DenNice-cloud/manager-board-f

## Setup Instructions
To run this project locally, follow these steps:

Node.js Version
- v16.20.2

Clone the repository:
```sh
git clone https://github.com/DenNice-cloud/task-manager-board.git
cd task-manager-board
```

Install dependencies:
```sh
npm install
```

Start the backend development server:
```sh
npm start
```
