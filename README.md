# React App google-books-app


## Introduction

This is a web-based app which allows you to search for books according to key words, view the books' information and save them for future reference.

## Technology:
- Javascript
- V:React 
- C:Node.js / express
- M:mongodb
This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

## File structure and functions of each folder:

```
google-books-app
- client
    - public 
        - index.html
        - images
    - src
        - App.js
        - index.js
        - components
            - BookListItem
            - DeleteBtn
            - Form which includes Input and Formbtn
            - Grid which includes Container Row and Col
            - Jumbotron
            - List
            - Nav
            - Thumbnail
        - pages
            - Search.js
            - Saved.js
            - Nomatch.js
        - utils
            - API.js which includes axios methods to interact with internal and external APIs
    - package.json   
        "proxy": "http://localhost:3001/",
        "dependencies": {
        "react": "^16.6.3",
        "react-dom": "^16.6.3",
        "react-scripts": "^2.1.1",
        "react-router-dom": "^4.3.1",
        "axios": "^0.18.0"
- controllers
    - booksController.js which requires models folder and includes methods to interact with mongodb
- models
    - books.js which uses mongoose schema to create new collections on mongodb
    - index.js which requires books.js and export it
- routes
    - api             "/api"
        - books.js    "/api/books"  
        - index.js    "/api/"
- scripts
    - seedDB.js which requires mongoose and models to connect to mongodb, provides seed file, and creates collection
- server.js
      const PORT = process.env.PORT || 3001;
      includes routes
      connects to mongodb
      start the internal API server,note its port needs to be the same used in client's package.json if locally.

```



The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest.
