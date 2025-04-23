
function time(req, res, next) {
  const time = new Date();
  console.log("time: ${time}");
  req.time = time;
  next();
}

module.exports = time;