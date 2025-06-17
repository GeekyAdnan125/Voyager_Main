const express = require("express");
const { registerUser, loginUser, getUserProfile, updateRewards, logoutUser } = require("../controller/Auth");
const authMiddleware = require("../middleware/AuthMiddleware");
const { getUserReview, createReview } = require("../controller/reviewController");
const { uploadavater } = require("../controller/handleuploadavater");
const { createCommunityPost } = require("../controller/communityController");
const authroutes = express.Router();
authroutes.post("/register", registerUser);
authroutes.post("/login", loginUser);
authroutes.get("/profile", authMiddleware, getUserProfile);
authroutes.post("/update-rewards", authMiddleware, updateRewards);
authroutes.get("/logout", logoutUser);
authroutes.post("/avater" , authMiddleware,uploadavater);
authroutes.post("/community", authMiddleware , createCommunityPost);
authroutes.post("/testing", authMiddleware, (req, res) => {
    res.json({ message: "Testing route is working!" });
});
//review
authroutes.post("/createReview", authMiddleware, createReview);
module.exports = authroutes;