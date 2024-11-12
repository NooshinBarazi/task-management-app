# Task Management App

## Overview

This is a Task Management application built with React and ReduxToolKit. It allows users to add, edit, delete, and mark tasks as complete or incomplete.

## Features

- Add new tasks with a title and description
- Edit and delete tasks
- Mark tasks as complete or incomplete
- Responsive design with basic styling

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`

## API

This app interacts with a mock API hosted at `http://46.100.46.149:8069`.
- Get all tasks: `GET /api/tasks`
- Add a task: `POST /api/tasks`
- Update a task: `PUT /api/tasks/:id`
- Delete a task: `DELETE /api/tasks/:id`
