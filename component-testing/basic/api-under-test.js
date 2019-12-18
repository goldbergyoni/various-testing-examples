const express = require('express');
const util = require('util');
const Sequelize = require('sequelize');
const axios = require('axios');
const mailer = require('./mailer');

let orderModel;
let
  repository;
const bodyParser = require('body-parser');

const initializeAPI = (expressApp) => {
  // A typical Express setup
  const router = express.Router();
  expressApp.use(bodyParser.urlencoded({
    extended: true,
  }));
  expressApp.use(bodyParser.json());

  // add new order
  router.post('/', async (req, res) => {
    console.log(`Order API was called to add new Order ${util.inspect(req.body)}`);

    // validation
    if (!req.body.productId) {
      res.status(400).end();
      return;
    }

    // verify user existence by calling external Microservice
    const existingUserResponse = (await axios.get(`http://localhost/user/${req.body.userId}`, {
      validateStatus: false,
    }));
    if (existingUserResponse.status === 404) {
      res.status(404).end();
      return;
    }

    // save to DB (Caution: simplistic code without layers and validation)
    const orderRepository = await getOrderRepository();
    const DBResponse = await orderRepository.create(req.body);
    const {
      userId,
      productId,
      mode,
    } = DBResponse;

    if (!process.env.SEND_MAILS === 'true') {
      // important notification logic here
      mailer.send();
      // Other important notification logic here
    }

    res.json({
      userId,
      productId,
      mode,
    });
  });


  // get existing order
  router.get('/', (req, res, next) => {

  });

  expressApp.use('/order', router);
};

process.on('uncaughtException', () => {
  console.log('Error occured!');
  // a log of other logic here
  // and here
  console.log('Error occured!');
});

const getOrderRepository = async () => {
  if (!repository) {
    repository = new Sequelize('shop', 'myuser', 'myuserpassword', getSequelizeConfig());
    orderModel = repository.define('shop-order', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      mode: {
        type: Sequelize.STRING,
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      productId: {
        type: Sequelize.INTEGER,
      },
    });
  }
  await repository.sync();

  return orderModel;
};

const getSequelizeConfig = () => ({
  host: 'localhost',
  port: 54320,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = initializeAPI;
