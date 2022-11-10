const notificationsService = require("../services/notifications.service");
const httpStatus = require("http-status");

module.exports.sendNotification = async (req, res, next) => {
  try {
    const message = {
      app_id: process.env["ONE_SIGNAL_APP_ID"],
      contents: {
        en: "Test push notifications",
      },
      included_segments: ["All"],
      content_available: true,
      small_icon: "ic_notification_icon",
      data: {
        PushTitle: "CUSTOM NOTIFICATION",
      },
    };

    await notificationsService.sendNotification(message, (error, result) => {
      if (error) {
        return next(err);
      }

      return res.status(httpStatus.OK).json(result);
    });
  } catch (err) {
    next(err);
  }
};

module.exports.sendNotificationToDevice = async (req, res, next) => {
  try {
    const { devices } = req.body;

    const message = {
      app_id: process.env["ONE_SIGNAL_APP_ID"],
      contents: {
        en: "Test push notifications",
      },
      included_segments: ["included_player_ids"],
      included_player_ids: devices,
      content_available: true,
      small_icon: "ic_notification_icon",
      data: {
        PushTitle: "CUSTOM NOTIFICATION",
      },
    };

    await notificationsService.sendNotification(message, (error, result) => {
      if (error) {
        return next(err);
      }

      return res.status(httpStatus.OK).json(result);
    });
  } catch (err) {
    next(err);
  }
};
