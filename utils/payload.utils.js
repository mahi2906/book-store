const getSuccessPayload = (data) => data;

const getErrorPayload = (error) => ({
  status: 0,
  message: error.message.replace(/\"/g, "") || error,
  data: error.data ? error.data : null
});

module.exports = {
  getSuccessPayload,
  getErrorPayload,
};
