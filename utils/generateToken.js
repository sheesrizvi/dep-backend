const jwt = require("jsonwebtoken");

const generateTokenAdmin = (id, name, email, type) => {
  return jwt.sign({ id, name, email, type }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};
const generateTokenUser = (id, name, email, type) => {
  return jwt.sign({ id, name, email, type }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = {
    generateTokenAdmin,
    generateTokenUser
    
  };