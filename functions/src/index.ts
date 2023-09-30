import * as functions from "firebase-functions";
import * as express from "express";
import {minInstancesConfig, welcomeMessage} from "./config";

const app = express();

// Create an Express.js route that uses the Firebase HTTP function
app.get("/", (req, res) => {
  const minInstances = minInstancesConfig.value();
  const message = welcomeMessage.value();
  res.status(200).send(`${message} Minimum Instances: ${minInstances}`);
});

// Export the Express.js app as a Firebase function with a different name
export const myApp = functions.https.onRequest(app);
