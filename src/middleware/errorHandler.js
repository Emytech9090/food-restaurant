export const errorHandler = (err, req, res, next) => {
  if (err) {
    console.error(err);
    return res.status(err.status || 500).json({
      statusCode: err.status || 500,
      message: err.message || "An error occured",
      data: { stack: err },
    });
  }
};
