const { GoogleGenerativeAI } = require("@google/generative-ai");
const asyncHandler = require("express-async-handler");
const ContentHistory = require("../models/ContentHistory");
const User = require("../models/User");

// Instantiate GoogleGenerativeAI with your API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const googleAPIController = asyncHandler(async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const content = response.text().trim();
    console.log(content);

    // Create the history
    const newContent = await ContentHistory.create({
      user: req?.user?._id,
      content,
    });

    // Push the content into the user
    const userFound = await User.findById(req?.user?.id);
    if (!userFound) {
      return res.status(404).json({ error: "User not found." });
    }
    userFound.contentHistory.push(newContent?._id);

    // Update the API request count
    userFound.apiRequestCount += 1;

    // Save changes to the user
    await userFound.save();

    res.status(200).json(content);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = { googleAPIController };
