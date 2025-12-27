const users = require("../models/user");

async function register(req, res) {
  try {
    const { name, email, pass } = req.body;

    if (!name || !email || !pass) {
      return res.status(400).json({
        message: "Name, email and password are required!"
      });
    }

    const existsEmail = await users.findOne({ email });
    if (existsEmail) {
      return res.status(409).json({
        message: "This email is already registered!"
      });
    }

    await users.create({
      name,
      email,
      pass
    });

    return res.status(201).json({
      message: "Account created successfully!"
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong!"
    });
  }
}

module.exports = { register };
