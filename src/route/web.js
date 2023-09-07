import express from "express";
import homeConntroller from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
  router.get("/", homeConntroller.getHomePage);

  router.get("/about", (req, res) => {
    res.send(`I'm Eric!`);
  });

  return app.use("/", router);
};

module.exports = initWebRoute;
