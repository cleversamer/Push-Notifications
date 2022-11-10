const router = require("express").Router();
const controller = require("../controllers/notifications.controller");

router.get("/send-notification", controller.sendNotification);

router.post(
  "/send-notification-to-device",
  controller.sendNotificationToDevice
);

module.exports = router;
