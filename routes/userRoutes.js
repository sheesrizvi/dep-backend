const express = require("express");


const {
  getUsers,
  registerUser,
  authUser,
 

  getUserProfile,
  deleteUser,
} = require("../controller/userController");
const router = express.Router();

router.route("/").get(getUsers);
router.post("/login", authUser);
router.delete("/delete", deleteUser);
router.post("/register", registerUser);
router.get("/profile", getUserProfile);



module.exports = router;
