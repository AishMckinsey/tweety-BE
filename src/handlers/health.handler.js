const healthHandler = async (req, res) => {
  res
    .json({
      message: "server is running!! ",
    })
    .status(200);
};

module.exports = {
  healthHandler,
};
