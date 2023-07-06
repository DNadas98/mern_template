# MERN Template Project

This project serves as a template for MERN stack ([MongoDB](https://www.mongodb.com/), [Express.js](https://expressjs.com/), [React](https://react.dev/), [Node.js](https://nodejs.org/en)) applications, providing a backend and frontend implementation for creating, reading, updating, and deleting simple text documents. The template is based on the [MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC) (Model View Controller) design pattern.

The aim of this template is to shorten the initial setup time and provide a clean, consistent and relatively secure base for MERN projects.

### Packages used

- Server
  - [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
  - [helmet](https://www.npmjs.com/package/helmet)
  - [cors](https://www.npmjs.com/package/cors)
- Database:
  - [Mongoose JS](https://mongoosejs.com/docs/guide.html)
- Frontend
  - [React Router](https://reactrouter.com/en/main)
  - [react-markdown](https://github.com/remarkjs/react-markdown)
  - [react-spinners](https://www.npmjs.com/package/react-spinners)

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
- Rename `env-sample.txt` to `.env`
- Optionally: `npm build`

# Run

### Backend

- In server folder:
  - nodemon: `npm run dev`
  - node: `npm start`

### Frontend

- In client folder:
  - `npm start`
