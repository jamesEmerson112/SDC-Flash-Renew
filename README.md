# SDC-Flash-Renew
 a revival of SDC Flash, which is a project that converts a legacy backend to my own

SDC Flash Renew is a Node.js web application that provides robust server-side functionality with a focus on performance and reliability. The application uses Express.js as its web framework and Pug as its template engine.

## Features

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **Pug**: A high-performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.
- **PostgreSQL Pooling**: Utilizes `pg-pool` for managing PostgreSQL connections.
- **Error Handling**: Integrated `http-errors` for creating HTTP error objects.
- **Logging**: Using `morgan` for HTTP request logging.
- **Debugging**: Enabled with the `debug` module.
- **Environment Variables**: Configured with `dotenv` for managing environment variables.
- **Testing**: Set up with `mocha` and `chai` for writing and executing tests.
- **Coding Standards**: Enforced with `eslint` and the Airbnb style guide.

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/jamesEmerson112/SDC-Flash-Renew.git
cd sdc-flash-renew
npm install
```

## Usage

To start the application, run:

```bash
npm start
```

For running tests:

```bash
npm test
```

## Configuration

Before starting the app, create a `.env` file in the root directory and set your environment variables. An example `.env` file could look like this:

```plaintext
DB_HOST=localhost
DB_USER=myuser
DB_PASS=mypassword
DB_NAME=mydbname
PORT=3000
```

## Contributing

Contributions are welcome. Please open an issue first to discuss your ideas or open a pull request with your changes.
