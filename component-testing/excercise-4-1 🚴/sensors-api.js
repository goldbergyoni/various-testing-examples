const express = require('express');
const util = require('util');
const axios = require('axios');
const bodyParser = require('body-parser');
const sensorsDal = require('./sensors-dal');
const initializeAPI = (expressApp) => {
  const router = express.Router();
  expressApp.use(bodyParser.urlencoded({
    extended: true,
  }));
  expressApp.use(bodyParser.json());

  // add new order
  router.post('/sensor-events', async (req, res, next) => {
    console.log(`Sensors events was called to add new event ${util.inspect(req.body)}`);
    const {
      temperature,
      category,
    } = req.body;


    // validation
    if (!temperature || !category) {
      res.status(400).end();
    }

    if (temperature > 50 || (category === 'kids-room' && temperature > 30)) {
      const existingUser = (await axios.get(`http://localhost/user/${req.body.userId}`)).data;
    }

    // save to DB (Caution: simplistic code without layers and validation)
    const sensorsRepository = new sensorsDal();
    const DBResponse = await sensorsRepository.addSensorsEvent(req.body);

    res.json(DBResponse);
  });

  // get existing events
  router.get('/sensor-events', async (req, res, next) => {
    const sensorsRepository = new sensorsDal();
    const sensorsToReturn = await sensorsRepository.getEvents();
    res.json(sensorsToReturn);
  });

  expressApp.use('/', router);
};

module.exports = initializeAPI;
