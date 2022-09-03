const jwt = require("jsonwebtoken");

const checkAuthFunc = (req, res, next) => {
  try {
    let token = req.headers["authorization"].split(" ")[2];
    const decoded = jwt.verify(token, process.env.APP_SECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      "message": "Not authorised"
    });
  }
};

module.exports = { checkAuthFunc };
