# Task Management API

A simple RESTful API built with Node.js and Express.js for managing tasks. This project was created as an assignment for Osumare Marketing Solutions.
## Live Link
https://osumare-crud.onrender.com

## API Endpoints

1. `GET /tasks`
   - Get all tasks
   - Returns list of tasks

2. `GET /tasks/:id`
   - Get a specific task
   - Returns single task by ID

3. `POST /tasks`
   - Create a new task
   - Required fields: title, username, description

4. `PUT /tasks/:id`
   - Update an existing task
   - Required fields: title, description

5. `DELETE /tasks/:id`
   - Delete a task
   - Returns success message

## Features
- RESTful API endpoints
- In-memory data storage
- Basic input validation
- Error handling
- Proper HTTP status codes

## How to Run
1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `node index.js` to start the server
4. The server will start on `http://localhost:8080`

## Testing the API
You can test the API using Postman or curl:

### Get all tasks
```
GET http://localhost:8080/tasks
```

### Get a specific task
```
GET http://localhost:8080/tasks/:id
```

### Create a new task
```
POST http://localhost:8080/tasks
Body: {
    "title": "Task title",
    "username": "username",
    "description": "Task description"
}
```

### Update a task
```
PUT http://localhost:8080/tasks/:id
Body: {
    "title": "Updated title",
    "description": "Updated description"
}
```

### Delete a task
```
DELETE http://localhost:8080/tasks/:id
```

## Dependencies
- Express.js
- EJS (for views)
- Bootstrap (for UI)
- UUID (for generating unique IDs)
- Method-override (for PUT/DELETE requests)

## Error Handling
The API includes error handling for:
- Missing required fields
- Task not found
- Invalid requests
- Server errors

## Status Codes
- 200: Success
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## Note
This is an assignment project for Osumare Marketing Solutions, demonstrating RESTful API development with Node.js and Express. 
