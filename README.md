# Template for MERN projects

- [Express JS](https://expressjs.com/) server
  - [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
  - [helmet](https://www.npmjs.com/package/helmet)
  - [cors](https://www.npmjs.com/package/cors)
- [MongoDB](https://www.mongodb.com/), [Mongoose JS](https://mongoosejs.com/docs/guide.html)
- [Model View Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC) design pattern
- Example CRUD API:

  - Router: `server/routes/documentsRouter.js`
  - Controller: `server/controller/documentsController.js`
  - Model: `server/model/Document.js`

- [React](https://react.dev/) frontend
  - [React Router](https://reactrouter.com/en/main)

# Requirements

- [Node, NPM](https://nodejs.org/en)
- Valid [MongoDB](https://www.mongodb.com/) connection string
- Optional: recommended VS Code extensions: `.vscode/extensions.json`

# Install

### Backend

- `cd server && npm i`
- Rename `config/config-env-sample.txt` to `config.env`
- Modify config options
  - Server IP, port, frontend URL, DB connection string
  - Rate limiter config: `LIMITER_MAX`number of requests will be allowed per request origin in `LIMITER_MS` milliseconds
- Optional:
  - Check out the other config files
  - Install recommended VS Code extensions
  - Import the Thunder Client collection for testing routes

### Frontend

- `cd client && npm i`
- optionally: `npm build`

# Run

### Backend

- in server folder:
  - nodemon: `npm run dev`
  - node: `npm start`

### Frontend

- in client folder:
  - `npm start`
