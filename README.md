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

## Run the app locally: 

- Create mongo db google-books 
```
mongo
use google-books
```
- Clone the folder 
```
git clone folder url
```
- Run ```npm i``` in both root directory and client directory
- Run seedDB script ```npm run seed```
- Run ```npm start```



## Demo
### Deployment url on heroku: https://mighty-crag-14503.herokuapp.com

### Screenshots:

#### Initial page

![Initial Page](/client/public/images/launch.png)

#### Search books using key words and view results

![Search Page](/client/public/images/search.png)

#### Save a book you are interested in

![Save Page](/client/public/images/save.png)

#### View saved books

![Saved Page](/client/public/images/saved.png)

