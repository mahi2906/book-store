const payloadUtils  = require('../utils/payload.utils');

module.exports = (data, req, res, next) =>
  res.status(200).send(payloadUtils.getSuccessPayload(data));
