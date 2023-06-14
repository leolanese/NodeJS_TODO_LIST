# NodeJS Todo List

> Building a RESTful API With NodeJS, Express, & MongoDB

```js
npm init

npm i express dotenv colors morgan express-async-handler

npm i -D nodemon
```

## Install MongoDB

```js
npm i mongodb

npm i mongoose
```

---

## DB access

Copy from DataBase Access, edit user and use it into env

## IP Access List Entry

You will only be able to connect to your cluster from the following list of IP Addresses

![Mongodb Atlas Cluster]('/../imgs/mongodb-Atlas.jpg)

---

## Error connecting to MongoDB MongoServerError: bad auth : authentication failed

The error bad auth: authentication failed is indicating that the MongoDB server was unable to authenticate the user with the provided credentials. This error can occur due to a few reasons: Incorrect credentials, privileges or Incorrect database

### Connecting to server cluster

```js
> npm run dev

> nodejs_todo_list@1.0.0 dev
> nodemon server

[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Server is running on port: 5000
MongoDB connected: ac-okc09tz-shard-00-02.ooedapl.mongodb.net
...
```

```js
// going to: localhost:5000
YAY! API is running good
```

---

## Testing API

![PostMan API testing](./imgs/testing-API.jpg)
