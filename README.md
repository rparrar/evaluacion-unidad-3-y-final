# API Rest Task Manager

Api rest tasks manager developed with Node JS, Express, Typescript, Mysql(PlanetScale)

## Prerequisites:

Configure your environment variables on `.env` file:

```
DATABASE_URL="mysql://root:root@localhost/test"
JWT_SECRET="secret"
```

Install dependencies with:

```bash
npm install
```

Push DB changes with:

```bash
npx prisma db push
```

## Usage:

The app counts with the following endpoints:

### GET /api/v1/info
Returns information about the app.

### GET /api/v1/marco
Returns 200 code if the app is running, and returns a string "polo"

---

### POST /api/v1/auth/login
Returns a JWT token if the credentials are correct.

**Example request:**

*Method*: `POST`

*Endpoint: `/api/v1/auth/login`*

*Body:*
```json	
{
  "email": "email@tld.com",
  "password": "the same password entered in the registry"
}
```

**Example succesfully response:**

*Status: `200`*

*Body:*
```json
{
  "token": "<jwt_token>"
}
```

### POST /api/v1/auth/register
Returns the new user if email doesnt exists.

**Example request:**

*Method*: `POST`

*Endpoint: `/api/v1/auth/register`*

*Body:*
```json	
{
  "email": "email@tld.com",
  "password": "the password choosen"
}
```

**Example succesfully response:**

*Status: `201`*

*Body:*
```json
{
  "id": 1,
  "email": "email@tld.com"
}
```

---

### GET /api/v1/tasks
Returns all user's tasks. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `GET`

*Endpoint: `/api/v1/tasks`*

**Example succesfully response:**

*Status: `200`*

*Body:*
```json
[
  {
    "id": 1,
    "title": "Example task Nº 1",
    "content": "Content of task Nº 1",
    "done": false (default value when creating the task),
    "userId": 1 (id of user owner of task)
  }
]
```

### GET /api/v1/tasks/:id
Return a task by id. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `GET`

*Endpoint: `/api/v1/tasks/1`*

**Example succesfully response:**

*Status: `200`*

*Body:*
```json
{
  "id": 1,
  "title": "Example task Nº 1",
  "content": "Content of task Nº 1",
  "done": false (default value when creating the task),
  "userId": 1 (id of user owner of task)
}
```

### POST /api/v1/tasks
Create a new task for logged user. **Requires Bearer Token at Authorization Header**

**Example request:**

*Method*: `POST`

*Endpoint: `/api/v1/task`*

*Body:*
```json
{
   "title": "Example task Nº 1",
   "content": "Content of task Nº 1"
}
```

**Example successfully response:**

*Status: `201`*

*Body:*
```json
{
  "id": 1,
  "title": "Example task Nº 1",
  "content": "Content of task Nº 1",
  "done": false (default value when creating the task),
  "userId": 1 (id of user owner of task)
}
```

### PUT /api/v1/tasks/:id
Update a task by id. **Requires Bearer Token at Authorization Header**
⚠️The user must be the owner of the task!

**Example request:**

*Method*: `PUT`

*Endpoint: `/api/v1/tasks/1`*

*Body:*
```json
{
  "title": "Example task Nº 1 *Modified*",
  "content": "Content of task Nº 1 *modified*",
  "done": true,
}
```

**Example successfully response:**
*Status: `204`*

### DELETE /api/v1/tasks/:id
Delete a task by id. **Requires Bearer Token at Authorization Header**
⚠️The user must be the owner of the task!

**Example request:**

*Method*: `DELETE`

*Endpoint: `/api/v1/tasks/1`*

**Example successfully response:**

*Status: `204`*
