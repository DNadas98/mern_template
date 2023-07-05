# Template for MERN projects

### Home page

- Example for fetching and displaying data from an open API
- source: [GitHub REST API](https://docs.github.com/en/rest)

### Documents

- Simple full-stack CRUD app

### Tech used

- [Express JS](https://expressjs.com/) server
  - [express-rate-limit](https://www.npmjs.com/package/express-rate-limit)
  - [helmet](https://www.npmjs.com/package/helmet)
  - [cors](https://www.npmjs.com/package/cors)
- [MongoDB](https://www.mongodb.com/), [Mongoose JS](https://mongoosejs.com/docs/guide.html)
- [Model View Controller](https://developer.mozilla.org/en-US/docs/Glossary/MVC) design pattern
- [React](https://react.dev/) frontend
  - [React Router](https://reactrouter.com/en/main)
  - [react-markdown](https://github.com/remarkjs/react-markdown)
  - [react-syntax-highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)
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
