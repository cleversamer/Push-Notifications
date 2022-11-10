const https = require("https");

module.exports.sendNotification = async (data, callback) => {
  try {
    const apiKey = process.env["ONE_SIGNAL_API_KEY"];

    const headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Basic ${apiKey}`,
    };

    const options = {
      host: "onesignal.com",
      port: 443,
      path: "/api/v1/notifications",
      method: "POST",
      headers,
    };

    const req = https.request(options, (res) => {
      res.on("data", (data) => {
        callback(null, JSON.parse(data));
      });
    });

    req.on("error", (err) => {
      return callback(err, null);
    });

    req.write(JSON.stringify(data));
    req.end();
  } catch (err) {
    throw err;
  }
};
