const express = require("express");
const router = express.Router();
const controller = require("../controller/file.controller");
const Messagecontroller = require("../controller/message.controller");
const auth = require("../middleware/auth");

let routes = (app) => {
  router.post("/file/upload",auth, controller.upload);
  router.post("/message/save",auth, Messagecontroller.addMessage);
  router.get("/messages", Messagecontroller.viewmessages);
  router.get("/file/files",auth, controller.getListFiles);
  router.get("/file/files/:name",auth, controller.download);

  app.use(router);
};

module.exports = routes;
