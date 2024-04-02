const errorUtils = require('../utils/error.utils');
const payloadUtils = require('../utils/payload.utils');

const { ERROR } = errorUtils;

module.exports = (err, req, res, next) => {
  switch (err.name) {
    case ERROR.BAD_REQUEST:
      return res.status(400).send(payloadUtils.getErrorPayload(err));
    case ERROR.UNAUTHORIZED:
      return res.status(401).send(payloadUtils.getErrorPayload(err));
    default:
      return res.status(500).send(payloadUtils.getErrorPayload(err));
  }
};
