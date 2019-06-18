  const express = require("express"),
    util = require("util"),
    Sequelize = require('sequelize');
  const axios = require("axios");

  let orderModel, repository;
  const bodyParser = require('body-parser');


  const initializeAPI = (expressApp) => {
    //A typical Express setup
    const router = express.Router();
    expressApp.use(bodyParser.urlencoded({
      extended: true
    }));
    expressApp.use(bodyParser.json());

    //add new order
    router.post('/', async (req, res, next) => {
      console.log(`Order API was called to add new Order ${util.inspect(req.body)}`);

      //validation
      if (!req.body.productId) {
        res.status(400).end();
      }

      //verify user existence by calling external Microservice
      const existingUser = (await axios.get(`http://localhost/user/${req.body.userId}`)).data;
      if (!existingUser) throw new Error("The user doesnt exist");

      //save to DB (Caution: simplistic code without layers and validation)
      const orderRepository = await getOrderRepository();
      const DBResponse = await orderRepository.create(req.body);
      const {
        userId,
        productId,
        mode
      } = DBResponse;

      res.json({ 
        userId,
        productId,
        mode
      });
    });

    //get existing order
    router.get('/', (req, res, next) => {

    });

    expressApp.use('/order', router);
  }

  const getOrderRepository = () => {
    if (!repository) {
      repository = new Sequelize('shop', 'dbclient', '', getSequelizeConfig());
    }



    if (!orderModel) {
      orderModel = repository.define("order", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        mode: {
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.INTEGER
        },
        productId: {
          type: Sequelize.INTEGER
        }
      });
    }

    //orderModel.sync();

    return orderModel;
  }

  const getSequelizeConfig = () => {
    return {
      host: 'localhost',
      dialect: "postgres",
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    };
  }

  module.exports = initializeAPI;